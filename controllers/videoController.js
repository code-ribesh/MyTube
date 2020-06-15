import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render('home', { pageTile: 'Home', videos });
  } catch (error) {
    res.render('home', { pageTile: 'Home', videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({ title: { $regex: searchBy, $options: 'i' } });
  } catch (error) {
    console.log(error);
  }
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
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const video = await Video.findById(id);
    res.render('videoDetail', { pageTile: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', { pageTile: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findByIdAndRemove(id);
  } catch (error) {
    console.log(eroor);
  }
  res.redirect(routes.home);
};
