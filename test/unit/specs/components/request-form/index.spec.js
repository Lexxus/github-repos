import Vue from 'vue'
import RequestForm from 'src/components/request-form'

describe('request-form', () => {
  it('should render disabled button', () => {
    const Constructor = Vue.extend(RequestForm)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.request-form .btn-submit').disabled)
      .to.be.true
  })
})
