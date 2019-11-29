<template>
  <v-card>
    <v-tabs center-active dark>
      <v-tab>Home</v-tab>
      <v-tab>Courses</v-tab>
      <v-tab>Messages</v-tab>
      <v-tab>Help</v-tab>
      <v-tab>About</v-tab>

      <!-- Tab content -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
           Home
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Courses
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Messages
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Help
          </v-card-text>
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <About />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import About from "@/views/About.vue";
export default {
  name: "Landing",
  components: {
    About,
  }
};
</script>