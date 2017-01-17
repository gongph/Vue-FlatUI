<template>
	<div>
	<div id="fui-radio"></div>
	    	<div class="demo-row">
	    		<div class="demo-title">
	    			<h3>Radio buttons</h3>
	    		</div>
	    		<div class="demo-content">
	    			<p>
		            Using flat style checkboxes requires a JS plugin which creates all the custom markup for us. Let's take a look:
		            </p>

		            <div class="row">
		            	<div class="col-md-6">
		            		<p class="mb1">
			    				<v-form-input type="radio" name="optionRadio" id="radio1" label>Radio button</v-form-input>
			    				<v-form-input type="radio" name="optionRadio" id="radio2" label checked>Radio button</v-form-input>
			    				<v-form-input type="radio" name="optionRadio" id="radio3" label disabled>Radio button</v-form-input>
			    				<v-form-input type="radio" name="optionRadio" id="radio4" label disabled>Radio button</v-form-input>
			    			</p>
		            	</div>
		            </div>

		            <h6 class="ptl">
		            	The JS:
		            </h6>

<pre class="prettyprint">&lt;v-form-input type="radio" name="optionRadio" id="radio1" label&gt;Radio button&lt;/v-form-input&gt;
&lt;v-form-input type="radio" name="optionRadio" id="radio2" label checked&gt;Radio button&lt;/v-form-input&gt;
&lt;v-form-input type="radio" name="optionRadio" id="radio3" label disabled&gt;Radio button&lt;/v-form-input&gt;
</pre>
					<p class="pvm">
						<h6>Methods:</h6>
					</p>
					
					<p>
						Please refer to <a href="http://designmodo.github.io/Flat-UI/docs/components.html#fui-radio" target="_blank">the methods</a> provided by Flat UI
					</p>
					<div class="pvm">
						<h6>Events:</h6>
					</div>
					
					<p class="mbl">
						<strong>@change.radiocheck</strong><br/>
						Fired when the checkbox state changes between
						<span class="text-info">checked</span> and 
						<span class="text-info">unchecked</span>
					</p>
					<p class="mbl">
						<strong>@destroyed.radiocheck</strong><br/>
						Fired when radiocheck destroys itself.
					</p>

	    		</div>
	    	</div>
	    </div>
</template>

<script>
	export default {
		methods: {
			onRadioCheckChange (event) {
				alert('radiocheck change ...')
			}
		}
	}
</script>