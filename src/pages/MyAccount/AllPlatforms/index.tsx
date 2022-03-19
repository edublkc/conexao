import { Link } from "react-router-dom";
import { MAAddTwitch } from "../../../components/MyAccount Components/MA AddTwitch";
import { MAAddYoutube } from "../../../components/MyAccount Components/MA AddYoutube";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Container, Content, Wrapper } from "./styled";


export function AllPlatforms() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
                <MASideBar />


                <Content className="myAccountContent">
                    <header>
                        <h1>Escolha uma plataforma</h1>
                        <p>Seleciona uma ou mais plataformas para poder fazer sua transmissão simultaneamente para todas elas.</p>
                    </header>
                    
                    <div className="platforms">
                        <MAAddYoutube/>
                        <MAAddTwitch/>
                    </div>
                </Content>
            </Wrapper>

        </Container>
    )
}