import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import appHeader from "../../../src/components/appHeader.vue";
import TvShowApi from "../../../src/services/tv-maze-api";
import { routes } from '../../../src/router/index';


jest.useFakeTimers();

describe('In app-header Component', () => {
  let appHeaderWrapper;

  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    const router = new VueRouter({ routes })
    appHeaderWrapper = shallowMount(appHeader, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    expect(appHeaderWrapper.contains('v-toolbar-stub')).toBe(true);
  });

  it('it should have a <v-toolbar-title> element', () => {
    expect(appHeaderWrapper.contains('v-toolbar-title-stub')).toBe(true);
  });

  it('it should have a <v-autocomplete> element', () => {
    expect(appHeaderWrapper.contains('v-autocomplete-stub')).toBe(true);
  });

  it('it should test search in watcher', () => {
    appHeaderWrapper.vm.$options.watch.search.call(appHeaderWrapper.vm, 'x');
    expect(appHeaderWrapper.vm.isLoading).toBe(true);
  });

  it('it should test searchValue in watcher', () => {
    jest.spyOn(TvShowApi, 'showDetailsByName');
    appHeaderWrapper.vm.$options.watch.searchValue.call(appHeaderWrapper.vm, 'abc');
    expect(TvShowApi.showDetailsByName).toHaveBeenCalled();
  });

  it('it should test searchshows function', async (done) => {
    const value = 'h';
    const response = 'h';
    jest.spyOn(TvShowApi, 'getSearchResult').mockReturnValue(Promise.resolve(response));
    await appHeaderWrapper.vm.searchshows(value);
    done();
  });

  it('it should test getAllShowDetails function', async (done) => {
    const response = 'h';
    jest.spyOn(TvShowApi, 'getAllShows').mockReturnValue(Promise.resolve(response));
    await appHeaderWrapper.vm.getAllShowDetails();
    done();
  });

  it('it should test home function', async (done) => {
    await appHeaderWrapper.vm.home();
    done();
  });

  it('it should test goToDetailPage function', async (done) => {
    const value = 'h';
    const response = 'h';
    jest.spyOn(TvShowApi, 'showDetailsByName').mockReturnValue(Promise.resolve(response));
    await appHeaderWrapper.vm.goToDetailPage(value);
    done();
  });

});
