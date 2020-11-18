<template lang="pug">
  #roy
    .container
      .sideBar
        #showPic
          //- img(:src="selected")
        .optionPic
          img(v-if="productDetail.itemDetails" v-for="item in productDetail.itemDetails" :src="item.img")
          img(v-else v-for="item in productDetail.itempic" :src="item")
      .sideBar
        h2 ROY
        p $850
        label Color
        //- select(v-model="selected")
        //-   option(v-for="item")
        button(@click="addToCart(product)") Add To Cart
</template>

<script>
import store from '@/store.js'
export default {
  name: 'productdetail',
  props: {
    product: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    categoryName () {
      return store.products.find(item => item.route === this.category)
    },
    productDetail () {
      return this.categoryName.items.find(item => item.route === this.product)
    }
  }
}
</script>
