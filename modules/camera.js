import * as THREE from '../node_modules/three/build/three.module.js';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, 30); // Set the camera position
    return camera;
}