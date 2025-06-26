import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.137.5/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createLights } from './lights.js';
import { createPlanets } from './planets.js';
import { startAnimation } from './animation.js';

const scene = createScene();
const camera = createCamera();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding; // Set background color to black
document.body.appendChild(renderer.domElement);

//Debugging: log the renderer
console.log("renderer:", renderer);

// Add orbit controls for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an effect that makes the camera movement smoother

// Add animation resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//Add lights to the scene
createLights(scene);
const planets = createPlanets(scene);

// Start the animation loop
startAnimation( scene, camera, renderer, planets);