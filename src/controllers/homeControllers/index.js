const homePage = (req, res, next) => {
    res.json({
        message: "HomePage"
    });
}

const treatPost = (req, res) => {
    const contentRequest = req.body.name;
    res.json({
        message: 'using POST method',
        teste: contentRequest
    });
    console.log(contentRequest);
}

module.exports = {
    homePage, 
    treatPost
}