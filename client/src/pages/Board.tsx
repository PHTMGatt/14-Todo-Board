import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import auth from '../utils/auth';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const fetchTickets = async () => {
    try {
      const data = await retrieveTickets();
      setTickets(data);
    } catch (err) {
      console.error('Failed to retrieve tickets:', err);
      setError(true);
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

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loginCheck) {
      void fetchTickets();
    }
  }, [loginCheck]);

  if (error) {
    return <ErrorPage />;
  }

  if (!loginCheck) {
    return (
      <section className='login-notice'>
        <div className='login-notice-card'>
          <span className='eyebrow'>Project workspace</span>
          <h1>Keep work moving.</h1>
          <p>Sign in to view your board, create tickets, and manage progress.</p>
          <Link to='/login' className='primary-link'>Sign in to continue</Link>
        </div>
      </section>
    );
  }

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
    </section>
  );
};

export default Board;
