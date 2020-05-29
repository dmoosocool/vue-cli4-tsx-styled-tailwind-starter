import { Vue, Component } from 'vue-property-decorator'
import styled from 'vue-styled-components'
import tw from 'twin.macro'
import VueLogo from '../assets/brands-logo/VueJs.png'
import TailwindLogo from '../assets/brands-logo/TailwindCSS.png'
import StyledLogo from '../assets/brands-logo/Styled-Components.png'
import TypescriptLogo from '../assets/brands-logo/Typescript.png'

import DefaultBtn from '../components/Btn'

import Example1 from '../assets/example_code/example1.png'
import Example2 from '../assets/example_code/example2.png'
import Example3 from '../assets/example_code/example3.png'
import Example4 from '../assets/example_code/example4.png'
import Example4Css from '../assets/example_code/example4_css.png'
import Example5 from '../assets/example_code/example5.png'

const HomeLogo = styled.img`
  ${tw`object-cover inline-block cursor-pointer shadow`}
`

const Title = styled.h1`
  ${tw`text-black text-4xl antialiased font-thin border-gray-400 border-solid border-b`}
`

const SubTitle = styled.h2`
  ${tw`text-black text-2xl antialiased font-thin`}
`

const Wrapper = styled.div`
  ${tw`px-8 py-12 p-20`}
`

const Container = styled.div`
  ${tw`p-4`}
`

const Btn = styled.a`
  background-color: #41b883;
  display: inline-block;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: #522cad;
  }
`

const BorderBtn = styled(Btn)`
  border-radius: 5px;
`

const TwBtn = styled.a`
  ${tw`bg-green-500 inline-block px-3 py-2 
  text-white cursor-pointer transition-colors`}

  &:hover {
    ${tw`bg-green-600`}
  }
`

const BorderTwBtn = styled(TwBtn)`
  ${tw`rounded`}
`
const CodePre = styled.img`
  ${tw`object-cover inline-block shadow`}
`

const Example = styled.div`
  ${tw`w-full py-10`}
`
@Component({
  components: {
    DefaultBtn
  }
})
export default class HomePage extends Vue {
  protected render() {
    return (
      <div class="pt-10">
        <Container>
          <Title>Use Stack</Title>
          <Wrapper>
            <a href="https://vuejs.org/" target="_blank">
              <HomeLogo alt="Vue logo" src={VueLogo} />
            </a>

            <a class="ml-8" href="https://tailwindcss.com/" target="_blank">
              <HomeLogo alt="Tailwind CSS logo" src={TailwindLogo} />
            </a>

            <a
              class="ml-8"
              href="https://github.com/styled-components/vue-styled-components"
              target="_blank"
            >
              <HomeLogo alt="Styled-compoents logo" src={StyledLogo} />
            </a>

            <a class="ml-8" href="https://typescript.com" target="_blank">
              <HomeLogo alt="Typescript logo" src={TypescriptLogo} />
            </a>
          </Wrapper>
        </Container>

        <Container>
          <Title>Examples</Title>

          <Wrapper class="border-b border-solid border-gray-200">
            <SubTitle>Write a defualt tsx component</SubTitle>
            <Example>
              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example4Css}
              ></CodePre>
              <div class="w-1/2 inline-block align-middle text-center">
                <p>
                  <pre>Btn.css</pre>
                </p>
              </div>

              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example4}
              ></CodePre>

              <div class="w-1/2 inline-block align-top text-center">
                <DefaultBtn>Tsx component</DefaultBtn>
              </div>
            </Example>
          </Wrapper>

          <Wrapper class="border-b border-solid border-gray-200">
            <SubTitle>Write a styled component</SubTitle>
            <Example>
              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example1}
              ></CodePre>
              <div class="w-1/2 inline-block align-top text-center">
                <Btn>Btn Component</Btn>
              </div>
            </Example>
          </Wrapper>

          <Wrapper class="border-b border-solid border-gray-200">
            <SubTitle>Extend styled compoennt style.</SubTitle>
            <Example>
              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example2}
              ></CodePre>
              <div class="w-1/2 inline-block align-top text-center">
                <BorderBtn>BorderBtn Component</BorderBtn>
              </div>
            </Example>
          </Wrapper>

          <Wrapper class="border-b border-solid border-gray-200">
            <SubTitle>Use tailwindcss to rewrite the component.</SubTitle>
            <Example>
              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example3}
              ></CodePre>
              <div class="w-1/2 inline-block align-top text-center">
                <TwBtn>TwBtn Component</TwBtn>
              </div>
            </Example>
          </Wrapper>

          <Wrapper class="border-b border-solid border-gray-200">
            <SubTitle>
              As same, use tailwindcss to extend the component.
            </SubTitle>
            <Example>
              <CodePre
                class="w-1/2 inline-block align-top"
                src={Example5}
              ></CodePre>
              <div class="w-1/2 inline-block align-top text-center">
                <BorderTwBtn>BorderTwBtn Component</BorderTwBtn>
              </div>
            </Example>
          </Wrapper>
        </Container>
      </div>
    )
  }
}
