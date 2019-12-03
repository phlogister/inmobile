import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import { Usuarios } from '../both/collections';
import { Clientes } from '../both/collections';
import { Taraturas } from '../both/collections';

// import './main.html';
// import './views/menu.html';
// import './views/clientes.html';

//VERY IMPORTANTE!! para testing
// window.Usuarios = Usuarios;
window.Clientes = Clientes;
window.Taraturas = Taraturas;
//******************************

/* //Pantalla Login
Router.route('/',{
  name: 'home',
  layoutTemplate: 'homeLayout',
  title: 'Log in',
  onBeforeAction: function(){
    this.redirect('/sign-in');
    this.next();
  }
})
*/

/*
Meteor.startup(function () {
  //Session.set("RBDefined", false);
  //Session.set("RBSubscribed", false);
  //Session.set("LoginLock", false);

  Router.configure({
    //layoutTemplate: 'main'
  });
*/

// Template.main.onCreated(function() {
//   this.autorun(() => {

//   });
// });


Template.main.onRendered(function () {
  //console.log($('#homeSidebar'));
});

Template.main.events({
  /*'click #homeSidebarToggle': function(ev){
    $('#homeSidebar').sidebar('toggle');
  }*/
});

Template.main.helpers({
  //'mostrar': function(){
    mostrar(){
    // return Clientes.find({});//.fetch();
    //a.push ({ address: Meteor.user().emails[0].address, name: Meteor.user().profile.name });
    return Meteor.user().emails[0].address;
  },
});

// Template.tclientes.helpers({
//   'mostrar': function(){
//     return Clientes.find({});//.fetch();
//   },
//   'selectedClass': function(){
//     var clientId = this._id;
//     var selectedClient = Session.get('selectedClient');
//     if(clientId == selectedClient){
//         return "selected"
//     }
//   }
// });

// Template.tclientes.events({
//   'click .cliente': function(){
//     var clientId = this._id;
//     Session.set('selectedClient', clientId);
//   }
// });

// Template.tpisos.helpers({
//   'mostrar': function(){
//     return Pisos.find();
//   }
// });

// Template.tpisos.events({
//   'click': function(){
//     // code goes here
//   }
// });

//Example user document:
// {
//   _id: "bbca5d6a-2156-41c4-89da-0329e8c99a4f",  // Meteor.userId()
//   username: "cool_kid_13", // unique name
//   emails: [
//     // each email address can only belong to one user.
//     { address: "cool@example.com", verified: true },
//     { address: "another@different.com", verified: false }
//   ],
//   createdAt: 1349761684042,
//   profile: {
//     // The profile is writable by the user by default.
//     name: "Joe Schmoe"
//   },
//   services: {
//     facebook: {
//       id: "709050", // facebook id
//       accessToken: "AAACCgdX7G2...AbV9AZDZD"
//     },
//     resume: {
//       loginTokens: [
//         { token: "97e8c205-c7e4-47c9-9bea-8e2ccc0694cd",
//           when: 1349761684048 }
//       ]
//     }
//   }
// }

/* Default templates*/
/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/