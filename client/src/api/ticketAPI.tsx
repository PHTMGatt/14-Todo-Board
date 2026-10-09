import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import { demoUsers } from './userAPI';

const STORAGE_KEY = 'kanban-demo-tickets-v1';

const defaultTickets: TicketData[] = [
  {
    id: 1,
    name: 'Implement authentication',
    description: 'Set up user authentication using JWT tokens.',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: demoUsers[0],
  },
  {
    id: 2,
    name: 'Test the API',
    description: 'Test the API using Insomnia.',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: demoUsers[0],
  },
  {
    id: 3,
    name: 'Design landing page',
    description: 'Create wireframes and mockups for the landing page.',
    status: 'In Progress',
    assignedUserId: 1,
    assignedUser: demoUsers[0],
  },
  {
    id: 4,
    name: 'Deploy to production',
    description: 'Deploy the application to Render.',
    status: 'Todo',
    assignedUserId: 2,
    assignedUser: demoUsers[1],
  },
  {
    id: 5,
    name: 'Set up project repository',
    description: 'Create a new repository on GitHub and initialize it with a README file.',
    status: 'Done',
    assignedUserId: 2,
    assignedUser: demoUsers[1],
  },
];

const cloneTickets = (tickets: TicketData[]): TicketData[] =>
  tickets.map((ticket) => ({
    ...ticket,
    assignedUser: ticket.assignedUser ? { ...ticket.assignedUser } : null,
  }));

const hydrateTicket = (ticket: TicketData): TicketData => {
  const assignedUserId = ticket.assignedUserId === null ? null : Number(ticket.assignedUserId);
  const assignedUser = demoUsers.find((user) => user.id === assignedUserId) || null;

  return {
    ...ticket,
    assignedUserId,
    assignedUser: assignedUser ? { ...assignedUser } : null,
  };
};

const readTickets = (): TicketData[] => {
  if (typeof window === 'undefined') {
    return cloneTickets(defaultTickets);
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const seeded = cloneTickets(defaultTickets);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      throw new Error('Invalid ticket data');
    }

    return parsed.map((ticket) => hydrateTicket(ticket as TicketData));
  } catch (error) {
    console.warn('Using default Kanban tickets because local storage could not be read.', error);
    return cloneTickets(defaultTickets);
  }
};

const writeTickets = (tickets: TicketData[]) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  } catch (error) {
    console.warn('Kanban changes could not be persisted locally.', error);
  }
};

const retrieveTickets = async (): Promise<TicketData[]> => {
  return readTickets();
};

const retrieveTicket = async (id: number | null): Promise<TicketData> => {
  const ticket = readTickets().find((item) => item.id === id);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  return ticket;
};

const createTicket = async (body: TicketData): Promise<TicketData> => {
  const tickets = readTickets();
  const nextId = tickets.reduce((maxId, ticket) => Math.max(maxId, ticket.id || 0), 0) + 1;
  const ticket = hydrateTicket({ ...body, id: nextId });

  writeTickets([...tickets, ticket]);
  return ticket;
};

const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  const tickets = readTickets();
  const updated = hydrateTicket({ ...body, id: ticketId });
  const index = tickets.findIndex((ticket) => ticket.id === ticketId);

  if (index === -1) {
    throw new Error('Ticket not found');
  }

  const nextTickets = [...tickets];
  nextTickets[index] = updated;
  writeTickets(nextTickets);
  return updated;
};

const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  const tickets = readTickets();
  const nextTickets = tickets.filter((ticket) => ticket.id !== ticketId);

  if (nextTickets.length === tickets.length) {
    throw new Error('Ticket not found');
  }

  writeTickets(nextTickets);
  return { message: 'Ticket deleted successfully' };
};

export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket };
