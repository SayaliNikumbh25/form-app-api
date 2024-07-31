import express from "express"
import folder from "../controllers/folder.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = express.Router();

router.get('/:userID',  folder.getFolder)

router.post('/create',folder.createFolder);

router.delete('/delete/:folderId',folder.deleteFolder);

export default router