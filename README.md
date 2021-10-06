# Camera Tracking from Cinema4D to Three.js

https://user-images.githubusercontent.com/1425497/136127412-7d72c42a-54ac-471f-8b4f-9e2d4f2bdbd7.mp4

This was an experiment to figure out a camera tracking workflow between Cinema 4D and Three.js, for the purpose of creating quasi-augmented reality Three.js experiments. The results aren't perfect, but the test demonstrates WebGL and HTML elements matched to an underlying footage plate. 

The process was:

* Shoot live footage
* Import into Cinema4D, generate camera track, and create a few test objects.
* Export camera data and test objects to Collada file.
* Import Collada file into Three.js scene
* Place video elemet in background
* Sync Three.js animation loop to video playback
* Import Collada file and use embedded camera
* Add a few elements to the Three.js scene
* Hit play, and watch the Three.js elements match the real world footage movement!
