Version: 1.1.0 Docs

## Treble

Treble is a Hook-based global state management container and library for React.js apps. It is inspired by a [blog post](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) by [Luke Hall](https://medium.com/@luke.hall).  Treble's goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straight forward API.

>Treble is a Hook-based library.  Only functional components are supported.  Class components are NOT supported! See React Hook's [documentation](https://reactjs.org/docs/hooks-intro.html).

### Table of Contents

- [Getting Started](#getting-started)
    - [Create Treble Store](#create-treble-store)
    - [Table Container Component](#treble-container-component)
    - [Subscribing to the Treble Store](#subscribing-to-the-treble-store)
    - [Updating the Treble Store](#updating-the-treble-store)
- [Advanced Features](#advanced-features)
    - [Scoped Treble](#scoped-treble)
    - [History Object](#history-object)
    - [Persist State](#persist-state)


### Getting Started

Install Treble

```
npm install treble-gsm
```
or
```
yarn add treble-gsm
```

#### Create Treble Store
Create a `Store.js` file in your app.  Example below.

```javascript
import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    },
    {
        action: 'updatePokemonGame',
        state: { pokemonGame: 'Pokemon Red' }
    }
],//optional parameters);

export default Store;
```

#### Treble Container Component

Import the `Treble` container component and `Store.js` into your App.js or index.js and wrap it around the components you wish to have access to your store. Pass the `Store` into the `Treble` `store` prop. Your app now has global state management!

```javascript
import  React  from  'react';
import  Treble  from  'treble-gsm';
import  Store  from  './_store';

const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}

export  default  App;
```

#### Subscribing to the Treble Store

Treble has a simple way of subscribing to the treble store via the `useTreble` hook.

```javascript
import { useTreble } from 'treble-gsm';
```

>Hooks MUST be called inside functional components. For more information read [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html). 

Assign `useTreble` to a destructured array to get access to store variables.

```javascript
const [{ pokemon, pokemonGame }] = useTreble();
```

You can now use each store variable in your component.

```html
<p>{ pokemon } can be found in { pokemonGame }</p>

<!-- Mewtwo can be found in Pokemon Red -->
```

#### Updating the Treble Store

To update the Treble Store you need to import the `updateStore()` function.

```javascript
import { updateStore } from 'treble-gsm';
```
The `updateStore` function takes three parameters.

```javascript
updateStore(action, value, dispatch);
```
***action*** - Takes a string value that matches the `Store: [{ action: string }]` value. This tells Treble which value you are wanting to update.

***value*** - Takes a string, object, array, or boolean value.  This value will replace the current `Store: [{ state: any }]` value.

***dispatch*** - Takes a `dispatch` function from the `useTreble` hook.

```javascript
const [{ pokemon, pokemonGame }, dispatch] = useTreble();

updateStore('updatePokemon', 'Pikachu', dispatch);
```

The `dispatch` function connects `updateStore()` to the `Store`.

When the `updateStore()` function is called with the appropriate parameters it will update the `Store`.

And tada your app now has global state management and it is easily managed. Happy Coding!

### Advanced Features
The goal of Treble is to provide a quick and easy setup and a simple way to maintain global state. That being said there are some advanced features and options that can be utilized.

#### Scoped Treble
There might be some use cases when a component, example being a complicated UI piece, might benefit from its own scoped global state.  Treble makes it easy to scope a seperate global state that is only known by that component. The steps are similar to setting up a normal Treble with a couple added steps.

##### Create Treble Store #####
Create a `Store.js` file in the desired component folder structure. Example below.

```javascript
//scoped store

import { createStore } from 'treble-gsm';

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: //scoped context
    }
});

export default Store;
```
##### Create Scoped Context #####

Treble uses React's native [Context API](https://reactjs.org/docs/context.html) to manage global state under the hood. This means each instance of the Treble container has to utilize a unique instance of React Context. When no custom Context is passed to Treble it utilizes its default Context instance.  Scoped Treble components need a custom Context to work correctly.

You can create a scoped Context for the new `Store.js` by imported the `useScopedTreble` hook. Example below.

```javascript
import { useScopedTreble } from 'treble-gsm';
```

In your `Store.js` file assign `useScopedTreble` to a variable.

```javascript
const scopedContext = useScopedTreble();
```

Pass the `scopedContext` variable to the `Store` component's `options` parameter.

```javascript
//scoped store

import { createStore, useScopedTreble } from 'treble-gsm';

const scopedContext = useScopedTreble();

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: scopedContext
    }
});

export default Store; 
```

The new `Store.js` is now set up as a scoped Store.

##### Create Custom Treble Hook #####

Now that a scoped Store is set up a custom Treble hook must be created.  This hook will only subscribe to this scoped Store.

Import `useTreble` hook into your new scoped `Store.js`.

```javascript
import { useTreble } from 'treble-gsm';
```

Assign `useTreble` to a new custom hook variable and pass the `scopedContext` variable to it.

```javascript
const useNewTreble = () => useTreble(scopedContext);
```

>You can call the new hook variable anything you want, BUT it must start with *use*. See [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

You will then need to export the custom Hook from your `Store.js` file so it is accessible to the rest of the component. Final `Store.js` should look like below.

```javascript
//scoped store

import { createStore, useScopedTreble } from 'treble-gsm';

const scopedContext = useScopedTreble();
const useNewTreble = () => useTreble(scopedContext);

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: scopedContext
    }
});

export { useNewTreble };
export default Store; 
```

##### Wrap Components with Treble Container #####

This step is the same as setting up a normal Treble container.  The only difference is the scoped `Store` component will be passed to the `Treble` component's `store` prop.  To set up the Treble container [read here](#treble-container-component).

##### Subscribe to Scoped Treble

This is the same as subscribing to the main `Store.js`. The difference is you will call the custom hook `useNewTreble` instead of the default `useTreble` hook. To subscribe to the Treble Store [read here](#subscribing-to-the-treble-store).

##### Subscribing to Multiple Treble Stores in a Component.
If your component is utilizing a scoped Treble there still might be a case where you also want to utilize the App Store state. This can be done by calling both hooks.  Example below.

```javascript
import React, {useEffect} from 'react';
import {useTreble} from 'treble-gsm';
import {useTestCompTreble} from './_store';

function NestedComp(){

    const [{ pokemon }] = useTreble();
    const [{ pokemonTrainer }] = useNewTreble();

    return(
        <>          
            <p>{ pokemon } is the Pokemon Trainer { pokemonTrainer }'s favorite Pokemon</p>
            {/* Pikachu is the Pokemon Trainer Ash's favorite Pokemon */}
        </>
    )
}

export default NestedComp;
```

##### Updating Multiple Treble Stores in a Component
This can be done easily by giving the `dispatch` function a unique name.

```javascript
const [{ pokemon }, dispatch] = useTreble();
const [{ pokemonTrainer }, dispatch2] = useNewTreble();

updateStore('updatePokemon', 'Misty', dispatch);
updateStore('updatePokemonTrainer', 'Psyduck', dispatch2);
```

#### History Object
Treble provides an easy way to get the previous state value and reset state to the its default value.

Delcare the `history` object in the `useTreble` destructured array.
```javascript
const [{ history }] = useTreble();
```

##### Get Previous State
The `history` object keeps track of the previous state and saves it for use. You can access the state varibles by calling `history.prev['state']`.

```javascript
//object literal
history.prev['pokemon']

//dot syntax
history.prev.pokemon
```

##### Reset State
You can also reset state values to their default state by calling `history.reset['name']`.

```javascript
//object literal
history.reset['pokemon']

//dot syntax
history.reset.pokemon
```

#### Persist State
Treble allows the Treble `Store` to save state to browser local storage if specified. In the optional `features` parameter, set `persist` to `true` See example below.

```javascript

{
    action: 'updatePokemon',
    state: { pokemon: 'Mewtwo' },
    features: {
        persist: true;
    }
}
```

Now whenever the browser is refreshed Treble will make sure the last state persists.

##### Clearing Local Storage
There might be some cases where you need the persited state to reset. You can do this by calling the `clearPersist()` function.

```javascript
import { clearPersist } from 'treble-gsm';

clearPersist(key: string);
```

`clearPersist` takes a string that is the name of the parameter.

```html
<button onClick={() => clearPersist('pokemon')}>Clear from Local Storage</button>
````


