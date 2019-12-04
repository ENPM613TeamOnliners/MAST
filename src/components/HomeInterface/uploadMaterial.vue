<template>
<v-card dense>
    <v-col cols="4">
  <v-file-input
    v-model="files"
    placeholder="Upload your documents"
    label="File input"
    type= "file"
    v-on:change="handleFileUpload()"
    multiple
    prepend-icon="mdi-paperclip"
    outlined
  >
    <template v-slot:selection="{ text }">
      <v-chip
        small
        label
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
  </v-col>
   <v-btn v-on:click="submitFile()">Upload</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'uploadMaterial',
  data: () => ({
    files: [],
  }),
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>
