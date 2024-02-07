<template>
    <div class="myApp">
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Login</button>
          </div>
          <div class="overlay-right">
            <h2>Dont have an account?</h2>
            <br>
            <button class="invert" id="signUpBtn" @click="signUp = !signUp">Sign up</button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#" @submit.prevent="submitForm">
    <h2>Sign up</h2>
    <div>Use your email for registration</div>
    <input type="text" v-model="nom" placeholder="Nom" />
    <input type="email" v-model="courriel" placeholder="Courriel" />
    <input type="password" v-model="password" placeholder="Password" />
    <input type="password" v-model="retypePassword" placeholder="Retype Password" />
    <button class="signupBtn" type="submit">Sign up</button>
  </form>
      <form class="sign-in" action="#" @submit.prevent="loginForm">
        <h2>Login</h2>
        <div>Use your account</div>
        <input class="emailInput" type="courriel" v-model="courriel" placeholder="Email" />
        <input class="passwordInput" type="password" v-model="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Login</button>
      </form>
    </div>
  </article>
    </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {

    };
  },
};

</script>

<style lang="scss" scoped>



.myApp {
    font-family: Tahoma;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  .container {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #feffbe, #fffb96);

    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform .5s ease-in-out;
      z-index: 100;
      
    }

    .overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      background-color: black;
      color: #fff;
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }

    @mixin overlays($property) {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 70px 40px;
      width: calc(50% - 1px);
      height: calc(100% - 1px);
      text-align: center;
      transform: translateX($property);
      transition: transform .5s ease-in-out;
    }

    .overlay-left {
      @include overlays(-20%);
    }

    .overlay-right {
      @include overlays(0);
      right: 0;
    }
  }

  #signupBtn{
    background-color: white;
    }

.emailInput{
  height: 30px;
  font-size: 22px;
}

.passwordInput{
  height: 30px;
  font-size: 22px;
}

  h2 {
    margin: 0;
  }

  p {
    margin: 20px 0 30px;
  }

  a {
    color: #222;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;
  }

  button {
    border-radius: 20px;
    background-color: #ffffff;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;

    &:active {
      transform: scale(.9);
    }

    &:focus {
      outline: none;
    }
  }

  button.invert {
    background-color: transparent;
    border-color: #fff;
  }

  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 1px);
    height: calc(100% - 1px);
    text-align: center;
    background-color: red;
    transition: all .5s ease-in-out;

    div {
      font-size: 1rem;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 8px 15px;
      margin: 6px 0;
      width: calc(100% - 30px);
      border-radius: 5px;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
                        0 -1px 1px #fff, 
                        0 1px 0 #fff;
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

      &:focus {
        outline: none;
        background-color: #fff;
      }
    }
  }

  .sign-in {
    left: 0;
    z-index: 2;
  }

  .sign-up {
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .sign-up-active {
    .sign-in {
      transform: translateX(100%);
    }

    .sign-up {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show .5s;
    }

    .overlay-container {
      transform: translateX(-100%);
    }

    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateX(0);
    }

    .overlay-right {
      transform: translateX(20%);
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }

  template{
    background-color: black;
  }
</style>