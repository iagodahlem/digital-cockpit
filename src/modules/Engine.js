export const Engine = ({ sound }) => {
  const min = 0
  const initial = 1000
  const max = 8000
  const ratio = 30

  let tachometer
  let rpm = min

  const init = () => {
    tachometer = document.querySelector('.js-tachometer-pointer')

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    setTimeout(() => {
      toggleOnOff()
    }, 1000)
  }

  const render = () => {
    tachometer.style.setProperty('--rotation', (rpm * ratio) / 1000 + 240)
  }

  const handleKeyDown = (event) => {
    switch (true) {
      case event.key === 'ArrowUp':
        throttle()
        break
      default:
        break
    }

    render()
  }

  const handleKeyUp = (event) => {
    switch (true) {
      case event.key === 'o':
        toggleOnOff()
        break
      case event.key === 'ArrowUp':
        decelerate()
        break
      default:
        break
    }

    render()
  }

  const toggleOnOff = () => {
    if (rpm > 0) {
      rpm = min
      sound.stop()
    } else {
      rpm = initial
      sound.start()
    }

    render()
    sound.setSpeed(rpm)
  }

  const throttle = () => {
    if (rpm >= max) {
      rpm -= 1000
    }

    rpm += 100

    sound.setSpeed(rpm)
  }

  const decelerate = () => {
    rpm = initial
    sound.setSpeed(rpm)
  }

  return { init }
}
