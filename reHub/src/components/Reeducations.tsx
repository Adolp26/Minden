import './Reeducations.css';

interface ContainerProps {
  name: string;
  date: string;
  status: string
}

const Reeducations: React.FC<ContainerProps> = ({ name, date, status }) => {
  return (
    <div className="reeducation-itemR">
            <div className="reeducation-imageR"></div>
            <div className="reeducation-infoR">
                <div className="reeducation-title">{name}</div>
                <div className='reeducation-date'>{date}</div>
                <div className="reeducation-subtitle">{status}</div>
            </div>
        </div>
  );
};

export default Reeducations;
