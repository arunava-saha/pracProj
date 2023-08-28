const shortid = require('shortid');
const url = require('../model/url');

const urlsetter = async (req, res) => {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' })
    const shortID = shortid();
    await url.create({
        shortId: shortID,
        requiredURL: body.url,
        visitHistory: []
    })

    return res.status(200).json({ id: shortID })
}

const urlgetter = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    })
    // console.log(entry);
    res.status(200).redirect(entry.requiredURL)
}

const analiticsgetter = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await url.findOne({ shortId })
    return res.json({
        total: entry.visitHistory.length,
        analitics: entry.visitHistory
    })
}

module.exports = { urlsetter, urlgetter, analiticsgetter }