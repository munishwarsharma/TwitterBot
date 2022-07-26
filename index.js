const {TwitterApi} = require("twitter-api-v2");
const KEY = require('./k1.js');

const client = new TwitterApi(KEY);
const quote = require('./qoutes');

let quote_index = Math.floor(Math.random()* quote.length); // any random integer between 0 to quote.length

console.log(quote_index);

async function tweetit() {
    await client.v2.tweet(quote[quote_index].text + '\n' + quote[quote_index].from);
    console.log("successfully tweeted ");
    quote_index++;                // increasing the index, will point to the next quote 
    quote_index %= quote.length; // so that index does not exceed the length of array
}

setInterval(tweetit, 10000);