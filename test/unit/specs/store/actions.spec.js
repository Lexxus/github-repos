import * as types from 'src/store/mutation-types'
import githubSvc from 'src/services/github'
import actions from 'src/store/actions'

describe('Store actions', () => {
  it('should has method "fetchRepos"', () => {
    expect(actions).to.have.ownProperty('fetchRepos')
    expect(actions.fetchRepos).to.be.a('function')
  })

  describe('fetchRepos', () => {
    const sandbox = sinon.sandbox.create()
    let getUserReposStub, commit

    before(() => {
      getUserReposStub = sandbox.stub(githubSvc, 'getUserRepos')
        .returns(Promise.resolve([]))
      commit = sandbox.spy()
    })

    afterEach(() => {
      getUserReposStub.reset()
      commit.reset()
    })

    after(() => {
      sandbox.restore()
    })

    it('should commit RESET_USER mutaion', () => {
      actions.fetchRepos({ commit }, 'me')

      expect(commit).to.have.been.calledWithMatch(types.RESET_USER, { username: 'me' })
    })

    it('should call githubSvc.getUserRepos', () => {
      actions.fetchRepos({ commit }, 'me')

      expect(getUserReposStub).to.have.been.calledWith('me')
    })
  })
})
