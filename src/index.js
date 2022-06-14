import helloWorld from './hello-world.js'
import appendImage from './append-image.js'

import fooBarImgJPEG from './foo-bar.jpeg'
import fooBarImgPNG from './foo-bar.png'

import AddRandomTextButton from './components/add-random-text-button/index.js'
import { PageHeader } from './components/page-header/index.js'

helloWorld();

document.body.appendChild(PageHeader('Webpack 5 course!'))

appendImage(fooBarImgJPEG);
appendImage(fooBarImgPNG);

document.body.appendChild(AddRandomTextButton())

