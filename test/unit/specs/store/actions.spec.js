import * as types from 'src/store/mutation-types'
import githubSvc from 'src/services/github'
import actions from 'src/store/actions'

describe('Store actions', () => {
  it('should has method "getRepos"', () => {
    expect(actions).to.have.ownProperty('getRepos')
    expect(actions.getRepos).to.be.a('function')
  })

  describe('getRepos', () => {
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
      actions.getRepos({ commit }, 'me')

      expect(commit).to.have.been.calledWithMatch(types.RESET_USER, { username: 'me' })
    })

    it('should call githubSvc.getUserRepos', () => {
      actions.getRepos({ commit }, 'me')

      expect(getUserReposStub).to.have.been.calledWith('me')
    })
  })
})
