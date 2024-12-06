import { IonContent, IonPage } from '@ionic/react';
import './CactivityI.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useActivity } from './ActivityContext'; // Importando o hook do contexto

const CactivityI: React.FC = () => {
    const history = useHistory();
    const { addActivity } = useActivity(); // Obtendo a função para adicionar a atividade
    const [activityTitle, setActivityTitle] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Criar um objeto com os dados da atividade
        const formData = {
            title: activityTitle,
            description: activityDescription,
            startDate: startDate,
            endDate: endDate,
        };

        // Adicionar a nova atividade ao contexto
        addActivity(formData);
        setStatusMessage('Atividade criada com sucesso!');

        // Redirecionar ou fazer outra ação
        history.push('/homeI'); // Exemplo de redirecionamento
    };
    const handleBackHomeI = () =>{
        history.push('/homeI');
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='containerCA'>
                    <div className="header">
                    <button className="back-button" onClick={handleBackHomeI}>
                <img
                  src="/angle-left.svg"
                  alt="Logo Icon"
                  className="back"
                />
              </button>
                        <h1 className="title">Crie sua atividade</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="activityTitle">Título da Atividade:</label>
                            <input
                                type="text"
                                id="activityTitle"
                                value={activityTitle}
                                onChange={(e) => setActivityTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="activityDescription">Descrição da Atividade:</label>
                            <textarea
                                id="activityDescription"
                                value={activityDescription}
                                onChange={(e) => setActivityDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="startDate">Data de Início:</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate">Data de Término:</label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    {statusMessage && <p>{statusMessage}</p>}
                </div >
                </IonContent>
            </IonPage>
        );
    };

    export default CactivityI;