import 'virtual:fonts.css'
import './index.css'

import { Clock } from './modules/Clock'
import { Sound } from './modules/Sound'
import { Transmission } from './modules/Transmission'
import { Engine } from './modules/Engine'

const clock = Clock()
const sound = Sound()
const transmission = Transmission()
const engine = Engine({ sound })

document.addEventListener('DOMContentLoaded', () => {
  clock.init()
  sound.init()
  transmission.init()
  engine.init()
})
