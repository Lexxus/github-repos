import configs from 'src/configs'

describe('configs', () => {
  it('should have property "githubApiUrl"', () => {
    expect(configs).to.have.property('githubApiUrl')
  })

  it('should have property "usersUri"', () => {
    expect(configs).to.have.property('usersUri')
  })

  it('should have property "usernameRule"', () => {
    expect(configs).to.have.property('usernameRule')
  })

  it('should has property "githubApiUrl" begins with "http"', () => {
    expect(configs.githubApiUrl).to.match(/^http/)
  })
})
