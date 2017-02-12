import messages from 'src/messages'

describe('messages', () => {
  it('should have method "get"', () => {
    expect(messages.get).to.exist
      .and.to.be.a('function')
  })

  it('should have method "setLocale"', () => {
    expect(messages.setLocale).to.exist
      .and.to.be.a('function')
  })

  describe('get', () => {
    it('should return string value', () => {
      const value = messages.get('loading')

      expect(value).to.be.a('string')
        .and.not.empty
    })

    it('should return two different strings', () => {
      const value1 = messages.get('loading', 'en_en')
      const value2 = messages.get('loading', 'de_de')

      expect(value1).to.be.not.empty
      expect(value2).to.be.not.empty
      expect(value1).to.not.equal(value2)
    })
  })

  describe('setLocale', () => {
    it('should change locale', () => {
      const value1 = messages.get('loading')
      let value2

      messages.setLocale('de_de')
      value2 = messages.get('loading')

      expect(value1).to.be.not.empty
      expect(value2).to.be.not.empty
      expect(value1).to.not.equal(value2)
    })
  })
})
