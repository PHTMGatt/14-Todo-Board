import type { CSSProperties } from 'react';

import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

interface SwimlaneProps {
  title: string;
  tickets: TicketData[];
  deleteTicket: (ticketId: number) => Promise<ApiMessage>;
}

type LaneStyle = CSSProperties & {
  '--lane-accent': string;
  '--lane-accent-soft': string;
};

const laneStyles: Record<string, LaneStyle> = {
  Todo: {
    '--lane-accent': '#f59e0b',
    '--lane-accent-soft': 'rgba(245, 158, 11, 0.16)',
    borderColor: 'rgba(245, 158, 11, 0.24)',
    background:
      'linear-gradient(180deg, rgba(48, 35, 13, 0.97), rgba(21, 18, 11, 0.95))',
  },
  'In Progress': {
    '--lane-accent': '#8b5cf6',
    '--lane-accent-soft': 'rgba(139, 92, 246, 0.16)',
    borderColor: 'rgba(139, 92, 246, 0.26)',
    background:
      'linear-gradient(180deg, rgba(34, 24, 55, 0.97), rgba(17, 13, 29, 0.95))',
  },
  Done: {
    '--lane-accent': '#22c55e',
    '--lane-accent-soft': 'rgba(34, 197, 94, 0.15)',
    borderColor: 'rgba(34, 197, 94, 0.24)',
    background:
      'linear-gradient(180deg, rgba(14, 43, 31, 0.97), rgba(8, 23, 18, 0.95))',
  },
};

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
    <section
      className={`swim-lane ${getStatusClass(title)}`}
      style={laneStyles[title]}
    >
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
