<template>
	<div>
	<div id="fui-button"></div>
	    	<div class="demo-row">
	    		<div class="demo-title">
	    			<h3>Buttons</h3>
	    		</div>
	    		<div class="demo-content">
	    			<p>
		            After restyling the <a href="http://getbootstrap.com/css/#buttons">Bootstrap buttons</a>, we have decided to add a new size: <code>size</code> which will be used for the main call to action buttons on the page:
		            </p>
	    			<p class="mb1">
	    				<v-button primary size="hg" class="mrs">Hg button</v-button>
	    				<v-button primary size="lg" class="mrs">Lg button</v-button>
	    				<v-button primary size="sm" class="mrs">Sm button</v-button>
	    				<v-button primary size="xs">Xs button</v-button>
	    			</p>

<pre class="prettyprint">
&lt;v-button primary size="hg"&gt;Hg Button&lt;/v-button&gt;
&lt;v-button primary size="lg"&gt;Lg Button&lt;/v-button&gt;
&lt;v-button primary size="sm"&gt;Sm Button&lt;/v-button&gt;
&lt;v-button primary size="xs"&gt;Xs Button&lt;/v-button&gt;
</pre>

					<p class="ptl">
		            In addition, we have added <code>embossed</code> to make buttons look more realistic, but we still prefer them flat.
		            </p>
					<p class="mb1">
						<v-button primary embossed>Embossed Button</v-button>
					</p>
<pre class="prettyprint">
&lt;v-button primary embossed&gt; 
  Embossed Button 
&lt;/v-button&gt;
</pre>
					<p class="ptl">
		            In some cases buttons need to become wider. Yes, we have taken care of that as well:
		            </p>
		            <p class="mbl">
			            <v-button primary wide class="mrm">Save</v-button>
			            <v-button default wide>Cancel</button>
		            </p>
<pre class="prettyprint">
&lt;v-button default wide&gt; 
  Cancel
&lt;/v-button&gt;
</pre>
					<p class="ptl">
		            Another new thing is <code>tip</code>. Use it when you need to highlight a part of the button text:
		            </p>
		            <p class="mbl">
			            <v-button primary tip text="$300">Save</button>
		            </p>
<pre class="prettyprint">
&lt;v-button primary tip text="$300"&gt; 
  Save
&lt;/v-button&gt;
</pre>	
					<p class="ptl">
		            As usual you can set different colors:
		            </p> 
		            <p>
			            <v-button default class="mrs">Default</v-button>
			            <v-button primary class="mrs">Primary</v-button>
			            <v-button info class="mrs">Info</v-button>
			            <v-button danger class="mrs">Danger</v-button>
		            </p>  
		            <p class="mbl">
		            	<v-button success class="mrs">Success</v-button>
		            	<v-button warning class="mrs">Warning</v-button>
		            	<v-button inverse class="mrs">Inverse</v-button>
		            </p> 
<pre class="prettyprint">
&lt;v-button default&gt;Default&lt;/v-button&gt;
&lt;v-button primary&gt;Primary&lt;/v-button&gt;
&lt;v-button info&gt;Info&lt;/v-button&gt;
&lt;v-button danger&gt;Danger&lt;/v-button&gt;
&lt;v-button success&gt;Success&lt;/v-button&gt;
&lt;v-button warning&gt;Warning&lt;/v-button&gt;
&lt;v-button inverse&gt;Inverse&lt;/v-button&gt;
</pre>	        

					<p class="ptl">
						User <code>disabled</code> prop to disabled button.
					</p>
					<p class="mbl">
						<v-button primary disabled>Disabled Button</v-button>
					</p>
<pre class="prettyprint">
&lt;v-button primary disabled&gt;Disabled Button&lt;/v-button&gt;
&lt;v-button primary disabled="disabled"&gt;Disabled Button&lt;/v-button&gt;
</pre>	 
					<p class="ptl">
						User <code>active</code> prop to active button.
					</p>
					<p class="mbl">
						<v-button primary active>Active Button</v-button>
					</p>
<pre class="prettyprint">
&lt;v-button primary active&gt;Active Button&lt;/v-button&gt;
</pre>	 
					<p class="ptl">
						You can add a <code>block</code> prop to the button, you can stretch it to the width of the parent element 100%, and the button becomes a block level (block) element.
					</p>
					<p class="mbl">
						<v-button primary block>Block level button</v-button>
					</p>
<pre class="prettyprint">
&lt;v-button primary block&gt;Block level button&lt;/v-button&gt;
</pre>

					<p class="ptl">
						You can also use the <code>tag</code> prop to specify that the button component is rendered as a <code>&lt;a&gt;</code> tag
					</p>
					<p class="mbl">
						<v-button primary tag="a" href="http://www.baidu.com">Link Button</v-button>
					</p>
<pre class="prettyprint">
&lt;v-button primary tag="a" href="http://www.baidu.com"&gt;Link button&lt;/v-button&gt;
</pre>



	    		</div>
	    	</div>
	    </div>
</template>