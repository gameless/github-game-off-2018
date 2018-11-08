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

function create() {
  scene = this;

  scene.matter.add.mouseSpring({ });
  scene.matter.world.setBounds(50, 50, 700, 500);

  const m = scene.matter.add.rectangle(100, 100, 25, 50, { restitution: 0.5 });
  const b = scene.matter.add.rectangle(100, 200, 25, 50, { restitution: 0.5 });
  scene.matter.add.constraint(m, b, 100);
}
