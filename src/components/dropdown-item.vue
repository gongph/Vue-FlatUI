<script>
	export default {
		render: function (c) {
			var self = this, linkEl, itemEl;
			linkEl = c('a', {
				attrs: {
					href: self.href,
					target: self.target
				}
			}, self.$slots.default)

			if (self.divider) {
				itemEl = c('li', { staticClass: 'divider' })
			} else {
				itemEl = c('li', {}, [linkEl])
			}
			return itemEl
		},
		props: {
			href: {
				type: String,
				default: '#'
			},
			target: String,
			divider: Boolean
		}
	}
</script>