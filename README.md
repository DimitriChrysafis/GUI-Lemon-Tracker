# Yellow Object Tracker using Webcam

tracks and displays the speed of a yellow object in real-time using your webcam. It also provides options to toggle a trail of dots and a circle around the detected object.

![Sample GIF](/sample.gif)

## Usage
1. Open the HTML file in a compatible web browser.
2. Allow webcam access.
3. Enable or disable features:
   - Toggle Trail: `toggleTrail()`
   - Toggle Circle: `toggleCircle()`

## Example
```javascript
// Enable trail of dots
toggleTrail();

// Disable circle
toggleCircle();
```

## Speed Calculation
The application calculates the object's speed using the formula:

```javascript
speed = distance / timeDiff * 1000; // pixels per second

```
## ## Credits
This project references code and knowledge from:
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-open-web-cam-in-javascript/)
- [Cassie Codes on CodePen](https://codepen.io/cassie-codes/pen/RJxGvK)
- [Benson Ruan](https://bensonruan.com/how-to-access-webcam-and-take-photo-with-javascript/)
- [ahmukoma on GitHub](https://raw.githubusercontent.com/ahmukoma/Color-Tracking-with-Javascript/master/js/jquery-3.2.1.js)
