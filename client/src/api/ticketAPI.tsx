import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

const retrieveTickets = async (): Promise<TicketData[]> => {
  const response = await fetch('/api/tickets/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Ticket request failed with status ${response.status}`);
  }

  return response.json();
};

const retrieveTicket = async (id: number | null): Promise<TicketData> => {
  const response = await fetch(`/api/tickets/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Ticket request failed with status ${response.status}`);
  }

  return response.json();
};

const createTicket = async (body: TicketData) => {
  const response = await fetch('/api/tickets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Ticket creation failed with status ${response.status}`);
  }

  return response.json();
};

const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  const response = await fetch(`/api/tickets/${ticketId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Ticket update failed with status ${response.status}`);
  }

  return response.json();
};

const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  const response = await fetch(`/api/tickets/${ticketId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Ticket deletion failed with status ${response.status}`);
  }

  return response.json();
};

export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket };
