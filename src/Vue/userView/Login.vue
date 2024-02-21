<template>
  <div :style="myStyle" id="wrapper">
    <div id="my-app">
      <div id="login-form" class="login-container">
        <h1 id="loginTitle">Login</h1>
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <input
              type="text"
              id="email"
              v-model="credentials.email"
              @focus="clearPlaceholder($event)"
              @blur="restorePlaceholder($event, 'Email or Username')"
              placeholder="Email or Username"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              v-model="credentials.password"
              @focus="clearPlaceholder($event)"
              @blur="restorePlaceholder($event, 'Password')"
              placeholder="Password"
              required
            />
            <button type="button" class="btn-forgot" @click="forgotPassword">
              Forgot your password?
            </button>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-login">Continue</button>
            <button @click="newUser" type="button">
              Don't have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#222",
      },
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    loginUser() {
      signInWithEmailAndPassword(
        auth,
        this.credentials.email,
        this.credentials.password
      )
        .then((userCredential) => {
          // Login successful
          this.$router.push("/profile");
        })

        .catch((error) => {
          // Handle errors (e.g., wrong password, no user with such email)
          alert(error.message); // Show error to user
        });
    },

    forgotPassword() {
      // Handle forgot password
      console.log("Forgot password clicked");
    },
    newUser() {
      this.$router.push("/signup");
    },

    clearPlaceholder(event) {
      event.target.placeholder = ""; // Clear the placeholder text
    },
    restorePlaceholder(event, originalPlaceholder) {
      if (event.target.value === "") {
        event.target.placeholder = originalPlaceholder; // Restore the original placeholder text if the input is empty
      }
    },
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

#loginTitle {
  text-align: center;
  margin-bottom: 40px;
  font-size: 38px;
}

.login-container {
  max-width: 550px;
  margin: auto;
  background: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  height: 450px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: rgb(0, 0, 0);
  background-color: #fbf8f8;
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
  width: 80%;
  margin-left: 50px;
  margin-bottom: 10px;
  height: 50px;
}

.login-container input:focus {
  outline: none;
}

.form-actions {
  text-align: center;
}

.btn-login {
  width: 70%;
  padding: 10px;
  background: red;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bolder;
}

.btn-forgot {
  background: none;
  border: none;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  margin-left: 50px;
}

/* This is just to simulate the placeholder style, replace with actual placeholders */
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
}
</style>
