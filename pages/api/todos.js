const todos = async (req, res) => {
  if (req.method === 'GET') {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  }
}

export default todos;