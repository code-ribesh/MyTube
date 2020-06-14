import routes from '../routes';

export const getJoin = (req, res) => {
  res.render('join', { pageTile: 'Join' });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTile: 'Join' });
  } else {
    // To do : Register User
    // To do : log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render('login', { pageTile: 'Login' });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //todo: process logout
  res.redirect(routes.home);
};
export const userDetails = (req, res) =>
  res.render('userDeatils', { pageTile: 'Detail' });

export const editProfile = (req, res) =>
  res.render('editProfile', { pageTile: 'Edit Profile' });

export const changePassword = (req, res) =>
  res.render('changePassword', { pageTile: 'Change Password' });
