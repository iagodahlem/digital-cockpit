export const Clock = () => {
  let element

  const init = () => {
    element = document.querySelector('.js-clock')

    render()

    setInterval(() => {
      render()
    }, 1000)
  }

  const render = () => {
    element.innerText = parseDate()
  }

  const parseDate = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return `${hour}:${minutes}`
  }

  return { init }
}
