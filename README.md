---


---

<p>Version: 1.0.0 (Beta)</p>
<h1 id="treble">Treble</h1>
<p>A hook-based global state management library for React.js.  Inspired by a <a href="https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c">blog post</a> written by <a href="https://medium.com/@luke.hall">Luke Hall</a>. Treble’s goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straightforward API.</p>
<blockquote>
<p>Note: Because Treble is a hook based library it will only work with functional components.  Class based components are NOT compatible with Treble.  See React Hook’s <a href="https://reactjs.org/docs/hooks-intro.html">documentation</a>.</p>
</blockquote>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#create-treble-store">Create Treble Store</a></li>
</ul>
</li>
<li><a href="#subscribing-to-treble-store">Subscribing to Treble Store</a></li>
<li><a href="#update-treble-store">Update Treble Store</a></li>
<li><a href="#scoped-treble">Scoped Treble</a></li>
</ul>
<h2 id="getting-started">Getting Started</h2>
<p>Install Treble</p>
<pre><code>npm install treble-gsm
</code></pre>
<p>or</p>
<pre><code>yarn add treble-gsm
</code></pre>
<h3 id="create-treble-store">Create Treble Store</h3>
<p>Create a <code>_store.js</code> file in your app.  Structure the file like the example below.</p>
<pre><code>const Store = [
    {
	action:  'updateFish',
	state: { fish:  'Goldfish' }
    },
    {
	    action: 'updatePokemon',
	    state: { pokemon: 'Magikarp' }
    }
]

export default Store;
</code></pre>
<p>Import <code>Treble</code> component and <code>_store.js</code> into App.js or index.js and wrap it around your components. Pass the <code>Store</code> into the <code>Treble</code> <code>store</code> prop. Your app now has global state management!</p>
<pre><code>import  React  from  'react';
import  Treble  from  'treble-gsm';
import  Store  from  './_store';

const App = () =&gt; {
    return (
		    &lt;Treble store={Store}&gt;
				{ //components... }
		    &lt;/Treble&gt;
	    );
    }

export  default  App;
</code></pre>
<h2 id="subscribing-to-treble-store">Subscribing to Treble Store</h2>
<p>Treble has a simple way of subscribing to the treble store. Import the useTreble hook.</p>
<pre><code>import { useTreble } from 'treble-gsm';
</code></pre>
<p>Assign the useTreble hook to a destructured array to get access to store variables.</p>
<pre><code>const [{ fish, pokemon }] = useTreble();
</code></pre>
<p>You can now use each store variable in your component.</p>
<pre><code>&lt;p&gt;{ pokemon } looks like a { fish }&lt;/p&gt;
</code></pre>
<h2 id="update-treble-store">Update Treble Store</h2>
<p>To update the Treble Store you need to import the <code>updateStore()</code> function.</p>
<pre><code>import { updateStore } from 'treble-gsm';
</code></pre>
<p>The updateStore function takes three parameters.</p>
<pre><code>updateStore( action, value, dispatch );
</code></pre>
<p>The <code>action</code> parameter will take a string that should match the store action you are wanting to update.</p>
<p>The <code>value</code> parameter will take a string, object, array, or boolean value for the new value that will replace the specific store variable.</p>
<p>The third parameter will take a <code>dispatch</code> function from the <code>useTreble</code> hook.</p>
<pre><code>const [{ fish, pokemon }, dispatch] = useTreble();

updateStore(  'updateFish', 'Salmon', dispatch );
</code></pre>
<p>When the updateStore function is called with the appropriate parameters it will update the store.</p>
<p>And tada your app now has global state and it is easily managed.  Happy Coding!</p>
<h2 id="scoped-treble">Scoped Treble</h2>
<p>There might be some use cases when a scoped <code>Treble</code> component would be more desired for state management.  Examples being ui components that have a lot of nested or children components.  Instead of including all of the component’s state in the global app state you can scope a <code>Treble</code> component to that specific component. Only that component and its children will have access to this scoped global state.</p>
<p>First create a <code>_store.js</code> in the desired component.</p>
<pre><code>//_store.js

const  Store = [
    { 
	    action:  'updateGame',
	    state: { game:  'Switch' }
    }
]

export default Store;
</code></pre>
<p>Now import the <code>useTreble</code> and <code>useScopedTreble</code> hooks.</p>
<pre><code>import {useTreble, useScopedTreble} from 'treble-gsm';
</code></pre>
<p>Assign the <code>useScopedTreble</code> hook to a variable.</p>
<pre><code>const scopedContext = useScopedTreble();
</code></pre>
<p>We will now create a custom hook.  Assign the useTreble hook to a new hook variable. Pass the <code>scopedContext</code> variable to the <code>useTreble</code> hook.</p>
<pre><code>const  useScopedTreble = () =&gt; useTreble(scopedContext);
</code></pre>
<p>Example code below:</p>
<pre><code>//_store.js

import {useTreble, useScopedTreble} from 'treble-gsm';

const  Store = [
    { 
	    action:  'updateGame',
	    state: { game:  'Switch' }
    }
]

const scopedContext = useScopedTreble();
const useScopedTreble = () =&gt; useTreble(scopedContext);

export { scopedCompContext, useScopedTreble }
export default Store;
</code></pre>
<p>Now import <code>Treble</code> and <code>Store</code> into your component. Assign the <code>Store</code> to the <code>store</code> prop on the <code>Treble</code> component.</p>
<pre><code>import React from 'react';
import Treble from 'treble-gsm';
import Store from './_store.js';

function ScopedComp(){
    return(
    &lt;&gt;
	    &lt;Treble store={Store}&gt;
		    {...children}
	    &lt;/Treble&gt;
    &lt;/&gt;
    )
}
export default ScopedComp;
</code></pre>
<p>To scope this <code>Treble</code> component we now need to import the <code>scopedContext</code> variable and pass it to a second <code>Treble</code> prop called <code>scope</code>.</p>
<pre><code>import React from 'react';
import Treble from 'treble-gsm';
import Store, {scopedCompContext} from './_store.js';

function ScopedComp(){
    return(
    &lt;&gt;
	    &lt;Treble store={Store} scope={scopedCompContext}&gt;
		    {...children}
	    &lt;/Treble&gt;
    &lt;/&gt;
    )
}
export default ScopedComp;
</code></pre>
<p>Your component now has scoped global state!</p>

