import mongoose from 'mongoose';
import express from 'express';
import productRouter from './routers/product'
import authRouter from "./routers/auth"


const app = express();
//
app.use(express.json())
// router
app.use('/api', productRouter)
app.use('/api', authRouter)

mongoose.connect("mongodb://127.0.0.1:27017/we17307test")
export const viteNodeApp = app;