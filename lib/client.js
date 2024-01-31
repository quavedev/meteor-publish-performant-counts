const Counter = {};
Counter.collection = new Meteor.Collection("counters-collection");

Counter.get = async function (name) {
  const doc = await Counter.collection.findOneAsync(name);
  if (doc) {
    return doc.count;
  } else {
    return 0;
  }
};

export { Counter };
