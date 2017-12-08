const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/saved"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.save);

// Matches with "/api/saved/:id"
router.route("/:id")
  .delete(articleController.delete);

module.exports = router;
