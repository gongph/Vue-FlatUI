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

<pre class="prettyprint">&lt;v-button primary size="hg"&gt;Hg Button&lt;/v-button&gt;
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
<pre class="prettyprint">&lt;v-button primary embossed&gt; 
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
<pre class="prettyprint">&lt;v-button default wide&gt; 
  Cancel
&lt;/v-button&gt;
</pre>
					<p class="ptl">
		            Another new thing is <code>tip</code>. Use it when you need to highlight a part of the button text:
		            </p>
		            <p class="mbl">
			            <v-button primary tip text="$300">Save</button>
		            </p>
<pre class="prettyprint">&lt;v-button primary tip text="$300"&gt; 
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
<pre class="prettyprint">&lt;v-button default&gt;Default&lt;/v-button&gt;
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
<pre class="prettyprint">&lt;v-button primary disabled&gt;Disabled Button&lt;/v-button&gt;
// or
&lt;v-button primary disabled="disabled"&gt;Disabled Button&lt;/v-button&gt;
</pre>	 
					<p class="ptl">
						User <code>active</code> prop to active button.
					</p>
					<p class="mbl">
						<v-button primary active>Active Button</v-button>
					</p>
<pre class="prettyprint">&lt;v-button primary active&gt;Active Button&lt;/v-button&gt;</pre>	 
					<p class="ptl">
						You can add a <code>block</code> prop to the button, you can stretch it to the width of the parent element 100%, and the button becomes a block level (block) element.
					</p>
					<p class="mbl">
						<v-button primary block>Block level button</v-button>
					</p>
<pre class="prettyprint">&lt;v-button primary block&gt;Block level button&lt;/v-button&gt;</pre>

					<p class="ptl">
						You can also use the <code>tag</code> prop to specify that the button component is rendered as a <code>&lt;a&gt;</code> tag
					</p>
					<p class="mbl">
						<v-button primary tag="a" href="http://www.baidu.com">Link Button</v-button>
					</p>
<pre class="prettyprint">&lt;v-button primary tag="a" href="/your_url"&gt;Link button&lt;/v-button&gt;</pre>

					<p class="ptl">
						Of course, in addition to the above, you can also be a <code>&lt;v-buttons&gt;</code> will be a combination of buttons, like this:
					</p>
					<p class="mbl">
						<v-buttons>
							<v-button primary>Save</v-button>
							<v-button info>Edit</v-button>
							<v-button danger>Delete</v-button>
						</v-buttons>
					</p>
<pre class="prettyprint">&lt;v-buttons&gt;
  &lt;v-button primary&gt;Save&lt;/v-button&gt;
  &lt;v-button info&gt;Edit&lt;/v-button&gt;
  &lt;v-button danger&gt;Delete&lt;/v-button&gt;
&lt;/v-buttons&gt;
</pre>
					<p>
						Using <code>vertical</code> to change the direction of the button group
					</p>
					<p class="mbl">
						<v-buttons vertical>
							<v-button primary>Save</v-button>
							<v-button info>Edit</v-button>
							<v-button danger>Delete</v-button>
						</v-buttons>
					</p>
<pre class="prettyprint">&lt;v-buttons vertical&gt;
  &lt;v-button primary&gt;Save&lt;/v-button&gt;
  &lt;v-button info&gt;Edit&lt;/v-button&gt;
  &lt;v-button danger&gt;Delete&lt;/v-button&gt;
&lt;/v-buttons&gt;
</pre>						
					<p>
						Using <code>lg</code>, <code>sm</code>, <code>xs</code> prop attributes can change the size of the button group.
					</p>
					<p class="mbl">
						<v-buttons lg>
							<v-button primary>Left</v-button>
							<v-button primary>Middle</v-button>
							<v-button primary>Right</v-button>
						</v-buttons>
					</p>
					<p class="mbl">
						<v-buttons>
							<v-button primary>Left</v-button>
							<v-button primary>Middle</v-button>
							<v-button primary>Right</v-button>
						</v-buttons>
					</p>
					<p class="mbl">
						<v-buttons sm>
							<v-button primary>Left</v-button>
							<v-button primary>Middle</v-button>
							<v-button primary>Right</v-button>
						</v-buttons>
					</p>
					<p class="mbl">
						<v-buttons xs>
							<v-button primary>Left</v-button>
							<v-button primary>Middle</v-button>
							<v-button primary>Right</v-button>
						</v-buttons>
					</p>
<pre class="prettyprint">&lt;v-buttons lg&gt;
  &lt;v-button primary&gt;Left&lt;/v-button&gt;
  &lt;v-button primary&gt;Middle&lt;/v-button&gt;
  &lt;v-button primary&gt;Right&lt;/v-button&gt;
&lt;/v-buttons&gt;
</pre>		
					<p>
						The last thing to say is the button-toolbar, it can be a combination of <code>v-buttons</code> into a <code>v-button-toolbar</code> can be made more complex components, like this:
					</p>
					<p class="mbl">
						<v-button-toolbar>
							<v-buttons>
								<v-button primary>1</v-button>
								<v-button primary>2</v-button>
								<v-button primary>3</v-button>
							</v-buttons>
							<v-buttons>
								<v-button success>4</v-button>
								<v-button success>5</v-button>
							</v-buttons>
							<v-buttons>
								<v-button default>6</v-button>
							</v-buttons>
						</v-button-toolbar>
					</p>
<pre class="prettyprint">&lt;v-button-toolbar&gt;
&lt;v-buttons&gt;
	&lt;v-button primary>1&lt;/v-button&gt;
	&lt;v-button primary>2&lt;/v-button&gt;
	&lt;v-button primary>3&lt;/v-button&gt;
&lt;/v-buttons&gt;
&lt;v-buttons&gt;
	&lt;v-button success>4&lt;/v-button&gt;
	&lt;v-button success>5&lt;/v-button&gt;
&lt;/v-buttons&gt;
&lt;v-buttons&gt;
	&lt;v-button default>6&lt;/v-button&gt;
&lt;/v-buttons&gt;
&lt;/v-button-toolbar&gt;
</pre>	

	    		</div>
	    	</div>
	    </div>
</template>