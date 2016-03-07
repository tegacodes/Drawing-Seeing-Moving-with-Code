###Particle Systems

* Review Chapter 4 on Particle Systems. 
* P5js examples are in [this repostory here.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/tree/gh-pages/code/Complete-Nature-of-Code-Examples-p5.js-master/chp04_systems)
* Daniel Shiffman [videos on these concepts are here.](https://www.youtube.com/watch?v=vdgiqMkFygc&list=PLRqwX-V7Uu6Z9hI4mSgx2FlE5w8zvjmEy) 

####Notes on arrays in Javascript:

* Arrays have some built-in convenience properties and methods. You can see them all in the MDN array reference, a few of the common ones follow.

**length**

Gives the length (number of items) of the array. This can be useful for iterating over arrays.

```var arr = [3, 5, 19];
for (var i=0; i<arr.length; i++) {
  arr[i] *= 2;
}
console.log(arr.length); // 3
console.log(arr); // [6, 10, 38]```

**push()**

Adds (pushes) a new element to the end of the array, increasing the length of the array by 1.

```var arr = [30, 10, 0];
arr.push(true);
console.log(arr.length); // 4
console.log(arr); // [30, 10, 0, true]```

**indexOf(elt)**

Returns the index of given element, or returns -1 if it's not found.

```var array = [2, 5, 9];
var index = array.indexOf(2); // 0
index = array.indexOf(7); // -1
index = array.indexOf(9, 2); // 2
index = array.indexOf(2, -1); // -1
index = array.indexOf(2, -3); // 0```

**Removing an element: splice()**

Remove one element:
```var fruits = ["Apple", "Banana", "Mango"];
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]
```

When removing an element using a for loop, we must loop backwards, so we start at i=articles.length-1 and go back throuogh the array. 
If you go forwards you continue to array.length but you've changed the length by deleting an element before you get there and it gets confused!

```for (var i = particles.length-1; i >= 0; i--) { //go backwards 
    var p = particles[i]; //put particle into p
    p.run(); 
    if (p.isDead()) {
      //remove the particle
      particles.splice(i, 1); //remove particle at i
    }
  }```


