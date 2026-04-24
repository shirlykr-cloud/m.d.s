// Navigation
function openSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Chapter Loader
function openChapter(name) {
  openSection('chapter');
  document.getElementById('chapter-title').innerText = name;

  const content = {
    "Force and Pressure": "Force is a push or pull...",
    "Friction": "Friction opposes motion...",
    "Sound": "Sound is produced by vibrations...",
    "Light": "Light travels in straight lines..."
  };

  document.getElementById('chapter-content').innerText = content[name] || "Content coming soon!";
}

// Quiz
function startQuiz() {
  const quizDiv = document.getElementById("quiz");

  quizDiv.innerHTML = `
    <p>What is force?</p>
    <button onclick="checkAnswer(true)">Push/Pull</button>
    <button onclick="checkAnswer(false)">Energy</button>
  `;
}

function checkAnswer(correct) {
  if (correct) {
    alert("Correct!");
    localStorage.setItem("progress", "1");
  } else {
    alert("Try again!");
  }
}

// =========================
// THREE.JS ATOM ANIMATION
// =========================

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);
document.getElementById("3d-container").appendChild(renderer.domElement);

// nucleus
const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const nucleus = new THREE.Mesh(geometry, material);
scene.add(nucleus);

// electron
const eGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const eMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const electron = new THREE.Mesh(eGeometry, eMaterial);
scene.add(electron);

camera.position.z = 3;

let angle = 0;

function animate() {
  requestAnimationFrame(animate);

  angle += 0.02;
  electron.position.x = Math.cos(angle) * 1.5;
  electron.position.y = Math.sin(angle) * 1.5;

  renderer.render(scene, camera);
}

animate();

// =========================
// CELL MODEL (Basic)
// =========================
function loadCell() {
  openSection('chapter');
  document.getElementById('chapter-title').innerText = "Cell Structure";

  document.getElementById('chapter-content').innerHTML = `
    A cell is the basic unit of life.<br>
    <canvas id="cellCanvas" width="300" height="300"></canvas>
  `;

  const canvas = document.getElementById("cellCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#00ffcc";
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillText("Nucleus", 130, 150);
}
