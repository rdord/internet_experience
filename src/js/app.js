import 'normalize.css';
import '../css/main.css';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

new p5((p) => {
  let w;

	// Setup method
	p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    w = new Walker();
  };

	// Draw method
	p.draw = () => {
    p.background(51);
    w.update();
    w.display();
  };

  function Walker() {

    // Start Walker in center
    this.pos = p.createVector(p.width / 2, p.height / 2);
    // Start with 0 velocity
    this.vel = p.createVector(0, 0);

    this.update = () => {
      // Vector at mouse location
      let mouse = p.createVector(p.mouseX, p.mouseY);
      // Vector pointing from Walker to mouse
      this.acc = p5.Vector.sub(mouse, this.pos);
      // Setting the magnitude of that vector
      this.acc.setMag(0.4);

      // Physics engine algorithm
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }

    this.display = () => {
      // Draw Walker as circle
      p.fill(255);
      p.ellipse(this.pos.x, this.pos.y, 48, 48);
    }
  }


}, document.body);



