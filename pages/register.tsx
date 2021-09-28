import Cards from "@components/Cards";
import Textarea from "@components/Textarea";
import UploadButton from "@components/UploadButton";
import { Container } from "@PagesStyles/RegisterPage";
import { ChangeEvent, useState } from "react";

function get64base(file:FileList, cb: (base64: string | ArrayBuffer | null) => void){
  const fileBlob = file[0]
  const reader = new FileReader()
  reader.readAsDataURL(fileBlob)
  reader.onload = () => {
    cb(reader.result)
  }
  reader.onerror = (error) => {
    console.log(`Error: ${error}`)
  }
}

export default function Register(){
  function inputHandler(event: ChangeEvent<HTMLInputElement>){
    if(event.target.type === 'file'){
      const fileValue = event.target.files as FileList
      get64base(fileValue, (base64) => {
        console.log(base64)
      })

      return
    }
  }
  return(
    <Container>
      <Cards>
        <Textarea idForLabel="description" labelText="Description" maxChar={255}/>
        <UploadButton 
          label="Upload image" 
          onChangeEvent={inputHandler}
        />
      </Cards>
    </Container>
  )
}