import { useEffect, useState } from "react"
import { Container, Space, Page, FullViewContainer, FaqContainer, HorizontalLine, NormalSection,Footer} from "./styled"
import { FaArrowRight } from "react-icons/fa"
import {IoMdGitCompare,IoMdGitNetwork} from "react-icons/io"
import {MdOutlineAttachMoney} from "react-icons/md"
import {FcIdea} from "react-icons/fc"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"
import presentationVideo from "../../assets/presentation.mp4"

import AOS from 'aos';
import 'aos/dist/aos.css';


export function Home() {
   

    useEffect(()=>{
        AOS.init({
            once: true,
            
        });

        
    },[])

  

    return (
        
            <Page>
                <Header />

                <Container>
                    
                    <div className="wrapper">
                        <h1 data-aos='fade-up' >Start your first stream in 2 minutes. </h1>
                        <div data-aos='fade-up'  className="paragraph">
                            <p>Livestream Directly from your browser. No complicated downloads</p>
                        </div>

                        <Link data-aos='fade-right'  to="/singin">TRY IT NOW <FaArrowRight fontSize='16px' /></Link>
                    </div>
                </Container>

                <FullViewContainer>
                    <h2 data-aos='fade-up' className="subTitle">
                        Product
                    </h2>
                    <h1 data-aos='fade-up' className="title">
                        This is a MVP
                    </h1>
                    <p data-aos='fade-up' >
                        Minimum Viable Product or MVP is a development technique in which a new product is introduced in the market with basic features, but enough to get the attention of the consumers.
                    </p>
                    <video autoPlay loop muted src={presentationVideo}>

                    </video>
                </FullViewContainer>

                <FaqContainer>
                    <div className="wrapp">
                        <div data-aos='fade-right' className="leftSide">
                            <IoMdGitCompare fontSize={40} color="#8595AE"/>
                        </div>
                        <div data-aos='fade-right' className="rightSide">
                            <div className="title">
                                <h1>How is this different than OBS?</h1>
                            </div>
                            <div className="description">
                                <p>
                                    Connection is completely in the browser.
                                    You do not need to download anything.
                                    Also, you will soon be able to stream to multiple services at the same time without the need to download complicated extensions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapp">
                        <div data-aos='fade-right' className="leftSide">
                            <FcIdea fontSize={40} color="#8595AE"/>
                        </div>
                        <div data-aos='fade-right' className="rightSide">
                            <div className="title">
                                <h1>What is the main idea of ​ Connection?</h1>
                            </div>
                            <div className="description">
                                <p>
                                The idea is to facilitate the creation of a live stream, for now we only have youtube as a platform, 
                                but the main idea is to be multistreaming
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapp">
                        <div data-aos='fade-right' className="leftSide">
                            <IoMdGitNetwork fontSize={40} color="#8595AE"/>
                        </div>
                        <div data-aos='fade-right' className="rightSide">
                            <div className="title">
                                <h1>What are the benefits of multistreaming?</h1>
                            </div>
                            <div className="description">
                                <p>
                                    Multistreaming allows you to grow your audience across multiple platforms at the same time,
                                    enables cross channel discovery and saves you time and money by instantly uploading your content.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapp">
                        <div data-aos='fade-right' className="leftSide">
                            <MdOutlineAttachMoney fontSize={40} color="#8595AE"/>
                        </div>
                        <div data-aos='fade-right' className="rightSide">
                            <div className="title">
                                <h1>How much does this cost?</h1>
                            </div>
                            <div className="description">
                                <p>
                                    Right now there is a free, we just testing this application, but soon we will have a pro version.
                                </p>
                            </div>
                        </div>
                    </div>
                </FaqContainer>

                <HorizontalLine>
                    <div></div>
                </HorizontalLine>


                <NormalSection>
                    <div className="wrapp">
                        <h1 data-aos='fade-up'>Join us</h1>
                        <p data-aos='fade-up'>This project has great potential for growth, 
                            there are many things to be done and added to make it as complete as possible for all streamers, 
                            if you want to invest in the idea, get in touch!</p>
                        <Link data-aos='fade-right' to="/singin">TRY IT NOW <FaArrowRight fontSize='16px' /></Link>
                    </div>
                </NormalSection>

                <Footer>
                    <div>
                        <span>Created By <a target='_blank' href="https://www.linkedin.com/in/eduardo-mota-mafra-28b555219/">Eduardo Mota Mafra</a> | © All rights reserved.</span>
                    </div>
                </Footer>

            </Page>




        



    )
}