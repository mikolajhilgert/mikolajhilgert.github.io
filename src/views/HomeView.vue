<template>
  <NavBar />
  <v-app id="home">
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Mikolaj</h1>
              <span class="text-grey">Welcome to my site!</span><br />
              <v-btn
                tile
                dark
                class="text-light-blue mt-8"
                variant="outlined"
                href="https://www.linkedin.com/in/mikolaj-hilgert/"
              >
                LinkedIn
              </v-btn>
              <a>&nbsp;</a>
              <v-btn
                tile
                dark
                class="text-gray mt-8"
                variant="outlined"
                href="https://github.com/mikolajhilgert"
              >
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
                margin-bottom: 10px;
              "
              class="mt-16"
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col>
            <div style="position: relative; z-index: 12" class="mt-16">
              <v-img src="i1.png" contain max-height="460" margin-top="-100">
              </v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="climb">
                <v-img src="i2.png" max-height="500" class=""></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About Me</h5>
              <div style="width: 120px">
                <br />
              </div>
              <!-- <h4 class="mt-n4">Student</h4>
              <br /> -->
              <p class="text-grey">
                My name is Mikolaj, and I’m a fourth-year bachelor's student in
                ICT and Software Engineering.
              </p>
              <br />
              <p class="text-grey" style="text-align: justify">
                Coming from an international environment, I have met and worked
                with people from many different cultures thanks to the projects
                I did during my studies. I've learned how to become a good
                leader and communicator, an active listener, and more
                importantly how to work both independently and in a team. Other
                skills I developed are being organised, paying attention to
                details, and valuing different points of view to reach the best
                solution. I am ambitious and motivated by the search for
                creative solutions to difficult problems.
              </p>
              <br />
              <p class="text-grey" style="text-align: justify">
                I strongly believe in the power of pushing limits, whether by
                conquering physical heights or exploring the forefront of
                technological progress.
              </p>
              <br />
              <v-btn
                tile
                dark
                color="yellow"
                class="mt-4"
                href="/files/Mikolaj Hilgert CV.pdf"
                download="Mikolaj Hilgert CV"
              >
                Download my Resume
              </v-btn>
            </v-col>
          </v-row>
          <br /><br />
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
    NavBar,
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
  height: 435px;
  width: 100%;
  color: white;
}

.head:before {
  content: "";
  position: absolute;
  top: -100px;
  left: 0;
  height: 120%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.head:after {
  content: "";
  position: absolute;
  top: -100px;
  right: 0;
  height: 120%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}

.climb {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

@media (min-width: 1800px) {
  .climb {
    margin-top: 75px;
    transform: scale(1.5) translateX(+50%);
  }
}
@media (max-width: 880px) {
  .climb {
    display: none;
  }
}
</style>
