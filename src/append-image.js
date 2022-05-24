function appendImage(imgUrl) {
  const img = document.createElement('img');
  img.width = '300'
  img.src = imgUrl
  img.alt = 'Foo Bar image'

  document.querySelector('body').appendChild(img)
}

export default appendImage