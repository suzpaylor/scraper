# NPR Scraper
## News Scraper with Mongo DB and Cheerios 

**The fully deployed app can be found at:**
_https://suz-scraper.herokuapp.com/_

### Objective

express

express-handlebars 

mongoose

body-parser

cheerio

request
 

+ Succesfully used mongoDB and the Mongoose npm package to store articles scraped from NPR.org.

+ Use MongoDB and the Mongoose npm package to Store notes for each individule article that users input and display them on a modal.

+ All articles can be deleted from the saved status.

+ Every article will store its own notes and each note can be deleted separately. 

This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer

**This app accomplishes the following:**

**Whenever a user visits the site, this app will scrape stories from a news outlet (NPM news) nd display them for the user. Each scraped article will be saved to your application database. The app WILL scrape and display the following information for each article:**

_Headline - the title of the article_

_Summary - a brief summary of the article_

_URL - the url to the original article_

**Users will also be able to leave comments on the articles displayed and revisit them later. The comments will be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.**


