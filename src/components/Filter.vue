<template>
    <div class="Filter cursor-point">
        <select id="Filter-Select" v-model="filterByRegion">
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
        </select>
    </div>
</template>

<script>
    export default{
        name: 'Filtersearch',
            data(){
        return{
            filterByRegion : ''
        }
    },
    watch:{
        filterByRegion(){
           return this.$store.commit('SET_FILTER',this.filterByRegion);
        }
    }
    }
</script>

<style>
    .Filter #Filter-Select{
        width: 180px;
        height: 45px;
        background: #fff;
        border-radius: 4px;
        text-indent: 15px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        font-weight: 600;
        color: #192734;
    }

    .dark #Filter-Select{
        background: hsl(209, 23%, 22%);
        color: #fff
    }
</style>