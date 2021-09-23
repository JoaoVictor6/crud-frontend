import { ReactNode } from "react";
import { Container } from "./style";
type CardsProps = {
  children: ReactNode
}
export default function Cards({ children }:CardsProps) {
  return(
    <Container>
      {children}
    </Container>
  )
}