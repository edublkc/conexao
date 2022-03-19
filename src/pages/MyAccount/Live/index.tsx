import { Link } from "react-router-dom";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Container, Content,Wrapper } from "./styled";


export function Live() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
              <MASideBar/>


                <Content>
                   <h1>AO VIVO</h1>
                   <button type="button">Criar transmissão</button>
                </Content>
            </Wrapper>

        </Container>
    )
}