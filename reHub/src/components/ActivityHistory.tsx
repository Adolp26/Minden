import './ActivityHistory.css';

interface ContainerProps {
  name: string;
  date: string;
  color: string;
  status: string
}

const ActivityHistory: React.FC<ContainerProps> = ({ name, date, color,status }) => {
  return (
    <li className="activity-item">
    <div className="activity-info">
        <div className="calendar-icon-placeholder"><img
                src="/calendar-clock.svg"
                alt="Logo Icon"
                className="logoD"
              /></div>
        <div className="activity-details">
            <span className="activity-name">{name}</span>
            <span className="activity-date">{date}</span>
        </div>
    </div>
    <span className={"activity-status "+ color}>{status}</span>
</li>
  );
};

export default ActivityHistory;