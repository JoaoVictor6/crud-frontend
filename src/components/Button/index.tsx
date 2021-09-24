import { Container } from "./style"

type ButtonProps = {
  placeholder: string,
  redirect?: string,
  fullWidth?: boolean
}

export default function Button({ placeholder, fullWidth }: ButtonProps){
  return(
    <Container style={{
      width: `${fullWidth && "100%"}`
    }}>
      {placeholder}
    </Container>
  )
}