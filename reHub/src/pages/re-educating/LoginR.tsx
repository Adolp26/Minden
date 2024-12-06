import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import "./LoginR.css";

const LoginR: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginHomeR = ()=>{
          
    history.push("/homeR"); // Substitua '/HomeR' pelo caminho da sua próxima tela
}
  const handleBackStart = () => {
    history.push("/start");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="background">
          {/* Círculos decorativos */}
          <div className="circle circle-1-top-small"></div>
          <div className="circle circle-2-top"></div>
          <div className="circle circle-3-bottom"></div>
          <div className="circle circle-4-bottom-small"></div>
          <div className="circle circle-5-bottom-medium"></div>
          <button className="back-buttonL">
            <img
              src="/src/assets/angle-left.svg"
              alt="Logo Icon"
              className="back"
              onClick={handleBackStart}
            />
          </button>

          <div className="containerL">
            <div className="logo-container">
              <img
                src="/minden.svg"
                alt="Logo Icon"
                className="logoMinden"
              />
            </div>
            <h2>Login</h2>
            <form
              className="test"
              onSubmit={(e) => {
                e.preventDefault();
                handleLoginHomeR();
              }}
            >
              <div className="inptGroup">
                <label className="inptLabel">E-mail</label>
                <input
                  placeholder="Insira seu E-mail"
                  className="inpt"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inptGroup">
                <label className="inptLabel">Senha</label>
                <input
                  placeholder="Insira sua senha"
                  className="inpt"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="buttonLogin">
                Login
              </button>
            </form>
            <p className="textBlue">Esqueci minha senha</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginR;
