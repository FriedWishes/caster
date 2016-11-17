import Vue from 'vue'
import Cast from '../../../web/static/js/components/Cast.vue'

describe('Downloaded Cast', () => {
  var vm;
  var testComponent;

  beforeEach(() => {
    vm = new Vue({
      data: { cast: {title: 'testName', id: 1,  state: 'downloaded'} },
      template: '<div><cast v-ref:test-component :cast="cast"></cast></div>',
      components: { Cast }
    }).$mount();

    testComponent = vm.$refs.testComponent;
  })

  afterEach(() =>
    vm = null
  )

  it('should link to viewing the video', () => {
    expect(vm.$el.querySelector('a[href="/casts/1"]')).toBeTruthy()
  });

  it('should have button to toggle interesting', () => {
    expect(vm.$el.querySelector('span[class="glyphicon interesting glyphicon-star-empty"]')).toBeTruthy()
  });
});
