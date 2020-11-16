 <template>
  <div id="app">
    <div class="center examplex hidden">
      <vs-navbar fixed not-line center-collapsed v-model="active" color="rgb(235,236,72)" text-black>
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon v-if="windowWidth<500">
            <i class='bx bx-menu'></i>
          </vs-button>
          <div id="logo"></div>
        </template>
            <vs-navbar-item :active="active == 'home'" id="home">
          <router-link to="/">
                Home
          </router-link>
            </vs-navbar-item>
        <vs-navbar-item :active="active == 'products'" id="products">
          <div class="dropdown-wrapper">
            <a class="dropdown-title" href="#" @click="showList" ref="title">Products</a>
            <ul id="nav-dropdown" ref="menu" v-if="listStatus">
              <li class="dropdown-item" v-for="(list,index) in lists" :key="index">
                <router-link :to="'/'+list.route">
                {{list.name}}
                </router-link>
                </li>
            </ul>
          </div>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item>
        <template #right>
          <vs-button flat >Login</vs-button>
          <router-link to="/cart"><vs-button>My Cart</vs-button></router-link>
        </template>
      </vs-navbar>
      <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item to="/" id="home">
            Home
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-code-alt' ></i>
              </template>
              Products
            </vs-sidebar-item>
          </template>
          <vs-sidebar-item v-for="(list,index) in lists" :key="index" :to="'/'+list.route" :id="list.route">
            {{list.name}}
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          Chat
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <vs-icon icon-pack="fa-shopping-bag"></vs-icon>
            </vs-avatar>
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>
              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
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
    }
  },
  mounted () {
    document.addEventListener('click', (e) => {
      if (!this.$refs.title.contains(e.target)) {
        this.listStatus = false
      }
    })
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
* {
  box-sizing: border-box!important;
  font-family: 'Lato', sans-serif;
}
body{
  margin: 0;
  padding: 0;
}
.router-link-active{
  text-decoration: none;
}
#logo{
  height: 30px;
  width: 100px;
  background-color: rgb(222,83,42);
  margin-left: 30px;
}
.dropdown-title{
  text-decoration: none;
  color: #333;
}
.square{
  position: relative;
  overflow: auto;
  transform: translateY(44px);
}
.child{
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
  top: 30px;
}
</style>
