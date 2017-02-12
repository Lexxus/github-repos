import Vue from 'vue'
import VueResource from 'vue-resource'
import configs from 'src/configs'
import github from 'src/services/github'

Vue.use(VueResource)

describe('GitHub service', () => {
  it('should has method "getUserRepos"', () => {
    expect(github).to.have.ownProperty('getUserRepos')
    expect(github.getUserRepos).to.be.a('function')
  })

  describe('getUserRepos', () => {
    const sandbox = sinon.sandbox.create()
    const response = {
      body: 'yo!'
    }
    let httpGetStub

    before(() => {
      httpGetStub = sandbox.stub(Vue.http, 'get').returns(Promise.resolve(response))
    })

    afterEach(() => {
      httpGetStub.reset()
    })

    after(() => {
      sandbox.restore()
    })

    it('should calls Vue.http.get with URL', () => {
      const username = 'me'
      const url = `${configs.githubApiUrl}${configs.usersUri}${username}/repos`

      github.getUserRepos(username)

      expect(httpGetStub).to.have.been.calledWith(url)
    })

    it('should resolve with "yo!" text', () => {
      return github.getUserRepos('me')
      .then((value) => {
        expect(value).to.equal(response.body)
      })
    })
  })
})
