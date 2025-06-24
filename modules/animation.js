export function startAnimation(scene, camera, renderer, planets) {
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the planets around the sun
        planets.forEach(planet => {
            planet.rotation.y += 0.01; // Rotate each planet around its own axis
            planet.position.x = Math.cos(planet.orbitSpeed * Date.now() * 0.001) * planet.orbitRadius;
            planet.position.z = Math.sin(planet.orbitSpeed * Date.now() * 0.001) * planet.orbitRadius;
        });

        // renderer.render(scene, camera);
    }
    renderer.render(scene, camera);
    
    animate();
}