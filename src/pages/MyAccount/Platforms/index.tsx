import { Link } from "react-router-dom";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Youtube } from "../../../services/youtubeLiveApi";
import { Container, Content,Wrapper } from "./styled";


export function Platforms() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
              <MASideBar/>


                <Content>
                    <Youtube/>
                </Content>
            </Wrapper>

        </Container>
    )
}