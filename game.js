

//Cena
const scene = new THREE.Scene();
//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
//Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
//Tamanho da tela
renderer.setSize(window.innerWidth, window.innerHeight);
//Linkar o renderizador
document.body.appendChild(renderer.domElement);

//Incluindo Cubo
//const geometry = new THREE.BoxGeometry();
//Material do cubo
//const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//Aplicar material no cubo
//const cube = new THREE.Mesh(geometry, material);
//Adicionar o cubo na tela
//scene.add(cube);
//Configurar a profundidade da camera

//Instanciar o loader
const loader = new THREE.GLTFLoader();

//Carregar modelo 3d

class carro{
    constructor(){
        loader.load("../model/scene.gltf", (gltf)=>{
            scene.add(gltf.scene);
            gltf.scene.scale.set(2, 2, 2);
            gltf.scene.position.set(0, 0, 0);
            this.carro1 = gltf.scene;
        })
    }
    cena1(){
        gsap.to(this.carro1.rotation, {y: 0, duration: 1});
        gsap.to(this.carro1.rotation, {x: 0.4, duration: 1});
    }

    cena2(){
        gsap.to(this.carro1.rotation, {y: -1.0, duration: 1});
        gsap.to(this.carro1.rotation, {x: 0.5, duration: 1});
    }

    cena3(){
        gsap.to(this.carro1.rotation, {y: 2, duration: 1});
        gsap.to(this.carro1.rotation, {x: -0.3, duration: 1});
    }

    cena4(){
        gsap.to(this.carro1.rotation, {y: -1, duration: 1});
        gsap.to(this.carro1.rotation, {x: -1, duration: 1});
    }


}

let carro1 = new carro();
setTimeout(()=> {
    carro1.atras}, 1000
);

//Add iluminação
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

renderer.setClearColor(0x383e40, 3);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

//capturar resolução da tela
window.addEventListener('resize', onWindowResize, false);

//Função responsiva
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('annotation1').style.display = "none";
    document.getElementById('annotation2').style.display = "none";
    document.getElementById('annotation3').style.display = "none";
    document.getElementById('annotation4').style.display = "none";
}
document.getElementById('annotation1').style.display = "none";
document.getElementById('annotation2').style.display = "none";
document.getElementById('annotation3').style.display = "none";
document.getElementById('annotation4').style.display = "none";

const element = document.getElementById("botao1");
element.addEventListener("click", function() {
    document.getElementById('annotation2').style.display = "none";
    document.getElementById('annotation3').style.display = "none";
    document.getElementById('annotation4').style.display = "none";
    setTimeout(function() {
        document.getElementById('annotation1').style.display = "block";
    }, 500);

    innerHTML = carro1.cena1();
});

const b2 = document.getElementById("botao2");
b2.addEventListener("click", function() {
    document.getElementById('annotation1').style.display = "none";
    document.getElementById('annotation3').style.display = "none";
    document.getElementById('annotation4').style.display = "none";
    setTimeout(function() {
        document.getElementById('annotation2').style.display = "block";
    }, 500);
    innerHTML = carro1.cena2();
});

const b3 = document.getElementById("botao3");
b3.addEventListener("click", function() {
    document.getElementById('annotation1').style.display = "none";
    document.getElementById('annotation2').style.display = "none";
    document.getElementById('annotation4').style.display = "none";
    setTimeout(function() {
        document.getElementById('annotation3').style.display = "block";
    }, 500);
    innerHTML = carro1.cena3();
});

const b4 = document.getElementById("botao4");
b4.addEventListener("click", function() {
    document.getElementById('annotation1').style.display = "none";
    document.getElementById('annotation2').style.display = "none";
    document.getElementById('annotation3').style.display = "none";
    setTimeout(function() {
        document.getElementById('annotation4').style.display = "block";
    }, 500);
    innerHTML = carro1.cena4();
});
