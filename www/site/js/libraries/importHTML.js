export function importHTML(root = document, selector = 'a[data-module]') {
  // Get all modules to import
  const modules = root.querySelectorAll(selector)

  // Iterate over modules to replace
  modules.forEach(module => {
    const url = module.getAttribute('href')
    module.textContent = `Loading page "${url}"`
    if (url) {
      const moduleContent = getHTMLContent(url)
      moduleContent.then(data => {
        // If data has elements
        if (data.childElementCount > 0) {
          importHTML(data)
          module.parentElement.replaceChild(data, module)
        }
      })
    }
  })
}

// Function to get content of module
async function getHTMLContent(url) {
  try {
    const response = await fetch(url)
    // Manage error
    if (!response.ok) throw Error(`${url} ${response.status} ${response.statusText}`)
    const data = await response.text()
    // Create template and add data
    const template = document.createElement('template')
    template.innerHTML = data
    return template.content
  } catch (error) {
    console.error(error)
    return
  }
}
