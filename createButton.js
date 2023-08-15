const createButton = (content = '', onclick = () => { }, buttonClassNames = [], element = 'button') => {
    const button = document.createElement(element)

    buttonClassNames.forEach(className => button.classList.add(className))

    button.innerHTML = content;
    button.onclick = onclick;

    return button
}