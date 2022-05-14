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
                        <h1>Choose a platform</h1>
                        <p>Select one or more platforms to be able to broadcast simultaneously to all of them.</p>
                    </header>
                    
                    <div className="platforms">
                        <MAAddYoutube/>
                      
                    </div>
                </Content>
            </Wrapper>

        </Container>
    )
}