<template>
<v-app>
      <v-card flat app>
        <v-tabs center-active dark>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/courses">Courses</v-tab>
          <v-tab to="/searchBar">Search Courses</v-tab>
          <v-tab to="/help">Help</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
        <!-- Tab content -->
        <router-view>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <HomeContent/>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>Courses</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>Search</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Help
              <Help />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- Displaying About.vue info -->

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <About />
            </v-card-text>
          </v-card>
        </v-tab-item>
        </router-view>
      </v-card>
</v-app>
</template>

<script>
import About from '@/views/About.vue';
import Help from '@/components/HomeInterface/Help.vue';
import HomeContent from '@/components/HomeInterface/HomeContent.vue';

export default {
  name: 'Landing',
  components: {
    About,
    Help,
    HomeContent,
    userInfo: {},
  },
};
</script>
