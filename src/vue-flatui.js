import Button from './components/button.vue'
import Buttons from './components/button-group.vue'
import ButtonToolbar from './components/button-toolbar.vue'
import FormInput from './components/form-input.vue'
import DropDown from './components/dropdown.vue'
import DropDownItem from './components/dropdown-item.vue'

export default {
	install (Vue, options) {
		// Mixins
		Vue.mixin({
			components: {
				'v-button': Button,
				'v-buttons': Buttons,
				'v-button-toolbar': ButtonToolbar,
				'v-form-input': FormInput,
				'v-dropdown': DropDown,
				'v-dropdown-item': DropDownItem
			}
		})
	}
}