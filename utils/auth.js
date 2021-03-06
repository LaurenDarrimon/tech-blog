//middleware to ensure user is logged in, otherwise reroute to login page

const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
module.exports = withAuth;
  