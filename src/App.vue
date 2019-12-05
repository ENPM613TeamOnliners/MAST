<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Modern Academic Security Training (MAST)</v-toolbar-title>
      <v-spacer></v-spacer>


          <v-btn outlined to="/logout">
            Logout
            <!-- <router-link to="/logout" block>Logout</router-link> -->
            <v-icon>mdi-logout</v-icon>
          </v-btn>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <!-- <v-list-item-title class="pa-3">Username: {{userInfo.username}}</v-list-item-title> -->
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-dialog v-model="dialog">
                 <template v-slot:activator="{ on }">
                <v-btn text v-on="on">{{item.title}}</v-btn>
              </template>
                <v-card>
                <v-card-title class="headline black white--text" primary-title>{{item.title}}</v-card-title>
<Account/>
                <v-card-text>
                  </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content app>


      <router-view />

    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import UserInfoStore from '@/app/user-info-store';
import UserInfoApi from '@/app/user-info-api';
import Account from '@/components/HomeInterface/Account.vue'

export default {
  name: 'App',
  components: {
    Account,
  },

  data() {
    return {
      dialog: false,
      userInfo: UserInfoStore.state.cognitoInfo,
      drawer: null,
      items: [
        { title: 'My Account', icon: 'mdi-account', component: Account },
      ],
    };
  },
};
</script>
