var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};


let logo;
let velx = 100;
let vely = 200;

document.getElementById('button').addEventListener('click', async () => {
  await DeviceMotionEvent.requestPermission();
  Capacitor.Plugins.Motion.addListener('accel', (event) => {
    velx = 60 * event.accelerationIncludingGravity.x;
    logo.setVelocityX(velx);
  });
});

var game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL('http://labs.phaser.io');

  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/red.png');
}

function create() {
  const sky = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sky');
  sky.displayWidth = window.innerWidth;
  sky.displayHeight = window.innerHeight;

  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  });

  logo = this.physics.add.image(400, 100, 'logo');
  logo.scale = 0.1;

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}