import fooBarImg from './foo-bar.jpeg'

function appendImage() {
  const img = document.createElement('img');
  img.width = '300'
  img.src = fooBarImg
  img.alt = 'Foo Bar image'

  document.querySelector('body').appendChild(img)
}

export default appendImage