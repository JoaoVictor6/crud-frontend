import Button from "@components/Button";
import Cards from "@components/Cards";
import Textarea from "@components/Textarea";
import { Container } from "@PagesStyles/RegisterPage";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type TextareaProps = {
  totalChar: number
  description: string
}

export default function Register(){
  const maxChar = 600
  const [textArea, setTextArea] = useState<TextareaProps>({
    totalChar: 0,
    description: ''
  })
  function textareaHandler(event:ChangeEvent<HTMLTextAreaElement>){
    const value = event.target.value
    if(value.length === maxChar+1){
      setTextArea({
        ...textArea
      })
      return
    }
    setTextArea({
      description: value,
      totalChar: value.length
    })
  }
  return(
    <Container>
      <Cards>
        <Textarea 
          idForLabel="description"
          labelText="Description"
          totalChar={textArea.totalChar}
          maxChar={maxChar}
          onChange={textareaHandler}
          value={textArea.description}
        />
      </Cards>
    </Container>
  )
}