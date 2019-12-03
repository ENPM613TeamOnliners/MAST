<template>
<div outlined>
    <form id="main" v-cloak>
    <div class="bar">
        <!-- Create a binding between the searchString model and the text field -->
 <v-icon>mdi-magnify</v-icon>
        <input type="text" v-model="searchString" placeholder="Enter your search terms" />
    </div>

    <ul>
        <!-- Render a li element for every entry in the computed filteredArticles array. -->
             
        <li v-for="course in filteredData" :key="course.name">
            <a v-bind:href="course.courseid"> Course Id: {{ course.courseid }}</a>
            <h2>{{course.name}}</h2>
           
            
        </li>
    </ul>

</form>
</div>
</template>

<script>
export default {
    name: 'searchBar',
          data() {
              return{
        searchString: "",

        courseData: [
            {
              "courseid": "1",
              "name": "Introduction to CyberSecurity",
            },
            {
              "courseid": "2",
              "name": "Cybersecurity: Crash Course Computer",
            },
        ]
    };

    computed: {
        // A computed property that holds only those data that match the searchString.
        filteredData:  {
            var search_array = this.courseData,
                searchString = this.searchString;

            if(!searchString){
                return search_array;
            }

            searchString = searchString.trim().toLowerCase();

            search_array = search_array.filter(item => {
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return search_array;
        }
    }
    }
}
</script>