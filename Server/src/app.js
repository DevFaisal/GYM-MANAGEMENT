import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes Import 
import UserRouter from '../routes/user.routes.js';
import packageRouter from '../routes/package.routes.js';
import dashboardRouter from "../routes/dashboard.routes.js";
import paymentRouter from "../routes/payment.routes.js";

//routes declaration
app.use('/user', UserRouter);
app.use('/package', packageRouter);
app.use('/dashboard', dashboardRouter);
app.use('/payment', paymentRouter)


export { app }