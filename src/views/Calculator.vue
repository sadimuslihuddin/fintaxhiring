<template>
  <h2 class="mb-4">This Calculator Using LocalStorage</h2>
  <div class="calculator mx-auto">
      <h2 class="calc-input justify-content-center mx-auto mb-3 d-flex align-items-center">{{ input }}</h2>
      <div class="px-3">
        <button v-for="item in calculator" class="calc-btn mx-3 my-2" v-on:click="number(item.value)">
          {{ item.value }}
        </button><br>
      </div>
      <button class="calc-btn mx-auto my-2" v-on:click="number(0)">0</button>

      <div class="mt-2">
        <button class="calc-btn mx-2 my-2 operation" v-on:click="operation('+')">+</button>
        <button class="calc-btn mx-2 my-2 operation" v-on:click="operation('-')">-</button>
        <button class="calc-btn mx-2 my-2 operation" v-on:click="operation('/')">/</button>
        <button class="calc-btn mx-2 my-2 operation" v-on:click="operation('*')">*</button>
        <button class="calc-btn mx-2 my-2 result"  v-on:click="result()">=</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      input: localStorage.getItem('input') || "",
      count: localStorage.getItem('count') || 0,
      calculator:[
        {id: 1, value:"1"},
        {id: 2, value:"2"},
        {id: 3, value:"3"},
        {id: 4, value:"4"},
        {id: 5, value:"5"},
        {id: 6, value:"6"},
        {id: 7, value:"7"},
        {id: 8, value:"8"},
        {id: 9, value:"9"},
      ]
    }
  },
  methods: {
    number(e){
      console.log(this.input, e);
      this.input = this.input+e;
      localStorage.setItem('input', this.input)
    },
    operation(e){
      console.log(this.input, e, this.count);
      this.count += 1;
      localStorage.setItem('count', this.count)
      if(this.count > 1){
        this.result();
        this.count = 0;
        localStorage.setItem('count', this.count)
      }
      else{
        this.input = this.input+e;
        localStorage.setItem('input', this.input)
      }
    },
    result(){
      console.log(this.input.length);
      for(let i=0; i<this.input.length; i++){
        console.log(i)
        if (this.input[i] == "+"){
          this.input = parseInt(this.input.slice(0,i))+parseInt(this.input.slice(i+1,this.input.length));
        }
        else if (this.input[i] == "-"){
          this.input = parseInt(this.input.slice(0,i))-parseInt(this.input.slice(i+1,this.input.length));
        }
        else if (this.input[i] == "*"){
          this.input = parseInt(this.input.slice(0,i))*parseInt(this.input.slice(i+1,this.input.length));
        }
        else if (this.input[i] == "/"){
          this.input = parseInt(this.input.slice(0,i))/parseInt(this.input.slice(i+1,this.input.length));
        }
        localStorage.setItem('input', this.input)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  height: auto;
  width: 360px;
  background-color: #42b983;
  padding: 20px 10px;
  border-radius: 10px;
  filter: drop-shadow(10px 10px 4px gray)
}
.calc-input {
  height: 50px;
  width: 250px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 5px;
  background: black;
  color: white;
}
.calc-btn {
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 5px;
  background-color: #129158;
  color: white;
  font-size: 24px;
}
.calc-btn:hover{
  background: white!important;
  color: black;
}
.calc-btn.operation {
  background: #0e663f;
}
.calc-btn.result{
  background: black;
}
a {
  color: #42b983;
}
</style>