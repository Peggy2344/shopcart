<template>
    <div id="newitems" class="h-100">
      <div class="linkArea">
        <router-link to="/">Home</router-link>
          <span>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C1.46388 2.32978 2.57065 3.41102 4 3.96095V4.03905C2.57065 4.58898 1.46388 5.67009 1 7" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        <router-link :to="categoryName.route">{{categoryName.name}}</router-link>
      </div>
        <h3 id="h3">{{ categoryName.name }}</h3>
        <div class="h-100">
          <div class="flex">
            <div class="card" v-for="(product) in categoryName.items" :key="product.id">
              <router-link :to="{name:'newproduct', params:{product: product.route}}" style="text-align:center">
              <div class="zoom" style="text-align:center">
                <img :src="product.img" :alt="product.name">
              </div>
                <h4 class="product_details product_name">{{product.name}}</h4>
                <p class="product_details product_price">${{product.price}}</p>
              </router-link>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import productcategory from '@/123.js'
export default {
  computed: {
    categoryName () {
      return productcategory.products.find(item => item.route === this.category)
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('additems', product)
    }
  },
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
*{
  box-sizing: border-box;
}
.linkArea{
  margin: 50px 0 30px 50px;
}
.linkArea a{
  color:  #818181;
  margin: 0 10px 0 0;
  font-family: 'Poppins', sans-serif;
}
.linkArea a:last-child{
  color: rgb(56, 82, 79);
}
.linkArea a:first-child:hover{
  color: rgb(56, 82, 79);
}
.linkArea span{
  margin: 0 10px 0 0;
}
#h3{
  margin: 0 50px 30px;
  text-align: left;
}
a {
  text-decoration: none;
}
.product_details{
  color: rgb(56, 82, 79);
  font-family: 'Poppins', sans-serif;
}
.flex{
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 15px;
}
.card{
  width: calc(50% - 20px);
  height: 35%;
  /* height: 350px; */
  margin: 0 20px 20px 0;
  padding: 10px 0;
  border-radius: 50px;
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.zoom{
  margin-bottom: auto;
  width: 100%;
}
.card img{
  width: 70%;
  border-radius: 50px;
}
@media (min-width: 568px) {
  .flex{
  width: 80%;
  height: 100%;
  }
  .card{
  width: calc(33.333% - 20px);
  font-size: 0.8rem;
  height: 45%;
  margin: 0 20px 20px 0;
  }
}
</style>
