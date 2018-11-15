const axios = require("axios");
// webTitle
// trailText
// webUrl
const cleanUpStories = newsStories => {
  let newsArray = [];
  newsStories.forEach(newsStory => {
    let storyObj = {};
    storyObj.webTitle = newsStory.webTitle;
    storyObj.webUrl = newsStory.webUrl;
    newsArray.push(storyObj);
  });
  return newsArray;
};

const getGuardianNews = topic =>
  axios(
    `https://content.guardianapis.com/search?q=${topic}&from-date=2018-11-01&pages=1&api-key=9wur7sdh84azzazdt3ye54k4`
  )
    .then(res => {
      return res.data.response.results;
    })
    .then(newsStories => {
      return cleanUpStories(newsStories);
    })
    .catch(err =>
      console.log(`Sorry could get the stories! Go this error:${err}`)
    );

module.exports = getGuardianNews;
