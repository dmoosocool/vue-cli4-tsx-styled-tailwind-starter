import { Vue, Component, Prop } from 'vue-property-decorator'
import styled from 'vue-styled-components'
import tw from 'twin.macro'

const InputProps = { hasHover: Boolean }

const Input = styled('div', InputProps)`
  ${tw`border-4 border-gray-400 bg-gray-200 box-border p-20 `}
`

const StyledLink = styled.div`
  display: inline-block;

  & > a {
    margin: 0 0.75rem;
    height: 40px;
    display: inline-block;
    color: #888888;
    text-decoration: none;
    transition: color 0.25s;
  }

  & > a.router-link-exact-active {
    color: #522cad;
  }

  & > a:hover {
    color: #522cad;
  }
`

@Component
export default class HelloWorld extends Vue {
  @Prop(String) private readonly msg: string | undefined
  protected render() {
    return (
      <div class="hello">
        <StyledLink>
          <router-link to="/about"> go to About</router-link>
        </StyledLink>

        <p>
          <Input hasHover={true}>dsadasdasdsa</Input>
          For a guide and recipes on how to configure / customize this project,
          <br />
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
            vue-cli documentation
          </a>
          .
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
              target="_blank"
              rel="noopener"
            >
              babel
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
              target="_blank"
              rel="noopener"
            >
              typescript
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
              target="_blank"
              rel="noopener"
            >
              router
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
              target="_blank"
              rel="noopener"
            >
              vuex
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
              target="_blank"
              rel="noopener"
            >
              eslint
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
              target="_blank"
              rel="noopener"
            >
              unit-mocha
            </a>
          </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank" rel="noopener">
              Core Docs
            </a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank" rel="noopener">
              Forum
            </a>
          </li>
          <li>
            <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
              Community Chat
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://news.vuejs.org" target="_blank" rel="noopener">
              News
            </a>
          </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">
              vue-router
            </a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">
              vuex
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              target="_blank"
              rel="noopener"
            >
              vue-devtools
            </a>
          </li>
          <li>
            <a
              href="https://vue-loader.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              vue-loader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
              rel="noopener"
            >
              awesome-vue
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
