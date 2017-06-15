export default {
  setUserName: (state, userName) => (state.userName = userName),
  setAvatarUrl: (state, avatarUrl) => (state.avatarUrl = avatarUrl),
  pushConversations: (state, message) => (state.conversations = [...state.conversations, message]),
  setChatServer: (state, chatServer) => (state.chatServer = chatServer),
  setSocket: (state, socket) => (state.socket = socket)
}
