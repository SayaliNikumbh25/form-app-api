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

<<<<<<< HEAD
app.use(cors());
=======

  app.use(cors());
>>>>>>> 5798fef0115ffffa76a29f1e84f2796ce7e8ba67


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

