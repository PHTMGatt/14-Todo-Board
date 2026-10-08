import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      setError('');
      const data = await retrieveTickets();
      setTickets(data);
    } catch (err) {
      console.error('Failed to retrieve tickets:', err);
      setError('The board could not load its tickets. Please refresh and try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteIndvTicket = async (ticketId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTicket(ticketId);
      await fetchTickets();
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    void fetchTickets();
  }, []);

  return (
    <section className='board'>
      <div className='board-header'>
        <div>
          <span className='eyebrow'>Project workspace</span>
          <h1>Project Board</h1>
          <p>Organize tasks, track progress, and keep the next move obvious.</p>
        </div>

        <div className='board-actions'>
          <span className='task-total'>{tickets.length} total tasks</span>
          <Link to='/create' id='create-ticket-link'>
            <span aria-hidden='true'>+</span> New Ticket
          </Link>
        </div>
      </div>

      {error ? (
        <div className='board-message board-message--error' role='alert'>
          <strong>Couldn’t load the board.</strong>
          <span>{error}</span>
        </div>
      ) : loading ? (
        <div className='board-message'>Loading tasks…</div>
      ) : (
        <div className='board-display'>
          {boardStates.map((status) => {
            const filteredTickets = tickets.filter((ticket) => ticket.status === status);
            return (
              <Swimlane
                title={status}
                key={status}
                tickets={filteredTickets}
                deleteTicket={deleteIndvTicket}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Board;
