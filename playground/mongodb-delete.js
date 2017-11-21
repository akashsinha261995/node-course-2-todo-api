// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Akash Kumar'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a14162d73edd00a3cb1289c")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();
});
