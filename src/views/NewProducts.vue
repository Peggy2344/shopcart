<template>
    <div id="newitems">
        <div class="container">
            <h3 id="h3">New Products</h3>
              <div class="flex">
                <div class="card" v-for="(product) in products" :key="product.id">
                  <router-link to="{name:'newproduct', params:{product: product.route}}">
                    <img :src="product.img" :alt="product.name">
                  </router-link>
                    <h3>{{product.name}}</h3>
                    <p>${{product.price}}</p>
                    <vs-button
                    color="#ef3e16"
                    gradient
                    size='mini'
                    @click="addToCart(product)"
                  >
                  Add to Cart
                  </vs-button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'ROY',
          route: 'roy',
          price: '850',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC00853_d604fbd4-10f0-432e-9def-ed1389831150_360x.jpg?v=1604571257',
          id: '1',
          count: 1
        },
        {
          name: 'TYVEK TOTE BAG',
          route: 'tyvek-tote-bag',
          price: '350',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC00824_360x.jpg?v=1604566934',
          id: '2',
          count: 1
        },
        {
          name: 'RK RACING SERVICE T-SHIRT',
          route: 'rk-racing-t-shirt',
          price: '850',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC00239_360x.jpg?v=1596446006',
          id: '3',
          count: 1
        },
        {
          name: 'HEAVY DUTY HEART T-SHIRT',
          route: 'heavy-duty-heart-t-shirt',
          price: '650',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC06338_360x.jpg?v=1594891860',
          id: '4',
          count: 1
        },
        {
          name: 'FELIX',
          route: 'felix',
          price: '1400',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC00605_360x.jpg?v=1549433477',
          id: '5',
          count: 1
        },
        {
          name: 'GARRET',
          route: 'garret',
          price: '1250',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC01048_360x.jpg?v=1592997368',
          id: '6',
          count: 1
        },
        {
          name: 'DUSTIN MASK',
          route: 'dustin-mask',
          price: '280',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC05071-2_faced42a-7701-4042-aff3-e7efdfec1797_360x.jpg?v=1590554139',
          id: '7',
          count: 1
        },
        {
          name: 'JOURNEY WRINKLED NYLON CAP',
          route: 'journey-wrinkled-nylon-cap',
          price: '650',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC01852_360x.jpg?v=1581415440',
          id: '8',
          count: 1
        },
        {
          name: 'DYLAN',
          route: 'dylan',
          price: '1250',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/products/DSC04925_360x.jpg?v=1574873179',
          id: '9',
          count: 1
        }
      ]
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('additems', product)
    }
  }
}
</script>
<style scoped>
#h3{
  margin: 50px;
}
.flex{
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card{
  width: 40%;
  margin: 10px;
  padding: 10px;
  box-shadow: 5px 5px 20px grey;
  border-radius: 50px;
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card img{
  width: 80%;
  border-radius: 50px;
}
</style>
