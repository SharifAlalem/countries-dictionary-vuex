import axios from 'axios'

export default {
    state : () => ({
        countriesList : [],
        Loading : true,
        searchedCountry : '',
        filterSet : ''
    })
    ,
    getters : {
        allCountries: (state) => {
            const str = JSON.stringify(state.countriesList)
            return  JSON.parse(str)
        },
        loading : (state) => {return state.Loading},
        searchedCountry : (state) => {
            return state.searchedCountry
        },
        filterSet:(state) => {return state.filterSet}
    },
    mutations : {
        SET_COUNTRIES(state,payload){
            state.countriesList = payload
        },
        SET_LOADING(state,payload){
            state.Loading = payload
        },
        SET_SEARCHED(state,payload){
            state.searchedCountry = payload
        },
        SET_FILTER(state,payload){
            state.filterSet = payload
        }
    },
    actions : {
        getCountries({commit}){
            console.log("dispaaaa")
            axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                commit('SET_COUNTRIES', response.data)
                 commit('SET_LOADING', false);
           })

        }
    }
}