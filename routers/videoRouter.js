import express from 'express';
import routes from '../routes';
import {
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();
//Upload video routes
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video details route
videoRouter.get(routes.videoDetail(), videoDetail);

//edit video routes
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Dellete Video Route
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
