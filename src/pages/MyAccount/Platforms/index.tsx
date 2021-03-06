import { useContext } from "react";
import { MAAddedPlatforms } from "../../../components/MyAccount Components/MA AddedPlatforms";
import { MAAddPlatform } from "../../../components/MyAccount Components/MA AddPlatform";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext";
import { Container, Content, Wrapper } from "./styled";


export function Platforms() {
    const { platforms } = useContext(BroadcastInformationsContext)

    return (
        <Container>
            <MAHeader />

            <Wrapper>
                <MASideBar />

                <Content className="myAccountContent">
                    <header>
                        <div className="top">
                            <h1>Platforms</h1>
                            <MAAddPlatform />
                        </div>

                        <p>Your registered platforms</p>
                    </header>

                    {platforms.length > 0 && (
                        <section>
                            
                            <h3>Name</h3>
                            <div className="line"></div>
                            <MAAddedPlatforms />

                        </section>
                    )}

                </Content>
            </Wrapper>

        </Container>
    )
}