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
            </vs-td>
            <vs-td>
            <img :src="data.img" :alt="data.name">
            </vs-td>
            <vs-td>
            {{ data.price * data.count }}
            </vs-td>
            <vs-td class="vs-table__td" v-if="data.count === 1">
              <div class="addminus">
                <button @click="removeItem(data)">刪除</button>
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
      </vs-table>
    </div>
  </template>
<script>
export default {
  computed: {
    cartData () {
      return this.$store.state.items
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
  justify-content: center;
}
.addminus input{
  width: 30px;
}
</style>
