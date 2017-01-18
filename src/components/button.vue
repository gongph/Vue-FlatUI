<script>
	import LinkMixin from '../mixins/link.vue'
	export default {
		render: function (c) {
			var textEl, buttonEl, tagName, self = this;

			if (self.text && self.tip) {
				textEl = c('span', { class: { 'btn-tip': true }}, self.text)
			}

			if (self.tag && self.tag === 'a') {
				tagName = 'a'
				self.attrsObject['href'] = self.href
				self.attrsObject['role'] = 'button'
			} else {
				tagName = 'button'
			}

			buttonEl = c(tagName, {
				staticClass: 'btn',
				class: self.classObject,
				attrs: self.attrsObject,
				on: {
					click: self.onClick
				}
			}, [this.$slots.default, textEl])

			return buttonEl
		},
		mixins: [LinkMixin],
		methods: {
			onClick (event) {
				this.$emit('click', event)
			}
		}
	}
</script>