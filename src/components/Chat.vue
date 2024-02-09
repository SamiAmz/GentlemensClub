<template>
  <div>
    <div @mouseover="showOptions = true" @mouseleave="showOptions = false">
      <!-- Chat Icon -->
    </div>
    <div v-if="showOptions">
      <!-- Options Menu -->
      <button @click="showForm = 'question'">Задать вопрос</button>
      <button @click="showForm = 'call'">Заказать звонок</button>
    </div>
    <div v-if="showForm === 'question'">
      <!-- Question Form -->
    </div>
    <div v-if="showForm === 'call'">
      <!-- Call Request Form -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
      showForm: null,
      // ...other data properties
    };
  },
  methods: {
    // ...methods for form submission, etc.
  },
};
</script>

<style>
/* Base styles */
body {
  font-family: "Arial", sans-serif; /* Use the font that matches your design */
}

/* Chat icon/button style */
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f00; /* The red color you have in the images */
  color: white;
  text-align: center;
  line-height: 60px; /* Adjust line height to vertically center the text/icon */
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

/* Hover menu styles */
.hover-menu {
  position: fixed;
  bottom: 90px; /* Adjust as needed */
  right: 20px;
  background-color: white;
  border: 1px solid #ccc; /* Light grey border */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.hover-menu button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  text-align: left;
  font-size: 16px;
  color: #333; /* Dark grey color for text */
  cursor: pointer;
}

.hover-menu button:hover {
  background-color: #f2f2f2; /* Light grey background on hover */
}

/* Form styles */
.form-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px; /* Adjust width as needed */
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.form-container label,
.form-container input,
.form-container select,
.form-container button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.form-container input,
.form-container select,
.form-container button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-container button {
  background-color: #f00; /* The red color you have in the images */
  color: white;
  font-weight: bold;
}

.form-container button:hover {
  background-color: #c00; /* Darker red on hover */
}

/* Country picker styles */
.country-picker {
  display: none; /* Hidden by default, shown when relevant input is focused */
  position: absolute;
  z-index: 10;
  /* ...other styles as needed */
}

/* Show the country picker when input is focused */
input:focus + .country-picker {
  display: block;
}

/* Adjust styles for country picker dropdown */
.country-picker select {
  width: 100%;
  /* ...other styles as needed */
}
</style>
