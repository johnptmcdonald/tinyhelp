# tinyhelp

![Travis build](https://img.shields.io/travis/johnptmcdonald/tinyhelp)
![Code Coverage](https://img.shields.io/codecov/c/github/johnptmcdonald/tinyhelp)

Install like this:
`npm i tinyhelp`

Then either import everything:

```
import * as helpMe from "tinyhelp";
helpMe.sort([5,2,6,3,5]); // => [2,3,5,5,6]
helpMe.flatten([1,[2,[3]]]) // => [1,2,3]
```

Or use named imports:

```
import { sort } from "tinyhelp";
sort([5,2,6,3,5]) // => [2,3,5,5,6]

```

This is a tiny library of javascript functions, currently comprising:

- deepCopy
- flatten
- isPrime
- sieveOfE (sieve of Eratosthenes)
- peek
- sort
- isEqual (in progress)
