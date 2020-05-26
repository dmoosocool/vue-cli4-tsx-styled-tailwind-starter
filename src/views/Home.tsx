import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld'
import Logo from '../assets/logo.png'

@Component({
  components: {
    HelloWorld
  }
})
export default class HomePage extends Vue {
  private helloWorldMsg = 'Welcome to Your Vue.js App'
  protected render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={Logo} />
        <HelloWorld msg={this.helloWorldMsg} />
      </div>
    )
  }
}
