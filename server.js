
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');
const bookingRoutes = require('./Routes/bookingRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json())
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/', bookingRoutes);

app.get('/',(request,response)=>{    //to display something in browser
    console.log(request);
    return response.status(200).send('Welcome to Movie Booking App')
    })

// Connect to MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://sreejithjithu291:sreejith291@cluster0.ychrj9i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.error('MongoDB Atlas connection error:', error));