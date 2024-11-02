# Shake Counter

Is a React application that tracks sudden shaking of the device (shakes). Each shake will be recorded and the total number of ‘shakes’ will be displayed on the screen.
The application also contains an animation that will visually react to each ‘shake’.

## Getting Started

You can clone the repository and command `npm run start` it to run on your device

or

hit [GitHub Pages](https://tartavik.github.io/superlabs/)

### Description

To catch shakes I used the built-in DeviceMotionEvent functionality and devicemotion event handler,
then I compared the data of the received x, y, z axes with the previous ones.
If the rotating effect was more than 15 degrees, it was a one shake.  

