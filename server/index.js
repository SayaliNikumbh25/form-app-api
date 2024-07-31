import express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import formRoutes from './routes/forms.js'
import folderRoutes from './routes/folder.js'
import cors from 'cors'
import verifyToken from './middlewares/verifyToken.js';

env.config();
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,DELETE,PATCH',
        allowedHeaders: 'Content-Type,Authorization'
    }
));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/folders',folderRoutes);

app.get('/',(req,res)=>{
    res.json({
        Status: 'Sucess',
        Message:'Api working fine'
    })
})

const PORT = 5000;

app.listen(PORT, ()=>{
    mongoose.connect("mongodb+srv://sayali:sayali2598@cluster0.oqqnrkc.mongodb.net/form-app?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log('Connected to database Successfuly')})
    .then(()=> console.log(`Server is running at port ${PORT} `))
   
})

