import { CHAT_SERVER_URL } from '../constants/api'
import axios from 'axios'

export default {
  getChatServer ({commit}) {
    // Thực hiện gọi api lấy thông tin chat server
    axios.get(CHAT_SERVER_URL).then(response => response.data).then(res => {
      if (res.error === 0) {
        commit('setChatServer', res.data.server)
        return res.data.server
      }
      else {
        console.log(res)
      }
    }).then(chatServer => {
      const socket = require('socket.io-client')(chatServer)
      commit('setSocket', socket)
      socket.on('connect', function () {
        console.log('Thực hiện kết nối socket thành công tới %s', chatServer)
      })
      socket.on('chat message', function (message) {
        commit('pushConversations', message)
      })
      socket.on('disconnect', function () {
        console.log('Thực hiện mất kết nối tới %s', chatServer)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}
