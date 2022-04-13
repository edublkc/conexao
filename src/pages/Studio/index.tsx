import { MAHeader } from "../../components/MyAccount Components/MA Header";

import { Center, Container, LeftSide, RightSide } from "./styled";
import { MainScreen } from "../../components/Studio Components/ST MainScreen";
import { Chat } from "../../components/Studio Components/ST Chat";
import { EditVideoSideBar } from "../../components/Studio Components/EditVideoSideBar/SideBar";
import { STHeader } from "../../components/Studio Components/ST Header";



export function Studio() {

    return (
        <>
            
                <STHeader />

                <Container>
                    <LeftSide>
                        <EditVideoSideBar />
                    </LeftSide>

                    <Center>
                        <MainScreen />
                    </Center>

                    <RightSide>
                        <Chat />
                    </RightSide>

                </Container>
            
        </>

    )
}