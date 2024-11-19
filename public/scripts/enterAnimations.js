const initEnterAnimation = () => {
  const enterElements = document.querySelectorAll('.enter-animation')
  const enteredMap = {}
  const scrollEventListener = () => {
    enterElements.forEach((element, index) => {
      if (enteredMap[index])
        return
      if (element.getBoundingClientRect().top - window.innerHeight * 7 / 8 < 0) {
        element.classList.add('show')
        enteredMap[index] = true
      }
    })
    if (enterElements.length === Object.keys(enteredMap).length)
      window.removeEventListener('scroll', scrollEventListener)
  }
  window.addEventListener('scroll', scrollEventListener)
  scrollEventListener()
  return () => window.removeEventListener('scroll', scrollEventListener)
}

initEnterAnimation()
