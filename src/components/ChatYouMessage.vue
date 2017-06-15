<template>
  <div>
    <div :class="who">
      <div class="chat-user">
        <img :src="avatarUrl" :title="userName">
      </div>
      <div class="chat-date">
        {{timeAgo}} seconds ago
      </div>
      <div class="chat-message">
        <p>
          {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['userName', 'avatarUrl', 'content', 'time'],
    computed: {
      timeAgo () {
        const d = new Date()
        const time = d.getTime()
        return time - this.time
      },
      who () {
        return (this.userName === this.$store.state.userName) ? 'chat-you' : 'chat-other'
      }
    }
  }
</script>

<style>
</style>
