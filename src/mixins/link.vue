<script>
	export default {
		props: {
			text: String,
			tag: String,
			active: Boolean,
			href: {
				type: String,
				default: '#'
			},

			block: Boolean,
			disabled: [String, Boolean],

			// buttons
			size: String, // 按钮尺寸： `hg`,`lg`,`sm`,`xs`

			wide: Boolean,
			tip: Boolean,
			embossed: Boolean,
			default: Boolean,
			primary: Boolean,
			info: Boolean,
			danger: Boolean,
			success: Boolean,
			warning: Boolean,
			inverse: Boolean

		},
		computed: {
			attrsObject () {
				var self = this, ao = {};

				if (typeof self.disabled === 'string') ao['disabled'] = self.disabled
				if (self.disabled) ao['disabled'] = self.disabled

				return ao 

			},
			classObject () {
				var self = this, co = {};

				['default','primary','info','danger','success','warning','inverse','block','wide','embossed'].forEach(function(prop, index) {
					if (self[prop]) co['btn-' + prop] = true 
				});

				if (self.size) co['btn-' + self.size] = true
			    if (self.active) co['active'] = true 

				return co 
			}
		}
	}
</script>