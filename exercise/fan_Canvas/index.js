var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// 旋转角度
var a = 0;
// 旋转速度
var speed = 0;

let speedUp = document.getElementById('speedUp');
let speedDown = document.getElementById('speedDown');
let fanSwitch = document.getElementById('fanSwitch');
speedUp.addEventListener('click', function (e) {
  if (speed < 10) {
    speed++;
    speedDown.disabled = false;
  }
})

speedDown.addEventListener('click', function (e) {
  if (speed == 2) {
    speed--;
    speedDown.disabled = true;
  } else if (speed > 2) {
    speed--;
  }
})

fanSwitch.addEventListener('click', function (e) {
  if (speed) {
    speed = 0;
    e.target.style.backgroundColor = "#fff";
    speedUp.disabled = true;
    speedDown.disabled = true;
  } else {
    speed = 5;
    e.target.style.backgroundColor = "#01a49b"
    speedUp.disabled = false;
    speedDown.disabled = false;
  }
})

setInterval(function () {
  ctx.clearRect(0, 0, 300, 300);
  drawStatic(ctx);
  drawBlade(a)
  a += speed;
  a = a % 360;
}, 20)

// 圆角矩形
function drawRoundRectPath(ctx, width, height, radius) {
  ctx.beginPath();
  // 左上圆弧
  ctx.arc(150 - width / 2 + radius, 150 - height / 2 + radius, radius, Math.PI, Math.PI * 3 / 2);
  // 上边
  ctx.lineTo(150 + width / 2 - radius, 150 - height / 2)
  // 右上圆弧
  ctx.arc(150 + width / 2 - radius, 150 - height / 2 + radius, radius, Math.PI * 3 / 2, 0);
  // 右边
  ctx.lineTo(150 + width / 2, 150 + height / 2 - radius)
  // 右下圆弧
  ctx.arc(150 + width / 2 - radius, 150 + height / 2 - radius, radius, 0, Math.PI / 2,);
  // 下边
  ctx.lineTo(150 - width / 2 + radius, 150 + height / 2)
  // 左下圆弧
  ctx.arc(150 - width / 2 + radius, 150 + height / 2 - radius, radius, Math.PI / 2, Math.PI);
  // 左边
  ctx.lineTo(150 - width / 2, 150 - height / 2 + radius)
  ctx.fillStyle = "#01a49b";
  ctx.fill()
}

// 三条支架
function drawTriangle(ctx) {
  ctx.beginPath()
  ctx.lineWidth = "3";
  ctx.strokeStyle = "#01a49b";
  ctx.moveTo(150, 150)
  ctx.lineTo(150, 90)
  ctx.stroke()
  ctx.save()
  ctx.translate(150, 150);
  ctx.rotate(120 * Math.PI / 180)
  ctx.beginPath()
  ctx.lineWidth = "3";
  ctx.strokeStyle = "#01a49b";
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -60)
  ctx.stroke()
  ctx.closePath();
  ctx.restore();
  ctx.save()
  ctx.translate(150, 150);
  ctx.rotate(-120 * Math.PI / 180)
  ctx.beginPath()
  ctx.lineWidth = "3";
  ctx.strokeStyle = "#01a49b";
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -60)
  ctx.stroke()
  ctx.closePath();
  ctx.restore();
}

// 静态部分绘制
function drawStatic(ctx) {
  drawRoundRectPath(ctx, 150, 150, 15)
  ctx.beginPath()
  ctx.arc(150, 150, 60, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill()
  ctx.beginPath()
  ctx.arc(150, 150, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#01a49b";
  ctx.fill()
  drawTriangle(ctx)
}

// 扇叶绘制
function drawBlade(angle) {
  for (let index = 0; index < 360; index += 72) {
    ctx.save()
    ctx.translate(150, 150);
    ctx.rotate((angle + index) * Math.PI / 180)
    ctx.beginPath();
    ctx.moveTo(0, -55);
    ctx.quadraticCurveTo(25, -55, 0, 0);
    ctx.moveTo(0, -55);
    ctx.quadraticCurveTo(-25, -55, 0, 0);
    ctx.fillStyle = "#01a49b";
    ctx.fill()
    ctx.closePath();
    ctx.restore();

  }
}
