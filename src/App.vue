<template>
  <div id="app">
   <home></home>
  </div>
</template>

<script>
import home from './components/home'
export default {
  name: 'app',
   components: {
      home
      
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width:800px;
  
}
</style>
