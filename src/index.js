import helloWorld from './hello-world.js'
import appendImage from './append-image.js'

import fooBarImgJPEG from './foo-bar.jpeg'
import fooBarImgPNG from './foo-bar.png'

import AddRandomTextButton from './components/add-random-text-button/index.js'

helloWorld();
appendImage(fooBarImgJPEG);
appendImage(fooBarImgPNG);

document.body.appendChild(AddRandomTextButton())

