<template>
  <div id="app" class="vh-100">
    <nav class="navbar navbar-expand-lg">
    <nav id="btn-hamburger" class="col-2" data-toggle="collapse" data-target="#navbarSupportedContent" @click="togglenav" flat v-if="windowWidth < 996">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </nav>
    <div class="collapse navbar-collapse col-3" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/" class="navbar-brand col-6 text-center">
      <span class="fontstyle">RUBBER KILLER</span>
    </router-link>
    <form class="form-inline my-2 my-lg col-3 d-flex justify-content-end">
        <a class="mr-lg-3 form-link" href="#">Login</a>
        <router-link to="/cart" class="mx-lg-3 form-link">Cart</router-link>
    </form>
  </nav>
  <hr>
    <div class="square">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
export default {
  data: () => {
    return {
      active: 'home',
      listStatus: false,
      lists: [
        {
          name: 'New Products',
          route: 'new-products'
        },
        {
          name: 'Backpacks',
          route: 'backpacks'
        },
        {
          name: 'Messenger Bags',
          route: 'messenger-bags'
        },
        {
          name: 'Waist Bags',
          route: 'waist-bags'
        },
        {
          name: 'Wallets Clutches',
          route: 'wallets-clutches'
        },
        {
          name: 'Specialty Bags',
          route: 'specialty-bags'
        },
        {
          name: 'Totebags',
          route: 'totebags'
        },
        {
          name: 'Rubber Killer Friends',
          route: 'rubber-killer-friends'
        },
        {
          name: 'Accessories',
          route: 'accessories'
        },
        {
          name: 'Apparel',
          route: 'apparel'
        },
        {
          name: 'Footwear',
          route: 'footwear'
        },
        {
          name: 'Sale',
          route: 'sale'
        }
      ],
      windowWidth: window.innerWidth,
      activeSidebar: false
    }
  },
  methods: {
    showList () {
      this.listStatus = !this.listStatus
    },
    togglenav () {
      const btn = document.getElementById('btn-hamburger')
      this.activeSidebar = !this.activeSidebar
      if (this.activeSidebar) btn.classList.add('close')
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  watch: {
    activeSidebar (val) {
      const btn = document.getElementById('btn-hamburger')
      if (!val) {
        btn.classList.remove('close')
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  box-sizing: border-box!important;
  font-family: 'Anton','Lato', sans-serif;
  scroll-behavior:smooth;
}
body{
  margin: 0;
  padding: 0;
  scroll-behavior:smooth;
}
.router-link-active{
  text-decoration: none;
}
/* #logo{
  height: 30px;
  width: 100px;
  background-color: rgb(222,83,42);
  margin-left: 30px;
}
.dropdown-title{
  text-decoration: none;
  color: #333;
} */
.square{
  position: relative;
  /* overflow: auto; */
}
/* .child{
  height: 400px;
  width: 100%;
}
.active>a{
  color: #2a9d8f;
}
.active .dropdown-wrapper>a {
  color: #2a9d8f;
}
li a {
  color: #333;
  text-decoration: none;
}
#nav-dropdown{
  display: block;
  position: absolute;
  top: calc(100%-40px);
  transform: translateX(-10%);
  transition: 0.25s ease-in;
  background: #fff;
  padding: 5px 20px;
  border: 1px solid #e8e9eb;
  opacity: 1;
}
.dropdown-item{
  list-style: none;
  text-align: left;
  margin: 15px auto;
  position: relative;
}
.dropdown-item::after{
  content: '';
  background-color: rgba(222,83,42,0.8);
  width: 50%;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  z-index: -100;
  opacity: 0;
  transition: 0.1s ease-in;
}
.dropdown-item:hover::after{
  opacity: 1;
  left: 0;
  right: 0;
}
.vs-sidebar-content.open.absolute{
  top: 44px;
}
.vs-navbar{
  height: 60px;
}
#btn-hamburger{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 20px;
    width: 30px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease-in-out;
    pointer-events: visible;
}
.line {
    width: 100%;
    min-height: 2px;
    height: 2px;
    max-height: 2px;
    background: #fff;
    transition: all .3s ease-in-out;
}
.line {
    transform-origin: right;
    transform: rotate(0deg);
}
.line:nth-of-type(3) {
    transform-origin: right;
    transform: rotate(0deg);
}
span{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
}
/* #btn-hamburger.close .line:first-of-type {
    transform: translateX(-.5rem)     rotate(-45deg);
  transform-origin: right;
}
#btn-hamburger.close .line:nth-of-type(2) {
    transform: translateX(110%);
}
#btn-hamburger.close .line:nth-of-type(3) {
    transform: translateX(-.5rem) rotate(45deg);
  transform-origin: right;
} */
body {
      margin: 0;
      /* background-color: #D9E1CC; */
      overflow-x: hidden;
      height: 100vh;
    }

hr {
  background-color: rgb(56, 82, 79);
  margin: 0;
}

.navbar {
  background-color: #D9E1CC;
  font-family: 'Poppins', sans-serif;
}

.navbar-nav li {
  margin: 0 20px;
}
.nav-link {
  color: rgb(56, 82, 79);
  font-family: 'Poppins', sans-serif;
}
.form-link {
  font-family: 'Poppins', sans-serif;
  color: rgb(56, 82, 79);
}
.fontstyle {
  color: rgb(56, 82, 79);
  font-family: 'Anton', sans-serif;
}
.navbar-brand{
  transform: translateX(16px);
  font-size: 2rem;
}
#btn-hamburger{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 20px;
    width: 30px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease-in-out;
    pointer-events: visible;
}
.line {
    width: 30px;
    min-height: 2px;
    height: 2px;
    max-height: 2px;
    background: #fff;
    transition: all .3s ease-in-out;
}
.line {
    transform-origin: right;
    transform: rotate(0deg);
}
.line:nth-of-type(3) {
    transform-origin: right;
    transform: rotate(0deg);
}
span{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
}
#btn-hamburger.close .line:first-of-type {
    transform: translateX(-.5rem)     rotate(-45deg);
  transform-origin: right;
}
#btn-hamburger.close .line:nth-of-type(2) {
    opacity: 0;
}
#btn-hamburger.close .line:nth-of-type(3) {
    transform: translateX(-.5rem) rotate(45deg);
  transform-origin: right;
}
</style>
