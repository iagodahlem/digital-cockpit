export const Transmission = () => {
  const up = 'ArrowRight'
  const down = 'ArrowLeft'

  const gears = ['P', 'R', 'N', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6']

  let element
  let currentGear = 0

  const init = () => {
    element = document.querySelector('.js-gear')

    render()

    document.addEventListener('keyup', handleSwitchGears)
  }

  const render = () => {
    element.innerText = gears[currentGear]
  }

  const handleSwitchGears = (event) => {
    switch (true) {
      case event.key === up:
        switchUp()
        break
      case event.key === down:
        switchDown()
        break
      default:
        break
    }

    render()
  }

  const switchUp = () => {
    const lastGear = gears.length - 1

    if (currentGear === lastGear) {
      return
    }

    currentGear++
  }

  const switchDown = () => {
    const firstGear = 0

    if (currentGear === firstGear) {
      return
    }

    currentGear--
  }

  return { init, gear: gears[currentGear] }
}
