const retrieveUsers = async () => {
  const response = await fetch('/api/users', {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`User request failed with status ${response.status}`);
  }

  return response.json();
};

export { retrieveUsers };
