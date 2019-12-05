<template>
  <v-card>
    <v-tabs vertical>
      <v-tab>
        Profile
      </v-tab>
      <v-tab>
        Settings
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Name: 
            </p>

            <p>
              email:
            </p>

            <p class="mb-0">
             Degree: Cybersecurity
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
             Notifications:
            </p>

            <p>
            <v-checkbox
              hide-details
              label="email"
              :disable="all"
            ></v-checkbox>
                        <v-checkbox
              hide-details
              label="text"
            ></v-checkbox>
                        <v-checkbox
              hide-details
              label="MAST"
            ></v-checkbox>
                        <v-checkbox
              hide-details
              label="all"
            ></v-checkbox>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
    name: 'Account',
    data(){
      return{

      }
    }
}
</script>