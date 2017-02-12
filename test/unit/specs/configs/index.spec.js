import configs from 'src/configs'

describe('configs', () => {
  it('should have properties "githubApiUrl" and "usersUri"', () => {
    expect(configs).to.have.property('githubApiUrl')
    expect(configs).to.have.property('usersUri')
  })

  it('should has property "githubApiUrl" begins with "http"', () => {
    expect(configs.githubApiUrl).to.match(/^http/)
  })
})
