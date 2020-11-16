<template lang="pug">
  #roy
    .container
      .sideBar
        #showPic
          img(:src="selected")
        .optionPic
          img(v-for="item in items" :src="item.img" @click="changePic(item)")
      .sideBar
        h2 ROY
        p $850
        label Color
        select(v-model="selected")
          option(v-for="item")
        button(@click="addToCart(product)") Add To Cart
</template>

<script>
// import store from '../store.js'
export default {
  name: 'Roy',
  props: {
    product: {
      type: String,
      required: true
    }
  }
}
</script>
