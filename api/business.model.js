const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business

let TwitterData = new Schema({
  SearchTerms: {
    type: String
  },
  no_positive_tweets: {
    type: Number
  },
  no_negative_tweets: {
      type: Number
  },
  male_positive_tweets: {
    type: Number
 },
  female_positive_tweets: {
    type: Number
 },
  male_negative_tweets: {
    type: Number
},
  female_negative_tweets: {
    type: Number
}
}, { 
  collection: 'twitterdata'
});

let SearchTerms = new Schema({
  SearchTerms: {
    type: String
  },
},{
    collection: 'searchterms'
});



module.exports = mongoose.model('TwitterData', TwitterData);
module.exports = mongoose.model('SearchTerms', SearchTerms);
