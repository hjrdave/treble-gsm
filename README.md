---


---

<p>Version: 1.0</p>
<h1 id="treblegsm">TrebleGSM</h1>
<p>A hook-based global state management library for React.js.  Inspired by a <a href="https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c">blog post</a> written by <a href="https://medium.com/@luke.hall">Luke Hall</a>. TrebleGSM’s goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straightforward API.</p>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#create-treble-store">Create Treble Store</a></li>
</ul>
</li>
<li><a href="#access-treble-store">Access Treble Store</a></li>
<li><a href="#update-treble-store">Update Treble Store</a></li>
</ul>
<h2 id="getting-started">Getting Started</h2>
<p>Install TrebleGSM</p>
<pre><code>npm install treble-gsm
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
<h2 id="accessing-treble-store">Accessing Treble Store</h2>
<p>TrebleGSM has a simple way of accessing state variables from the treble store. Import the useTreble hook.</p>
<pre><code>import { useTreble } from 'treble-gsm';
</code></pre>
<p>Assign the useTreble hook to a destructured variable.</p>
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
<p>The third parameter will take a <code>dispatch</code> function from the <code>useTreble</code> variable.</p>
<pre><code>const [{ fish, pokemon }, dispatch] = useTreble();

updateStore(  'updateFish', 'Salmon', dispatch );
</code></pre>
<p>When the updateStore function is called with the appropriate parameters it will update the store.</p>
<p>And tada your app now has global state and you know how to manage it.  Happy Coding!</p>

