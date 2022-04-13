import { useState } from "react";
import { TabMenu } from "../../../TabMenu";
import { Container, Content, SlideOption } from "./styled";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";

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
                        <h3>Compartilhando tela</h3>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg"/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://template.canva.com/EAE4tobQkzo/1/0/400w-ft25ewtAe8k.jpg"/>
                            </SwiperSlide>

                        </Swiper>
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