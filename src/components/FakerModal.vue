<template>
  <q-modal ref="fakerModal" position="top">
    <h4>Xin chào</h4>
    <p>{{userName}}</p>
    <div>
      <img :src="avatarUrl" class="faker-avatar">
    </div>
    <div>
      <button class="primary" @click="$refs.fakerModal.close()">Đóng</button>
    </div>
  </q-modal>
</template>

<script>
  const faker = require('faker')
  export default {
    computed: {
      userName () {
        const userName = faker.internet.userName()
        this.$store.commit('setUserName', userName)
        return userName
      },
      avatarUrl () {
        const imageUrl = faker.image.imageUrl()
        this.$store.commit('setAvatarUrl', imageUrl)
        return imageUrl
      }
    }
  }
</script>

<style lang="stylus">
  .faker-avatar
    width 100%
</style>
