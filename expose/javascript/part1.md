1. Line 9 prints: 'values added:  20'
2. Line 13 prints: 'final result:  20'
3. Line 9 prints: 'values added:  20'
4. Line 13 is not printed and the code returns an error, because the result variable declared with let is out of scope when called in line 13 as it is only defined in the block its declared in, which is a seperate block from the one at line 13.
5. The code returns an error, since const declaration prevents result from being reassigned but the code is trying to reassign the const variable result with a new value, which causes an error.
6. As mentioned in question 5, the code returns an error before line 13 ever gets evaluated.
