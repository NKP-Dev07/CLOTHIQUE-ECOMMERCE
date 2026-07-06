import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/clodinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app =express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);
  
app.get('/',(req,res)=>{
  res.send("API Working");
})

app.listen(port,()=>{
  console.log('server started on PORT : '+ port);
})
