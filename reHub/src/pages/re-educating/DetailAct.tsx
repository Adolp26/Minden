import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import "./DetailAct.css";

const DetailAct: React.FC = () => {
  const history = useHistory(); // Criando a instância de history

  const handleBackHomeR = () =>{
    history.push('/homeR');
  }
  return (
    <IonPage>
        <IonContent fullscreen>
          <div className="containerDet">
        <div className="headerD">
            <div className="back-button-placeholder"><button className="back-button" onClick={handleBackHomeR}><img
              src="/angle-left.svg"
              alt="Logo Icon"
              className="back"
            /></button></div>
            <h1>Atividade</h1>
            <span className="page-counter">0/2</span>
        </div>

        <div className="contentDet">
            <div className="logo-placeholder"></div>
            
            <h2 className="title">Grupo de apoio e reeducação</h2>
            <p className="address">R. Antônio de Brito, 356 - Água Fria, Recife - PE</p>
            
            <p className="description">
                O Centro de Referência em Atendimento à Mulher (CRAM) é uma instituição que oferece apoio e recursos para mulheres em situação de violência de gênero. Além de atender as vítimas, o CRAM também foca na reabilitação dos agressores, promovendo a conscientização sobre a violência e suas consequências.
            </p>

            <div className="duration">
                <div className="duration-icon-placeholder"><img
                src="/src/assets/calendar-clock.svg"
                alt="Logo Icon"
                className="logoD"
              /></div>
                <span>Tempo de duração: 2 semanas</span>
            </div>

            <h3 className="activities-title">Atividades a Fazer</h3>
            <ul className="activity-list">
                <li className="activity-item">Acompanhamento Psicológico</li>
                <li className="activity-item">Grupos de Apoio e Reeducação</li>
                <li className="activity-item">Discutir temas relacionados à masculinidade, poder, controle</li>
                <li className="activity-item">Como construir relacionamentos saudáveis</li>
                <li className="activity-item">Desenvolver habilidades emocionais</li>
            </ul>
        </div>
        <button className="apply-button">Aplicar</button>
        <div className="space"></div>
    </div>
    </IonContent>
  </IonPage>
  )};

export default DetailAct;