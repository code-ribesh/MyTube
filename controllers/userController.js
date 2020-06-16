import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

export const getJoin = (req, res) => {
  res.render('join', { pageTile: 'Join' });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTile: 'Join' });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render('login', { pageTile: 'Login' });

export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

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
