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
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

window.addEventListener('beforeunload', () => game.destroy(true, true));

let scene: Phaser.Scene;

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

let cursors: Phaser.Input.Keyboard.CursorKeys;
let cat: Phaser.Physics.Matter.Image;

function create() {
  cursors = scene.input.keyboard.createCursorKeys();

  scene.matter.add.mouseSpring({ });
  scene.matter.world.setBounds(50, 50, 700, 500);

  cat = scene.matter.add.image(100, 100, 'cat');
  cat.setScale(0.2, 0.2);
}

function update() {
  const rotation = cat.rotation;
  if (cursors.down.isDown) {
    cat.setRotation(0);
    cat.setScale(0.2, Math.max(cat.scaleY - 0.01, 0.1));
    cat.setRotation(rotation);
  } else {
    cat.setRotation(0);
    cat.setScale(0.2, Math.min(cat.scaleY + 0.01, 0.2));
    cat.setRotation(rotation);
  }
  if (cursors.left.isDown && !cursors.right.isDown) {
    cat.setVelocityX(-10);
  } else if (cursors.right.isDown && !cursors.left.isDown) {
    cat.setVelocityX(10);
  }
}
