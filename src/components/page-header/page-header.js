import style from './page-header.scss'

export const PageHeader = (headerTitle) => {
  const header = document.createElement('h1');
  header.className = 'page-header'
  header.textContent = headerTitle
  return header;
}