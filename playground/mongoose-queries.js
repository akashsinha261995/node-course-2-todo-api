const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a17c4841d66f50c14c6de944';
//
// if(!ObjectID.isValid(id)){
//   console.log('id not valid');
// }

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found.');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


User.findById('5a1800dae185ad3b93e6906d').then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
