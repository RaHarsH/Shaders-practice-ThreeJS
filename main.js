import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import vertex from './shaders/vertexShader.glsl'
import fragment from './shaders/fragmentShader.glsl'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 5;

const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: { value: 0 },
  }
})

const plane = new THREE.Mesh(geometry, material)

scene.add(plane);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const clock = new THREE.Clock();

const animate = () => {
  material.uniforms.uTime.value = clock.getElapsedTime()
  controls.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()