import { createApp } from 'vue'
import { createStore } from 'vuex'
import country from '../store/modules/country'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  modules : {
    country,
  }
})

export default store
// export const state = () => ({
// id: null,
// items: [],
// coupon_id: null,
// coupon_code : null,
// coupon_discount_value : null,
// address_user_id: null,
// total_price: null,
// shipping_price: null,
// final_price: null,
// currency_code: null,
// is_allow_checkout: false
// });

// export const getters = {
// items(state) {
//     return state.items
// },
// coupon_id(state){
//     return state.coupon_id
// },
// coupon_code(state){
//     return state.coupon_code
// },

// coupon_discount_value(state){
//     return state.coupon_discount_value
// },

// count(state) {
//     console.log(state.items.length)
//     return state.items.length
// },

// empty(state) {
//     if (state.items.length === 0)
//     return true;
//     return false;
// },

// total_price(state) {
//     return state.total_price
// },

// shipping_price(state) {
//     return state.shipping_price
// },

// final_price(state) {
//     return state.final_price
// },
// currency_code(state) {
//     return state.currency_code
// },
// address_user_id(state) {
//     if (state.address_user_id) {
//     return state.address_user_id.id
//     }
//     return null;
// },
// address_name(state) {
//     if (state.address_user_id) {
//     return state.address_user_id.address_name
//     }
//     return "";
// },
// is_allow_checkout(state) {
//     return state.is_allow_checkout;
// }
// };

// export const mutations = {
// SET_ITEMS(state, items) {
//     state.items = items
// },
// SET_COUPON_ID(state,coupon_id){
//     state.coupon_id = coupon_id
// },
// SET_COUPON_CODE(state,coupon_code){
//     state.coupon_code = coupon_code
// },

// SET_COUPON_DISCOUNT_VALUE(state,coupon_discount_value){
//     state.coupon_discount_value = coupon_discount_value
// },

// SET_TOTAL_PRICE(state, total_price) {
//     state.total_price = total_price
// },

// SET_SHIPPING_PRICE(state, shipping_price) {
//     state.shipping_price = shipping_price
// },

// SET_FINAL_PRICE(state, final_price) {
//     state.final_price = final_price
// },

// SET_CURRENCY_CODE(state, currency_code) {
//     state.currency_code = currency_code
// },
// SET_ADDRESS_USER_ID(state, address_user_id) {
//     state.address_user_id = address_user_id
// },
// SET_IS_ALLOW_CHECKOUT(state, is_allow_checkout) {
//     state.is_allow_checkout = is_allow_checkout
// }
// };

// export const actions = {
// putCart({commit, state}, data) {
//     if (data) {
//     commit('SET_ITEMS', data.cart_items);
//     commit('SET_TOTAL_PRICE', data.total_price);
//     commit('SET_SHIPPING_PRICE', data.shipping_price);
//     commit('SET_COUPON_ID', data.coupon_id)
//     commit('SET_COUPON_CODE',data.coupon_code);
//     commit('SET_COUPON_DISCOUNT_VALUE',data.coupon_discount_value);
//     commit('SET_FINAL_PRICE', data.final_price);
//     commit('SET_CURRENCY_CODE', data.currency_code);
//     commit('SET_ADDRESS_USER_ID', data.address_user_id);
//     commit('SET_IS_ALLOW_CHECKOUT', false);
//     } else {
//     commit('SET_ITEMS', []);
//     commit('SET_TOTAL_PRICE', 0);
//     commit('SET_COUPON_ID', null);
//     commit('SET_COUPON_CODE',null);
//     commit('SET_COUPON_DISCOUNT_VALUE',null);
//     commit('SET_SHIPPING_PRICE', 0);
//     commit('SET_FINAL_PRICE', 0);
//     commit('SET_CURRENCY_CODE', '');
//     commit('SET_IS_ALLOW_CHECKOUT', false);
//     }
// },
// async getCart({dispatch, state}) {
//     dispatch('loader/start', null, {root: true});
//     await this.$axios.$get('cart').then((response) => {
//     dispatch('putCart', response.data);
//     dispatch('loader/finish', null, {root: true});
//     return response
//     }).catch((error) => {
//     dispatch('loader/finish', null, {root: true});
//     });
// },

// async destroy({dispatch}, productId) {
//     dispatch('loader/start', null, {root: true});
//     await this.$axios.$delete(`cart/items/${productId}`)
//     .then((response) => {
//         dispatch('putCart', response.data);
//         dispatch('loader/finish', null, {root: true});
//     }).catch((error) => {
//         dispatch('loader/finish', null, {root: true});
//     });
// },

// async add_item({dispatch}, {product_id, quantity}) {

//     dispatch('loader/start', null, {root: true});
//     await this.$axios.$post('cart/items', {
//     quantity: quantity,
//     product_id: product_id
//     }).then((response) => {

//     dispatch('putCart', response.data);
//     if(quantity === -1){
//         this.$toast.success("تم إنقاص كمية المنتج بنجاح");
//     }else{
//         this.$toast.success(response.message);
//     }

//     dispatch('loader/finish', null, {root: true});
//     }).catch((error) => {
//     this.$toast.error(error.message);
//     dispatch('loader/finish', null, {root: true});
//     });
// },
// async remove_item({dispatch}, {product_id}) {
//     dispatch('loader/start', null, {root: true});
//     await this.$axios.delete(`cart/items/${product_id}`)
//     .then((response) => {
//         console.log(response.data)
//     //dispatch('putCart', response.data);
//     this.$toast.info(response.message);
//     dispatch('loader/finish', null, {root: true});
//     }).catch((error) => {
//     dispatch('loader/finish', null, {root: true});
//     });
// },
// async add_address_shipping({dispatch}, {address_user_id}) {
//     dispatch('loader/start', null, {root: true});
//     await this.$axios.$post('cart/addAddressShippingUser', {
//     address_user_id: address_user_id
//     }).then((response) => {
//     this.$toast.success(response.message);
//     dispatch('putCart', response.data);
//     dispatch('loader/finish', null, {root: true});
//     }).catch((error) => {
//     this.$toast.error(error.message);
//     dispatch('loader/finish', null, {root: true});
//     });
// },
// async complete_to_payment({dispatch, commit}, {total_price}) {
//     dispatch('loader/start', null, {root: true});
//     await this.$axios.$get('cart/completeToPayment?total_price=' + total_price).then((response) => {
//     dispatch('putCart', response.data);
//     if (response.data) {
//         if (response.data.is_updated === 1) {
//         this.$toast.info("تم تحديث الأسعار .. يرجى مراجعة عناصر السلة قبل المتابعة");
//         dispatch('set_is_allow_checkout', {is_allow_checkout: false});
//         } else {
//         dispatch('set_is_allow_checkout', {is_allow_checkout: true});
//         }
//     }
//     dispatch('loader/finish', null, {root: true});
//     }).catch((error) => {
//     dispatch('loader/finish', null, {root: true});
//     });
// },

// set_is_allow_checkout({dispatch, commit}, {is_allow_checkout}) {
//     commit('SET_IS_ALLOW_CHECKOUT', is_allow_checkout);
// },

// };
