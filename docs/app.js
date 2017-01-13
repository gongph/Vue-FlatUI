import Vue from 'vue'

import VueFlatUi from '../src/vue-flatui.js'

Vue.use(VueFlatUi)

new Vue({
	el: '#app',
	data: {
		msg: 'hello'
	}
})