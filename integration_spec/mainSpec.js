var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.phantomjs()).
    build();

describe('The index', function(){
  it('has a message', function(done) {
    driver.get('http://localhost:8080');
    driver.findElement(webdriver.By.tagName('h1')).getText().then(function(text) {
      expect(text).toBe('hi');
      done();
    });
  });
});