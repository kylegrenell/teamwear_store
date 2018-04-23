import $ from 'jquery';
import Tilt  from './tilt.jquery.min.js';

$('.js-tilt-contact').tilt({
  scale: 1.15,
  maxTilt: 20,
  perspective: 350
});

$('.js-tilt-collections').tilt({
  scale: 1,
  maxTilt: 7,
  glare: true,
  maxGlare: .5
});