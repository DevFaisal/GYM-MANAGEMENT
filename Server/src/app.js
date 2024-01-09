import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes Import 
import UserRouter from '../routes/user.routes.js';
import packageRouter from '../routes/package.routes.js';
import dashboardRouter from "../routes/dashboard.routes.js";
import paymentRouter from "../routes/payment.routes.js";

//routes declaration
app.use('/api/user', UserRouter);
app.use('/api/package', packageRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/payment', paymentRouter)


export { app }