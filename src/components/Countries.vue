<template>
 <div class="bg-dark" v-if="showDetailed"></div>
  <div class="Countries">
    <!-- LOADING -->
    <div class="loading" v-if="Loading"><p>LOADING</p></div>
    
     <!-- LISTING UNFILTERED COUNTRIES -->
    <div class="country" v-else-if="newCountries.length === 0" v-for="(country,index) in MyCountries" :key="index"> 
        <p @click="getDetails(country.name.common)">{{country.name.common}}</p>
      </div>

     <!-- LISTING FILTERED COUNTRIES -->
       <div class="country" v-else v-for="(country) in newCountries" :key="country.id"> 
        <p @click="getDetails(country.name.common)">{{country.name.common}}</p>
      </div>
     
      <div class="CountryDetailsDialog" :class="{ opacityGone: showDetailed }">
            <button @click="closeDialog" class="close-btn">CLOSE</button>
            <h1>Country Details</h1>
            <p><label>Common Name : </label> {{DetailedCountry.name_common}}</p>
            <p><label>Official Name : </label> {{DetailedCountry.name_official}}</p>
            <p><label>Capital  : </label> {{DetailedCountry.capital}}</p>
            <p><label>Region: </label> {{DetailedCountry.region}}</p>
            <p><label>Population: </label> {{DetailedCountry.population}}</p>
            <p><label>Timezones: </label> {{DetailedCountry.timezones}}</p>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      DetailedCountry : {
        name_common : '',
        name_official : '',
        capital : '',
        region :'',
        population : 0,
        timezones : ''
      },
      showDetailed : false,
      newCountries : []
    }
  },
  computed: {
      MyCountries() {
        return this.$store.getters.allCountries 
        },
        Loading(){
          return this.$store.getters.loading
        },
        searchedCountry(){
          return this.$store.getters.searchedCountry
        },
        filterFrom(){
          return this.$store.getters.filterSet
      }
    },
    watch:{
      searchedCountry(newValue)
      {
         this.newCountries = this.MyCountries.filter(country => {
         return (country.name.common.toLowerCase().includes(newValue.toLowerCase()))
      })
      },
      filterFrom(newValue){
           this.newCountries = this.MyCountries.filter(country => {
         return (country.region.toLowerCase().includes(newValue.toLowerCase()))
      })
      }
    },
      created(){
        this.$store.dispatch("getCountries");  
      },
    methods :{
        getDetails(name){
              axios.get('https://restcountries.com/v3.1/name/'+name)
            .then(response => {
                this.showDetailed =true;
                this.DetailedCountry.name_common = response.data[0].name.common;
                this.DetailedCountry.name_official = response.data[0].name.official;
                this.DetailedCountry.capital = response.data[0].capital[0];
                this.DetailedCountry.region = response.data[0].region;
                this.DetailedCountry.population = response.data[0].population;
                this.DetailedCountry.timezones = response.data[0].timezones[0];
           })
        },
        closeDialog(){
          this.showDetailed = false;
        }
    }
  
}
  
</script>

<style>
  .Countries{
  background: rgb(93 93 93);
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 25px;
    border-radius: 10px;
  }

  .country{
    margin : 10px;
    padding: 10px;
    background-color: white;
  }

  .country:hover{
    cursor: pointer;
    border : 4px solid black;
    transform: scale(1.1);
  }

  .loading{
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 50px;
  }

  .CountryDetailsDialog{
    top: 0%;
    opacity: 0;
    transform: translate(0, 30%);
    position: fixed;
    align-self: center;
    background-color: white;
    color: black;
    width: 90%;
    height: 60%;
    padding: 50px;
    transition: opacity 0.5s ease-in;
    
    z-index: -1;

  }

  .opacityGone{
    opacity: 1;
    z-index: 1;
  }

  .close-btn{
    cursor: pointer;
    float:right; padding:20px; border-radius:10px; margin: 20px;
  }

  .bg-dark{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:rgba(0,0,0,0.6) ;
    left: 0;
    top: 0;
  }
</style>
