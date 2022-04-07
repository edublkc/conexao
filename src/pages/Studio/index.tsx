import { MAHeader } from "../../components/MyAccount Components/MA Header";

import { Center, Container, LeftSide, RightSide } from "./styled";
import { MainScreen } from "../../components/Studio Components/MainScreen";
import { Chat } from "../../components/Studio Components/Chat";
import { EditVideoSideBar } from "../../components/Studio Components/EditVideoSideBar/SideBar";



export function Studio() {

    return (
        <>
            
                <MAHeader />

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