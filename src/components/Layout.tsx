import { Vue, Component } from 'vue-property-decorator'
import styled from 'vue-styled-components'
import GlobalStyles from '../global-style'
import tw from 'twin.macro'

import './Layout.css'
import '../tailwind.css'

const Main = styled.main`
  ${tw`pt-16 pb-8 px-8 m-0 container mx-auto bg-white shadow-2xl`}
  min-height: 100vh;
`

@Component
export default class Layout extends Vue {
  protected render() {
    return (
      <div>
        <GlobalStyles />
        <Main>{this.$slots.default}</Main>
      </div>
    )
  }
}
