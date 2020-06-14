import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('home', { pageTile: 'Home', videos });
  } catch (error) {
    console.log(error);
    res.render('home', { pageTile: 'Home', videos: [] });
  }
};
export const search = (req, res) => {
  const {
    query: { term: searchBy },
  } = req;
  res.render('search', { pageTile: 'Search', searchBy, videos });
};

export const getUpload = (req, res) =>
  res.render('upload', { pageTile: 'Upload' });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTile: 'Video Detail' });
export const editVideo = (req, res) =>
  res.render('editVideo', { pageTile: 'Edit Video' });
export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTile: 'Delete Video' });
