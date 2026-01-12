export function initSakura() {
  const canvas = document.getElementById("sakura");
  if (!canvas) return;

  // ---- TON CODE (inchangé) ----

  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 10);
      };
  })();

  function random(n) {
    return Math.floor(Math.random() * n) + 1;
  }

  function Canvas(elm) {
    this.elm = elm;
    this.canvasCtx = this.elm.getContext("2d");
    this.width = this.elm.width;
    this.height = this.elm.height;
    this.children = [];
    this.init();
  }

  Canvas.prototype.resize = function () {
    this.width = this.elm.width = window.innerWidth * 2;
    this.height = this.elm.height = window.innerHeight * 2;
  };

  Canvas.prototype.clear = function () {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
  };

  Canvas.prototype.addChild = function (child) {
    this.children.push(child);
  };

  Canvas.prototype.removeChild = function (i) {
    this.children.splice(i, 1);
  };

  Canvas.prototype.rendering = function () {
    this.clear();
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].draw(this.canvasCtx)) {
        this.removeChild(i);
      }
    }
  };

  Canvas.prototype.createSakura = function (num) {
    const colors = ["#f29fb5", "#f5cbd4", "#783791"];
    for (let i = 0; i < num; i++) {
      this.addChild(
        new Sakura(
          this,
          Math.random() * this.width,
          Math.random() * -100,
          Math.random() + 0.5,
          { x: random(360), y: random(360), z: random(360) },
          { x: random(10), y: random(10), z: random(10) },
          random(5),
          colors[random(3) - 1]
        )
      );
    }
  };

  Canvas.prototype.animate = function () {
    if (Math.random() > 0.15 && this.children.length < 120) {
      this.createSakura(6);
    }
    this.rendering();
    requestAnimationFrame(() => this.animate());
  };

  Canvas.prototype.init = function () {
    this.resize();
    this.animate();
    window.addEventListener("resize", () => this.resize());
  };

  function Sakura(parent, x, y, scale, direction, rotate, wind, color) {
    this.parent = parent;
    this.x_pos = x;
    this.y_pos = y;
    this.scale = scale;
    this.direction = direction;
    this.rotate = rotate;
    this.wind = wind;
    this.gr = 5;
    this.color = color;
  }

  Sakura.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x_pos, this.y_pos);
    ctx.rotate((this.direction.y / 100) * Math.PI);
    ctx.scale(this.scale, this.scale);
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.bezierCurveTo(-10, 0, -5, 10, 0, 10);
    ctx.bezierCurveTo(5, 10, 10, 0, 0, -10);
    ctx.fill();
    ctx.restore();

    this.y_pos += this.gr * this.scale;
    this.x_pos += this.wind * 0.3;

    return this.y_pos > this.parent.height;
  };

  new Canvas(canvas);
}
