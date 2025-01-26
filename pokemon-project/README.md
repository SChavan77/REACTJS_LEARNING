# Pokemon Search Project

Elements in WebPage:
* Title
* Search Box
* div of Pokemon cards


To handle side-effects, we have use-effect

Parent URL:https://pokeapi.co/api/v2/pokemon/
Child URLS: https://pokeapi.co/api/v2/pokemon/1/, https://pokeapi.co/api/v2/pokemon/2/...
https://pokeapi.co/api/v2/pokemon/*/.....

When we do this-
```js
  const detailedPokemonData= jsonRes.results.map(async (curPokemon)=>{
                const res= await fetch(curPokemon.url);
                const data =await res.json();
                //console.log(data);
            });
            console.log(detailedPokemonData);
```
detailedPokemonData is returning promise objects.
Eg:

```
(20) [Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, 
.0
: 
Promise
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
.....
```
After getting all the Child URLs from the promises, how to get those further.

Note: Promise.all(), Promise.allSetled(), Promise.race(), Promise.any()
Good article for Promises & it's type:
https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj
https://dev.to/shameel/understanding-promise-in-javascript-45kc

#### Handling Loading & Error State in App:
It's a best practice to use that.

When we are GETting the data - for the very first time, we get null or empty.
Until we get full data in `pokemon`, return (//rendering html) should not run.
So handle this using useState variables error and loading.

#### Lets work on Pokemon cards & rendering details.

* If the field is an array.
eg: types field of each card
How to fetch this?

#### Search Functionality
Pokemon variable has all the pokemons in array form.
To search in array - many ways. Here, use filter()
Instead of passing directly pokemon variable to render the cards. use searchDate now.





