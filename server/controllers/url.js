const   Url = require('../models/url')
const {nanoid} = require('nanoid')
const getShortId = async (req, res) => {
    console.log(req.query)
    const url = req.query.url
    if(!url) {
        return res.status(400).json("url is required")
    }
    const shortUrl = nanoid(8)
    await Url.create({
        shortUrl : shortUrl,
        originalUrl : url,
        visitHistory : []
    })
    return res.status(200).json({id:shortUrl})
}
const updateVisitURL = async (req, res) => {
    try {
        console.log(req.params); 
        const shortUrl  = req.params.shortUrl;
        console.log(shortUrl)
        const updatedUrl = await Url.findOneAndUpdate(
            { shortUrl:shortUrl },
            {
                $push: { visitHistory: Date.now() } 
            },
            { new: true } 
        );
        if (!updatedUrl) {
            return res.status(404).json({ message: "URL not found" });
        }
        return res.redirect(updatedUrl.originalUrl);
    } catch (error) {
        console.error("Error updating visit history:", error.message);
        res.status(500).json({ error: "An error occurred while updating visit history" });
    }
};

module.exports = {getShortId, updateVisitURL}