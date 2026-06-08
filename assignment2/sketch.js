function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(245);

  // 머리 (뒤)
  fill(60, 50, 45);
  noStroke();
  ellipse(300, 200, 180, 140);

  // 귀 (뒤로)
  fill(255, 230, 210);
  stroke(0);
  ellipse(230, 240, 25, 40);
  ellipse(370, 240, 25, 40);

  // 얼굴
  fill(255, 230, 210);
  stroke(0);
  strokeWeight(1);
  ellipse(300, 240, 150, 160);

  // 앞머리
  noStroke();
  fill(60, 50, 45);
  arc(300, 190, 160, 120, PI, TWO_PI);

  // 눈
  fill(0);
  noStroke();
  ellipse(270, 240, 10, 10);
  ellipse(330, 240, 10, 10);

  // 눈썹
  stroke(0);
  strokeWeight(1.5);
  line(255, 225, 285, 225);
  line(315, 225, 345, 225);

  // 볼
  noStroke();
  fill(255, 170, 170, 120);
  ellipse(260, 260, 25, 15);
  ellipse(340, 260, 25, 15);

  // 코
  stroke(0);
  line(300, 245, 300, 260);

  // 입
  noFill();
  arc(300, 275, 30, 15, 0, PI);

  // 점
  noStroke();
  fill(0);
  ellipse(285, 265, 4, 4);

  // 안경
  noFill();
  stroke(0);
  strokeWeight(1.5);
  ellipse(270, 240, 35, 35);
  ellipse(330, 240, 35, 35);
  line(287, 240, 313, 240);

  // 몸통
  fill(120, 160, 220);
  stroke(0);
  rect(200, 330, 200, 170, 60);

  // 목 파임
  fill(255, 230, 210);
  noStroke();
  arc(300, 330, 40, 30, 0, PI);

  // 목
  rect(282.5, 310, 35, 20, 8);
}