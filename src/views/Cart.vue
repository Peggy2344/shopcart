<template>
    <div class="center examplex">
      <h1 id="h1">Your Cart</h1>
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              商品名稱
            </vs-th>
            <vs-th>
              商品圖片
            </vs-th>
            <vs-th>
              價格
            </vs-th>
            <vs-th>
              數量
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="data.id"
            v-for="(data) in cartData"
          >
            <vs-td class="item_detail">
              {{ data.name }}
              <div class="mt-2">
              <span class="item_detail" v-if="data.color">color : {{ data.color }}</span><br>
              <span class="item_detail" v-if="data.size">尺寸 : {{ data.size }}</span>
              </div>
            </vs-td>
            <vs-td>
            <img :src="data.img" :alt="data.name">
            </vs-td>
            <vs-td class="item_detail">
            {{ data.price }}
            </vs-td>
            <vs-td class="vs-table__td">
              <div class="addminus quantity">
                <button @click="delitem(data)" class="quantity_minus">-</button>
                <span class="item_detail">{{data.count}}</span>
                <button @click="additem(data)" class="quantity_add">+</button>
              </div>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
        <div class="totalAmount">
          <div class="ml-auto">金額總計 : </div>
          <div class="mx-3 item_detail">{{ amount }}</div>
        </div>
        </template>
      </vs-table>
    </div>
  </template>
<script>
export default {
  computed: {
    cartData () {
      return this.$store.state.items
    },
    amount () {
      let amount = 0
      this.cartData.forEach(item => {
        amount += item.price * item.count
      })
      return amount
    }
  },
  methods: {
    delitem (data) {
      this.$store.commit('delCount', data)
    },
    additem (data) {
      this.$store.commit('addCount', data)
    },
    removeItem (data) {
      this.$store.commit('removeItem', data)
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
img {
  width: 50px;
}
#h1{
  margin: 20px;
}
.vs-table-content{
  width: 70%;
}

.small{
  margin-left: 20px;
}
.mt-2{
  margin-top: 0.5rem;
}
.mx-3{
  margin: 0 2rem;
}
.vs-table__td{
  font-size: 1rem;
}
.ml-auto{
  margin-left: auto;
}
.totalAmount{
  display: flex;
  line-height: 100%;
}
.item_detail{
  font-family: 'Poppins', sans-serif;
}
.quantity{
  position: relative;
  display: inline-block;
  width: 60%;
  height: 36px;
  border: 1px solid #656565;
  vertical-align: middle;
  font-size: 0.5625em;
  text-align: center;
  line-height: 36px;
  }
.quantity button{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  color: #656565;
  background: none;
  border: none;
  font-family: Arial, Helvatic, sans-serif;
  text-align: center;
  font-size: 20px;
  line-height: 36px;
  z-index: 1;
  cursor: pointer;
  }
.quantity_minus{
  left: 0;
  top: 0;
  }
.quantity_add{
  right: 0;
  top: 0;
  }
</style>
