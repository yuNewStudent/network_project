// import Axios from 'axios'

// Axios.post('http://132.232.239.97:8080/getServerIpById.action?id=1', {})
//   .then(response => {
//     console.log(response)
//   }).catch(error => {
//     this.httppath = 'http://119.4.177.220:8081/'
//     console.log(error)
//   })

const state = {
  user: {},
  isLogin: false,
  regisiterUser: [],
  // httppath: 'http://192.168.0.134:2861'
  httppath: config.httppath
}

const actions = {
  async login ({ commit }, user) {
    commit('SET_DOING_LOGIN', true)
    // 模拟登陆
    user.id = 1
    user.nickName = '管理员'
    sessionStorage.setItem('user', JSON.stringify(user))
    // var res = await new Promise((resolve, reject) => {
    //   user.id = 1
    //   user.nickName = '管理员'
    //   sessionStorage.setItem('user', JSON.stringify(user))
    //   setTimeout(() => {
    //     resolve({bool: true, user})
    //   }, 2000)
    // })
    commit('SET_LOGIN_USER', user)
    commit('SET_LOGIN_TOKEN', user.ticket)
    // return res
  },
  async getLoginUser ({ commit }) {
    // 模拟请求用户信息
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var user = sessionStorage.getItem('user')
        // console.log(JSON.parse(user))
        commit('SET_LOGIN_USER', JSON.parse(user))
        resolve({ bool: true, user })
      }, 1000)
    })
  },
  async logout ({ commit }) {
    // 模拟退出
    commit('SET_DOING_LOGIN', false)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
        commit('SET_LOGIN_USER', null)
        resolve({ bool: true })
      }, 2000)
    })
  },

  // 模拟注册用户
  async register ({ commit }, regisiterUser) {
    commit('SET_DOING_REGISTER', regisiterUser)
  }
}

const mutations = {
  sethttppath (state, obj) {
    state.httppath = obj
  },
  SET_DOING_LOGIN (state, isLogin) {
    state.isLogin = isLogin
  },
  SET_LOGIN_USER (state, user) {
    state.user = user
  },
  SET_LOGIN_TOKEN (state, token) {
    if (token) {
      sessionStorage.setItem('token', token)
    } else {
      sessionStorage.removeItem('token')
    }
  },
  SET_DOING_REGISTER (state, regisiterUser) {
    state.regisiterUser.push(regisiterUser)
  }
}

// const getters = {
//   getIp: state => {
//     var thisIp = ''
//     this.$http.post('http://132.232.239.97:8080/getServerIpById.action?id=1', {})
//       .then(response => {
//         console.log(response)
//         thisIp = response
//       })
//       .catch(error => {
//         console.log(error)
//       })
//     this.httppath = thisIp
//     return thisIp
//   }
// }

export default {
  state,
  actions,
  mutations
  // getters
}
