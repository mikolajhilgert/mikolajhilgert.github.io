<template>
    <v-app-bar app color="black" dark flat>
      <v-btn >
      mikolajhilgert.pl
      </v-btn>
      <v-spacer/>
      <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
      <v-btn text @click="scroll('about')"  >About</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth" });
      },
    },
  };
  </script>
  <style>
  </style>