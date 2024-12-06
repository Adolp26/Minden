import { IonContent, IonPage } from "@ionic/react";
import "./ActivityR.css";
import Activity from "../../components/Activity";
import { useHistory } from "react-router-dom";

const ActivityR: React.FC = () => {
  const history = useHistory(); // Criando a instância de history

  const handleBackHomeR = () => {
    history.push("/homeR");
  };
  const handleDetailsClick = () => {
    history.push("/detailAct");
  }
  return (
    <IonPage>
      <IonContent fullscreen >
        <div className="containerA">
        <div className="header">
          <div className="header-left">
            <button className="back-button" onClick={handleBackHomeR}>
              <img
                src="/angle-left.svg"
                alt="Logo Icon"
                className="back"
              />
            </button>
          </div>
          <span className="header-title">Atividades disponíveis</span>
          <div className="header-menu"></div>
        </div>

        <div className="activity-list">
          <div onClick={handleDetailsClick}>
          <Activity
            name="instituição 1"
            activity="Grupo de apoio e reeducação"
          ></Activity>
          </div>
          <Activity
            name="instituição 2"
            activity="Curso de reeducação"
          ></Activity>
          <Activity
            name="instituição 3"
            activity="Acompanhamento psicológico"
          ></Activity>
          <Activity
            name="instituição 4"
            activity="Oficinas de conscientização"
          ></Activity>
          <Activity
            name="instituição 5"
            activity="Atividade: Grupo de reflexão"
          ></Activity>
        </div>
        {/* <button className="see-more-button">Ver Mais</button> */}
        <div></div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default ActivityR;
