import { importHTML } from './libraries/importHTML.js'
document.addEventListener('DOMContentLoader', Init())

function Init() {
  console.info('Site Running...')
  // Import html async
  importHTML()
}
