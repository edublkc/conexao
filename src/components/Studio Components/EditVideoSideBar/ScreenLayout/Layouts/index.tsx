import { ScreenLayoutContainer } from "./styled";
import { BsCameraVideoFill } from "react-icons/bs";
import { setSelectedScreenLayout } from "../../../../../draws/ScreenLayoutDraw/screenLayoutDraw";
import { themes } from "../../../../../styles/themes";
import profileIcon from "../../../../../assets/profileIcon.svg"
import { MdOutlineScreenShare } from "react-icons/md";

export function Layouts() {
    return (
        <ScreenLayoutContainer>
            <div className="screenBase" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                <div className="cameraOnly center sizes">
                    <img src={profileIcon} />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('screenOnly')}>
                <div className="screenOnly center sizes backgroundColorScreen">
                    <MdOutlineScreenShare fontSize="24px" color="#7a7575" />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('topRight')}>
                <div className="topRight sizes backgroundColorScreen">
                    <div className="cameraSquare">
                        <img src={profileIcon} />
                    </div>
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('topLeft')}>
                <div className="topLeft sizes backgroundColorScreen">
                    <div className="cameraSquare">
                        <img src={profileIcon} />
                    </div>
                </div>
            </div>


            <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomLeft')}>
                <div className="bottomLeft sizes backgroundColorScreen">
                    <div className="cameraSquare">
                        <img src={profileIcon} />
                    </div>
                </div>
            </div>
            
            <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomRight')}>
                <div className="bottomRight sizes backgroundColorScreen">
                    <div className="cameraSquare">
                        <img src={profileIcon} />
                    </div>
                </div>
            </div>


            


            <div className="screenBase" onClick={() => setSelectedScreenLayout('sideBySide')}>
                <img src={profileIcon} />
                <div className="screen sizes backgroundColorScreen"></div>
            </div>

            <div className="screenBase" style={{ backgroundColor: 'transparent' }} >
                <div className="sizes"></div>
            </div>

        </ScreenLayoutContainer>
    )
}


/*
    <div className="screenBase" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                <div className="cameraOnly center sizes">
                    <BsCameraVideoFill fontSize="2rem" color={themes.colors.pink[500]} />
                    <img src={profileIcon}/>
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('screenOnly')}>
                <div className="screenOnly center sizes">
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomLeft')}>
                <div className="bottomLeft sizes">
                    <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomRight')}>
                <div className="bottomRight sizes">
                    <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('topRight')}>
                <div className="topRight sizes">
                    <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('topLeft')}>
                <div className="topLeft sizes">
                    <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                </div>
            </div>

            <div className="screenBase" onClick={() => setSelectedScreenLayout('sideBySide')}>
                <BsCameraVideoFill fontSize="0.8rem" color={themes.colors.pink[500]} />
                <div className="screen sizes"></div>
            </div>

            <div className="screenBase" style={{ backgroundColor: 'transparent' }} >
                <div className=" sizes"></div>
            </div>

*/