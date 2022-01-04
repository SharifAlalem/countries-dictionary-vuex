<template>
    <div class="Search">
        <input type="search" placeholder="Search for your country ... " v-model="SearchedWord"  />
    </div>
</template>

<script >


export default{
    data(){
        return{
            SearchedWord : ''
        }
    },
    watch:{
        SearchedWord(){
           return this.$store.commit('SET_SEARCHED',this.SearchedWord);
        }
    }
}

</script>

<style>
    .Search input[type="search"]{
        width: 100%;
        margin: 0 5px;
        height: 45px;
        background: #fff;
        padding: 2px 18px 0 0;
        border-radius: 4px;
        text-indent: 18px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        font-weight: 600;
    }

    .Search input[type="search"]::placeholder{
        font-family: 'Nunito Sans';
        font-weight: 600;
        color: #192734;
    }

    @media screen and (max-width : 426px) {
        .Search input[type="search"]{
        width: 90%;
        }
    
  }

</style>