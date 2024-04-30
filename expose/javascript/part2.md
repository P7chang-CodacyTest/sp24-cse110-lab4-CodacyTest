1. The code will print '3' at line 12, because by the end of the for loop execution var i would have been 3, which is printed at line 12.
2. The code will print '150', because during each loop of the for loop var discountedPrice is reassigned with the value of the corresponding ith element of the input prices array divided by 2, and the last loop before the for loop terminates discountedPrice = 300 * 0.5 = 150, which is printed at line 13.
3. The code still prints '150', since similarly finalPrice is also declared with var and reassigned during each loop to essentially the rounded value of the current discountedPrice value (reassigned right before it), which is 150 during the last iteration of the loop. Hence, 150 is the last assigned value retained after the loop terminates and gets printed at line 14.
4. The function, with the given input, would return the array [50, 100, 150], which is the array of the discounted (and rounded, though it doesn't make a difference in this particular case) price of each item given as input based on the given discount value.
5. The code causes an error since i is declared with let, which limits its scope to only the block it is declared in, in this case the for loop. Since line 12 calls i again outside of the for loop (block it is declared in), the code causes an error.
6. Similar to 5, the code once again returns an error because discountedPrice is also declared with a let inside the for loop and hence is undefined outside of it, causing an error when being called in line 13 outside of its defined block.
7. The code prints '150' at line 14 since finalPrice, despite being declared with a let, is declared at the start of the function and has a block scope that covers the entire function body, so when it is being called in line 14 it is defined and returns 150 for the same reason mentioned in question 3; Notice that although discountedPrice, which is used to update the value of finalPrice in the for loop, is no longer defined outside of the loop, finalPrice itself is still defined and hence retains the value after its last update/assignment.
8. Similar to question 4, assuming the same input is given, the function will again return the array [50, 100, 150]. Discounted, similar to finalPrice, is declared with let at the start of the function and has a scope that covers the entire function body, hence it is properly defined when called by the return statement.
9. The code causes an error at line 11 for the same reason mentioned in question 5, since i is declared with let and is not declared outside of the for loop.
10. The code will print '3' as prices.length will return 3 for the given input, const declaration doesnt matter here since length is never reassigned with another value.
11. The code, given the input, will again return the array [50, 100, 150]. This is because despite discounted is declared as a const, the variable is never explicitly reassigned to another value and instead it is the same array with new elements added to it, hence the limit of const cannot be reassigned is not broken and the code works as expected. Additionally, although discountedPrice seems to be 'reassigned' during the loop despite being a const, the way the code is written seems like discountedPrice is actually redeclared instead of reassigned during each iteration of the loop (i.e. a new discountedPrice is created for each iteration, which is ok since const declaration has the same scope as let and hence as each iteration of the loop finishes, the previous const declaration goes out of scope and a new one can be declared.) so the variable is actually never reassigned, hence the code works as expected.
12. A: student.name
    B: student['Grad Year']
    C: student.greeting()
    D: student['Favorite Teacher'].name
    E: student.courseLoad[0]
13. 
    A: '32', since integer 2 maps to '2', and hence '3' + '2' = '32'. Note the + operator is interpreted as string concatenation here since one of the operand is a string literal and not a number.
    B: 1, since string '3' maps to integer 3, the expression after type conversion (because - operation is performed, which is a math operation) is equivalennt to 3-2, which returns 1.
    C: 3, since null maps to 0 in the given math operation.
    D: '3null', since null is converted to the string 'null' in this context to perform string concatenation with the other operand which is a string.
    E: 4, since true maps to integer 1 when used for math operation.
    F: 0, since to perform the addition operation both false and null is mapped to an integer, and both have the integer mapping of 0, so 0 + 0 gives 0.
    G: '3undefined', similar to part D, undefined is mapped to the string 'undefined' to perform string concatenation with '3'.
    H: NaN, since both operand is converted into integer for the math operation, but undefined maps to NaN when converted as an integer, which makes the expression equivalent to 3 - NaN, which is evaluated as NaN.
14.
    A: true, since comparison of different typed values will convert the compared values to numbers, and '2' is mapped to integer 2, and 2 > 1 evaluates to true.
    B: false. From the given link on comparison: "Strings are compared letter-by-letter in the "dictionary" order", and since the first character '2' has a bigger unicode value than '1', '2' is evaluated as bigger than '12' and hence the comparison evaluates to false.
    C: true, since operands of different types are converted to numbers when regular equality check is called, and '2' is mapped to 2 and hence the equality evaluates to true.
    D: false, since this is a strict equality and does not perform type conversion, operands of different types automatically results in false.
    E: false, again both operand is converted to numbers, and true maps to integer 1 in this case and hence the equality is false.
    F: true, since Boolean(2) evaluates to true as 2 is not an 'intuitively empty' value, and true === true is indeed true.
15. == is regular equality check and operands of different types will automatically undergo type conversion when compared, which may result in the check returning true for values that are not strictly equal, such as false == 0. === is strict equality check and automatically fails if the operands are not of the same type, so it only returns true when the operands are strictly equal (i.e. same type, same value).
16. See part2-question16.js
17. The result will be the array [2,4,6]. modifyArray essentially takes in an array and a function and returns a modified array (or a new array based off the original input array) where each of the element is the result of applying the input function to the corresponding array element of the original array. Since the function doSomething simply takes in some value and returns that value multiplied by 2, the call essentially multiplies every element of the original array by 2, so [1,2,3] becomes [2,4,6].
18. 