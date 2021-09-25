import Cards from "@components/Cards";
import Textarea from "@components/Textarea";
import { Container } from "@PagesStyles/RegisterPage";

export default function Register(){
  return(
    <Container>
      <Cards>
        <Textarea idForLabel="description" labelText="Description" maxChar={255}/>
      </Cards>
    </Container>
  )
}