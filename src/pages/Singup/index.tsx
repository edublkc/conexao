import { Container } from "./styled";

import manDraw from "../../assets/man.svg"

import womanDraw from "../../assets/woman.svg"

export function Singup() {
    return (
        <Container>
            <div className="left-side">
                <div className="wrapper">
                    <h1>CONEXÃO</h1>
                    <img src={womanDraw}></img>
                    <p>Receba via pix mensagens de vídeo, audio e texto facilmente e exiba o conteúdo recebido na sua transmissão facilmente.</p>
                </div>
            </div>

            <div className="right-side">
                <div className="wrapper">

                    <div className="title">
                        <h1>Crie sua conta grátis!</h1>
                        <h3>Preencha todos os campos.</h3>
                    </div>


                    <form>
                        <div className="form-item">
                            <label htmlFor="email">E-mail: </label>
                            <input type="email" placeholder="E-mail" name="email" id="email" />
                        </div>

                        <div className="form-item">
                            <label htmlFor="password">Senha: </label>
                            <input type="password" placeholder="Senha" name="password" id="password" />
                        </div>
                    </form>
                    
                </div>
            </div>
        </Container>
    )
}