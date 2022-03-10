import { Container, Space } from "./styled"
import { FaArrowRight } from "react-icons/fa"
import { Header } from "../../components/Header"

export function Home() {
    return (
        <>
            <Header/>

            <Container>
                <Space></Space>
                <div className="wrapper">
                    <h1>Receba mensagens de video, áudio e texto em suas lives de forma fácil!</h1>
                    <div className="paragraph">
                        <p>Receba o dinheiro de suas transmissões sem burocracia, configure o quanto você quer receber pelas mensagens e faça o gerenciamento das mensagens recebidas.</p>
                    </div>
                    <button>COMECE AGORA <FaArrowRight fontSize='16px' /></button>
                </div>
            </Container>
        </>

    )
}