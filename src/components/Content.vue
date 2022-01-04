<template>
  <div class="Content">
    <div class="Content-sf">
      <Search/>
      <Filtersearch/>
    </div>
    <Countries/>
  </div>
</template>

<script>
  import Search from './Search.vue';
  import Filtersearch from './Filter.vue';
  import Countries from './Countries.vue';
  export default{
    name: 'Content',
    components:{
      Search,
      Filtersearch,
      Countries
    }
  }
</script>

<style>
  .Content{
    padding: 25px 30px;
    background: #f5f5f5;
    height: 88vh;
  }

  .Content-sf{
    display: flex;
    justify-content: space-between;
  }

    @media screen and (max-width : 768px) {
    .Content-sf{
    display: flex;
    justify-content: center;
  }
    
  }
</style>