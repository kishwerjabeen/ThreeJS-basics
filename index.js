


// ak scene banya 
let scene = new THREE.Scene();

// ab ak cam chaye 
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);

// cam pechy mver karna hoga

camera.position.z = 5;



// ab scean mae cam add kariengae 
scene.add(camera);

// now we need mesh gemotroy etc 

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
let mesh = new THREE.Mesh(box, material);


// mesh ko ab move kary gae x y or z mae 
// Note: 3js mae revers hay bottom mae lana ha to negitive valye dani hoage
// mesh.position.x=3;
// mesh.position.y=1;
// mesh.position.z=4; //bilkul apkay face kay samny hay


// mesh rotation 
// Key point : jas axix per rotation kariengae os acces per samjo ak dandi daldo or oskay ird gird rotatate hog
// mesh.rotation.x = 0.5;
// mesh.rotation.y = 1;
// mesh.rotation.z = 0.5;




// Math Pi (if 180 degree 3.14)
// mesh.rotation.y = Math.PI; // 180 degree
// mesh.rotation.y = Math.PI / 2; // 90 degree
// mesh.rotation.y = Math.PI / 4; // 45 degree



scene.add(mesh);


const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// animation

function animate() {
// jatni apki window ki speed ha otan chalo
    window.requestAnimationFrame(animate);
// picture click hoge or chalta jayega
    renderer.render(scene, camera);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}
animate();

// oper wala funtion ap ka laptop ki speed per cahlyga 

// ab asko aksa karty ha chaye 60fps ho ya 30 sba per same spped per chalu 