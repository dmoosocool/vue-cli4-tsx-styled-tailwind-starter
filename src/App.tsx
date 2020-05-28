import { Vue, Component } from 'vue-property-decorator'

import Layout from './components/Layout'
import Navbar from './components/Navbar'
@Component
export default class App extends Vue {
  protected render() {
    return (
      <div>
        <Navbar>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </Navbar>
        <Layout>
          <router-view />
        </Layout>
      </div>
    )
  }
}
