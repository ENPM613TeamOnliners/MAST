<template>
  <v-card flat>
    <h1 class="text-center">Welcome to MAST!</h1>
    <h3 class="text-right">You are currently logged in as:</h3>
    <h4 class="text-right font-weight-light">
      Username: {{userInfo.email}}
      <br />
      Email: {{userInfo.email}}
    </h4>
    <v-data-table :headers="headers" :items="assignments" sort-by="duedates" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Grades</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Modify Assignments</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Assignment name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.duedates" label="Due dates"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.grades" label="Grades"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn small class="mr-2" @click="editItem(item)">edit</v-btn>
        <v-btn small @click="deleteItem(item)">delete</v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import UserInfoStore from "@/app/user-info-store";

export default {
  name: "HomeContent",
  components: {
  },
  data() {
    return {
      userInfo: UserInfoStore.state.cognitoInfo,
      dialog: false,
      headers: [
        {
          text: "Assignment Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Due dates", value: "duedates" },
        { text: "Grades", value: "grades" },
        { text: "Actions", value: "action", sortable: false }
      ],
      assignments: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        duedates: 0,
        grades: 0,
      },
      defaultItem: {
        name: "",
        duedates: 0,
        grades: 0,
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.assignments = [
        {
          name: "Assignment 1",
          duedates: "12/04/2025",
          grades: 6.0,
        },
        {
          name: "Assignment 2",
          duedates: "12/11/2025",
          grades: 9.0,
        },
        {
          name: "Assignment 3",
          duedates: "01/01/2026",
          grades: 16.0,
        },
        {
          name: "Assignment 4",
          duedates: "01/27/2026",
          grades: 3.7,
        },
        {
          name: "Assignment 5",
          duedates: "02/14/2026",
          grades: 16.0,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.assignments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.assignments.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.assignments.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.assignments[this.editedIndex], this.editedItem);
      } else {
        this.assignments.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>