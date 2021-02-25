import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App configuartion
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:JpFQ0Q1whlDhAesd@cluster0.15gik.mongodb.net/tinderdb?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(Cors());

//DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//API endpoints
app.get('/' /**base url */, (req,res /*request, respond */) => 
    res.status(200).send("Cheers to tinder clone")
);

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find( (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`listening on local host: ${port}`));