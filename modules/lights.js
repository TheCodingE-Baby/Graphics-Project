import * as THREE from '../node_modules/three/build/three.module.js';

export function createLights(scene){
    // Create a directional light
    const sunLight = new THREE.PointLight(0xffffff, 2, 100);
    sunLight.position.set(0, 0, 0); // Set the position of the light
    sunLight.castShadow = true; // Enable shadows
    scene.add(sunLight);

    scene.add(new THREE.AmbientLight(0x333333)); // Add ambient light for general illumination
}