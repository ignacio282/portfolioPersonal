<template>
  <div class="home">
    <!-- #region 1  -->

    <v-container fluid class="hero">
      <v-row align-content="center">
        <v-col cols="12">
          <v-img class="mx-auto mb-16" src="https://imgur.com/KR4Re8b.png" width="400"></v-img>
          <h1
            class="text-center text-h3 font-weight-black pb-5 pt-8"
          >Full-Stack Developer, Game Dev and Designer</h1>
          <h2
            class="text-center text-h5 font-weight-light"
          >I design and code beautifully simple things, and I love what I do.</h2>

          <div class="text-center mt-16">
            <v-btn
              rounded
              color="grey darken-3"
              dark
              x-large
              @click="$vuetify.goTo('#contact', options)"
            >Say Hi!</v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="text-center">
            <v-btn
              class="font-weight-light"
              text
              Large
              @click="$vuetify.goTo('#portfolio', options)"
            >Learn more about my work</v-btn>
            <br />
            <v-icon color="#cc921e">mdi-arrow-down-bold</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- #endregion -->

    <!-- #region 2 -->

    <v-container fluid class="description" id="descripcion">
      <h1 class="text-h4 font-weight-bold pb-7">Hi, I’m Ignacio. Nice to meet you.</h1>
      <p class="text-h6 font-weight-light">
        I’m a freelance multimedia developer and designer, I’ve worked with institutions like the Universidad San Francisco de Quito (USFQ) and Companies as Paseo San Francisco, developing Web Sites, Web apps and mobile applications, I’ve also worked with small businesses in brand design, logo design, product photography and product branding.
       <br> <br> I’m also a passionate game developer, I’ve developed small games for PC, mobile and VR ( Oculus Quest, Oculus Go and Samsung gear VR). I am quite confident, curious and perpetually working on improving my knowledge and learning new tools to create better products and become better at developing.
      </p>
    </v-container>

    <!-- CARD -->

    <v-card class="mx-auto tarjetaSkills" elevation="10" max-width="80%">
      <v-container class="pa-8" fluid>
        <v-row>
          <!-- FULL STACK -->

          <v-col class="text-center">
            <v-responsive
              class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-3 neumo"
              height="120"
              width="120"
            >
              <v-icon x-large class="py-5" color="#cc921e">mdi-web</v-icon>
            </v-responsive>

            <h2 class="pa-5">Full-Stack Developer</h2>
            <p
              class="text-body-1 pa-5"
            >I value simple content structure, clean design patterns, and thoughtful interactions.</p>

            <h4 class="py-5 font-weight-regular subSkill">Languages I Know</h4>
            <p class="text-body-1 pb-5">HTML, CSS, JAVASCRIPT</p>

            <h4 class="py-5 font-weight-regular subSkill">Frameworks I Know</h4>
            <p class="text-body-1">Vue.Js</p>
            <p class="text-body-1">React</p>
            <p class="text-body-1">Angular</p>

            <h4 class="py-5 font-weight-regular subSkill">Tools I Know</h4>
            <p class="text-body-1">Node.js</p>
            <p class="text-body-1">Mongo DB</p>
            <p class="text-body-1">Firebase</p>
            <p class="text-body-1">Vuetify</p>
            <p class="text-body-1">Bootstrap</p>
            <p class="text-body-1">Git</p>
          </v-col>

          <!-- GAME DEV -->

          <v-col class="text-center px-10">
            <v-responsive
              class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-3 neumo"
              height="120"
              width="120"
            >
              <v-icon x-large class="py-5" color="#cc921e">mdi-gamepad-variant-outline</v-icon>
            </v-responsive>
            <h2 class="pa-5">Game Dev</h2>
            <p
              class="text-body-1 pa-5"
            >I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <h4 class="py-5 font-weight-regular subSkill">Languages I Know</h4>
            <p class="text-body-1 pb-5">C#, C++</p>

            <h4 class="py-5 font-weight-regular subSkill">Engines I Know</h4>
            <p class="text-body-1">Unity 3D</p>
            <p class="text-body-1">Unreal Engine</p>

            <h4 class="py-5 font-weight-regular subSkill">Tools I Know</h4>
            <p class="text-body-1">Visual Studio Code</p>
            <p class="text-body-1">Vuforia</p>
            <p class="text-body-1">Augmented Reality</p>
            <p class="text-body-1">Virtual Reality</p>
          </v-col>

          <!-- DESIGNER -->

          <v-col class="text-center px-10">
            <v-responsive
              class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-3 neumo"
              height="120"
              width="120"
            >
              <v-icon x-large class="py-5" color="#cc921e">mdi-pencil-box-multiple-outline</v-icon>
            </v-responsive>
            <h2 class="pa-5">Multimedia Designer</h2>
            <p
              class="text-body-1 pa-5"
            >I value simple content structure, clean design patterns, and thoughtful interactions.</p>

            <h4 class="py-5 font-weight-regular subSkill">Graphic Design</h4>

            <p class="text-body-1">Photoshop</p>
            <p class="text-body-1">Illustrator</p>

            <h4 class="py-5 font-weight-regular subSkill">Video</h4>

            <p class="text-body-1">After Effects</p>
            <p class="text-body-1">Premiere Pro</p>
            <p class="text-body-1">Media Encoder</p>

            <h4 class="py-5 font-weight-regular subSkill">Audio</h4>

            <p class="text-body-1">Adobe Audition</p>
            <p class="text-body-1">Ableton Live</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- #endregion -->

    <!-- #region 3 -->

    <v-container fluid class="portfolio" id="portfolio">
      <h1 class="text-center text-h4 font-weight-bold pb-7">My Work</h1>
      <p
        class="text-center text-body-1 pa-5"
      >Let me know if i can help you, i am a very versatile professional</p>
      <v-row class="pb-16">
        <TarjetaProyecto
          title="Knwoledge Knight"
          image="https://imgur.com/SeItmGY.png"
          link="https://www.youtube.com/watch?v=-GCjdhrgjy8&ab_channel=IgnacioVergara"
          description="Knowledge knight is a 2D PC game, developed in Unity 3D that focuses on roguelike and card mechanics, is a very entertaining game that introduces a new concept to the market. "
        />
        <TarjetaProyecto
          title="Mario VR"
          image="https://imgur.com/j1MkFwM.jpg"
          link="https://www.behance.net/gallery/79278113/MarioVR"
          description="Mario VR is a tribute to the first Super Mario game. it is a representation of the game’s first level, but in a Virtual reality Environment, it was developed for Samsung gear VR using unity 3D and Oculus technology."
        />
        <TarjetaProyecto
          title="Neon Beat"
          image="https://imgur.com/L3OK9yk.png"
          link="https://www.youtube.com/watch?v=gQRh556KkZI&ab_channel=IgnacioVergara"
          description="Neon Beat is a VR Game that focuses in music and rhythm, it was developed for Oculus quest because it requires the player to move around a room hitting drums in a particular order to get the best score possible."
        />
      </v-row>
    </v-container>

    <!-- #endregion -->

    <!-- #region 4 -->
    <v-row>
      <v-container fluid class="contact" id="contact">
        <h1 class="text-center text-h4 font-weight-bold mt-16">Lets Talk</h1>
        <p
          class="text-center text-body-1 pa-10"
        >Let me know if i can help you, i am a very versatile professional</p>
        <v-row>
          <v-col></v-col>
          <v-col class="text-center">
            <v-btn
              href="mailto:ignacio.vergara282@gmail.com"
              color="#cc921e"
              dark
              x-large
            >Contact me</v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-row>
    <!-- #endregion -->
  </div>
