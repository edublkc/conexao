import { Link } from "react-router-dom";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Container, Content,Wrapper } from "./styled";


export function Platforms() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
              <MASideBar/>


                <Content>
                    CONTEUDO
                </Content>
            </Wrapper>

        </Container>
    )
}