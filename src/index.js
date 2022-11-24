import { Clock } from './modules/Clock'
import { Transmission } from './modules/Transmission'
import { Engine } from './modules/Engine'

const clock = Clock()
const transmission = Transmission()
const engine = Engine()

document.addEventListener('DOMContentLoaded', () => {
  clock.init()
  transmission.init()
  engine.init()
})
