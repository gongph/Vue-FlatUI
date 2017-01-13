import Button from './components/button.vue'

export default {
	install (Vue, options) {
		// Mixins
		Vue.mixin({
			components: {
				'v-button': Button
			}
		})
	}
}