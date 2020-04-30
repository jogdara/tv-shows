import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import allShows from "../../../src/components/AllShows.vue";

describe('In allShowsWrapper Component', () => {
  let allShowsWrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    allShowsWrapper = shallowMount(allShows, {
      Vue
    });
  });

  afterEach(() => {
    allShowsWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(allShowsWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    expect(allShowsWrapper.contains('v-container-stub')).toBe(true);
  });

  it('it should test getAllShowDetails function', () => {
    allShowsWrapper.vm.getAllShowDetails();
  });

  it('it should test sortTvShow function', () => {
    const value1 = {
        rating: {
            average: 8.5
        }
        };
        const value2 = {
            rating: {
                average: 9.6
            }
            };
    const result = allShowsWrapper.vm.sortTvShow(value1,value2);
    expect(result).toEqual(1);
  });
  it('it should test sortTvShow function', () => {
    const value1 = {
        rating: {
            average: 9.6
        }
        };
        const value2 = {
            rating: {
                average: 8.5
            }
            };
    const result = allShowsWrapper.vm.sortTvShow(value1,value2);
    expect(result).toEqual(-1);
  });

});
