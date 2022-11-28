export const Engine = ({ sound }) => {
  const min = 0
  const initial = 1000
  const max = 8000
  const ratio = 30

  let tachometer
  let rpm = min

  const init = () => {
    tachometer = document.querySelector('.js-tachometer-pointer')
    rpm = 1000

    setTimeout(() => {
      render()

      document.addEventListener('keydown', handleThrottle)
      document.addEventListener('keyup', handleDecelerate)

      sound.start()
      sound.setSpeed(rpm)
    }, 1000)
  }

  const render = () => {
    tachometer.style.setProperty('--rotation', (rpm * ratio) / 1000 + 240)
  }

  const handleThrottle = (event) => {
    if (event.key !== 'ArrowUp') {
      return
    }

    throttle()
    render()
    sound.setSpeed(rpm)
  }

  const throttle = () => {
    if (rpm >= max) {
      rpm -= 1000
    }

    rpm += 100
  }

  const handleDecelerate = (event) => {
    if (event.key !== 'ArrowUp') {
      return
    }

    decelerate()
    render()
    sound.setSpeed(rpm)
  }

  const decelerate = () => {
    rpm = initial
  }

  return { init }
}
