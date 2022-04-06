import { Link } from "react-router-dom";
import { MAHeader } from "../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../components/MyAccount Components/MA SideBar";


import { Container, Content, Wrapper } from "./styled";


export function InviteStudio() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
                

                <Content className="myAccountContent">
                   INVITE STUDIO
                    
                </Content>
            </Wrapper>

        </Container>
    )
}