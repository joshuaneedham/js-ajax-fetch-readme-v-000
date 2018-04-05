const app = "I don't do much.";
fetch('https://api.twitter.com/1.1/statuses/joshuaneedham_timeline.json')
  .then(res => res.json())
  .then(json => console.log(json));