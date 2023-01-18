import { Container, IconLink, Navigation, Icon, HoverText } from "./styles";
import Logo from "../../assets/logo.svg";

type NavigationLinkType = {
  title: string;
  href: string;
  iconPath: string;
  hoverColor: string;
};

const NavigationLinks: NavigationLinkType[] = [
  {
    title: "React",
    href: "/react",
    iconPath: "/reactjs-icon.svg",
    hoverColor: "#8154ef",
  },
  {
    title: "GraphQL",
    iconPath: "/graphql-icon.svg",
    href: "/graphql",
    hoverColor: "#9fd2d6",
  },
  {
    title: "Next.js",
    iconPath: "/next-js-icon.svg",
    href: "/react",
    hoverColor: "#ff4e4e",
  },
  {
    title: "Gatsby.js",
    iconPath: "/gatsbyjs-icon.svg",
    href: "/gatsby",
    hoverColor: "#66BA3C",
  },
  {
    title: "TypeScript",
    iconPath: "/typescriptlang-icon.svg",
    href: "/typescript",
    hoverColor: "#ff8601",
  },
  {
    title: "Flutter",
    iconPath: "/flutterio-icon.svg",
    href: "/flutter",
    hoverColor: "#ff8601",
  },
  {
    title: "Sass",
    iconPath: "/sass-lang-icon.svg",
    href: "/sass",
    hoverColor: "#8154ef",
  },
  {
    title: "TailwindCSS",
    iconPath: "/tailwindcss-icon.svg",
    href: "/tailwind",
    hoverColor: "#9fd2d6",
  },
  {
    title: "Node.js",
    iconPath: "/nodejs-icon.svg",
    href: "/node",
    hoverColor: "#ff8601",
  },
];

export function Header() {
  return (
    <Container>
      <IconLink href="/">
        <Logo />
      </IconLink>

      <Navigation>
        {NavigationLinks.map((Link, index) => {
          return (
            <IconLink href={`/filter/${Link.href}`}>
              <Icon src={`/icons/${Link.iconPath}`} />
              <HoverText color={`${Link.hoverColor}`}>{Link.title}</HoverText>
            </IconLink>
          );
        })}
      </Navigation>
    </Container>
  );
}
