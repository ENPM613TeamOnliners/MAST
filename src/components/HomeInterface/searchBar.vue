<template>
  <v-card app flat>
    <form v-cloak>
      <div class="bar">
        <input type="text" v-model="search" />
      </div>
      <ul>
        <span>
          <v-list>
            <v-list-group v-for="course in filteredCourses" :key="course.name">
              <template v-slot:activator>
                <v-list>
                  <v-list-item-content>
                    <v-icon>mdi-book</v-icon>
                    <v-list-item-title>{{ course.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list>
              </template>
              <v-divider pa-3></v-divider>
              <v-list>
                <v-list-item-content class="pa-3">{{course.desc}}</v-list-item-content>
                <br>
                <v-btn>Enroll</v-btn>
              </v-list>
            </v-list-group>
          </v-list>
        </span>
      </ul>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "searchBar",
  data: function() {
    return {
      search: "",
      courses: [
        {
          courseid: "1",
          name: "Introduction to CyberSecurity",
          desc:
            "Cybersecurity is a set of techniques to protect the secrecy, integrity, and availability of computer systems and data against threats. In today’s episode, we’re going to unpack these three goals and talk through some strategies we use like passwords, biometrics, and access privileges to keep our information as secure, but also as accessible as possible. From massive Denial of Service, or DDos attacks, to malware and brute force password cracking there are a lot of ways for hackers to gain access to your data, so we’ll also discuss some strategies like creating strong passwords, and using 2-factor authentication, to keep your information safe."
        },
        {
          courseid: "2",
          name: "Cybersecurity: Crash Course Computer",
          desc:
            "IT security is a growing field. Learn what it's really like to be in security, the tools that keep organizations safe, and the path to entering this growing field. What are Intro to IT courses? https://cbt.gg/2Hy2Qey We all have to start somewhere. Intro to IT courses allow aspiring and seasoned IT pros alike to explore the different corners of the IT career field. These free, open courses are taught at a level anyone can understand by the same great CBT Nuggets trainers. Step 1: Watch this entire course. If you watch the course, then the quiz will be a breeze. Step 2: Test your knowledge with the 7-question Intro to Cybersecurity quiz. Good luck! https://cbt.gg/2DyZeFg"
        }
      ]
    };
  },
  computed: {
    filteredCourses: function() {
      var self = this;
      return this.courses.filter(function(cust) {
        return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
      //return this.courses;
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font: 15px/1.3 "Open Sans", sans-serif;
  color: #5e5b64;
  text-align: center;
}

a,
a:visited {
  outline: none;
  color: #000000;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

/*-------------------------
    The search input
--------------------------*/

.bar {
  background-color: #ccc;

  /* background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:linear-gradient(top, #5c9bb7, #5392ad); */

  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  width: 700px;
  padding: 14px;

  position: relative;
}

.bar input {
  background: #fff no-repeat 13px 13px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);

  border: none;
  width: 100%;
  line-height: 19px;
  padding: 11px 0;

  border-radius: 2px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 40px;
}
</style>
