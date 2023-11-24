# MatrixPowerCalculator
This is a simple web application that allows users to input 4 real numbers and a power, which are then used to create a 2x2 matrix. The program raises the matrix to the power entered by the user. I want to create a webpage that performs useful actions on matrices while also maintaining it simple enough so that users can modify it to their liking.

## How to use
1. Open the matrixPower.html file in a web browser.
2. Enter four real numbers and a power into the form.
3. Click the "Calculate" button.
4. The result will be displayed in a new window.

## Files
1. matrixPower.html: This is the main HTML file that contains the form for user input.
2. matrixPower.js: This is the JavaScript file that performs the matrix operations.

## Code Overview
The HTML file contains a form with five input fields for the four numbers and the power. The JavaScript file contains three functions:
* calculateMatrixPower(): This function is called when the "Calculate" button is clicked. It gets the input values from the form, calls the matrixPower function to calculate the result, and then opens a new window to display the result.
* matrixPower(matrix, power): This function raises the matrix to the power. It repeatedly multiplies the matrix by itself for the number of times specified by the power.
* multiplyMatrices(matrixA, matrixB): This function multiplies two matrices together.

## Customization
You can customize the look and feel of the form by modifying the CSS rules in the <style> block in the HTML file.

## Note
This program assumes that the input is always valid (i.e., the user always provides real numbers and a non-negative integer for the power). If you want to handle invalid input, you should add an error checking code.

I also plan to expand on this program and add more features like:
- Allowing the user to adjust the size of the matrix.
- Outputing more information about the matrix like the determinant, its inverse, eigenvalues, etc.
- Or simply just making it visually better.
