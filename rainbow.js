		var zStartPosition = 4; //scene placement
		var color = ["red","orange","yellow", "green", "blue", "indigo", "violet"]; // the rainbow colours for the arch
		var zIncrement = 0.5// the step where each torus is placed
		var arc = 180; //the arc of the Tori
		var radius = 4; // the radius of the Tori
		var radiusTubular = 0.125; // the raduis of the tori's 'tube'

		for (i = 0; i<color.length; i++){
			var torus = document.createElement("a-torus");
		        torus.setAttribute("id", "torus_" + i);
		        torus.setAttribute("color", color[i]);
		        torus.setAttribute("arc", arc);
		        torus.setAttribute("radius", radius);
		        torus.setAttribute("radius-tubular", radiusTubular);
		        // Set position using Three.js for performance
	       		torus.object3D.position.set(0, 0 , -zStartPosition);
	        	zStartPosition += zIncrement;

        	// Place newly created torus in scene
        	document.getElementsByTagName("a-scene")[0].appendChild(torus);
		}
		var ground = document.createElement("a-plane");
		ground.setAttribute("id", "ground");
		ground.setAttribute("width", 9);
		ground.setAttribute("height", 5);
		ground.setAttribute("color", "#7BC8A4");
		ground.setAttribute("shadow","receive: true");
		ground.setAttribute("rotation","-90, 0, 0");

		// set rotation using Three.js for performance
		ground.object3D.position.set(0,0,-zStartPosition +1.5);
		ground.object3D.rotation.set.x = -90;

		document.getElementsByTagName("a-scene")[0].appendChild(ground);