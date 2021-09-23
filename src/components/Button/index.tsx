import { Container } from "./style"

type ButtonProps = {
  placeholder: string,
  redirect?: string,
  fullWidth?: boolean
}

export default function Button({ placeholder }: ButtonProps){
  return(
    <Container>
      {placeholder}
    </Container>
  )
}