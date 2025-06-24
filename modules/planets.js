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

    // Create Mercury
    const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const mercuryMaterial = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        map: new THREE.TextureLoader().load('textures/mercury.jpg'), // Load a texture for Mercury
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.set(5, 0, 0); // Position Mercury at a distance of 5 units from the Sun
    scene.add(mercury);
    planets.push(mercury);

    // Create the Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        map: new THREE.TextureLoader().load('textures/earth.jpg'), // Load a texture for the Earth
    });

    const venusGeometry = new THREE.SphereGeometry(0.95, 32, 32);
    const venusMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcc00,
        map: new THREE.TextureLoader().load('textures/venus.jpg'), // Load a texture for Venus
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(7, 0, 0); // Position Venus at a distance of 7 units from the Sun
    scene.add(venus);
    planets.push(venus);

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(10, 0, 0); // Position the Earth at a distance of 10 units from the Sun
    scene.add(earth);
    planets.push(earth);

    // Create Mars
    const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const marsMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4500,
        map: new THREE.TextureLoader().load('textures/mars.jpg'), // Load a texture for Mars
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(15, 0, 0); // Position Mars at a distance
    scene.add(mars);
    planets.push(mars);

    // Create Jupiter
    const jupiterGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const jupiterMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        map: new THREE.TextureLoader().load('textures/jupiter.jpg'), // Load a texture for Jupiter
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.set(20, 0, 0); // Position Jupiter at a
    scene.add(jupiter);
    planets.push(jupiter);

    // Create Saturn
    const saturnGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const saturnMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        map: new THREE.TextureLoader().load('textures/saturn.jpg'), // Load a texture for Saturn
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.position.set(25, 0, 0); // Position Saturn at a
    scene.add(saturn);
    planets.push(saturn);

    // Create Uranus
    const uranusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const uranusMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        map: new THREE.TextureLoader().load('textures/uranus.jpg'), // Load a texture for Uranus
    });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.set(30, 0, 0); // Position Uranus at
    scene.add(uranus);
    planets.push(uranus);

    // Create Neptune
    const neptuneGeometry = new THREE.SphereGeometry(0.9, 32, 32);
    const neptuneMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        map: new THREE.TextureLoader().load('textures/neptune.jpg'), // Load a texture for Neptune
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.set(35, 0, 0); // Position Neptune at a distance of 35 units from the Sun
    scene.add(neptune);
    planets.push(neptune);
    // And finally, the dwarf planet Pluto
    const plutoGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const plutoMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888,
        map: new THREE.TextureLoader().load('textures/pluto.jpg'), // Load a texture for Pluto
    });
    const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    pluto.position.set(40, 0, 0); // Position Pluto at a
    scene.add(pluto);
    planets.push(pluto);

    return planets; // Return the array of planets for later animation or interaction
}