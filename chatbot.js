const res = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/chat`,
    { messages: updatedMessages }
  );
  