</template>

<script>
// @ is an alias to /src
import { showAt, hideAt } from "vue-breakpoints";

export default {
  name: "Home",
  components: {
    hideAt,
    showAt
  }
};
</script>
<style lang="scss" scoped>
.home {
}
.hero {
  background: url("https://imgur.com/Wzc6Wql.png") center center no-repeat;
  background-size: cover;
  margin: 0;
  padding-top: 5%;
}

.description {
  background-color: #424242;
  background-size: cover;
  padding: 10%;
  color: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 50%;
}
.portfolio {
  padding-top: 4%;
  color: rgb(0, 0, 0);
  padding-left: 10%;
  padding-right: 10%;
}
.contact {
  background: url("https://imgur.com/EmeF0f0.png") center center no-repeat;
  background-size: cover;
  background-color: #424242;
  padding-top: 4%;
  color: rgb(255, 255, 255);
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 8%;
}
.tarjetaSkills {
  margin-top: -15%;
}
.neumo {
  background: #dedede;
  box-shadow: 10px 10px 20px #bdbdbd, -10px -10px 20px #ffffff;
}
.subSkill {
  color: #cc921e;
}

@media only screen and (max-width: 600px) {
  .tarjetaSkills {
    margin-top: -25%;
  }
  .hero {
    padding: 5%;
  }
  .portfolio {
    padding-top: 20%;
    padding-left: 14%;
  }
  .description {
    padding-top: 20%;
  }
}

@media only screen and (min-width: 992px) {
  .hero {
    height: 100vh;
  }
  .description {
    height: 100vh;
    padding-bottom: 0%;
  }
}
@media only screen and (min-width: 768px) {
  .hero {
    height: 100vh;
  }
  .description {
    height: auto;
    padding-bottom: 20%;
  }
}
</style>
