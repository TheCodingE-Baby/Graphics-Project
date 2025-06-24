import * as THREE from '../node_modules/three/build/three.module.js';

export function createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background color to black
    return scene;
}