import fooBarText from './foo-bar.txt'

function appendImage(imgUrl) {
  const img = document.createElement('img');
  img.width = '300'
  img.src = imgUrl
  img.alt = fooBarText

  document.querySelector('body').appendChild(img)
}

export default appendImage