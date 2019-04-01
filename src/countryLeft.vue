<template>
    <div>
        
        <div class="countryInfo">
            <div class="flag">
                <img v-bind:src="apiData.flag" alt="Image error">
            </div>
            
            <p class="countryName">
                {{apiData.name}}        
            </p>
            <p  class="description" v-html="apiData.description">
                {{ apiData.description }}      
            </p>
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
.flag img{
    margin-top:20px;
    float: left;
    width: 150px;
    height: 70px;
    margin-left:20%;
}
.countryName{
    margin-top: 0;
    font-size: 70px;
    font-family: "Oswald",sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10pt;
}
.description{
  margin-left: 20%;
  font-size: 12pt;
  font-family: "Oswald",sans-serif;
}
.countryInfo{
    width: 100%;
  height: 250px;
}
#countryRate{
    margin-right: 0;
    font-size:70px;
    margin-left:5px;
    margin-top:2px;
    font-family: "Oswald",sans-serif;
    font-weight: bold;
}
#topText{
  margin-top:-100px;
  font-size: 20pt;
  font-family: "Oswald",sans-serif;
  text-transform: uppercase;
  float: right;
  margin-right: 20%;
}
.rateSystem{
  margin-top:20px;
}
#countryRNum{
  margin-left:10px;
  margin-top:-20px;
  margin-bottom: 0px;
  font-size:20pt;
  font-family: "Oswald",sans-serif;
}
</style>


