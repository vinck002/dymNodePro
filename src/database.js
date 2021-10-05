const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost/dym-node-db-app').then(db => console.log('DB IS CONNNECTED'))
.catch(err => console.error(err));