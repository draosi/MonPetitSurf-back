const spotsRouter = require("express").Router();
const {
  getAllSpots,
  getSpotById,
  postSpot,
  putSpot,
  deleteSpot
} = require("../controllers/spotsController");

spotsRouter.route("/spots").get(getAllSpots).post(postSpot);
spotsRouter
  .route("/spots/:spotId")
  .get(getSpotById)
  .put(putSpot)
  .delete(deleteSpot);

module.exports = spotsRouter;
