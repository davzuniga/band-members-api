const { json } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000


app.use(cors())

const bands = {
    'the beatles': {
        'nameOfBand' : 'The Beatles',
        'leader': 'John Lennon, Paul McCartney',
        'otherMembers' : 'George Harrison, Ringo Starr',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/d/df/The_Fabs.JPG',
    },
    'oasis': {
        'nameOfBand' : 'Oasis',
        'leader': 'Noel Gallagher',
        'otherMembers': 'Liam Gallagher, Gem Archer, Andy Bell',
        'image' : 'https://cdn.oasisinet.com/wp-content/uploads/2014/02/BW-group-shot.jpg',
    },
    'radiohead': {
        'nameOfBand' : 'Radiohead',
        'leader': 'Thom Yorke',
        'otherMembers': "Johnny Greenwood, Colin Greenwood, Ed O'Brien, Philip Selway",
        'image' : 'https://www.rockhall.com/sites/default/files/styles/c03g_desktop_1920_870/public/2019-11/landscape.png?h=d5e74559&itok=5-3vJ5Hc',
    },
    'unknown':{
        'nameOfBand' : "I've never heard of that band...",
        'leader': 'unknown',
        'otherMembers': "Unknown... they might not be famous yet. Good discovery!",
        'image' : 'https://f4.bcbits.com/img/a3857959739_10.jpg',
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
        res.json(bands['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on Port ${PORT}! You better go catch it!`);
})
