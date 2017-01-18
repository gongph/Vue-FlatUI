<script>
	export default {
		render: function (c) {
			var self = this, inputEl, formGroupEl, labelEl;
			var attrs = {
				type: self.type,
				name: self.name,
				placeholder: self.placeholder,
				id: self.id,
				value: self.value,
				autocomplete: self.autocomplete,
				autofocus: self.autofocus,
				checked: self.checked,
				disabled: self.disabled,
				max: self.max,
				min: self.min,
				maxlength: self.maxlength,
				minlength: self.minlength,
				step: self.step,
				multiple: self.multiple,
				readonly: self.readonly,
				required: self.required,
				style: self.style
			}
			const on = {
				focus: self.onFocus,
				blur: self.onBlur,
				change: self.onChange,
				click: self.onClick,
				input: self.onInput
			}

			// input type check
			if (self.type === 'select' || self.type === 'textarea') {
				if (self.type === 'select') {
					inputEl = c('select', { attrs, on }, self.$slots.default)
				} else {
					var textareaChildren = self.$slots.default
					if (self.value) {
						delete attrs.value
						textareaChildren = self.value
					}
					inputEl = c('textarea', { attrs, on }, textareaChildren)
				}
			} else {
				if (self.$slots.default && self.$slots.default.lengthh > 0 || !self.type) {
					inputEl = self.$slots.default
				} else {
					inputEl = c('input', { attrs, on })
				}
			}

			// checkbox or radio button
			if (self.label) {
				labelEl = c('label', {
					class: {
						[self.type]: (self.type === 'checkbox' || self.type === 'radio') ? true : false
					},
					attrs: self.id ? { for: self.id } : {},
					on: {
						'change.radiocheck': self.onRadiocheckChange,
						'destroyed.radiocheck': self.onRadiocheckDestroyed
					}
				}, [inputEl, self.$slots.default]);

			} 

			// div.form-group
			if (self.group && self.label) {
				formGroupEl = c('div', { staticClass: 'form-group' }, [labelEl]);
			}

			if (!labelEl && !formGroupEl) return inputEl
			if (labelEl && !formGroupEl) return labelEl
			if (formGroupEl) return formGroupEl
		},
		props: {
			// Inputs
			type: String,
			name: String,
			placeholder: String,
			id: String,
			value: [String, Number],
			autocomplete: String,
			autofocus: String,
			checked: Boolean,
			disabled: Boolean,
			max: [String, Number],
			min: [String, Number],
			maxlength: [String, Number],
			minlength: [String, Number],
			step: [String, Number],
			multiple: Boolean,
			readonly: Boolean,
			required: Boolean,
			style: String,

			label: Boolean,
			group: Boolean
		},
		mounted () {
			const self = this 
			if (self.type === 'checkbox' || self.type === 'radio') {
				$(':' + self.type).radiocheck()
			}
		},
		methods: (function(){
			const eventMethods = {
				onInput (event) {
					this.$emit('input', event.target.value)
				},
				onRadiocheckChange (event) {
					this.$emit('change.radiocheck', event)
				},
				onRadiocheckDestroyed (event) {
					this.$emit('destroyed.radiocheck', event)
				}
			}
			'Focus Blur Change Click'.split(' ').forEach((ev) => {
				eventMethods['on' + ev] = function (event) {
					this.$emit(ev.toLowerCase(), event)
				}
			})
			return eventMethods
		})()
	}
</script>