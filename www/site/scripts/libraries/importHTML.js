export function importHTML(root = document, selector = 'a[data-module]') {
    const modules = root.querySelectorAll(selector);
    if (!modules.length)
        return;
    modules.forEach(module => {
        const url = module.getAttribute('href');
        if (!url)
            return;
        module.textContent = `Loading content from: ${url}`;
        const moduleHTML = fetchContent(url);
        moduleHTML.then(moduleBody => {
            importHTML(moduleBody, selector);
            if (moduleBody)
                module.replaceWith(moduleBody);
        });
    });
}
async function fetchContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(response.statusText);
        const data = await response.text();
        const template = document.createElement('template');
        template.innerHTML = data;
        return template.content;
    }
    catch (error) {
        throw new Error(error);
    }
}
