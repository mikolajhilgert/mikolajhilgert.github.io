<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Mikolaj</h1>
              <span class="text-grey">Welcome to my site!</span><br />
              <v-btn tile dark class="text-light-blue mt-8" variant="outlined" href="https://www.linkedin.com/in/mikolaj-hilgert/">
                LinkedIn
              </v-btn>
              <a>&nbsp;</a>
              <v-btn tile dark class="text-gray mt-8" variant="outlined" href="https://github.com/mikolajhilgert">
                Github
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
              class="mt-16"
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col>
            <div style="position: relative; z-index: 12" class="mt-16">
              <v-img src="i1.png" contain max-height="460" margin-top="-100"> </v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="i2.png" max-height="500" class=""></v-img>

              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About Me</h5>
              <div style="width: 120px">
                <v-slider
                  v-model="slider2"
                  color="yellow"
                  label="track-color"
                  disabled
                ></v-slider>
              </div>
              <h4 class="mt-n4">Student & Software Engineer at BuildingBlocks (Part of CM.com)</h4>
              <p class="text-grey">
                Hi, My name is Mikolaj. I am a 21-year-old student from Krakow, Poland, who has spent the majority of his life in Prague, Czech Republic. I am currently studying in the Netherlands. I am committed to my work and have a strong desire to learn new skills and collaborate with others. Furthermore, growing up in a multicultural environment has made me more open, approachable, and adaptable to difficult situations.
              </p>
              <br />
              <p class="text-grey">
                My current decision to pursue a Bachelor of Science in Software Engineering stems from my passion for programming and problem solving. I'm also interested in business and hope to incorporate it into my future studies.
              </p> <br />
              <v-btn tile dark color="yellow" class="mt-4" href="/files/cv_mh.pdf" download="Mikolaj Hilgert CV">
                Download Resume
              </v-btn>
            </v-col>
          </v-row>
          <br><br>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

// Components
//import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar
},
});
</script>
<style scoped>
.v-container {
  padding: 16px 0 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 110%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 110%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

@media (max-width: 768px) { /* Adjust the max-width as needed for your design */
  .egg {
    display: none; /* Hide the image on mobile */
  }
}
</style>
