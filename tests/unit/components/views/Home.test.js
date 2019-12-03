import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuetify from 'vuetify';
import Home from '@/components/views/Home.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

const wrapper = shallowMount(Home, {
  localVue,
});

describe('Home.vue', () => {
  it('App component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
