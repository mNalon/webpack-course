// decoratorsBeforeExport: true
import style from './page-footer.css'

function logCall() {
  console.log(`getName was called`)
}

class Author {
  constructor(name) {
    this.name = name
  }

  @logCall
  getName() {
    return `${this.name}`
  }
}

const author = new Author('Nalon')

export const PageFooter = () => {
  const div = document.createElement('div')
  div.textContent = `Author: ${author.getName()}`
  div.className = 'page-footer'

  return div
}