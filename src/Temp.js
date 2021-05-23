import React from "react";
const { createjs } = window;
const colors = [
  "red",
  "demoCanvas",
  "pink",
  "yellow",
  "green",
  "white",
  "white"
];
export class Temp extends React.Component {
  displayBallRow(stage, y) {
    for (let i = 1; i <= 18; i++) {
      var circle = new createjs.Shape();
      let random = Math.floor(Math.random() * 7);
      circle.graphics.beginFill(colors[random]).drawCircle(0, 0, 10);
      circle.x = 10 + i * 25;
      circle.y = y;
      stage.addChild(circle);
      stage.update();
    }
  }
  spinnerBall(arr, stage, x, y) {
    let circle = new createjs.Shape();
    let random = Math.floor(Math.random() * 7);
    circle.graphics.beginFill("red").drawCircle(0, 0, 10);
    circle.x = x;
    circle.y = y;
    stage.addChild(circle);
    stage.update();
    arr.push(circle);
    return arr;
    // circle.on("pressup", evt => {
    //   console.log("up", evt.target.x, evt.stageX);
    //   this.animation(
    //     circle,
    //     stage,
    //     evt.target.x,
    //     evt.target.y,
    //     Math.floor(evt.stageX),
    //     Math.floor(evt.stageY)
    //   );
    // });
  }

  animation(circle, stage, cr_x, cr_y, tr_x, tr_y) {
    // console.log(cr_x, cr_y, tr_x, tr_y);

    let ss = createjs.Tween.get(circle, { loop: false });
    ss.to({ x: tr_x, y: tr_y }, 1000);

    if (tr_y >= 250) {
      ss.to({ x: 10, y: tr_y - (500 - tr_y) }, 1000);
      if (tr_x > cr_x) {
        ss.to({ x: 10, y: tr_y }, 1000);
      } else {
        ss.to({ x: 500, y: tr_y }, 1000);
      }
    } else {
      ss.to({ x: cr_x, y: 10 }, 1000);
      if (tr_x > cr_x) {
        ss.to({ x: 10, y: tr_y }, 1000);
      } else {
        ss.to({ x: 500, y: tr_y }, 1000);
      }
    }
    ss.to({ x: cr_x, y: cr_y }, 1000);
    createjs.Ticker.setFPS(500);
    createjs.Ticker.addEventListener("tick", e => {
      stage.update();
    });

    stage.update();
  }

  displayBalls() {
    let stage = new createjs.Stage("demoCanvas");
    var rect = new createjs.Shape();
    rect.graphics.beginFill("white").drawRect(0, 0, 500, 500);
    stage.addChild(rect);
    stage.update();
    // for (let i = 1; i < 10; i++) {
    //   this.displayBallRow(stage, i * 20);
    // }
    let arr = [];
    let x = Math.floor(Math.random() * 400);
    // for (let i = 0; i < 6; i++) {
    this.spinnerBall(arr, stage, x, 490);
    // }
    console.log(arr, "https://github.com/sangharsh1008/canvasProject.git");
    let isMoveRightUp = false;
    let isMoveLeftUp = false;
    let isMoveLeftDown = false;
    let isMoveRightDown = false;
    let isLeftCorner = false;
    let isRightCorner = false;
    let isUpCorner = false;
    let isDownCorner = false;
    let towardsRight = false;
    let towardsLeft = false;
    const ballPosX = arr[0].x;
    const ballPosY = arr[0].y;

    arr[0].on("pressup", evt => {
      console.log(ballPosX, ballPosY, "0isMoveLeftUp");
      let distX = ballPosX;
      let distY = ballPosY - evt.stageY;
      let minusX = 1;
      let minusY = 1;
      if (distY >= distX) {
        minusY = checkRound(distY / distX);
        minusX = checkRound(distX / distY);
      } else {
        minusY = checkRound(distX / distY);
        minusX = checkRound(distY / distX);
      }

      console.log(
        "distX=",
        distX,
        "distY=",
        distY,
        "minusX=",
        minusX,
        "minusY=",
        minusY,
        "sangharsh"
      );
      var myvar = setInterval(() => {
        var x = arr[0].x;
        var y = arr[0].y;
        //  if(x==480&&y)

        isRightCorner = x >= 490 ? true : false;
        isLeftCorner = x <= 10 ? true : false;
        isUpCorner = y <= 10 ? true : false;
        isDownCorner = y >= 490 ? true : false;

        if (isDownCorner || isMoveRightUp) {
          moveRightUp(minusX, minusY);
        } else if (isRightCorner || isMoveLeftUp) {
          moveLeftUp(minusX, minusY);
        } else if (isUpCorner || isMoveLeftDown) {
          moveLeftDown(minusX, minusY);
        } else if (isLeftCorner || isMoveRightDown) {
          moveRightDown(minusX, minusY);
        } else {
          stop();
        }

        stage.update();
      }, 3);
      function stop() {
        clearInterval(myvar);
      }
      function moveRightUp(minusX, minusY) {
        isMoveRightUp = arr[0].x >= 490 ? false : true;
        arr[0].x += 1;
        arr[0].y -= 0.6;
      }
      function moveLeftUp(minusX, minusY) {
        isMoveLeftUp = arr[0].y <= 10 ? false : true;
        arr[0].x -= 1;
        arr[0].y -= 1;
      }
      function moveLeftDown(minusX, minusY) {
        isMoveLeftDown = arr[0].x <= 10 ? false : true;
        arr[0].x -= 1;
        arr[0].y += 1;
      }
      function moveRightDown(minusX, minusY) {
        isMoveRightDown = arr[0].y >= 490 ? false : true;
        arr[0].x += 1;
        arr[0].y += 1;
      }
      function checkRound(value) {
        if (value < 1 && value > 0) {
          return 1;
        } else {
          return Math.round(value);
        }
      }

      // }

      // }
      //stage.update();
      console.log(evt.target.x, evt.target.y, evt.stageX, evt.stageY);

      // this.animation(
      //   arr[0],
      //   stage,
      //   evt.target.x,
      //   evt.target.y,
      //   Math.floor(evt.stageX),
      //   Math.floor(evt.stageY)
      // );
      // }
    });

    // this.spinnerBall(stage, 490);
  }
  componentDidMount() {
    this.displayBalls();
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid #000000",
          width: "500",
          height: "500",
          backgroundColor: "white",
          position: "absolute",
          top: "10px",
          left: "100px"
        }}
      >
        <canvas
          id="demoCanvas"
          style={{
            backgroundColor: "black"
          }}
          width="500"
          height="500"
        />
      </div>
    );
  }
}
