const texts = ['foo', 'bar', 'baz', 'qux']

import style from './add-random-text-button.css'

const AddRandomTextButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Add Text';
  button.className = 'add-random-text-button';
  button.onclick = () => {
    const p = document.createElement('p')
    p.textContent = texts[Math.round(Math.random() * 4)]
    document.body.appendChild(p)
  }

  return button;
}

export default AddRandomTextButton