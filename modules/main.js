import * as THREE from '../node_modules/three/build/three.module.js';
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createLights } from './lights.js';
import { createPlanets } from './planets.js';
import { startAnimation } from './animation.js';

const scene = createScene();
const camera = createCamera();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Add lights to the scene
createLights(scene);
const planets = createPlanets(scene);

// Start the animation loop
startAnimation(renderer, scene, camera, planets);