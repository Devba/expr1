const Post=require("../mods/db5")

exports.insertrespay=async(req,res,next) => {
    try {
        console.log("updatepaym , body length =" + req.body.length);

        for (p in req.body) {
            let [res, _] = await Post.cloudar(req.body[p]);
            console.log("TransactionID" + req.body[p].Transaction);  console.log(res.info);
        }

        res.status(200).end("LLegó bien cloud ");


    } catch (error) {    next(error)  }

}