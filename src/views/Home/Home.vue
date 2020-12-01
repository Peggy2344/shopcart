<template>
  <div id="home">
    <div class="row vh-lg-100 mb-5">
    <div class="landing col-12 row p-0">
      <div id="carouselExampleFade"
        class="carousel slide carousel-fade col-lg-7 col-md-12 col-sm-12 ml-lg-auto p-0" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0017/8002/3359/files/DSC03060_1950x.jpg?v=1550568019"
              class=" d-block w-100 h-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0017/8002/3359/files/DSC03526_1950x.jpg?v=1606367622"
              class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/0017/8002/3359/files/DSC08657_c055869c-985d-4a75-9ed8-97b041a2661e_1950x.jpg?v=1596455954"
              class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="text col-lg-5 col-md-12 col-12 w-100 d-flex justify-content-center align-items-center flex-column flex-height p-0">
        <div class="solid fontstyle animate__animated animate__fadeInDown mx-5 mb-3">YOUR TRASH, MY TREASURE</div>
        <div class="hollow fontstyle animate__animated animate__fadeInDown animate__delay mx-5 text-center">After a long journey, it's back to your hands</div>
      </div>
      <div class="shopnow mt-auto">
          <a href="#category">shop now
            <svg width="52" height="56" viewBox="0 0 52 56" fill="none" stroke="rgb(56, 82, 79)"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0622 0H22.364L22.3631 42.987L4.56991 25.1998L0 29.6536L25.7538 55.2049L51.4257 29.6531L46.8556 25.1991L29.0621 43.064L29.0622 0Z"
                fill="currentColor"></path>
            </svg></a>
        </div>
    </div>
    </div>
    <!-- <div class="center grid">
      <h1>All Categories</h1>
      <div class="flex">
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
      </div>
    </div> -->
    <section class="container">
      <h1 id="category">All Categories</h1>
      <div class="row">
        <div class="col-6 col-lg-3 mb-4 categoryCard" v-for="item in items" :key="item.id">
          <div class="img">
            <router-link class="imgLink" :to="{ name:'category', params: {category:item.route}}"></router-link>
            <img :src="item.img">
          </div>
          <div class="title">
            <h5>{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import productcategory from '@/123.js'
export default {
  name: 'Home',
  props: {
    category: {
      type: String
    }
  },
  computed: {
    items () {
      return productcategory.products
    }
  }
}
</script>
<style scoped>
@import "./style.css";
</style>
