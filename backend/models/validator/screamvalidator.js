module.exports = (req,res,next)=>{
    if(!req.body.title || typeof req.body.title != "string" || req.body.title.trim() == 0)
        return res.status(400).json({message:"title can not be empty"});
    if(!req.body.link || typeof req.body.link != "string")
        return res.status(400).json({message:"enter a va;id link"});
    if(!req.body.description || typeof req.body.description != "string")
        return res.status(400).json({message:"description can not be empty"});
    if(!req.body.skills || typeof req.body.skills != "string")
        return res.status(400).json({message:"skills can not be empty"});
    next();
}