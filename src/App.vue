<template>
  <div id="app">
    <app-cities></app-cities>
  </div>
</template>

<script>
import input from './input.vue';

export default {
  components:{
        'app-input': input
    },
  data () {
    return {
      name: 3,
      changed: undefined
    }
  },
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
}
</script>

<style>
</style>
