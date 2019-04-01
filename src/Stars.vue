<template>
    <div>
        <div class="rateSystem">
            <div class="stars-outer">
                <div class="stars-inner" v-bind:style="styleObject"></div>
            </div>
        </div> 
    </div>
</template>

</<script>
export default {
    data(){
        return{
        apiData: undefined,
        rate: undefined,
        styleObject: {
            width:200,
            rates:0,
          },
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
            this.rate = response.data.star_rating;
            this.stars();
        },
        errorCallback: function (response) {
            console.log('errorCallback response: ', response);
        },
        stars: function(){
            var rating=this.rate;
            var starTotal = 10; 
            const starPercentage = (rating / starTotal) * 100;
            const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
            this.styleObject.width=starPercentageRounded;
            console.log(starPercentageRounded);
        }
    },
    beforeMount(){
      this.loadApi()
    }
  }
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

  .stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
  }
  
  .stars-outer::before {
    content: "\f006   \f006   \f006   \f006   \f006   \f006   \f006   \f006   \f006   \f006";
    font-size: 4vw;
  }
  
  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }
  
  .stars-inner::before {
    content: "\f005   \f005   \f005   \f005   \f005   \f005   \f005   \f005   \f005   \f005";
    font-size: 4vw;
    color: #f8ce0b;
  }
</style>
