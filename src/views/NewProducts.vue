<template>
    <div id="newitems">
            <h3 id="h3">New Products</h3>
        <div class="container">
          <div class="flex">
            <div class="card" v-for="(product) in products" :key="product.id">
              <div class="zoom" style="text-align:center">
              <router-link :to="{name:'newproduct', params:{product: product.route}}" style="text-align:center">
                <img :src="product.img" :alt="product.name">
              </router-link>
              </div>
                <h3>{{product.name}}</h3>
                <p>${{product.price}}</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import productcategory from '@/123.js'
export default {
  computed: {
    products () {
      return productcategory.products.find(item => item.route === this.category).items
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
#h3{
  margin: 50px;
  text-align: left;
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
  height: 30%;
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
  }
  .card{
  width: calc(25% - 12.5px);
  font-size: 0.8rem;
  height: 30%;
   margin: 0 10px 20px 0;
  }
}
</style>
