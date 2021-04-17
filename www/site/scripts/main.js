import { importHTML } from './libraries/importHTML.js'
document.addEventListener('DOMContentLoader', Init())

function Init() {
  console.clear()

  console.info('Site Running...')

  // Import HTML sections
  importHTML()
}
