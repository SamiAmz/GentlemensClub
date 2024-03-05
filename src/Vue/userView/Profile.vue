<template>
  <div :style="myStyle" id="wrapper">
    <div class="profile-container">
      <div class="profile-nav">
        <div
          class="nav-item"
          :class="{ active: activeTab === 'profile' }"
          @click="setTabSection('profile')"
        >
          <span class="icon">👤</span>
          <span class="label">Profile</span>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'horaire' }"
          @click="setTabSection('horaire')"
        >
          <span class="icon">📅</span>
          <span class="label">Horaire</span>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'abonnement' }"
          @click="setTabSection('abonnement')"
        >
          <span class="icon">📄</span>
          <span class="label">Abonnement</span>
        </div>
      </div>

      <div v-if="activeTab === 'profile'" class="profile-content">
        <div class="profile-header">
          <h1 id="profileTitle">Mes infos</h1>
          <div class="profile-picture"></div>
        </div>

        <form class="profile-form" @submit.prevent="updateProfile">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">Prénom</label>
              <input type="text" id="firstName" v-model="profile.first_name" />
            </div>
            <div class="form-group">
              <label for="lastName">Nom</label>
              <input type="text" id="lastName" v-model="profile.last_name" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="profile.email" />
            </div>
            <div class="form-group">
              <label for="organization">Nom d'utilisateur</label>
              <input type="text" id="organization" v-model="profile.username" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input type="tel" id="phone" v-model="profile.phone" />
            </div>
            <div class="form-group">
              <label for="address">Addresse</label>
              <input type="text" id="address" v-model="profile.address" />
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-logout" @click="logoutUser">
              Déconnexion
            </button>

            <button type="submit" class="btn">Sauvegarder</button>
          </div>
        </form>
      </div>

      <div v-if="activeTab === 'abonnement'" class="abonnement-content">
        <div class="abonnement-header">
          <h1>Mon Abonnement</h1>
        </div>

        <div class="abonnement-details">
          <div class="detail-item">
            <span class="detail-label">Type d'abonnement:</span>
            <span class="detail">{{ profile.subscriptionType }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Coût Mensuel:</span>
            <span class="detail">{{ profile.subscriptionPrice }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Statut:</span>
            <span class="detail">{{ profile.subscriptionStatus }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Date de renouvellement:</span>
            <span class="detail">{{ profile.renewalDate }}</span>
          </div>
        </div>

        <div class="abonnement-actions">
          <button
            type="button"
            class="btn btn-renew"
            @click="renewSubscription"
          >
            Renouveler
          </button>
          <button
            type="button"
            class="btn btn-cancel"
            @click="cancelSubscription"
          >
            Annuler
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'horaire'" class="calendar-container">
        <HoraireUtilisateur></HoraireUtilisateur>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "@/firebase/init";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      activeTab: "profile",

      myStyle: {
        backgroundColor: "#8d8d8d",
      },
      profile: {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        phone: "",
        address: "",
        subscriptionType: "",
        subscriptionPrice: "",
        subscriptionStatus: "",
        renewalDate: "",
      },
    };
  },
  methods: {
    setTabSection(tab) {
      this.activeTab = tab;
    },

    async fetchProfile(uid) {
  try {
    const userDocRef = doc(db, "users", uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      // Fetch user profile data
      this.profile = docSnap.data();

      // Fetch subscription details from Firestore
      const subscriptionDocRef = doc(db, "abonnement", uid);
      const subscriptionSnap = await getDoc(subscriptionDocRef);
      if (subscriptionSnap.exists()) {
        const subscriptionData = subscriptionSnap.data();
        // Update the profile object with subscription details
        this.profile.subscriptionType = subscriptionData.courseType;
        this.profile.subscriptionPrice = subscriptionData.prix;
        this.profile.subscriptionStatus = subscriptionData.status;
        this.profile.renewalDate = subscriptionData.date_expiration;
      }
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
},

    async updateProfile() {
      if (auth.currentUser) {
        try {
          const userDocRef = doc(db, "users", auth.currentUser.uid);
          await setDoc(userDocRef, this.profile, { merge: true });
          console.log("Profile updated:", this.profile);
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      } else {
        console.error("No authenticated user found.");
      }
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchProfile(user.uid);
      } else {
        // Handle user not logged in or redirect to login page
        console.log("No user is logged in.");
        this.$router.push("/login"); // Example redirect
      }
    });
  },
};
</script>

<style scoped>
.btn {
  margin-right: 15px;
}

#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.profile-container {
  width: 700px;
  margin: auto;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 110px;
}

.profile-nav {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 2rem;
}

.nav-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.nav-item .icon {
  display: block;
  font-size: 1.2rem;
}

.nav-item {
  color: rgb(0, 0, 0);
}

.nav-item.active {
  border-bottom: 2px solid rgb(255, 91, 8);
  color: rgb(34, 28, 28);
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-picture img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

#profileTitle {
  color: #333;
}

.profile-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;
}

.form-group {
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
}

.form-group label {
  position: absolute;
  top: -10px;
  left: 15px;
  background-color: #ffffff;
  padding: 0 5px;
  color: #333;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
}

.form-group input {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;
}

.form-group input:focus {
  outline: none;
  border-color: rgb(255, 91, 8);
}

.form-group input::placeholder {
  color: transparent;
}

.form-group input:not(:placeholder-shown) + label,
.form-group input:focus + label {
  top: -20px;
  left: 12px;
  font-size: 0.75rem;
  color: #5c6ac4;
}

.form-actions {
  text-align: right;
}

.btn {
  padding: 0.8rem 2rem;
  background-color: rgb(255, 91, 8);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: rgb(222, 76, 4);
}

.abonnement-content {
  background: #ffffff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.abonnement-header h1 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.abonnement-details {
  margin-bottom: 2rem;
  margin-left: 10px;
  font-size: 17px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.detail-label {
  font-weight: bold;
  color: rgb(73, 73, 73);
}

.detail {
  flex: 1;
  color: rgb(255, 91, 8);
  font-weight: bold;
  margin-left: 5px;
}

.abonnement-actions {
  text-align: center;
}

.abonnement-actions .btn {
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  background-color: #bbb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  margin-top: 20px;
}

.abonnement-actions .btn:hover {
  background-color: rgb(255, 91, 8);
}

.abonnement-actions .btn-renew {
  margin-left: 260px;
}

.abonnement-actions .btn:hover {
  background-color: rgb(255, 91, 8);
}

.calendar-container {
  width: 700px;
  margin-left: -30px;
  margin-top: -60px;
}
</style>
