import React from "react";
import * as Styled from './styles';
import Registro from "../Registro";


function Home() {

    const GoCreateAccount = () => {
        return <Registro />
    }

  return (
    <>
    <Styled.Container>
    <div className="container" id="container">
        <Styled.FormContainer>
          <Styled.SignInContainer>
          <div className="form-container sign-in-container">
              <form action="#">
                  <h1>Login</h1>
                  <span></span>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <ul>
                    <li><input type="checkbox" value="lsRememberMe" /></li>
                    <li style={{marginTop: '12px', fontSize: '14px', color: '#333'}}>Lembre-se de mim</li>
                  </ul>
                  <a href="#" style={{transform: 'translateY(-90%'}}>Esqueceu a senha?</a>
                  <button style={{transform: 'translateY(-50%'}}>Clique aqui</button>

              </form>
          </div>
          </Styled.SignInContainer>
          </Styled.FormContainer>
          <Styled.OverlayContainer>
          <div className="overlay-container">
            <Styled.Overlay>
              <div className="overlay">
                <Styled.OverlayPanel>
                    <Styled.OverlayLeft>
                  <div className="overlay-panel overlay-left">
                    <h1>Olá, amigo!</h1>
                    <p>Preencha o cadastro e comece sua jornada conosco!</p>
                    <button class="ghost" id="signUp" onClick={<Registro />}>Cadastre-se</button>
                  </div>
                  </Styled.OverlayLeft>
                  </Styled.OverlayPanel>
              </div>
              </Styled.Overlay>
          </div>
          </Styled.OverlayContainer>
      </div>
      </Styled.Container>
          </>
  );

  }

export default Home;
