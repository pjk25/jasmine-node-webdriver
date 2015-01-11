module.exports = {
  index: function(req, res) {
    res.send('<html><body><h1>hi</h1></body></html>');
    res.end();
  }
}