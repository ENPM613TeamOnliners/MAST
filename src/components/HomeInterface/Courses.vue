<template>
  <v-container app>
    <h1>Courses</h1>
    <v-row>
      <v-list wrap>
        <v-list-item id="course1">
          <v-list-item-content>
            <v-list-item-title>
              <h2>Introduction to Cybersecurity</h2>
            </v-list-item-title>
            <v-card>
              <v-list-item-content>
                <iframe
                  allowfullscreen
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ULGILG-ZhO0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <p>
                  IT security is a growing field. Learn what it's really like to be in security, the tools that keep organizations safe, and the path to entering this growing field.
                  What are Intro to IT courses? https://cbt.gg/2Hy2Qey
                  We all have to start somewhere. Intro to IT courses allow aspiring and seasoned IT pros alike to explore the different corners of the IT career field. These free, open courses are taught at a level anyone can understand by the same great CBT Nuggets trainers.
                  Step 1: Watch this entire course. If you watch the course, then the quiz will be a breeze.
                  Step 2: Test your knowledge with the 7-question Intro to Cybersecurity quiz. Good luck! https://cbt.gg/2DyZeFg
                </p>
              </v-list-item-content>
            </v-card>
            <v-dialog v-model="dialog" fullscreen>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Course Syllabus</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline black white--text" primary-title>Course Description</v-card-title>

                <v-card-text> IT security is a growing field. Learn what it's really like to be in security, the tools that keep organizations safe, and the path to entering this growing field.
                  What are Intro to IT courses? https://cbt.gg/2Hy2Qey
                  We all have to start somewhere. Intro to IT courses allow aspiring and seasoned IT pros alike to explore the different corners of the IT career field. These free, open courses are taught at a level anyone can understand by the same great CBT Nuggets trainers.
                  Step 1: Watch this entire course. If you watch the course, then the quiz will be a breeze.
                  Step 2: Test your knowledge with the 7-question Intro to Cybersecurity quiz. Good luck! https://cbt.gg/2DyZeFg
                  <h4>Registration Deadline: February 2, 2020</h4>
                  </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                   <v-btn color="primary" v-on:click="enrollCourse()">Enroll</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-content>

          <v-spacer></v-spacer>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <h2>Cybersecurity: Crash Course Computer Science #31</h2>
            </v-list-item-title>
            <v-card>
              <v-list-item-content>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bPVaOlJ6ln0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>Cybersecurity is a set of techniques to protect the secrecy, integrity, and availability of computer systems and data against threats. In today’s episode, we’re going to unpack these three goals and talk through some strategies we use like passwords, biometrics, and access privileges to keep our information as secure, but also as accessible as possible. From massive Denial of Service, or DDos attacks, to malware and brute force password cracking there are a lot of ways for hackers to gain access to your data, so we’ll also discuss some strategies like creating strong passwords, and using 2-factor authentication, to keep your information safe.</p>
              </v-list-item-content>
            </v-card>
             <v-dialog v-model="dialog" fullscreen>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Course Syllabus</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline black white--text" primary-title>Course Description</v-card-title>

                <v-card-text> Cybersecurity is a set of techniques to protect the secrecy, integrity, and
                  availability of computer systems and data against threats. In today’s episode, we’re going to unpack these three goals and talk through some strategies we use like passwords, biometrics, and access privileges to keep our information as secure, but also as accessible as possible. From massive Denial of Service, or DDos attacks, to malware and brute force password cracking there are a lot of ways for hackers to gain access to your data, so we’ll also discuss some strategies like creating strong passwords, and using 2-factor authentication, to keep your information safe.
                  <h4>Registration Deadline: February 2, 2020</h4>
                  </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                   <v-btn color="primary" v-on:click="enrollCourse()">Enroll</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-content>
          <v-spacer></v-spacer>
        </v-list-item>
      </v-list>
    </v-row>
      <br>
    <uploadMaterial/>
  </v-container>
</template>

<script>
import uploadMaterial from '@/components/HomeInterface/uploadMaterial.vue';
export default {
  name: 'Courses',
  components: {
    uploadMaterial,
  },

  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    enrollCourse() {
      this.enrollCourse({ path: '/' });
    },
  },
};
</script>
