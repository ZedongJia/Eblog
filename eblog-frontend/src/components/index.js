/* eslint-disable vue/multi-word-component-names */
import Card from './card/cIndex.vue'
import Search from './search/sIndex.vue'
export default (app) => {
  app.component('Card', Card)
  app.component('Search', Search)
}
