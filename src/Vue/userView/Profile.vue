<template>
  <div :style="myStyle" id="wrapper">

  <div class="profile-container">

    <div class="profile-nav">
        <div class="nav-item active">
          <span class="icon">👤</span>
          <span class="label">Profile</span>
        </div>
        <div class="nav-item">
          <span class="icon">📅</span>
          <span class="label">Horaire</span>
        </div>
        <div class="nav-item">
          <span class="icon">📄</span>
          <span class="label">Abonnement</span>
        </div>
      </div>

    <div class="profile-header">
        <h1 id="profileTitle">Mes infos</h1>
      <div class="profile-picture">

      </div>
    </div>

    <form class="profile-form" @submit.prevent="updateProfile">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input type="text" id="firstName" v-model="profile.first_name">
        </div>
        <div class="form-group">
          <label for="lastName">Nom</label>
          <input type="text" id="lastName" v-model="profile.last_name">
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="profile.email">
        </div>
        <div class="form-group">
          <label for="organization">Nom d'utilisateur</label>
          <input type="text" id="organization" v-model="profile.username">
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" v-model="profile.phone">
        </div>
        <div class="form-group">
          <label for="address">Addresse</label>
          <input type="text" id="address" v-model="profile.address">
        </div>
      </div>
            
      <div class="form-actions">
        <button type="button" class="btn btn-logout" @click="logoutUser">Déconnexion</button>

        <button type="submit" class="btn">Sauvegarder</button>
      </div>
    </form>
  </div>
        </div>

</template>

<script>
import { auth, db } from "@/firebase/init";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { onMounted } from 'vue';

export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#8d8d8d",
      },
      profile: {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        phone: '',
        address: '',
      },
    };
  },
  methods: {
    async fetchProfile(uid) {
      try {
        const userDocRef = doc(db, "users", uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
  console.log(docSnap.data()); // Log to see the actual fetched data
  this.profile = docSnap.data();
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
          console.log('Profile updated:', this.profile);
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      } else {
        console.error("No authenticated user found.");
      }
    },
    logoutUser() {
      signOut(auth).then(() => {
        this.$router.push('/');
      }).catch((error) => {
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
        this.$router.push('/login'); // Example redirect
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


#profileTitle{
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

/* Add responsive styles as needed */
</style>
