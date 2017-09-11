(function(){
	// Definición de escena, cámara y render	
	let scene = new THREE.Scene();

	// Radio automático dependiendo del dispositivo
	const aspectRatio = window.innerWidth / window.innerHeight;

	// Existen varios tipos de cámara
	// Params: rango de vista, el radio, cercanía (near y far)
	let camera = new THREE.PerspectiveCamera(75,aspectRatio, 0.1, 100);

	// Render
	let renderer = new THREE.WebGLRenderer();

	// Se indica que la animación tome todo el largo y ancho de la pantalla
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);


	camera.position.z = 2;
	camera.position.y = 0;
	camera.position.x = 0;


	// Para poner algo en pantalla se requiere de una geometría y 
	// un material, para formar un mesh
	
	// La geometría define la forma 
	let geometry = new THREE.BoxGeometry(1,1,1);
	// Existen varios tipos de materiales
	let groundMaterial = new THREE.MeshPhongMaterial({
		color: 0x333333
	});
	// Sólo hay un tipo de mesh
	let mesh = new THREE.Mesh(geometry, groundMaterial);

	// Se agrega a la escena
	scene.add(mesh);

	// Se crea una luz porque sino no se ve nada.
	let pointLigth = new THREE.PointLight(0xdfebff);

	pointLigth.position.y =30;

	// Luz de ambiente

	scene.add(new THREE.AmbientLight(0x404040));

	scene.add(pointLigth);

	scene.background = new THREE.Color(0xeeeeee);

	function loop(){
		// De alguna manera se deben configurar la cantidad de FPS
		// para mostrar las animaciones, esto se puede hacer de manera 
		// automática según sea el dispositivo (PC, móvil, etc)
		// Calcula el tiempo que necesita para ejecutar un nuevo fotograma
		requestAnimationFrame(loop);
		mesh.rotation.y += 0.01;
		mesh.rotation.z += 0.03;
		renderer.render(scene, camera);
	}

	loop();

})();