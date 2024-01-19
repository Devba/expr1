const cloudarcontr=require('../ddbbfuncs');
const express=require('express');

cloudarcontr.insertrespay()
const router=express.Router();

router.route("/").get(cloudarcontr.insertrespay).post(cloudarcontr.insertrespay)
router.route("/").post(cloudarcontr.insertrespay);

//.post(postcontrollers.newpost);

module.exports = router