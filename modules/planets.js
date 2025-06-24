export function createPlanets(scene){
    const planets = [];

    // Create the Sun
    const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        map: new THREE.TextureLoader().load('textures/sun.jpg') // Load a texture for the Sun (we'll fix that later)
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create the Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        map: new THREE.TextureLoader().load('textures/earth.jpg'), // Load a texture for the Earth
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(10, 0, 0); // Position the Earth at a distance of 10 units from the Sun
    scene.add(earth);
    planets.push(earth);

    return planets; // Return the array of planets for later animation or interaction
}