<template>
  <div :style="myStyle" id="wrapper">

  <div id="my-app">
  <div id="login-form" class="login-container">
    <h1 id="loginTitle">Register</h1>
    <form @submit.prevent="submitForm">
        <div class="form-group" id="namesDiv">
        <input type="text" id="firstName" v-model="credentials.firstName" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'First Name')" placeholder="First Name" required>
        <input type="text" id="lastName" v-model="credentials.lastName" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Last Name')" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <input type="text" id="email" v-model="credentials.email" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Email address')" placeholder="Email address" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="credentials.password" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Password')" placeholder="Password" required>
      </div>
       <div class="form-group">
        <input type="password" id="confirmPassword" v-model="credentials.confirmPassword" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Confirm Password')" placeholder="Confirm Password" required>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-login">Continue</button>
        <button type="button" class="btn-forgot" @click="existingUser">Already have an account?</button>
      </div>
    </form>
  </div>
    </div>
        </div>

</template>

<script>
export default {
  data() {
    return {
      myStyle:{
            backgroundColor:"#222" 
            },
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.credentials);
    },
    existingUser() {
      this.$router.push('/login');
    },
    clearPlaceholder(event) {
      event.target.placeholder = ''; // Clear the placeholder text
    },
    restorePlaceholder(event, originalPlaceholder) {
      if (event.target.value === '') {
        event.target.placeholder = originalPlaceholder; // Restore the original placeholder text if the input is empty
      }
    }
  }
};
</script>

<style scoped>


#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

#loginTitle{
  text-align: center;
  margin-bottom: 30px;
  font-size: 38px;
}

.login-container {
  max-width: 400px;
  margin: auto;
  background: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  height: 500px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

#namesDiv{
    margin-left: 5px;
}

.form-group input {
  width: 90%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: rgb(0, 0, 0);
  background-color: #fbf8f8;
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 10px;
  margin-left: 20px;
}


.login-container input:focus {
  outline: none;
}

.form-actions {
  text-align: center;
}

#firstName{
    width: 40%;
    margin-left: 20px;
}

#lastName{
    width: 40%;
    margin-left: 30px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background: red;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bolder;
}

.btn-forgot {
  background: none;
  border: none;
  color: white;
  margin-top: 10px;
  cursor: pointer;
}

/* This is just to simulate the placeholder style, replace with actual placeholders */
input[type='text']::placeholder, input[type='password']::placeholder {
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
}
</style>
