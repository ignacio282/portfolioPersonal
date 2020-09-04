<template>
  <v-container class="pa-0" fluid>
    <div class="rtl">
      <v-btn color="#cc921e" dark @click="drawer = !drawer"   class="marginSize"  fixed>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
    <!--  DRAWER -->
    <v-navigation-drawer class="ma-10 elevation-10" height="40%" width="220px" v-model="drawer" expand-on-hover fixed>

      <v-list >
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="#cc921e">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Hello!", icon: "mdi-human-greeting" },
        { title: "Skills", icon: "mdi-laptop" },
        { title: "Portfolio", icon: "mdi-briefcase" },
        { title: "Contact", icon: "mdi-email" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.rtl{
    direction: rtl;
}

@media only screen and (max-width: 600px) {
    .marginSize{
        margin: 1%;
        z-index:1000
    }
}
@media only screen and (min-width: 992px) {
    .marginSize{
        margin: 2%;
        z-index: 1000;
    }
}

</style>
