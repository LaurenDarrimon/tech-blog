const router = require("express").Router();
const { Article, Author, Comment } = require("../../models/");

//API route to login - posts new information to session data
router.post("/login", async (req, res) => {
  try {
    const authorData = await Author.findOne({
      where: { username: req.body.username },
    });

    console.log(authorData);

    if (!authorData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await authorData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to create a new user
router.post("/", async (req, res) => {
  try {
    const authorData = await Author.create(req.body);

    req.session.save(() => {
      req.session.username = authorData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
