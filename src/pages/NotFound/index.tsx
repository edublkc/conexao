import { Container, Space } from "./styled"
import { FaArrowRight } from "react-icons/fa"
import { Header } from "../../components/Header"

export function NotFound() {
   
    return (
        <>
            <Header />

            <Container>
                <Space></Space>
                <div className="wrapper">
                    <h1>Erro 404 - Page not found</h1>
                </div>
            </Container>
        </>

    )
}