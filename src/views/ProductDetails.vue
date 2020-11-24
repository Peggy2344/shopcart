<template lang="pug">
  #roy
    .container(class="flex-row")
      .sideBar(class="col-7 flex-row justify-content-center")
        #showPic(class="col-12 justify-content-center")
          img(v-if="selectedPic" :src="selectedPic")
          img(v-else :src="showpic")
        .optionPic(class="col-10")
          div(class="flex-row")
            img(v-for="(item,index) in productDetail.itempic" :src="item" :key="index" @click="changePic(index)")
      .sideBar(class="col-4")
        form
          h2 {{ productDetail.name }}
          div(class="col-7 mb-5")
            label Color
            select(v-model="selected" class="form-select")
              option(value disabled="disabled") Choose Color
              option(v-for="detail in itemDetails") {{ detail.color }}
          div(v-if="productDetail.size" class="col-7 mb-5")
            label Size
            select(v-model="size" class="form-select")
              option(value disabled="disabled") Choose Size
              option(v-for="size in productDetail.size") {{ size }}
          div(class="col-8 flex-row align-items-center mb-5 quantity")
            button(class="quantity_minus" @click="delHandler") -
            //- input(:value="count" class="form-select" style="display:inline-block; width:70%")
            | {{count}}
            button(class="quantity_add" @click="addHandler") +
          div(class="col-12 flex-row align-items-center mb-5")
            h3(class="mr-5") Total
            p ${{ productDetail.price }}
          div(class="col-7 flex-row align-items-center")
            button(class="add_to_cart_btn" @click="addtocart") Add To Cart
</template>

<script>
import storedata from '@/123.js'
export default {
  name: 'productdetail',
  data () {
    return {
      showIndex: '0',
      selected: '',
      selectedPic: '',
      size: '',
      count: 1,
      active: 0
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
      return storedata.products.find(item => item.route === this.category)
    },
    productDetail () {
      return this.categoryName.items.find(item => item.route === this.product)
    },
    itemDetails () {
      return this.productDetail.itemDetails
    },
    showpic () {
      return this.productDetail.itempic[this.showIndex]
    }
  },
  methods: {
    delHandler () {
      if (this.count === 1) return
      this.count--
    },
    addHandler () {
      this.count++
    },
    changePic (index) {
      this.selectedPic = ''
      this.showIndex = index
    },
    addtocart () {
      const item = this.itemDetails.find(item => item.color === this.selected)
      if (this.productDetail.size) {
        item.size = this.size
      }
      item.count = this.count
      item.name = this.productDetail.name
      item.price = this.productDetail.price
      this.$store.commit('additems', item)
    }
  },
  watch: {
    selected (newVal, old) {
      const obj = this.productDetail.itemDetails.find(item => item.color === newVal)
      this.selectedPic = obj.img
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  font-family "PT Sans","HelveticaNeue","Helvetica Neue",sans-serif
#roy
  width 100%
  margin-top 50px
.flex-row
  display flex
  flex-wrap wrap
.col-12
  flex 0 0 100%
  max-width 100%
.col-6
  flex 0 0 50%
  max-width 50%
.col-7
  flex 0 0 58.333333%;
  max-width 58.333333%;
.col-4
  flex 0 0 33.33%
  max-width 33.33%
.col-8
  flex 0 0 66.666667%;
  max-width 66.666667%;
.col-10
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
.mb-5
  margin-bottom: 3rem
.mr-5
  margin-right 3rem
#showPic img
  width 60%
  margin-bottom 10px
.justify-content-center
  display flex
  justify-content center
.justify-content-start
  justify-content flex-start
.align-items-center
  display flex
  align-items center
.optionPic img
  width 15%
  margin 15px
.optionPic img:hover
  border 1px solid #000
  cursor pointer
.form-select
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
label
  display: inline-block;
  margin-bottom: 0.5rem;

.add_to_cart_btn
  width 100%
  line-height 50px
  background none
  height: 50px;
  padding: 0px;
  margin: 0 auto;
  text-align: center;
  display: block;
  padding: 0px 82px;
  color: #fff;
  border: 1px solid #2a2a2a;
  background-color: #2a2a2a;
  font-size: 1rem;
  letter-spacing: 0.3px;
  overflow: hidden;
  transition: background 0.35s cubic-bezier(0.65, 0.005, 0.35, 0.995),transform 0.35s cubic-bezier(0.65, 0.005, 0.35, 0.995)
.add_to_cart_btn:hover
  color #ffffff
  background #000
.quantity
  position: relative;
  display: inline-block;
  width: 60%;
  height: 36px;
  border: 1px solid #656565;
  vertical-align: middle;
  font-size: 0.5625em;
  text-align: center;
  line-height: 36px;
.quantity button
    position: absolute;
    display: block;
    width: 36px;
    height: 20px;
    color: #656565;
    background none
    border none
    font-family: Arial, Helvatic, sans-serif;
    text-align: center;
    font-size: 20px;
    line-height: 36px;
    z-index: 1;
    cursor: pointer;
.quantity_minus
  left 0
  top 0
.quantity_add
  right 0
  top 0
</style>
