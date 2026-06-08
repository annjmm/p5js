function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(RGB);

  saveGif('과제4', 5);
}

function draw() {
  background(255);

  let t = frameCount * 0.02;
  let cx = 300 + sin(t) * 20;
  let cy = 200 + cos(t) * 10;
  
  for (let i = 0; i < 20; i++) {

    let size = 850 - i * 35 + sin(t + i * 0.3) * 15;
    let c = map(sin(t + i * 0.2), -1, 1, 0, 120);
  
    fill(c);

    ellipse(cx, cy, size, size);
  }

  fill(255);

  let stars = [
    [50, 50], [100, 80], [200, 150],
    [300, 100], [400, 50], [500, 120],
    [550, 200], [450, 300], [350, 250],
    [250, 350], [150, 300], [120, 200],
    [500, 50], [80, 350], [580, 380]
  ];

  for (let i = 0; i < stars.length; i++) {

    let x = stars[i][0];
    let y = stars[i][1];
    let starSize = 2 + sin(t * 3 + i) * 2;
    let bright = map(sin(t * 2 + i), -1, 1, 180, 255);
    
    fill(bright);

    ellipse(x, y, starSize, starSize);
  }
}