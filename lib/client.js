Counter = {};
Counter.collection = new Meteor.Collection("counters-collection");

Counter.getAsync = async function (name) {
  const doc = await Counter.collection.findOneAsync(name);
  if (doc) {
    return doc.count;
  } else {
    return 0;
  }
};
