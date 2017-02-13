import Vue from 'vue'
import configs from '../configs'

export default {
  /**
   * Get a user repositories.
   *
   * @param {string} username.
   * @returns {Promise}
   */
  getUserRepos (username) {
    return Vue.http.get(`${configs.githubApiUrl}${configs.usersUri}${username}/repos`)
      .then(response => response.body)
  }
}
