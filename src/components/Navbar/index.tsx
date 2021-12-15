import NextLink from "next/link";
import { TagsWrapper, Link, Image, Description, NavbarContainer } from "./styles";
import Logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <NavbarContainer>
      <NextLink href="/" passHref>
        <a>
          <Logo />
        </a>
      </NextLink>
      <TagsWrapper>
        <NextLink href="/tags/react" passHref>
          <Link>
            <Image src="/icons/reactjs-icon.svg" />
            <Description color="#8154ef">React</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/graphql" passHref>
          <Link>
            <Image src="/icons/graphql-icon.svg" />
            <Description color="#9fd2d6">GraphQL</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/next" passHref>
          <Link>
            <Image src="/icons/next-js-icon.svg" />
            <Description color="#ff4e4e">Next</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/gatsby" passHref>
          <Link>
            <Image src="/icons/gatsbyjs-icon.svg" />
            <Description color="#66BA3C">Gastby</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/typescript" passHref>
          <Link>
            <Image src="/icons/typescriptlang-icon.svg" />
            <Description color="#ff8601">TypeScript</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/flutter" passHref>
          <Link>
            <Image src="/icons/flutterio-icon.svg" />
            <Description color="#66BA3C">Flutter</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/sass" passHref>
          <Link>
            <Image src="/icons/sass-lang-icon.svg" />
            <Description color="#8154ef">Sass</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/tailwind" passHref>
          <Link>
            <Image src="/icons/tailwindcss-icon.svg" />
            <Description color="#9fd2d6">Tailwind</Description>
          </Link>
        </NextLink>
        <NextLink href="/tags/node" passHref>
          <Link>
            <Image src="/icons/nodejs-icon.svg" />
            <Description color="#ff8601">Node</Description>
          </Link>
        </NextLink>
      </TagsWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
