import { IonPage, IonContent } from "@ionic/react";
import "./SectionI.css";
import { useHistory } from "react-router-dom";
import Volunteer from "../../components/Volunteer";


const SectionI: React.FC = () => {
  const history = useHistory();

  const handleBackHomeI = () => {
    history.push("/homeI");
  };

  const handleAccept = (name: string, idade: string) => {
    addReeducando({ name, idade });
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="containerSI">
        <div className="status-bar">
    </div>

    <header className="header">
        <div className="back-buttonSI">
        <img
              src="/angle-left.svg"
              alt="Logo Icon"
              className="back"
              onClick={handleBackHomeI}
            />
        </div>
        <div className="session-info">
            <span>Sua sessão</span>
            <span>0/2</span>
        </div>
    </header>

    <div className="main-card">

    </div>

    <div className="group-info">
        <h2 className="group-title">Aqui é onde vai ficar o nome da instituicao</h2>
        <div className="settings-icon"><img
              src="/engrenagem.svg"
              alt="Logo Icon"
              className="settings"
            /></div>
        <p className="address">Aqui é onde vai ficar o endereço , Recife - PE</p>
        <p className="description">Esta seção é destinada à descrição da instituição, apresentando suas principais características, objetivos e atividades realizadas. Aqui, você encontrará informações detalhadas que ajudam a compreender a essência e o propósito da organização.</p>
        <div className="duration">
            <div className="duration-icon"><img
                src="/calendar-clock.svg"
                alt="Logo Icon"
                className="logoD"
              /></div>
            Tempo de duração: 2 semanas
        </div>
    </div>

    <h3 className="applications-title">Aplicações de voluntários</h3>

                    <Volunteer name={"José Antônio"} idade={"27"} onAccept={() =>   handleAccept("José Antônio", "27")} />
                    <Volunteer name={"Diego Oliveira"} idade={"34"} onAccept={() => handleAccept("Diego Oliveira", "34")} />
                    <Volunteer name={"Thiago Almeida"} idade={"29"} onAccept={() => handleAccept("Thiago Almeida", "29")} /> 
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SectionI;
  function addReeducando(arg0: { name: string; idade: string; }) {
    throw new Error("Function not implemented.");
  }

