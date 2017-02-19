/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home2.hbs', {
    title: 'Ride the Handlebars',
    author: {name: 'Lemmy Kilmister', age:67},
    message: 'It seems that our brave new world is becoming less tolerant, spiritual and educated than it ever was when I was young.'
  });
};
