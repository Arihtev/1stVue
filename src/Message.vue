<template>
    <div>
        <h1>This is a great message! {{ $data.apiData.name }} </h1>
        <p>{{$data.rate}}</p>
        <p>{{doMath($data.rate)}}</p>
        <app-input></app-input>
        <button v-on:click='loadApi'>Load</button>
        <p class="cityRating" :key="index" v-for="(city,index) in $data.apiData.top_cities">
           {{ index }} {{city.name}}
        </p>
    </div>
</template>

<script>
import input from './input.vue';

export default {
    components:{
        'app-input': input,
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

</style>
