import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

interface SwimlaneProps {
  title: string;
  tickets: TicketData[];
  deleteTicket: (ticketId: number) => Promise<ApiMessage>;
}

const Swimlane = ({ title, tickets, deleteTicket }: SwimlaneProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Todo':
        return 'todo';
      case 'In Progress':
        return 'inprogress';
      case 'Done':
        return 'done';
      default:
        return '';
    }
  };

  return (
    <section className={`swim-lane ${getStatusClass(title)}`}>
      <div className='swim-lane-header'>
        <div className='swim-lane-title-wrap'>
          <span className='status-dot' aria-hidden='true' />
          <h2>{title}</h2>
        </div>
        <span className='lane-count' aria-label={`${tickets.length} tickets`}>
          {tickets.length}
        </span>
      </div>

      <div className='ticket-stack'>
        {tickets.length ? (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              deleteTicket={deleteTicket}
            />
          ))
        ) : (
          <div className='lane-empty'>
            <span>Nothing here yet.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Swimlane;
