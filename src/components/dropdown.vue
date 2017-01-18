<script>
	import LinkMixin from '../mixins/link.vue'
	export default {
		render: function (c) {
			var self = this, 
				buttonEl, 
				dropdownMenuEl, 
				ulEl, 
				caretButtonEl,
				caretSpanEl = c('span', { staticClass: 'caret' }),
				srOnlySpanEl = c('span', { staticClass: 'sr-only' }, 'Toggle Dropdown');

			buttonEl = c('v-button', { 
				class: self.classObject,
				style: { 'border-top-right-radius': 0, 'border-bottom-right-radius': 0}
			}, self.text)

			ulEl = c('ul', {
				staticClass: 'dropdown-menu',
				class: { 'dropdown-menu-inverse': self.inverse },
				attrs: { role: 'menu' }
			}, self.$slots.default)

			var caretButtonChildEl = [], 
				dropdownChildrenEl = [];

			if (self.caret) {
				caretButtonChildEl = [caretSpanEl, srOnlySpanEl]
			} else {
				caretButtonChildEl = [self.text, caretSpanEl]
			}

			self.classObject['dropdown-toggle'] = true
			caretButtonEl = c('v-button', {
				class: self.classObject,
				attrs: {
					'type': 'button',
					'data-toggle': 'dropdown'
				}
			}, caretButtonChildEl)

			if (self.caret) {
				dropdownChildrenEl = [buttonEl, caretButtonEl, ulEl]
			} else {
				dropdownChildrenEl = [caretButtonEl, ulEl]
			}

			dropdownMenuEl = c('v-buttons', { class: { dropup: self.dropup } }, dropdownChildrenEl)
			return dropdownMenuEl

		},
		mixins: [LinkMixin],
		props: {
			caret: Boolean, // 是否开启分裂式按钮下拉菜单
			dropup:Boolean, //向上弹出式菜单
		}
	}
</script>