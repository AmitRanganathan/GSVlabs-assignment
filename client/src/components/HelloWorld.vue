<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <h2> To begin: Please make an account using the sign up button! </h2>
    <h2> If you already have an account, then just log in and have fun! </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello and welcome to Poem Generator!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
