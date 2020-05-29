import { Vue, Component } from 'vue-property-decorator'
import './Btn.css'

const btnClass = 'default-tsx-btn'
@Component
export default class Btn extends Vue {
  protected render() {
    return <a class={btnClass}>{this.$slots.default}</a>
  }
}
