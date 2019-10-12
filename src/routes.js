const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const TechsController = require('./controllers/TechsController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejetionController = require('./controllers/RejectionController');

const routes  = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail') ,SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/techs', TechsController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejetionController.store);

module.exports = routes;
