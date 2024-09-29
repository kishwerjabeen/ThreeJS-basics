// 1. Create a scene
  const scene = new THREE.Scene();

//  2-  object 

const geometry = new THREE.BoxGeometry(2, 2, 2);
const matrial = new THREE.MeshBasicMaterial({ color: "red" }); //object lata hay

// ya in do property ko combine karta hay 
const mesh = new THREE.Mesh(geometry, matrial);

// Add mesh to scene
scene.add(mesh);

// 3- camera

// ak object banygae
const size = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

// camera ko position batana hay
camera.position.z = 4;
camera.position.x = 2;

// Add cam to scene
scene.add(camera);


// 4- render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas : canvas });

// render ko size batna hoga 
renderer.setSize(size.width, size.height);

// director ko scene or cam daygae 
renderer.render(scene, camera);