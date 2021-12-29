exports.index = (req, res) => {
    res.render("index");
};

exports.contact = (req, res) => {
    res.render("contact");
};

exports.about = (req, res) => {
    res.render("about");
};

exports.release = (req, res) => {
    res.render("release");
};

exports.podcast = (req, res) => {
    res.render("podcast");
};

exports.thanks = (req, res) => {
    res.render("thanks");
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
  };