
export class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    update(width, height) {
      if (this.x + this.size >= width) {
        this.velX = -this.velX;
      }
  
      if (this.x - this.size <= 0) {
        this.velX = -this.velX;
      }
  
      if (this.y + this.size >= height) {
        this.velY = -this.velY;
      }
  
      if (this.y - this.size <= 0) {
        this.velY = -this.velY;
      }
  
      this.x += this.velX;
      this.y += this.velY;
    }

    random(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
        // function to generate random color
        
    randomRGB() {
          return `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`;
    }

    collisionDetect(balls) {
      for (const ball of balls) {
        if (this !== ball) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size + ball.size) {
            ball.color = this.color = this.randomRGB();
          }
        }
      }
    }
      
}


  