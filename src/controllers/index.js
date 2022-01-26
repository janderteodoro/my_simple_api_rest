const homePage = ( req, res ) => {
    res.json({
        message: "here is the homePage"
    });
}

//listing last weights registers 
const lastWeights = ( req, res ) => {
    res.json({
        lastWeight: [
            { date: '12/01/2022', weight: 80.02 },
            { date: '22/01/2022', weight: 77.90 }
        ]
    });
}

const registerWeights = ( req, res ) => {
    const date = req.body;
    res.json({ 
        date: req.body.date, 
        weight: req.body.weight 
    });
    console.log( date );
}

module.exports = { 
    homePage, 
    lastWeights, 
    registerWeights
}