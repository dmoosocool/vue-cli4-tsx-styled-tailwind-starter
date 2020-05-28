import { Vue, Component } from 'vue-property-decorator'
import styled from 'vue-styled-components'
import tw from 'twin.macro'

const Nav = styled.nav`
  /* defualt */
  ${tw`bg-white fixed w-full shadow-md`}

  & a {
    ${tw`inline-block px-8 py-5 text-gray-900`}
    text-decoration: none;
    transition: color 0.25s;
    transition: background 0.25s;
  }

  & a:hover {
    ${tw`bg-opacity-25 text-gray-100`}
    background-color: #522cad;
  }

  & a.router-link-exact-active {
    ${tw`bg-opacity-25 text-gray-100`}
    background-color: #522cad;
  }
`

@Component
export default class Navbar extends Vue {
  render() {
    return (
      <Nav>
        <div class="container mx-auto">{this.$slots.default}</div>
      </Nav>
    )
  }
}
