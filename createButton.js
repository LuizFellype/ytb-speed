const createButton = (getMenuList, closeMenu, buttonClassNames = graphicsButtonClassNames) => (content = '', positionOnList, onclick = () => { }) => {
    const button = document.createElement("button")

    buttonClassNames.forEach(className => button.classList.add(className))
    button.innerHTML = content;
    button.onclick = positionOnList !== undefined ? () => {
        const menuList = getMenuList()
        menuList[positionOnList]?.click();
        closeMenu && closeMenu()
    } : onclick

    return button
}