import { ChangeEvent, FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@components/Button'
import Cards from '@components/Cards'
import { ErrorField, Input } from '@components/Input'
import { ButtonAndAnchorSection, Container, Form, FormTitle } from '@PagesStyles/LoginPage'

// type ErrorField = {
//   isInvalid: boolean,
//   messageError: string
// }

export default function Login(){
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [emailFieldIsValid, setEmailFieldIsValid] = useState({} as ErrorField)
  const [passwordFieldIsValid, setPasswordFieldIsValid] = useState({} as ErrorField)

  function passwordHandler(event:ChangeEvent<HTMLInputElement>){
    const value = event.target.value
    setPassword(value)
  }
  function emailHandler(event:ChangeEvent<HTMLInputElement>){
    const value = event.target.value
    setEmail(value)
  }

  function submitFormHandler(event:FormEvent) {
    if(email.length === 0){
      setEmailFieldIsValid({isInvalid: true, messageError: 'Empty field'})
    }
    if(password.length < 8) {
      setPasswordFieldIsValid({
        isInvalid: true, 
        messageError: 'password must be at least 8 characterspassword must be at least 8 characters'
      })
      return event.preventDefault()
    }
    setPasswordFieldIsValid({ 
      ...passwordFieldIsValid,
      isInvalid: false
    })
    setEmailFieldIsValid({ 
      ...emailFieldIsValid, 
      isInvalid: false
    })
  }
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <Container>
      <Cards>
        <FormTitle className="title-section text-center">Login</FormTitle>
        <Form onSubmit={submitFormHandler}>
          <Input 
            idForInput="email" 
            type="email" 
            placeholder="Digite seu E-mail" 
            labelText="E-mail"
            value={email}
            onChange={emailHandler}
            ErrorField={emailFieldIsValid}
          />
          <Input 
            idForInput="password" 
            type="password"
            placeholder="Digite sua senha" 
            labelText="Password"
            value={password}
            onChange={passwordHandler}
            ErrorField={passwordFieldIsValid}
          />
          <ButtonAndAnchorSection>
            <Button fullWidth placeholder="Entrar"/>
            <Link href="/login">Clique aqui para registrar-se</Link>
          </ButtonAndAnchorSection>
        </Form>
      </Cards>
    </Container>
    </>
  )
}