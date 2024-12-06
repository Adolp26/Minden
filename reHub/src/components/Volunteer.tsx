import './Volunteer.css';
import { useApprovedReeducandos } from '../pages/institution/ApprovedReeducandosContext'; 

interface ContainerProps {
  name: string;
  idade: string;
  onAccept: () => void;
}

const Volunteer: React.FC<ContainerProps> = ({ name, idade, onAccept }) => {
  const { addReeducando } = useApprovedReeducandos(); 

  const handleAccept = () => {
    addReeducando({ name, idade });
    onAccept(); // Chama a função passada como prop
  };
  return (
    <div className="volunteer-card">
    <div className="volunteer-image"></div>
    <div className="volunteer-info">
        <div className="volunteer-name">{name}</div>
    </div>
    <div className="volunteer-age">{idade} anos</div>
    <div className="action-buttons">
        <div className="action-button-accept" onClick={handleAccept}><img
            src="/check.svg"
            alt="Logo Icon"
            className="logoCheck"
          /></div>
        <div className="action-button-reject"><img
            src="/reject.svg"
            alt="Logo Icon"
            className="logoCheck"
          /></div>
    </div>
</div>
  );
};

export default Volunteer;