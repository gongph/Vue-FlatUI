import Button from './components/button.vue'
import Buttons from './components/button-group.vue'

export default {
	install (Vue, options) {
		// Mixins
		Vue.mixin({
			components: {
				'v-button': Button,
				'v-buttons': Buttons
			}
		})
	}
}