import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AboutPage extends Vue {
  public render() {
    return (
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    )
  }
}
