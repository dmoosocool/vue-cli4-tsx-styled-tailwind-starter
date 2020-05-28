import { injectGlobal } from 'vue-styled-components'
import tw from 'twin.macro'
import './tailwind.css'

import Bg1 from './assets/bg/1.jpg'
import Bg2 from './assets/bg/2.jpg'
import Bg3 from './assets/bg/3.jpg'

const bgArr = [Bg1, Bg2, Bg3]
const RandomBg = bgArr[Math.floor(Math.random() * bgArr.length)]

export default injectGlobal`
  @page {
    size: auto a4 portrait; /* auto is the initial value */
    margin: 0mm;  /* this affects the margin in the printer settings */
  }

  html {
    margin: 0mm;  /* this affects the margin in the printer settings */
    overflow-x: hidden;
  }

  body {
    ${tw`font-sans text-gray-900 w-full h-full overflow-x-hidden`};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    -webkit-text-size-adjust: 100%;
    
    background-image: url("${RandomBg}");
  }

  h1,h2,h3,h4,h5,h6 {
    ${tw`font-bold`}
  }
`
