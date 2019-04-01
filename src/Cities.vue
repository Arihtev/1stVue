<template>
    <div>
      <div>
        <h2>TOP CITIES</h2>
        <v-layout row wrap>
            <v-flex
              xs12
              sm6
              md3
              lg3
              :key="index" v-for="(city,index) in apiData.top_cities" 
            >
              <v-card flat tile>
                <v-card-title primary-title>
                  <div>
                  <div class="cityName" v-if="apiData">
                    {{doMath(index)}}. {{city.name}}      
                <img class="share" src="assets/share.png" alt="Image error">
                </div> 
                <div id="rating">
                <img class="littleStar" src="assets/littlestar.png" alt="Image error">
                <p class="cityRating">
                    {{city.star_rating}}
                </p>
                <p class="NumberCityRatings">
                    ({{stringify(city.num_ratings)}})
                </p>
                </div>
                  </div>
                </v-card-title>
                  <v-card-media :src="city.image" height="200px">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
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
        doMath: function (index) {
            return index+1
        },
        stringify: function(input){
            var value=Number(input);
            return value.toLocaleString();
        },
    },
    beforeMount(){
      this.loadApi()
    },
    computed:{
        numrates: function(){
            return this.$data.apiData.num_ratings.toLocaleString()
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald');

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
    margin-bottom: 100px;
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
    margin-left: 20%;
    font-size: 18pt;    
    margin-bottom: 0px;
    text-transform: uppercase;
    font-family: "Oswald",sans-serif;
    width: 100%;
  }
  .share{
    float: right;
    margin-left: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
    width:30px;
  }
  #rating{
    margin-left:20%;
    width:100%;
  }
  .littleStar{
    clear: both;
    float: left;
    margin-top: 0px;
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

