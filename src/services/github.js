import Vue from 'vue'
import configs from '../configs'

export default {
  getUserRepos (username) {
    return Vue.http.get(`${configs.githubApiUrl}${configs.usersUri}${username}/repos`)
      .then(response => response.body)
  }
}
