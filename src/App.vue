<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Modern Academic Security Training (MAST)</v-toolbar-title>
      <v-spacer></v-spacer>
      {{userInfo.email}}
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list-item-title class="pa-3">Username: {{userInfo.username}}</v-list-item-title>
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
      <template v-slot:append>
        <div class="pa-2">
          <v-btn outlined to="/logout">
            Logout
            <!-- <router-link to="/logout" block>Logout</router-link> -->
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import UserInfoStore from "@/app/user-info-store";
import axios from 'axios';
import UserInfoApi from "@/app/user-info-api";
export default {
  name: "App",

  data: function() {
    return {
      dialog: false,
      userInfo: UserInfoStore.state.cognitoInfo,
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home-city"},
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ]
    };
  },
};
</script>

