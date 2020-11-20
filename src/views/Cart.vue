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
            <vs-td>
              {{ data.name }}
              <div class="mt-2">
              <span v-if="data.color">color : {{ data.color }}</span><br>
              <span v-if="data.size">尺寸 : {{ data.size }}</span>
              </div>
            </vs-td>
            <vs-td>
            <img :src="data.img" :alt="data.name">
            </vs-td>
            <vs-td>
            {{ data.price }}
            </vs-td>
            <vs-td class="vs-table__td" v-if="data.count === 1">
              <div class="addminus">
                <input type="text" v-model="data.count">
                <button @click="additem(data)">+</button>
                <button class="ml-auto" @click="removeItem(data)">刪除</button>
              </div>
            </vs-td>
            <vs-td class="vs-table__td" v-else>
              <div class="addminus">
                <button @click="delitem(data)">-</button>
                <input type="text" v-model="data.count">
                <button @click="additem(data)">+</button>
              </div>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
        <div class="totalAmount">
          <div class="ml-auto">金額總計 : </div>
          <div class="mx-3">{{ amount }}</div>
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
.addminus{
  display: flex;
}
.addminus input{
  width: 30px;
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
</style>
