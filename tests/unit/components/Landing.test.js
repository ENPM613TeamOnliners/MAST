import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Landing from '../components/Landing.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

const wrapper = shallowMount(Landing, {
  localVue,
});

describe('Landing.vue', () => {
  it('App component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
