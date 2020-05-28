import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld'
import Logo from '../assets/vue.logo.png'
import TailwindLogo from '../assets/tailwind.logo.svg'
import styled from 'vue-styled-components'
import tw from 'twin.macro'
const HomeLogo = styled.img`
  ${tw`w-12 h-12 inline-block`}
`
@Component({
  components: {
    HelloWorld
  }
})
export default class HomePage extends Vue {
  private helloWorldMsg = 'Welcome to Your Vue.js App'
  protected render() {
    return (
      <div>
        <div class="px-8 py-12">
          <HomeLogo alt="Vue logo" src={Logo} />
          <HomeLogo alt="Vue logo" src={TailwindLogo} />
        </div>
        <HelloWorld msg={this.helloWorldMsg} />
      </div>
    )
  }
}
