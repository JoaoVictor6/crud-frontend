import { ChangeEvent, FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@components/Button'
import Cards from '@components/Cards'
import { ErrorField, Input } from '@components/Input'
import { ButtonAndAnchorSection, Container, Form, FormTitle } from '@PagesStyles/LoginPage'

type FormInputProps = {
  email: string
  password: string
}

export default function Login(){
  const [emailFieldIsValid, setEmailFieldIsValid] = useState({} as ErrorField)
  const [passwordFieldIsValid, setPasswordFieldIsValid] = useState({} as ErrorField)
  const [formInput, setFormInput] = useState<FormInputProps>({ email: '', password: '' })

  function inputHandler(event:ChangeEvent<HTMLInputElement>){
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }

  function submitFormHandler(event:FormEvent) {
    const { email, password } = formInput
    event.preventDefault()
    if(email.length === 0){
      setEmailFieldIsValid({isInvalid: true, messageError: 'Empty field'})
    }
    if(password.length < 8) {
      setPasswordFieldIsValid({
        isInvalid: true, 
        messageError: 'password must be at least 8 characterspassword must be at least 8 characters'
      })
      return
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
            name="email"
            idForInput="email" 
            type="email" 
            placeholder="Digite seu E-mail" 
            labelText="E-mail"
            value={formInput.email}
            onChange={inputHandler}
            ErrorField={emailFieldIsValid}
          />
          <Input
            name="password"
            idForInput="password" 
            type="password"
            placeholder="Digite sua senha" 
            labelText="Password"
            value={formInput.password}
            onChange={inputHandler}
            ErrorField={passwordFieldIsValid}
          />
          <ButtonAndAnchorSection>
            <Button fullWidth placeholder="Entrar"/>
            <Link href="/register">Clique aqui para registrar-se</Link>
          </ButtonAndAnchorSection>
        </Form>
      </Cards>
    </Container>
    </>
  )
}