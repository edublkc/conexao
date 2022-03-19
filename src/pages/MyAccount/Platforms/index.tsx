import { Link } from "react-router-dom";
import { MAAddedPlatforms } from "../../../components/MyAccount Components/MA AddedPlatforms";
import { MAAddPlatform } from "../../../components/MyAccount Components/MA AddPlatform";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Youtube } from "../../../services/youtubeLiveApi";
import { Container, Content, Wrapper } from "./styled";


export function Platforms() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
                <MASideBar />


                <Content className="myAccountContent">
                    <header>
                        <div className="top">
                            <h1>Plataformas</h1>
                            <MAAddPlatform/>
                        </div>
                        
                        <p>Suas plataformas cadastradas</p>
                    </header>

                    <section>
                        <h3>Nome</h3>
                        <div className="line"></div>
                        <MAAddedPlatforms/>
                    </section>
                    
                    <Youtube />
                </Content>
            </Wrapper>

        </Container>
    )
}