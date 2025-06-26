export function createPlanets(scene){
    const planets = [];

    // Create the Sun
    const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_sun.jpg') // Load a texture for the Sun (we'll fix that later)
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create Mercury
    const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const mercuryMaterial = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        map: new THREE.TextureLoader().load('./assets/Textures/8k_mercury.jpg'), // Load a texture for Mercury
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.set(5, 0, 0); // Position Mercury at a distance of 5 units from the Sun
    mercury.orbitSpeed = 0.02;
    mercury.orbitRadius = 5; // Set the orbit radius for Mercury
    scene.add(mercury);
    planets.push(mercury);

    // Create Venus
    const venusGeometry = new THREE.SphereGeometry(0.95, 32, 32);
    const venusMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcc00,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_venus_surface.jpg'), // Load a texture for Venus
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(7, 0, 0); // Position Venus at a distance of 7 units from the Sun
    venus.orbitSpeed = 0.01;
    venus.orbitRadius = 7; // Set the orbit radius for Venus
    scene.add(venus);
    planets.push(venus);

    // Create the Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_earth_daymap.jpg'), // Load a texture for the Earth
    });


    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(10, 0, 0); // Position the Earth at a distance of 10 units from the Sun
    earth.orbitSpeed = 0.005;
    earth.orbitRadius = 10; // Set the orbit radius for Earth
    scene.add(earth);
    planets.push(earth);

    // Create Mars
    const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const marsMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4500,
        map: new THREE.TextureLoader().load('./assets/Textures/8k_mars.jpg'), // Load a texture for Mars
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(15, 0, 0); // Position Mars at a distance of 15 units from the Sun
    mars.orbitSpeed = 0.003;
    mars.orbitRadius = 15; // Set the orbit radius for Mars
    scene.add(mars);
    planets.push(mars);

    // Create Jupiter
    const jupiterGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const jupiterMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        map: new THREE.TextureLoader().load('./assets/Textures/8k_jupiter.jpg'), // Load a texture for Jupiter
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.set(20, 0, 0); // Position Jupiter at a distance of 20 units from the Sun
    jupiter.orbitSpeed = 0.001;
    jupiter.orbitRadius = 20; // Set the orbit radius for Jupiter
    scene.add(jupiter);
    planets.push(jupiter);

    // Create Saturn
    const saturnGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const saturnMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_saturn.jpg'), // Load a texture for Saturn
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.position.set(25, 0, 0); // Position Saturn at a distance of 25 units from the Sun
    saturn.orbitSpeed = 0.0008;
    saturn.orbitRadius = 25; // Set the orbit radius for Saturn
    scene.add(saturn);
    planets.push(saturn);

    // Create Uranus
    const uranusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const uranusMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_uranus.jpg'), // Load a texture for Uranus
    });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.set(30, 0, 0); // Position Uranus at a distance of 30 units from the Sun
    uranus.orbitSpeed = 0.0007;
    uranus.orbitRadius = 30; // Set the orbit radius for Uranus
    scene.add(uranus);
    planets.push(uranus);

    // Create Neptune
    const neptuneGeometry = new THREE.SphereGeometry(0.9, 32, 32);
    const neptuneMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        map: new THREE.TextureLoader().load('./assets/Textures/2k_neptune.jpg'), // Load a texture for Neptune
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.set(35, 0, 0); // Position Neptune at a distance of 35 units from the Sun
    neptune.orbitSpeed = 0.0005;
    neptune.orbitRadius = 35; // Set the orbit radius for Neptune
    scene.add(neptune);
    planets.push(neptune);
    // And finally, the dwarf planet Pluto
    const plutoGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const plutoMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888,
        map: new THREE.TextureLoader().load(''), // Load a texture for Pluto
    });
    const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    pluto.position.set(40, 0, 0); // Position Pluto at a distance of 40 units from the Sun
    pluto.orbitSpeed = 0.0003;
    pluto.orbitRadius = 40; // Set the orbit radius for Pluto
    scene.add(pluto);
    planets.push(pluto);

    return planets; // Return the array of planets for later animation or interaction
}