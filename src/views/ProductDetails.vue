<template lang="pug">
  #roy
    .container(class="flex-row")
      .sideBar(class="col-12 flex-row")
        #showPic(class="col-12")
          img(:src="showpic")
        .optionPic(class="col-12")
          div(v-if="productDetail.itemDetails")
            img(v-for="(item,index) in productDetail.itemDetails" :src="item.img" :key="index" @click="changePic(index)")
          div(v-else)
            img(v-for="(item,index) in productDetail.itempic" :src="item" :key="index" @click="changePic(index)")
      .sideBar(class="col-12")
        h2 ROY
        p $850
</template>

<script>
import store from '@/store.js'
export default {
  name: 'productdetail',
  data () {
    return {
      showIndex: '0'
    }
  },
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
    },
    showpic () {
      const index = this.showIndex
      if (this.productDetail.itemDetails) {
        return this.productDetail.itemDetails[index].img
      } else {
        return this.productDetail.itempic[index]
      }
    }
  },
  methods: {
    changePic (index) {
      this.showIndex = index
    }
  }
}
</script>
