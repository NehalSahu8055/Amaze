import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User } from './model/user.js';

const server = express();

// Middlewares
server.use(express.json());
server.use(morgan('combined'));

// Define __dirname for file paths
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve the login page when a GET request is made to /login
server.get('/login', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// server.get('/users', async (req, res) => {
//   res.json(await User.find({ password: '123456' }));
// });

// Handle login POST request
server.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Received username:', username);
  console.log('Received password:', password);

  try {
    const user = await User.find({ username, password });

    if (user.length > 0) {
      // User found, you can proceed with authentication
      res.sendFile(__dirname + '/success.html');
    } else {
      // User not found or incorrect credentials
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle any errors that might occur during authentication
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

server.listen(8080, () => {
  console.log('Server Started...');
});
