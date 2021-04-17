export function importHTML(root: Document | DocumentFragment = document, selector: string = 'a[data-module]') {
    const modules = root.querySelectorAll(selector)

    if (!modules.length) return

    modules.forEach(module => {
        // Get href value
        const url = module.getAttribute('href')
        if (!url) return

        // Display text to user
        module.textContent = `Loading content from: ${url}`

        //Get inner HTML
        const moduleHTML = fetchContent(url)
        // Check if content has more modules then parse recursively
        moduleHTML.then(moduleBody => {

            importHTML(moduleBody, selector)

            // Replace module element with your content
            if (moduleBody) module.replaceWith(moduleBody)
        })
    })
}

async function fetchContent(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(response.statusText)
        const data = await response.text()
        const template = document.createElement('template')
        //template.append(data)
        template.innerHTML = data
        return template.content
    } catch (error) {
        throw new Error(error)
    }
}