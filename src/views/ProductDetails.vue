<template>
 <div id="roy">
   <div class="linkArea">
        <router-link to="/">Home</router-link>
          <span>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C1.46388 2.32978 2.57065 3.41102 4 3.96095V4.03905C2.57065 4.58898 1.46388 5.67009 1 7" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        <router-link :to="{name: 'category'}">{{categoryName.name}}</router-link>
          <span>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C1.46388 2.32978 2.57065 3.41102 4 3.96095V4.03905C2.57065 4.58898 1.46388 5.67009 1 7" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        <router-link :to="productDetail.route">{{productDetail.name}}</router-link>
      </div>
    <div class="containerarea flex-row">
        <div class="sideBar col-7 flex-row justify-content-center">
            <div id="showPic" class="col-12 d-flex justify-content-center">
                <img v-if="selectedPic" :src="selectedPic">
                <img v-else :src="showpic">
            </div>
            <div class="optionPic col-10">
                <div class="flex-row">
                    <img v-for="(item,index) in productDetail.itempic" :src="item" :key="item.id" @click="changePic(index)">
                </div>
            </div>
        </div>
        <div class="sideBar col-4">
            <form class="mt-5" @submit.prevent>
                <h2 class="mb-5">{{ productDetail.name }}</h2>
                <div class="d-flex flex-column align-items-start">
                  <div class="col-7 mb-5 p-0">
                    <label class="mb-1">Color</label>
                    <select v-model="selected" class="form-select">
                        <option value disabled="disabled">Choose Color</option>
                        <option v-for="detail in itemDetails" :key="detail.id">{{ detail.color }}</option>
                    </select>
                  </div>
                </div>
                <div v-if="productDetail.size" class="col-8 mb-5">
                    <label>Size</label>
                    <select v-model="size" class="form-select">
                        <option value disabled="disabled">Choose Size</option>
                        <option v-for="size in productDetail.size" :key="size">{{ size }}</option>
                    </select>
                </div>
                <div class="col-8 flex-row align-items-center mb-5 quantity">
                    <button class="quantity_minus" @click="delHandler">-</button>
                    {{ count }}
                    <button class="quantity_add" @click="count++">+</button>
                </div>
                <div class="col-12 d-flex align-items-center mb-5">
                    <h3 class="mr-5">
                        Total
                    </h3>
                    <p class="price_p">${{ productDetail.price }}</p>
                </div>
                <div class="col-8 flex-row align-items-center p-0">
                    <button class="add_to_cart_btn" @click="addtocart">Add To Cart</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import storedata from '@/123.js'
export default {
  name: 'productdetail',
  data: () => {
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
body
  background #fff
#roy
  width 100%
  margin-top 50px
.flex-row
  display flex
  flex-wrap wrap
#showPic img
  width 60%
  margin-bottom 10px
.linkArea
  margin: 50px 0 30px 50px
.linkArea a
  color:  #818181;
  margin: 0 10px 0 0;
  font-family: 'Poppins', sans-serif
.linkArea a:last-child
  color: rgb(56, 82, 79)
.linkArea a:hover
  color: rgb(56, 82, 79)
  text-decoration none
.linkArea span
  margin: 0 10px 0 0
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
  height: 36px;
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
.price_p
  margin 0
</style>
