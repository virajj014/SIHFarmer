const mongoose = require('mongoose');
const url = `mongodb+srv://virajj014:hj123@cluster0.qjqya0l.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })