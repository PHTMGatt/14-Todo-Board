import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

interface TicketCardProps {
  ticket: TicketData;
  deleteTicket: (ticketId: number) => Promise<ApiMessage>;
}

const TicketCard = ({ ticket, deleteTicket }: TicketCardProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const ticketId = Number(event.currentTarget.value);
    if (!Number.isNaN(ticketId)) {
      try {
        await deleteTicket(ticketId);
      } catch (error) {
        console.error('Failed to delete ticket:', error);
      }
    }
  };

  return (
    <article className='ticket-card'>
      <div className='ticket-card-copy'>
        <h3>{ticket.name}</h3>
        <p className='ticket-description'>{ticket.description}</p>
      </div>

      <div className='ticket-meta'>
        <span className='assignee-avatar' aria-hidden='true'>
          {ticket.assignedUser?.username?.slice(0, 2).toUpperCase() || '—'}
        </span>
        <span>{ticket.assignedUser?.username || 'Unassigned'}</span>
      </div>

      <div className='ticket-actions'>
        <Link to='/edit' state={{ id: ticket.id }} className='editBtn'>
          Edit
        </Link>
        <button
          type='button'
          value={String(ticket.id)}
          onClick={handleDelete}
          className='deleteBtn'
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default TicketCard;
