export const Sound = () => {
  let context
  let script
  let gainNode

  let currentFrame = 0
  let speed = 0.5

  let data = []
  let dataLength = 4096
  let linearLength = 30
  let smoothness = 3

  const init = () => {
    console.log({ context, script, gainNode, data })

    generate()

    context = new AudioContext()
    script = context.createScriptProcessor(1024)

    script.onaudioprocess = (event) => {
      let channel = event.outputBuffer.getChannelData(0)
      let index

      for (let i = 0; i < channel.length; i++) {
        currentFrame += speed
        index = Math.floor(currentFrame) % data.length
        channel[i] = data[index]
      }
    }

    currentFrame %= data.length

    gainNode = context.createGain()
    gainNode.gain.value = 0.5

    script.connect(gainNode)

    console.log({ context, script, gainNode, data })
  }

  const generate = () => {
    let lastValue = 0.5

    data.push(lastValue)

    for (let i = 1; i <= dataLength - linearLength; i++) {
      lastValue += (Math.random() - 0.5) / smoothness
      lastValue = Math.min(1, lastValue)
      lastValue = Math.max(-1, lastValue)
      data.push(lastValue)
    }

    let step = (0.5 - lastValue) / linearLength

    for (var j = 0; j < linearLength; j++) {
      data.push(lastValue + step * j)
    }

    data.push(0.5)
  }

  const start = () => {
    context.resume()
    gainNode.connect(context.destination)
  }

  const stop = () => {
    gainNode.disconnect(context.destination)
  }

  const setSpeed = (rpm) => {
    speed = (rpm * 0.5) / 1000

    console.log(speed)
  }

  return { init, start, stop, setSpeed }
}
