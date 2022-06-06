const { json } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000


app.use(cors())

const bands = {
    'the beatles': {
        'leader': 'John Lennon, Paul McCartney',
        'otherMembers' : 'George Harrison, Ringo Starr',
    },
    'oasis': {
        'leader': 'Noel Gallagher',
        'otherMembers': 'Liam Gallagherz, Gem Archer, Andy Bell'
    },
    'radiohead': {
        'leader': 'Thom Yorke',
        'otherMembers': "Johnny Greenwood, Colin Greenwood, Ed O'Brien, Philip Selway"
    },
    'unknown':{
        'leader': 'unknown',
        'otherMembers': "Unknown... they might not be famous yet. Good discovery!"
    }
        
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:bandName', (req, res) => {
    const nameOfBand = req.params.bandName.toLowerCase()
    if(bands[nameOfBand]){
        res.json(bands[nameOfBand])
    }
    else{
        res.json(bands['the beatles'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on Port ${PORT}! You better go catch it!`);
})
