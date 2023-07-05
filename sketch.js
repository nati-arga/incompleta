let giros = 0;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(175);
  //stroke(150);
  noFill();
  let mod = width / 5;
  rectMode(CENTER);

  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 5; b++) {
      let x = mod / 2 + mod * a;
      let y = mod / 2 + mod * b;

      push();
      translate(x, y);
      rotate(giros);

      for (let c = 0; c < 10; c++) {
        let tam = map(c, 0, 10, mod, 1);

        rect(0, 0, tam, tam);
      }

      pop();
    }
  }

  giros += 0.001;
}