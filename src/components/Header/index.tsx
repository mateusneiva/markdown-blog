import Link from "next/link";
import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>
    </Container>
  );
}
