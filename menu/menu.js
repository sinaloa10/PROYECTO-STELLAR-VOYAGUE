import './style_menu.css';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { MeshBasicMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// Fondo esférico
const backgroundTexture = new THREE.TextureLoader().load('../images/fondo.png');
const backgroundSphereGeometry = new THREE.SphereGeometry(500, 60, 40);
const backgroundSphereMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture, side: THREE.BackSide });
const backgroundSphere = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial);
scene.add(backgroundSphere);

// Esferas
const textureLoader = new THREE.TextureLoader();
const sphereTextures = ['../images/moon.jpg', '../images/venus.jpg', '../images/mercurio.jpg', '../images/marte.jpg'];

const geometry = new THREE.SphereGeometry();
const sphereMaterials = sphereTextures.map(texturePath => {
    const texture = textureLoader.load(texturePath);
    return new THREE.MeshStandardMaterial({ map: texture });
});

const sphereCount = 4;
const separation = 8;

for (let i = 0; i < sphereCount; i++) {
    const sphere = new THREE.Mesh(geometry, sphereMaterials[i]); // Usa el material correspondiente a cada esfera
    sphere.position.x = (i - (sphereCount - 1) / 2) * separation;
    scene.add(sphere);
}

camera.position.z = 10;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);


function animate() {
  requestAnimationFrame(animate);

  // Rotar las esferas y el fondo esférico
  scene.children.forEach(child => {
      if (child instanceof THREE.Mesh) {
          child.rotation.z += 0.00001;
          child.rotation.x += 0.00001;
      }
  });
  backgroundSphere.rotation.z += 0.0002; // Ajusta la velocidad de rotación del fondo esférico
  backgroundSphere.rotation.x += 0.0002;

  renderer.render(scene, camera);
}

animate();