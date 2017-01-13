import Vue from 'vue'

import VueFlatUi from '../src/vue-flatui.js'

import MainDocs from './pages/mainDocs.vue'
import ButtonDocs from './pages/buttonDocs.vue'

Vue.use(VueFlatUi)

new Vue({
	el: '#app',
	components: {
		'main-docs': MainDocs,
		'button-docs': ButtonDocs
	}
})