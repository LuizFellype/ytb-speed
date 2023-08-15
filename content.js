const increaseCurrentTimeframeFont = () => {
  document.getElementsByClassName('items__timeframe')[0].style.fontSize = '13px'
}

const shortcutsWrapperClassName = 'shortcuts-wrapper'
const createShortcutWrapper = () => {
  const shortcutsWrapper = document.createElement("div")
  shortcutsWrapper.classList.add(shortcutsWrapperClassName)

  return shortcutsWrapper
}

const createSpeedsShortcuts = (speedNumbers = []) => {
  const shortcutsWrapper = createShortcutWrapper()
  
  speedNumbers.forEach((speed) => {
    const button = createButton(`${speed}`, () => document.getElementsByTagName('video')[0].playbackRate = speed, ['speed-shortcut'])
    shortcutsWrapper.appendChild(button)
  })
  

  return shortcutsWrapper
}

// main execution
let findAnchor = setInterval(() => {
  const videoOpen = document.getElementsByTagName('video')[0]

  if (videoOpen) {
    const injectShortcuts = () => {
      const shortcutsWrapper = createSpeedsShortcuts([1.3, 1.5, 1.7, 2])

      const leftSidebarSettings = document.querySelector(".ytp-left-controls")
      leftSidebarSettings.appendChild(shortcutsWrapper)
    }

    try {
      clearInterval(findAnchor)

      injectShortcuts()

    } catch (error) {
      console.log('YTB >>> error', { error })
    }
  }
}, 1000);