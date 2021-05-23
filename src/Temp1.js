// import React from "react";
// const { createjs } = window;
// const colors = [
//   "red",
//   "demoCanvas",
//   "pink",
//   "yellow",
//   "green",
//   "white",
//   "white"
// ];
// export class Temp1 extends React.Component {
//   displayBalls() {
//     let stage = new createjs.Stage("demoCanvas");
//     var rect = new createjs.Shape();
//     rect.graphics.beginFill("white").drawRect(0, 0, 500, 500);
//     stage.addChild(rect);
//     stage.update();
//     var canvas = stage;
//     // var canvas = document.getElementById("demoCanvas");
//     var ctx = canvas.getContext("2d");
//     var x = canvas.width / 2;
//     var y = canvas.height - 30;
//     var dx = 2;
//     var dy = 2;
//   }
//   draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += dx;
//     y += dy;
//   }
//
//   drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
//   }
//   componentDidMount() {
//     this.displayBalls();
//   }
//
//   render() {
//     return (
//       <div
//         style={{
//           border: "1px solid #000000",
//           width: "500",
//           height: "500",
//           backgroundColor: "white",
//           position: "absolute",
//           top: "10px",
//           left: "100px"
//         }}
//       >
//         <canvas
//           id="demoCanvas"
//           style={{
//             backgroundColor: "black"
//           }}
//           width="500"
//           height="500"
//         />
//       </div>
//     );
//   }
// }
