import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

//Dispara quando algum expense for excluido
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//Dispara quando algum expense for editado
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//Dispara quando algum expense for adicionado
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses')
//         .on('value', (snapshot) => {
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
//         });




// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });

//             console.log(expenses);
//         })
//         .catch((e) => {
//             console.log('Error: ', e);
//         });


// var expenses1 = {
//     descrition: 'rent',
//     note: 'December rent',
//     amount: 120000,
//     createdAt: 0
// };

// database.ref('expenses').push(expenses1);



  //#Documentation
  //ref() -> setup the reference
  //set() -> set information on reference
  //set().then() -> Promise, in case of sucess
  //set().then().catch() -> Promise in case of error
  //ref().remove() -> Remove - you can use promise
  //ref().update({ name: 'nome' }) -> update the data - you can use promise
  //.ref().once('value') -> fetch the data just once - no subscribe
  //ref().on('value', (snapshot) => { snapshot.val() }) - fetch as subscriber, see all changes local and remote and sync
  //ref().off() - cancel subscribe, e pode usar uma variavel no lugar
  //  Podemos criar uma variavel que armazena uma funcao .on() e usar no .off(variavel)
  //ref.push() - Enfia um array no banco de dados gerando id automatico



//   DATABASE EXAMPLE
//   database.ref().set({
//     name: 'Tiago Marques',
//     age: 34,
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Fremont',
//         country: 'USA'
//     }
//   }).then(() => {
//     console.log('Data saved !')
//   }).catch((e) => {
//     console.log('Something happened, error: ', e)
//   });



//# HOW TO REMOVE
// database.ref().remove()
//     .then(() => {
//         console.log('data was removed !');
//     })
//     .catch((e) => {
//         console.log('error: ', e );
//     });



//# HOW TO UPDATE
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data updated !')
// }).catch((e) => {
//     console.log('Something happened, error: ', e)
// });



//FETCH DATA FROM DATABASE
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching the data', e)
//     });


//FETCH DATA LIKE SUBSCRIBE - CHANGE DB AFTER CHANGE HERE, CHANGE HERE AFTER CHANGE THERE
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })


// SUBSCRIBE AND SHOW 3 INFORMATIONS ON SCREEN
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const text = val.name + ' is ' + val.job.title + ' at ' + val.job.company;
//     console.log(text);
// });