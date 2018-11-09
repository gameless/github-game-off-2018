/// <reference path="../node_modules/phaser3-docs/typescript/phaser.d.ts" />

import * as MatterJS from 'matter-js';
// @ts-ignore: Property 'Matter' does not exist on type 'typeof Matter'.
const Matter: typeof MatterJS = Phaser.Physics.Matter.Matter;

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

  scene.load.spritesheet(
    'cat', 'assets/cat.png', { frameWidth: 400, frameHeight: 230 }
  );
}

let cursors: Phaser.Input.Keyboard.CursorKeys;
let cat: Phaser.Physics.Matter.Image;

function create() {
  cursors = scene.input.keyboard.createCursorKeys();

  scene.matter.world.setBounds(50, 50, 700, 500);

  scene.matter.add.rectangle(500, 300, 100, 50, { isStatic: true });
  cat = scene.matter.add.sprite(100, 100, 'cat');
  cat.setScale(0.2, 0.2);
}

function update() {
  const rotation = cat.rotation;
  cat.setRotation(0);
  if (cursors.down.isDown) {
    cat.setScale(0.2, Math.max(cat.scaleY - 0.01, 0.1));
  } else {
    cat.setScale(0.2, Math.min(cat.scaleY + 0.01, 0.2));
  }
  cat.setRotation(rotation);

  if (cursors.left.isDown && !cursors.right.isDown) {
    cat.setVelocityX(-10);
  } else if (cursors.right.isDown && !cursors.left.isDown) {
    cat.setVelocityX(10);
  }

  if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
    cat.setVelocityY(-10);
  }
}
