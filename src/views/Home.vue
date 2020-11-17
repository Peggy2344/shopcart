<template>
      <div id="home">
        <div class="center grid">
          <h1>All Categories</h1>
          <vs-row>
            <vs-col class="card" vs-type="flex" vs-justify="center" vs-align="center" w="3" v-for="item in items" :key="item.id">
              <vs-card type="5">
                <template #title>
                  <router-link :to="{ name:'category', params: {category:item.route}}" class="goshop">GO SHOP →</router-link>
                </template>
                <template #img>
                  <img :src="item.img">
                </template>
                <template #text>
                  <p></p>
                </template>
                <template #interactions>
                  <h3 class="title">{{ item.name }}</h3>
                </template>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>
      </div>
  </template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          name: 'New Products',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/New_Products_360x.jpg?v=1524551613 360w 360h',
          id: 1,
          route: 'new-products',
          count: 16
        },
        {
          name: 'Backpacks',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Backpacks_360x.jpg?v=1524551692 360w 360h',
          id: 2,
          route: 'backpacks',
          count: 16
        },
        {
          name: 'Messenger Bags',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Messenger_Bags_360x.JPG?v=1524559166 360w 360h',
          id: 3,
          route: 'messenger-bags',
          count: 16
        },
        {
          name: 'Waist Bags',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Waist_Bags_360x.JPG?v=1548666518 360w 360h',
          id: 4,
          route: 'waist-bags',
          count: 16
        },
        {
          name: 'Wallets Clutches',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Wallets_Clutches.JPG?v=1524551319 334w 333h',
          id: 5,
          route: 'wallets-clutches',
          count: 16
        },
        {
          name: 'Specialty Bags',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Specialty_Bags_360x.jpg?v=1548666111 360w 360h',
          id: 6,
          route: 'specialty-bags',
          count: 16
        },
        {
          name: 'Totebags',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Totebags_360x.jpg?v=1524551806 360w 360h',
          id: 7,
          route: 'totebags',
          count: 16
        },
        {
          name: 'Rubber Killer Friends',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Rubber_Killer_Friends_360x.jpg?v=1548665699 360w 360h',
          id: 8,
          route: 'rubber-killer-friends',
          count: 16
        },
        {
          name: 'Accessories',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Accessories_360x.jpg?v=1565154851 360w 360h',
          id: 9,
          route: 'accessories',
          count: 16
        },
        {
          name: 'Apparel',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Apparel_360x.jpg?v=1549861732 360w 360h',
          id: 10,
          route: 'apparel',
          count: 16
        },
        {
          name: 'Footwear',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Footwear_360x.JPG?v=1524551286 360w 359h',
          id: 11,
          route: 'footwear',
          count: 16
        },
        {
          name: 'Sale',
          img: 'https://cdn.shopify.com/s/files/1/0017/8002/3359/collections/Sale_360x.jpg?v=1548666905 360w 360h',
          id: 12,
          route: 'sale',
          count: 16
        }
      ]
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#home{
  margin: 100px;
}
.vs-card-content,
h1{
  margin: 20px;
  font-family: 'Lato', sans-serif;
}
.title{
  padding: 5px;
  color: white;
  background: #4ecdc4;
}
img{
  cursor: default;
}
.vs-card-title{
  width: 100%;
  height: 100%;
}
.goshop{
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-weight: 800;
}
.goshop::after{
  content: '';
  background-color: rgb(235,236,72);
  width: 40%;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  z-index: -100;
  opacity: 0;
  transition: 0.1s ease-in;
}
.goshop:hover::after{
  opacity: 1;
  left: 0;
  right: 0;
}
.goshop:focus{
  color: rgb(222,83,42);
}
</style>
