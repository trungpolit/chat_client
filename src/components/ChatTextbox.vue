<template>
  <div class="chat-textbox full-width">
    <input v-model="message" placeholder="Type something..." class="full-width" @keyup.enter="submit">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      submit: function (event) {
        const d = new Date()
        const time = d.getTime()
        const message = {
          userName: this.$store.state.userName,
          avatarUrl: this.$store.state.avatarUrl,
          content: event.target.value,
          time: time
        }
        this.$store.commit('pushConversations', message)
        this.message = ''
      }
    }
  }
</script>

<style lang="stylus">
  .chat-textbox
    position: fixed
    bottom: 0px
    z-index: 9
</style>
