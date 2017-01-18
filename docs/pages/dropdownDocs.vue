<template>
	<div>
	<div id="fui-dropdown"></div>
	    	<div class="demo-row">
	    		<div class="demo-title">
	    			<h3>Dropdown</h3>
	    		</div>
	    		<div class="demo-content">
	    			<p class="mbl">
		            The same <a href="http://getbootstrap.com/components/#dropdowns">Bootstrap dropdown</a> is used as part of the <code>select</code>, <code>btn-group</code>, <code>nav-tabs</code> and eventually other components to present information as a menu.
		          	</p>

		            <p class="mb1">
		            	<v-dropdown text="Dropdown" class="mrm" default>
		            		<template v-for="(item, index) in items">
			    				<template v-if="index === 3">
			    					<v-dropdown-item divider></v-dropdown-item>
			    				</template>
			    				<v-dropdown-item :href="item.href">{{item.name}}</v-dropdown-item>
			    			</template>
		            	</v-dropdown>
			    		<v-dropdown text="Dropdown" inverse>
			    			<template v-for="(item, index) in items">
			    				<template v-if="index === 3">
			    					<v-dropdown-item divider></v-dropdown-item>
			    				</template>
			    				<v-dropdown-item>{{item.name}}</v-dropdown-item>
			    			</template>
			    		</v-dropdown>		
			    	</p>

<pre class="prettyprint lang-html">&lt;v-dropdown text="Dropdown" default&gt;
&lt;template v-for="(item, index) in items"&gt;
	&lt;template v-if="index === 3"&gt;
		&lt;v-dropdown-item divider&gt;&lt;/v-dropdown-item&gt;
	&lt;/template&gt;
	&lt;v-dropdown-item :href="item.href"&gt;{{item}}&lt;/v-dropdown-item&gt;
&lt;/template&gt;
&lt;/v-dropdown&gt;
&lt;v-dropdown text="Dropdown" inverse&gt;
&lt;template v-for="(item, index) in items"&gt;
	&lt;template v-if="index === 3"&gt;
		&lt;v-dropdown-item divider&gt;&lt;/v-dropdown-item&gt;
	&lt;/template&gt;
	&lt;v-dropdown-item&gt;{{item}}&lt;v-dropdown-item&gt;
&lt;/template&gt;
&lt;/v-dropdown&gt;
</pre>
				
				<p>
					Similarly, the split button drop-down menu also requires the same number of tags to change, but just a separate button. By <code>caret</code> settings
				</p>

				<p class="mbl">
					<v-dropdown text="Dropdown" inverse caret>
		    			<template v-for="(item, index) in items">
		    				<template v-if="index === 3">
		    					<v-dropdown-item divider></v-dropdown-item>
		    				</template>
		    				<v-dropdown-item>{{item.name}}</v-dropdown-item>
		    			</template>
		    		</v-dropdown>	
				</p>
<pre class="prettyprint lang-html">&lt;v-dropdown text="Dropdown" inverse caret&gt;
&lt;template v-for="(item, index) in items"&gt;
	&lt;template v-if="index === 3"&gt;
		&lt;v-dropdown-item divider&gt;&lt;/v-dropdown-item&gt;
	&lt;/template&gt;
	&lt;v-dropdown-item&gt;{{item}}&lt;v-dropdown-item&gt;
&lt;/template&gt;
&lt;/v-dropdown&gt;
</pre>
				<P>
					Button drop-down menu for all sizes of bootstrap button. By <code>size</code> settings
				</P>

				<p class="mbl">
					<v-dropdown text="Dropdown" primary size="sm">
		    			<template v-for="(item, index) in items">
		    				<template v-if="index === 3">
		    					<v-dropdown-item divider></v-dropdown-item>
		    				</template>
		    				<v-dropdown-item>{{item.name}}</v-dropdown-item>
		    			</template>
		    		</v-dropdown>	
				</p>
<pre class="prettyprint lang-html">&lt;!-- size: hg, lg, sm, xs --&gt;
&lt;v-dropdown text="Dropdown" primary size="sm"&gt;
&lt;template v-for="(item, index) in items"&gt;
	&lt;template v-if="index === 3"&gt;
		&lt;v-dropdown-item divider&gt;&lt;/v-dropdown-item&gt;
	&lt;/template&gt;
	&lt;v-dropdown-item&gt;{{item}}&lt;v-dropdown-item&gt;
&lt;/template&gt;
&lt;/v-dropdown&gt;
</pre>

				<p>
					Add a <code>dropup</code> prop to the parent element to enable the triggered drop-down menu to open up.
				</p>

				<p class="mbl">
					<v-dropdown text="Dropdown" primary size="sm" dropup>
		    			<template v-for="(item, index) in items">
		    				<template v-if="index === 3">
		    					<v-dropdown-item divider></v-dropdown-item>
		    				</template>
		    				<v-dropdown-item>{{item.name}}</v-dropdown-item>
		    			</template>
		    		</v-dropdown>
				</p>
<pre class="prettyprint lang-html">&lt;v-dropdown text="Dropdown" primary size="sm" dropup&gt;
&lt;template v-for="(item, index) in items"&gt;
	&lt;template v-if="index === 3"&gt;
		&lt;v-dropdown-item divider&gt;&lt;/v-dropdown-item&gt;
	&lt;/template&gt;
	&lt;v-dropdown-item&gt;{{item}}&lt;v-dropdown-item&gt;
&lt;/template&gt;
&lt;/v-dropdown&gt;
</pre>

	    		</div>
	    	</div>
	    </div>
</template>

<script>
	export default {
		data () {
			return {
				items: [
					{ href: '/a', name: 'Action' },
					{ href: '/b', name: 'Another action' },
					{ href: '/c', name: 'Something else here' },
					{ href: '/d', name: 'Separated link'}
				],
				item: '{{item.name}}'
			}
		}
	}
</script>