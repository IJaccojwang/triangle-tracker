# Triangle Tracker
#### This application accepts user input in form of triangle sides and gives feedback on the type of triangle, or if it's not a triangle., 02/2019
#### By **Ian Jaccojwang**
## Description
The user inputs the length of 'suspected' triangle sides. Those lengths are then analysed to determine whether the sides form a triangle or not. If they form a triangle, it gives the type of triangle: either equilateral, scalene or isosceles.
## Setup/Installation Requirements
* Go to the deployed site on:
* Enter the three lengths you would like to test.
* Submit the values and wait for your result.
## Future Improvemnts
In future, I would like the program to draw out the actual triangles to scale then display the angles and sides of the triangle.
## Technologies Used
This project was coded in:
* Html
* CSS
* JavaScript
## Behaviour driven development/ input and output checking
* The user will enter length values of 3 sides of a triangle. They expect output of: whether the sides form a triangle and the type of triangle.
* The program will test whether the sum of two sides is equal or less than the third side. If true, the program will output "Sorry, not a triangle".
* If the first criteria is met , we will test type of triangle.
* Equilateral: all sides are equal.
* Isosceles: two sides are equal.
* Scalene: none of the sides are equal.

| Behaviour                                                       | Sample input   | Expected output                  |
|-----------------------------------------------------------------|----------------|----------------------------------|
| Accepts only numbers as inputs                                  | Ian            | Please enter valid input(number) |
|                                                                 | 2, 3, 5        | This is a (type) triangle        |
| Does not accept null values                                     | Empty(no input)| Please provide input             |
|                                                                 | 2, 3, 5        | This is a (type) triangle        |
| Tests if it's a triangle(two sides equal to or less than third) | 6, 3, 2        | This is a (type) triangle        |
|                                                                 | 9, 4, 3        | This is a (type) triangle        |
| Tests if sides are equal for equilateral triangle               | 5, 5, 5        | This is an equilateral triangle  |
| Tests if 2 sides are equal for isosceles triangle               | 5, 5, 2        | This is an isosceles triangle    |
| Tests if all sides are unequal for scalene triangle             | 5, 4, 3        | This is a scalene triangle       |
## Support and contact details
For any questions, troubleshooting or contributions,  find me on:
* Mobile: +254702178825
* Email: danolago@gmail.com
### License
MIT License
Copyright (c) {2019} **Ian Olago Jaccojwang**
