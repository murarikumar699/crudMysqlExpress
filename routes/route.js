const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/getAll", userController.getAll);
router.get("/:id", userController.getById);
router.post("/createNew", userController.createNew);
router.put("/editAt/:id", userController.editAt);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;