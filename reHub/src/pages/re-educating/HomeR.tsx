import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import "./HomeR.css";

const HomeR: React.FC = () => {
  const history = useHistory(); // Criando a instância de history

    // Funções para redirecionar
    const handleActivityClick = () => {
        history.push('/activityR'); // Substitua '/add-activity' pelo caminho da sua próxima tela
    };

    const handleExitClick = () => {
        history.push('/loginR'); // Substitua '/exit' pelo caminho da sua próxima tela
    };

    const handleDetailsClick = () => {
        history.push('/detailAct'); // Substitua '/details' pelo caminho da sua próxima tela
    };
    const handleHistoryClick = () => {
        history.push('/historyR'); // Substitua '/details' pelo caminho da sua próxima tela
    };

  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="containerR">
        <div className="headerR">
          <button className="exitButton" onClick={handleExitClick}><img
              src="/src/assets/exit-alt.svg"
              alt="Logo Icon"
              className="logoExit"
            />Sair</button>
          <div className="logo-containerR">
            <img
              src="/src/assets/minden.svg"
              alt="Logo Icon"
              className="logoMinden"
            />
          </div>
          
        </div>
<h1 className="page-title">Bem vindo!</h1>
        <div className="menu-icons">
          <div className="icon-item" onClick={handleActivityClick}>
            <div className="icon-placeholder">
              <img
                src="/src/assets/calendar-clock.svg"
                alt="Logo Icon"
                className="logo"
              />
            </div>
            <span className="icon-label">
              Calendário<br></br>de atividades
            </span>
          </div>
          <div className="icon-item" onClick={handleHistoryClick}>
            <div className="icon-placeholder">
              <img
                src="/time-past.svg"
                alt="Logo Icon"
                className="logo"
              />
            </div>
            <span className="icon-label">
              Histórico de<br></br>Atividades
            </span>
          </div>
        </div>

        <div className="next-session">
          <div className="session-header">
            <span className="testeBack">Próxima Sessão Agendada</span>
            <button className="details-button" onClick={handleDetailsClick}>Detalhes</button>
          </div>

          <div className="image-container" onClick={handleDetailsClick}>Imagem</div>

          <div className="session-info" onClick={handleDetailsClick}>
            <strong>Grupo de apoio e reeducação</strong>
            <br></br>
            Data: 10/10/2024 - 14:00
          </div>
        </div>
        <div className="buttonGroupH">
        <button
          className="map-button"
          onClick={() => window.open("https://www.google.com/maps", "_blank")}
        >
          Ver no mapa
        </button>
        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};
export default HomeR;