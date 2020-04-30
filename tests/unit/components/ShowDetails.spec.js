import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import showDetails from "../../../src/components/ShowDetails.vue";

describe('In showDetailsWrapper Component', () => {
  let showDetailsWrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    showDetailsWrapper = shallowMount(showDetails, {
      Vue
    });
  });

  afterEach(() => {
    showDetailsWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(showDetailsWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the v-container markup', () => {
    expect(showDetailsWrapper.contains('v-container-stub')).toBe(true);
  });

  it('it renders the v-card markup', () => {
    expect(showDetailsWrapper.contains('v-card-stub')).toBe(true);
  });

  it('it renders the v-chip markup', () => {
    expect(showDetailsWrapper.contains('v-chip-stub')).toBe(true);
  });

  it('it renders the v-chip markup', () => {
    showDetailsWrapper.vm.getShowDetail();
  });

});
