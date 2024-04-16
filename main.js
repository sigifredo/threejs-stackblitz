import * as THREE from 'three';
import * as dat from 'lil-gui';

const CANTIDAD_CIRCULOS = 100;
let circulos = null;

window.setup = (scene) => {
    let axes = new THREE.AxesHelper(2);
    let luzDir = new THREE.DirectionalLight(0xffffff, 3);

    let cuboGeometria = new THREE.BoxGeometry(1, 1, 1);
    let cuboMaterial = new THREE.MeshStandardMaterial({
        color: 0x0D4AD9,
    });
    let cuboMesh = new THREE.Mesh(cuboGeometria, cuboMaterial);

    let sueloGeometria = new THREE.PlaneGeometry(10, 10);
    let sueloMaterial = new THREE.MeshStandardMaterial({
        color: 0x5FDB6F
    });
    let sueloMesh = new THREE.Mesh(sueloGeometria, sueloMaterial)
    sueloMesh.rotation.x = -Math.PI / 2

    luzDir.position.x = 3;
    luzDir.position.z = 2;

    circulos = [];

    for (let i = 0; i < CANTIDAD_CIRCULOS; i++) {
        let circuloGeometria = new THREE.SphereGeometry();
        let circuloMaterial = new THREE.MeshStandardMaterial({
            wireframe: true,
        });
        let circuloMesh = new THREE.Mesh(circuloGeometria, circuloMaterial);

        circulos.push(circuloMesh);
        scene.add(circuloMesh);
    }

    scene.add(cuboMesh);
    scene.add(luzDir);
    scene.add(axes);
    scene.add(sueloMesh);
};

window.draw = (elapsedTime) => {
    circulos.forEach((circulo, i) => {
        circulo.position.x = Math.sin(elapsedTime + i) * 7;
        circulo.position.z = Math.cos(elapsedTime + i) * 7;
    })
};
