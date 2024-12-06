import { IonPage, IonContent } from "@ionic/react";
import "./Reports.css";
import Reeducations from "../../components/Reeducations";
import { useHistory } from "react-router-dom";

const Reports: React.FC = () => {
  const history = useHistory();
  const handleBackHomeI = () => {
    history.push("/homeI");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="containerRI">
          <div className="header">
            <div className="header-left">
              <button className="back-button" onClick={handleBackHomeI}>
                <img
                  src="/angle-left.svg"
                  alt="Logo Icon"
                  className="back"
                />
              </button>
            </div>
            <span className="header-title">Relatórios</span>
            <div className="header-menu"></div>
          </div>
          <span className="titleRI">Acompanhados</span>
          <div className="acomList">
            <Reeducations
              name="Rafael Miguel"
              date="dd/mm/yyyy"
              status="Em andamento"
            />
            <Reeducations
              name="Lucas Jose"
              date="dd/mm/yyyy"
              status="Em andamento"
            />
            <Reeducations
              name="Thiago Almeida"
              date="dd/mm/yyyy"
              status="Em andamento"
            />
          </div>
          <span>Histórico</span>
          <div className="histList">
          <Reeducations
              name="Caio Martins"
              date="dd/mm/yyyy"
              status="Em andamento"
            /><Reeducations
            name="Ricardo Silva"
            date="dd/mm/yyyy"
            status="Em andamento"
          /><Reeducations
          name="Alexandro Oliveira"
          date="dd/mm/yyyy"
          status="Em andamento"
        />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Reports;
