/// <reference path="../node_modules/phaser3-docs/typescript/phaser.d.ts" />

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#ffffff',
  physics: {
    default: 'matter',
    matter: {
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

window.addEventListener('beforeunload', () => game.destroy(true, true));

let scene : Phaser.Scene;

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  game.resize(width, height);
  scene.cameras.main.setSize(width, height);
});

function preload() {
  scene = this;

  scene.load.image('cat', 'assets/cat.png');
}

function create() {
  scene.matter.add.mouseSpring({ });
  scene.matter.world.setBounds(50, 50, 700, 500);

  const cat = scene.matter.add.image(100, 100, 'cat');
  cat.setDisplaySize(100, 60);
  cat.setRectangle(100, 50, { });
}
