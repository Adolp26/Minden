import { IonContent, IonPage } from '@ionic/react'
import './HistoryR.css'
import { useHistory } from 'react-router-dom';
import ActivityHistory from '../../components/ActivityHistory';

const HistoryR: React.FC = () => {
    const history = useHistory();

    const handleBackHomeR = () => {
        history.push('/homeR');
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='containerH'>
                <div className="headerH">
      
            <button className="back-button" onClick={handleBackHomeR}>
              <img
                src="/angle-left.svg"
                alt="Logo Icon"
                className="back"
              />
            </button>
            <span className="header-title">Histórico de Atividades</span>
          </div>

        <h2 className="titleH">Atividades</h2>

        <ul className="activity-list">
           <ActivityHistory name={'Grupo de apoio e reeducação'} date={'15/09/2024'} color='status-progress' status='Em andamento'></ActivityHistory>
           <ActivityHistory name={'Sessão Psicológica'} date={'10/09/2024'} color='status-completed' status='Concluída'></ActivityHistory>
        </ul>
              
                </div>
            </IonContent>
        </IonPage>
    )
}
export default HistoryR;