/// <reference path="../node_modules/phaser3-docs/typescript/phaser.d.ts" />

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'matter',
      matter: {
        debug: true
      }
    },
    scene: {
      create: create
    }
};

const game = new Phaser.Game(config);
let scene : Phaser.Scene;

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  game.resize(width, height);
  scene.cameras.main.setSize(width, height);
});

function create() {
  scene = this;

  this.matter.add.mouseSpring();
  this.matter.world.setBounds(50, 50, 700, 500);

  this.matter.add.rectangle(100, 100, 25, 50, { restitution: 0.5 });
}
