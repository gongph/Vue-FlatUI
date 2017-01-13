<script>
	export default {
		render: function (c) {
			var self = this;
			return c('div', {
				class: self.classObject
			}, self.$slots.default)
		},
		computed: {
			classObject () {
				var self = this, co = {
					'btn-group': true
				};
				['lg', 'sm', 'xs', 'vertical', 'justified'].forEach((prop, index) => {
					if (self[prop]) co['btn-group-' + prop] = true
				})

				return co 
			}
		},
		props: {
			lg: Boolean,
			sm: Boolean,
			xs: Boolean,
			vertical: Boolean,
			justified: Boolean
		}
	}
</script>