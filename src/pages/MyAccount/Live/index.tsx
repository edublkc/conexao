import { Link } from "react-router-dom";
import { MACreateNewBroadcast } from "../../../components/MyAccount Components/MA CreateNewBroadcast";
import { MAHeader } from "../../../components/MyAccount Components/MA Header";
import { MASideBar } from "../../../components/MyAccount Components/MA SideBar";
import { Container, Content,Wrapper } from "./styled";


export function Live() {

    return (
        <Container>
            <MAHeader />

            <Wrapper>
              <MASideBar/>


                <Content className="myAccountContent">
                   <header>
                        <div className="top">
                            <h1>Ao vivo</h1>
                            <MACreateNewBroadcast/>
                        </div>

                        <p>Crie uma nova transmissão, ou administre sua transmissão</p>
                    </header>


                </Content>
            </Wrapper>

        </Container>
    )
}