<template>
  <div>
    <q-layout>
      <div slot="header" class="toolbar">
        <q-toolbar-title :padding="0">
          VAA Chat
        </q-toolbar-title>
      </div>

      <!--
        Replace following "div" with
        "<router-view class="layout-view">" component
        if using subRoutes
      -->
      <div class="layout-view" ref="chatMessages">
        <div>
          <div class="layout-padding" style="max-width: 500px;">
            <div class="chat-you">
              <div class="chat-user">
                <img :src="'statics/boy-avatar.png'">
              </div>
              <div class="chat-date">
                4 minutes ago
              </div>
              <div class="chat-message">
                <p>
                  hunter2
                </p>
              </div>
            </div>
            <div class="chat-other">
              <div class="chat-user">
                <img :src="'statics/linux-avatar.png'">
              </div>
              <div class="chat-date">
                3 minutes ago
              </div>
              <div class="chat-message">
                <p>
                  *******... this is what I see. You can also write hunter2-ing my-hunter2 whunter2x.
                  People only see ******-ing my-*****...
                </p>
              </div>
            </div>

            <div v-for="conversation of conversations">
              <ChatYouMessage
                :userName="conversation.userName"
                :avatarUrl="conversation.avatarUrl"
                :content="conversation.content"
                :time="conversation.time"
              />
            </div>
          </div>
          <ChatTextbox/>
        </div>
      </div>
    </q-layout>
    <FakerModal ref="fakerModal"/>
  </div>
</template>

<script>
  import FakerModal from './FakerModal.vue'
  import ChatTextbox from './ChatTextbox.vue'
  import ChatYouMessage from './ChatYouMessage.vue'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: mapState([
      'conversations'
    ]),
    components: {
      FakerModal,
      ChatTextbox,
      ChatYouMessage
    },
    methods: {},
    mounted () {
      this.$refs.fakerModal.$refs.fakerModal.open()
    },
    updated () {
      this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight
    }
  }
</script>

<style lang="stylus">
</style>
