<template>
    <div>
        <div class="cityContainer">
        <h2>TOP CITIES</h2>
            <div class="city"  :key="index" v-for="(city,index) in apiData.top_cities" >
                <div class="cityName" v-if="apiData">
                    {{doMath(index)}}. {{city.name}}      
                </div>          
                <img class="share" src="share.png" alt="Image error">
                <img class="littleStar" src="littlestar.png" alt="Image error">
                <p class="cityRating">
                    {{city.star_rating}}
                </p>
                <p class="NumberCityRatings">
                    ({{city.num_ratings}})
                </p>
                <img class="cityImage" v-bind:src="city.image" alt="Image error">
            </div>
            
        </div>
    </div>
</template>

<script>
import input from './input.vue';

export default {
    components:{
        'app-input': input
    },
    data(){
        return{
        apiData: undefined,
        rate: 7.5,
        countryRatingNumber: undefined,
        cityRatingNumber: undefined,
        styleObject: {
            width:200,
            rates:0,
          }
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
        doMath: function (index) {
            return index+1
        },    
    },
    beforeMount(){
      this.loadApi()
    }
}
</script>

<style>
* {
    box-sizing: border-box;
  }
  h2{
    font-size: 28pt;
    margin:10px;
    text-align: center;
    font-family: "Oswald",sans-serif;
    letter-spacing: 5pt;
}
  
  /* Create four equal columns that floats next to each other */
  .city {
    float: left;
    width: 25%;
    height: 200px;
    /* Should be removed. Only for demonstration */
  }
  /* Clear floats after the columns */
  .cityContainer:after {
    content: "";
    display: table;
    clear: both;
    margin-bottom: 100px;
  }  
  .cityImage {
    width:100%;
    height: 100%;
  }
  .cityName {      
    margin-top:0px;
    float: left;
    margin-left: 50px;
    font-size: 18pt;    
    margin-bottom: 0px;
    text-transform: uppercase;
    font-family: "Oswald",sans-serif;
  }
  .share{
    float: left;
    margin-left: 50px;
    margin-top: 0px;
    margin-bottom: 0px;
    width:30px;
  }
  .littleStar{
    clear: both;
    float: left;
    margin-top: 0px;
    margin-left: 50px;
    width:25px;
  }
  .cityRating{
    float: left;
    margin-left:5px;
    margin-top:2px;
    font-size:13pt;
    font-family: "Oswald",sans-serif;
    font-weight: bold;
  }
  .NumberCityRatings{
    float: left;
    margin-left:10px;
    margin-top:10px;
    font-size:8pt;
    font-family: "Oswald",sans-serif;
  }
  .citytest{
    margin-top:400px;
  }
  #mapimg{
    width: 100%;
  }
</style>

