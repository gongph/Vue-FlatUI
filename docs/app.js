import Vue from 'vue'

import VueFlatUi from '../src/vue-flatui.js'

import MainDocs from './pages/mainDocs.vue'
import ButtonDocs from './pages/buttonDocs.vue'
import CheckboxDocs from './pages/checkboxDocs.vue'
import RadioDocs from './pages/radioDocs.vue'

Vue.use(VueFlatUi)

new Vue({
	el: '#app',
	components: {
		'main-docs': MainDocs,
		'button-docs': ButtonDocs,
		'checkbox-docs': CheckboxDocs,
		'radio-docs': RadioDocs
	}
})