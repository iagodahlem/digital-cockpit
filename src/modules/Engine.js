export const Engine = () => {
  const min = 0
  const initial = 1000
  const max = 8000
  const ratio = 30

  let rotation = 0
  let tachometer

  const init = () => {
    rotation = 1000
    tachometer = document.querySelector('.js-tachometer-pointer')

    render()

    document.addEventListener('keydown', handleThrottle)
    document.addEventListener('keyup', handleDecelerate)
  }

  const render = () => {
    tachometer.style.setProperty('--rotation', (rotation * ratio) / 1000 + 240)
  }

  const handleThrottle = (event) => {
    switch (true) {
      case event.key === 'ArrowUp':
        throttle()
        render()
        break
      default:
        break
    }
  }

  const throttle = () => {
    console.log(rotation)

    if (rotation > 7000) {
      rotation -= 2000
    }

    rotation += rotation / 10
  }

  const handleDecelerate = (event) => {
    switch (true) {
      case event.key === 'ArrowUp':
        decelerate()
        render()
        break
      default:
        break
    }
  }

  const decelerate = () => {
    rotation = initial
  }

  return { init }
}
