<template>
  <div id="home">
    <div class="center grid">
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
    </div>
  </div>
</template>

<script>
import productcategory from '@/123.js'
export default {
  name: 'Home',
  props: {
    category: {
      type: String,
      required: true
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
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#home{
  margin-top: 20px;
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
.flex{
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 15px;
}
.card{
  width: calc(50% - 10px);
  height: 180px;
  margin: 0 10px 10px 0;
  padding: 10px 0;
  border-radius: 50px;
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.vs-card__text{
  display: none;
}
@media (min-width: 568px) {
  #home{
    margin: 50px;
  }
  .flex{
  width: 80%;
  }
  .card{
  width: calc(25% - 12.5px);
  height: calc(25% - 12.5px);
  font-size: 0.8rem;
   margin: 0 10px 20px 0;
  }
  .vs-card__text{
  opacity: 1;
}
}
</style>
