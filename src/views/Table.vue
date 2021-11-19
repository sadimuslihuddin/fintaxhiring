<template>
  <div class="div-table mx-auto mb-5">
    <div class="d-flex justify-content-center">
    <table class="mb-3 mt-3" style="width: 100%">
        <tr>
            <th>avatar</th>
            <th>id</th>
            <th>email</th>
            <th>first name</th>
            <th>last name</th>
        </tr>
        <tr v-for="item in table">
            <td><img :src="item.avatar"></td>
            <td>{{ item.id }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name}}</td>
        </tr>
    </table>
    </div>
    <div>
        <button v-on:click="onClick(1)">1</button>
        <button v-on:click="onClick(2)">2</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Table',
  data(){
      return {
          table: null
      }
  },
  mounted (){
      axios.get("https://reqres.in/api/users?page=1")
      .then(res => {
          this.table = res.data.data;
      })
  },
  methods: {
      onClick(e){
          axios.get("https://reqres.in/api/users?page="+e)
          .then(res => {
            this.table = res.data.data;
          })
      }
  }
}
</script>

<style scoped>
* {
    font-family: poppins;
}
.div-table {
    width: 80%;
    padding: 20px 20px;
    background: #129158;
    border-radius: 10px;
}
th {
    font-size: 20px;
}
img {
    border-radius: 50%;
}
tr:nth-child(odd) {
    background: white;
    color: #129158;
}
tr:nth-child(even) {
    background: #129158;
    color: white;
}
button {
    background: white;
    color: black;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
}
</style>

