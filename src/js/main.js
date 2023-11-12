import './../scss/style.scss'

import anime from '../../node_modules/animejs/lib/anime.es.js';

//example-01
anime({
  targets: '.example-01',
  translateX: 250,
  rotateZ: 360,
  scale: 1.5,
  duration: 3000,
  loop: true
})

//example-02
anime({
  targets: '.example-02',
  keyframes: [ // Können auch auf Property Level definiert werden
    {translateX: 250, scale: 1.5},
    {translateY: 50, scale: 1},
    {translateX: -250, scale: 1.5},
    {translateY: -50, scale: 1},
  ],
  duration: 5000,
  loop: true
})

//example-03
anime({
  targets: '.square_01',
  translateX: anime.stagger(50),
  delay: anime.stagger(300, {from:'last'}), //stagger manipulation
  duration: 3000,
});

//example-04
anime({
  targets: '.square',
  translateX: anime.stagger(10, {grid:[14, 5], from: 'center', axis:'x'}),
  translateY: anime.stagger(10, {grid:[14, 5], from: 'center', axis:'y'}),
  rotateZ: anime.stagger([0, 90], {grid:[14, 5], from: 'center', axis:'x'}),
  delay: anime.stagger(200, {grid:[14, 5], from: 'center'}),
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutQuad'
});

//example-05
var tl = anime.timeline({
  duration: 1000,
  loop: true,
  direction: 'alternate'
});

tl.add({
  targets: '.square_02',
  translateX: anime.stagger(10, {grid:[14, 5], from: 'center', axis:'x'}),
  translateY: anime.stagger(10, {grid:[14, 5], from: 'center', axis:'y'}),
  rotateZ: anime.stagger([0, 90], {grid:[14, 5], from: 'center', axis:'x'}),
  delay: anime.stagger(200, {grid:[14, 5], from: 'center'}),
  easing: 'easeInOutQuad'
})
.add({
  targets: '.square_02',
  translateX: anime.stagger(20, {grid:[14, 5], from: 'center', axis:'x'}),
  translateY: anime.stagger(20, {grid:[14, 5], from: 'center', axis:'y'}),
  rotateZ: anime.stagger([90, 180], {grid:[14, 5], from: 'center', axis:'x'}),
  delay: anime.stagger(200, {grid:[14, 5], from: 'center'}),
  easing: 'easeInOutQuad'
});


anime({
  targets: '#example-input',
  value: [0, 100],
  duration: [2000],
  round: 1, // Rundet werde auf Int's
  easing: 'linear',
  direction: 'alternate', //Lässt animation wieder rückwerts abspielen
  loop: true
})

let path = anime.path('#example-svg path')
anime({
  targets: '#square_03',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 5000,
  loop: true
})