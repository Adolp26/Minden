import { IonContent, IonPage } from "@ionic/react";
import "./HomeI.css"; 
import { useHistory } from "react-router-dom";
import { useActivity } from './ActivityContext';

const HomeI: React.FC = () => {
    const history = useHistory();
    const handleExitClick = () => {
        history.push('/loginI');
    };
    const handleSectionI = () => {
        history.push('/sectionI');
    };

    const handleActivityCreate = () => {
        history.push('/cActivityI');
    }
    const { activities } = useActivity();

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="containerHI">
                    <header className="headerHI">
                        <button className="exitButton" onClick={handleExitClick}>
                            <img
                                src="/src/assets//exit-alt.svg"
                                alt="Logo Icon"
                                className="logoExit"
                            />Sair
                        </button>
                        <div className="logo-container">
                            <img
                                src="/src/assets//minden.svg"
                                alt="Logo Icon"
                                className="logoMindenHI"
                            />
                        </div>
                        <div className="header-spacer"></div>
                    </header>

        

                    <div className="menu-button">
                        <div className="icon-placeholder">
                            <img
                                src="/src/assets//relatorio.svg"
                                alt="Logo Icon"
                                className="logo"
                            /></div>
                        Relatórios
                    </div>

                    <section>
                        <h2 className="section-title">
                            <span className="icon-placeholder">
                                <img
                                    src="/src/assets/perfil.svg"
                                    alt="Logo Icon"
                                    className="logo"
                                />
                            </span>
                            Reeducando
                        </h2>
                        <div className="cards-scroll">
                            <div className="cards-container">
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Rafael Miguel</h3>
                                        <p>Oficinas de conscientização</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Lucas Jose</h3>
                                        <p>Assistencia social</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Thiago Almeida</h3>
                                        <p>Psicologo</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Caio Martins</h3>
                                        <p>Meditacao</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Ricardo Silva</h3>
                                        <p>Psicanalise</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Alexandro Oliveira</h3>
                                        <p>Reabilitacao</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Enrique Joaquim</h3>
                                        <p>Psiquiatra</p>
                                    </div>
                                </div>
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Rafael Miguel</h3>
                                        <p>Oficinas de conscientização</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <h2 className="section-title">
                            <span className="icon-placeholder">
                                <img
                                    src="/historia.svg"
                                    alt="Logo Icon"
                                    className="logo"
                                />
                            </span>
                            Sessões e Atividades
                        </h2>
                        <div className="cards-scroll">
                        <div className="cards-container">
                            {activities.length > 0 ? (
                                activities.map((activity, index) => (
                                    <div key={index} className="card" onClick={() => handleSectionI()}> {/* Adicione a lógica de redirecionamento aqui */}
                                        <div className="activity-image"></div>
                                        <div className="cardInfo">
                                            <span className="status-badge em-andamento">Em aberto</span>
                                            <h3>{activity.title}</h3>
                                             {/* Você pode modificar isso conforme necessário */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhuma atividade criada ainda.</p>
                            )}
                        </div>
                    </div>
                    </section>

    <button className="add-activity-btn" onClick={handleActivityCreate}>+</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeI;
