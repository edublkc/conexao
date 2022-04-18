import { useState } from "react";
import { TabMenu } from "../../../TabMenu";
import { Container, Content, ScreenLayoutContainer } from "./styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsCameraVideoFill } from "react-icons/bs";
import { themes } from "../../../../styles/themes";
import { setSelectedScreenLayout } from "../../../../draws/ScreenLayoutDraw/screenLayoutDraw";


const tabOptions = ['Layouts', 'Configurations']

export function ScreenLayout() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])

    return (
        <Container>

            <TabMenu
                options={tabOptions}
                selectedTabOptionValue={selectedTabOption}
                setSelectedTabOptionState={setSelectedTabOption}
            />


            <Content>
                {selectedTabOption === tabOptions[0] && (
                    <>
                        <h3 className="contentTitle">Compartilhando tela</h3>

                        <ScreenLayoutContainer>
                            <div className="screenBase" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                                <div className="cameraOnly center sizes">
                                    <BsCameraVideoFill fontSize="2rem" color={themes.colors.pink[500]} />
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

                            <div className="screenBase" style={{backgroundColor: 'transparent'}} >
                            <div className=" sizes"></div>
                            </div>

                        </ScreenLayoutContainer>
                    </>

                )}

                {selectedTabOption === tabOptions[1] && (
                    <div className="content">
                        Configurações
                    </div>
                )}
            </Content>


        </Container>

    )
}


/*
  <>
                        <h3>Compartilhando tela</h3>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                                    <div className="cameraOnly center sizes">
                                        <BsCameraVideoFill fontSize="2rem" color={themes.colors.pink[500]} />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('screenOnly')}>
                                    <div className="screenOnly center sizes">
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomLeft')}>
                                    <div className="bottomLeft sizes">
                                        <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomRight')}>
                                    <div className="bottomRight sizes">
                                        <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('topRight')}>
                                    <div className="topRight sizes">
                                        <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('topLeft')}>
                                    <div className="topLeft sizes">
                                        <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className="screenBase" onClick={() => setSelectedScreenLayout('sideBySide')}>
                                    <BsCameraVideoFill fontSize="0.8rem" color={themes.colors.pink[500]} />
                                    <div className="screen sizes"></div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </>

*/