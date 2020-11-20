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
          div(class="col-8 flex-row align-items-center mb-5")
            button(class="change_count_btn") -
            input(:value="count" class="form-select" style="display:inline-block; width:70%")
            button(class="change_count_btn") +
          div(class="col-12 flex-row align-items-center mb-5")
            h3(class="mr-5") Total
            p ${{ productDetail.price * count }}
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
    changePic (index) {
      this.selectedPic = ''
      this.showIndex = index
    },
    addtocart () {
      const item = this.itemDetails.find(item => item.color === this.selected)
      console.log(item, this.$store)
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
.change_count_btn
  width 30px
  height 30px
  background #000
  color #fff
  margin 0 5px
.add_to_cart_btn
  width 100%
  height 35px
  background #000
  color #fff
</style>
