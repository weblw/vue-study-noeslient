<template>
  <div id="app">
    <!-- <Emitter /> -->
    <!-- <FormView /> -->
    <!-- <component-a></component-a> -->
    <CheckBox />
  </div>
</template>

<script>
// import Emitter from './Views/Emitter'
// import FormView from './Views/FormView'
// import componentA from './components/component-a2'
import CheckBox from './Views/CheckBox'
export default {
  name: 'app',
  components: {
    // Emitter,
    // FormView
    // componentA
    CheckBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
