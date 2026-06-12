function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  background(30, 20); // 帶有透明度的背景，製造殘影效果
  
  // 基礎互動：在滑鼠位置畫一個白色的圓
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
