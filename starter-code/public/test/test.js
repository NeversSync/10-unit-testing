QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Article', function(assert) {
    //DONE TODO: write a test for the Article constructor
    
    let testArticle = {
      title: "Transmitting Open-source Arrays",
      category: "firewall",
      author: "Dr. Tressie Kuphal",
      authorUrl: "http://http://corrine.net",
      publishedOn: "2014-01-22",
      body: "## The RSS sensor is down, synthesize the open-source sensor so we can synthesize the RSS sensor!\n\ntransmitting the driver won't do anything."
    }
    let newArticle = new Article(testArticle)

    assert.equal(newArticle.publishedOn, "2014-01-22", 'made an article')
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    let testArticle = {}
    let newArticle = new Article(testArticle)

    assert.ok(newArticle.toHtml);
    //DONE TODO: verify that an instance of article has a toHtml method
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    //DONE TODO: write a test for the all articles property
    assert.equal(Array.isArray(Article.all), true, 'is array')
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //DONE TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!

    // let testArticle = {}
    // let newArticle = new Article(testArticle)

    let testArticle = [{},{},{}];
    Article.loadAll(testArticle);
    assert.equal(Article.all.length > 0, true)
    assert.equal(Article.all[0] instanceof Article, true)
  });
  QUnit.test('Article.allAuthors should get unique author names', function(assert) {
    //TODO: write a test for Article.allAuthors
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})

