<template>
  <div id="app">
    <app-countryLeft></app-countryLeft>
    <app-countryRight></app-countryRight>
    <app-cities></app-cities>
    <div id="map">
      <img id="mapimg" v-bind:src="apiData.map_image" alt="Image error">
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
        apiData: undefined,
        }
    },
    methods:{
        loadApi: function () {
            this.$http.get('src/data/data.json')
            .then(this.successCallback, this.errorCallback);
        },
        successCallback: function (response) {
            this.apiData = response.data;
            console.log('successCallback response: ', this.apiData);
        },
        errorCallback: function (response) {
            console.log('errorCallback response: ', response);
        },
    },
    beforeMount(){
      this.loadApi()
    }
  }
</script>

<style>
  #mapimg{
    width: 100%;
  }
</style>
