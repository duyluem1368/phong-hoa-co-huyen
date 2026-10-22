import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js';

const host = document.querySelector('#lab-3d-stage');
const bench = document.querySelector('.bench');

try {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 3.2, 9.2);
  camera.lookAt(0, 0.4, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.prepend(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xe9f6ff, 0x765c43, 2.25));
  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(-4, 7, 6); keyLight.castShadow = true; scene.add(keyLight);
  const purpleLight = new THREE.PointLight(0xb39aff, 12, 9);
  purpleLight.position.set(4, 4, 2); scene.add(purpleLight);

  const table = new THREE.Mesh(
    new THREE.BoxGeometry(12, .35, 5),
    new THREE.MeshStandardMaterial({ color: 0xbca780, roughness: .72, metalness: .02 })
  );
  table.position.set(0, -1.72, 0); table.receiveShadow = true; scene.add(table);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), new THREE.MeshStandardMaterial({ color: 0xe9eff1, roughness: .95 }));
  back.position.set(0, 1.7, -2.3); scene.add(back);

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xe8faff, transmission: .94, transparent: true, opacity: .42,
    roughness: .04, metalness: 0, thickness: .18, ior: 1.46,
    clearcoat: 1, clearcoatRoughness: .05, side: THREE.DoubleSide
  });
  const liquidMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x9fd9e6, transparent: true, opacity: .86, roughness: .16,
    metalness: 0, transmission: .12, clearcoat: .55
  });

  const vessel = new THREE.Group(); vessel.position.set(1.35, -.22, 0); scene.add(vessel);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.15, .92, 2.45, 64, 1, true), glassMaterial);
  glass.castShadow = true; vessel.add(glass);
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(.92, 64), glassMaterial);
  bottom.rotation.x = -Math.PI / 2; bottom.position.y = -1.23; vessel.add(bottom);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.15, .055, 18, 64), new THREE.MeshPhysicalMaterial({ color:0xeaffff, transmission:.85, roughness:.04, transparent:true, opacity:.72 }));
  rim.rotation.x = Math.PI / 2; rim.position.y = 1.23; vessel.add(rim);
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(.92, .84, .82, 64), liquidMaterial);
  liquid.position.y = -.8; liquid.castShadow = true; vessel.add(liquid);
  const surface = new THREE.Mesh(new THREE.CircleGeometry(.92, 64), liquidMaterial);
  surface.rotation.x = -Math.PI / 2; surface.position.y = -.38; vessel.add(surface);

  const flask = new THREE.Group(); flask.position.set(-2.55, -.75, .05); scene.add(flask);
  const flaskBody = new THREE.Mesh(new THREE.SphereGeometry(.62, 48, 32, 0, Math.PI*2, 0, Math.PI*.72), glassMaterial);
  flaskBody.scale.set(1, 1.12, 1); flaskBody.castShadow = true; flask.add(flaskBody);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(.22,.27,.95,40,1,true),glassMaterial);
  neck.position.y=.78; flask.add(neck);
  const flaskRim = new THREE.Mesh(new THREE.TorusGeometry(.22,.035,14,40),glassMaterial);
  flaskRim.rotation.x=Math.PI/2;flaskRim.position.y=1.26;flask.add(flaskRim);
  const flaskLiquidMaterial=liquidMaterial.clone();flaskLiquidMaterial.color.set(0x9fd9e6);
  const flaskLiquid=new THREE.Mesh(new THREE.SphereGeometry(.49,40,24,0,Math.PI*2,Math.PI*.38,Math.PI*.38),flaskLiquidMaterial);
  flaskLiquid.position.y=-.18;flask.add(flaskLiquid);

  const streamMaterial = liquidMaterial.clone();
  const stream = new THREE.Mesh(new THREE.CylinderGeometry(.055,.075,2.2,18),streamMaterial);
  stream.position.set(-.1,.9,0); stream.rotation.z=-.42; stream.visible=false; scene.add(stream);

  const flameGroup = new THREE.Group(); flameGroup.position.set(1.35,-1.28,0); scene.add(flameGroup);
  const burner = new THREE.Mesh(new THREE.CylinderGeometry(.55,.65,.25,40),new THREE.MeshStandardMaterial({color:0x414d59,metalness:.7,roughness:.25}));flameGroup.add(burner);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.24,.78,32),new THREE.MeshBasicMaterial({color:0xff8c35,transparent:true,opacity:.9}));
  flame.position.y=.5;flame.visible=false;flameGroup.add(flame);

  const particleGeometry = new THREE.SphereGeometry(.07, 16, 12);
  const gasParticles = Array.from({length:24}, (_,i) => {
    const mesh=new THREE.Mesh(particleGeometry,new THREE.MeshPhysicalMaterial({color:0xffffff,transparent:true,opacity:.62,transmission:.4}));
    mesh.userData={seed:i*.77,speed:.45+(i%5)*.08};mesh.visible=false;scene.add(mesh);return mesh;
  });
  const precipitate = Array.from({length:55},(_,i)=>{
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(.035+(i%3)*.012,10,8),new THREE.MeshStandardMaterial({color:0xf4f2e9,roughness:.9}));
    mesh.userData={seed:i*1.37,speed:.28+(i%7)*.025};mesh.visible=false;scene.add(mesh);return mesh;
  });
  const sparks = Array.from({length:30},(_,i)=>{
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(.035,8,6),new THREE.MeshBasicMaterial({color:i%2?0xffd45d:0xff7b39}));
    mesh.userData={seed:i*.63,speed:.75+(i%6)*.1};mesh.visible=false;scene.add(mesh);return mesh;
  });

  let mode='idle', start=0, resultType='none', reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock=new THREE.Clock();
  function hexColor(value){try{return new THREE.Color(value)}catch{return new THREE.Color('#cfeef1')}}
  function hideParticles(){[...gasParticles,...precipitate,...sparks].forEach(p=>p.visible=false);flame.visible=false;}
  function reset(){mode='idle';resultType='none';start=performance.now();hideParticles();liquidMaterial.color.set('#9fd9e6');flask.position.set(-2.55,-.75,.05);flask.rotation.set(0,0,0);flask.scale.setScalar(1);stream.visible=false;liquid.scale.y=1;surface.position.y=-.38;vessel.rotation.set(0,0,0);}
  function pour(color){reset();mode='pour';start=performance.now();flaskLiquidMaterial.color.copy(hexColor(color));streamMaterial.color.copy(hexColor(color));if(reduced){flask.position.set(-1.15,.55,0);flask.rotation.z=-1.05;stream.visible=true;}}
  function react({type,color,condition}){mode='react';resultType=type;start=performance.now();liquidMaterial.color.copy(hexColor(color));flask.position.set(-2.55,-.75,.05);flask.rotation.z=0;stream.visible=false;flame.visible=type==='heat'||condition==='heat'||condition==='burn';if(type==='gas')gasParticles.forEach(p=>p.visible=true);if(type==='precipitate')precipitate.forEach(p=>p.visible=true);if(type==='heat')sparks.forEach(p=>p.visible=true);}

  function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
  new ResizeObserver(resize).observe(host);resize();
  function animate(){requestAnimationFrame(animate);const t=clock.getElapsedTime(),elapsed=(performance.now()-start)/1000;
    if(mode==='pour'&&!reduced){const p=Math.min(elapsed/1.5,1),lift=Math.sin(p*Math.PI);flask.position.set(-2.55+1.5*lift,-.75+1.65*lift,.05);flask.rotation.z=-1.08*lift;stream.visible=p>.22&&p<.8;stream.scale.y=Math.sin(Math.min(1,(p-.22)*3)*Math.PI);liquid.rotation.z=Math.sin(t*8)*.025;}
    if(mode==='react'&&!reduced){surface.scale.setScalar(1+Math.sin(t*5)*.025);liquid.scale.y=1+Math.sin(t*4)*.035;
      if(resultType==='gas')gasParticles.forEach((p,i)=>{const u=(elapsed*p.userData.speed+p.userData.seed)%2.5;p.position.set(1.35+Math.sin(i*2.3)*.62,-.65+u,Math.cos(i*1.7)*.55);p.scale.setScalar(.65+u*.22);p.material.opacity=Math.max(0,.72-u*.2);});
      if(resultType==='precipitate')precipitate.forEach((p,i)=>{const u=Math.min(1,elapsed*p.userData.speed+(i%9)*.035);p.position.set(1.35+Math.sin(i*5.1)*.68,.2-u*1.45,Math.cos(i*3.2)*.52);p.rotation.y=t+i;});
      if(resultType==='heat'){vessel.rotation.z=Math.sin(t*19)*.012;sparks.forEach((p,i)=>{const u=(elapsed*p.userData.speed+p.userData.seed)%1.5;p.position.set(1.35+Math.sin(i*4.4)*u*.55,-1+u*1.75,Math.cos(i*2.8)*.35);p.material.opacity=1-u/1.5;});flame.scale.y=.85+Math.sin(t*12)*.18;}
    }
    renderer.render(scene,camera);
  }
  reset();animate();bench.classList.add('webgl-ready');window.lab3D={reset,pour,react};
} catch (error) {
  console.warn('WebGL 3D unavailable; using CSS fallback.', error);
  host.remove();
}
