<template>
  <v-col md="4" xs="9" sm="6">

      <v-card max-width="400" elevation="10">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="image"
          
        >

        </v-img>

        <v-btn fab small bottom right absolute @click="show = !show">
                    <v-icon color="black">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

        </v-btn>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>{{description}}</v-card-text>
            <v-card-actions> <v-btn text="" :href="link"> VER MAS</v-btn></v-card-actions>
          </div>
        </v-expand-transition>
      </v-card>

  </v-col>
</template>
 
<script>
export default {
  props: {
    title: String,
    image: String,
    link : String,
    description: String
  },
  name: "TarjetaProyecto",
  data: () => ({
    overlay: false,
    show: false,
    dialog: false
  })
};
</script>
<style lang="scss" scoped>
</style>
