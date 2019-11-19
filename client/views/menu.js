import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor'

Template.menu.events({
  'click .Mmain': function (e) {
    // console.log('TOCADO!!')
    Router.go('/');
  },
  'click .Magenda': function (e) {
    // console.log('TOCADO!!')
    Router.go('/agenda');
  },
  'click .Mclient': function (e) {
    // console.log('TOCADO!!')
    Router.go('/clientes');
  },
  'click .Mtaraturas': function (e) {
    // console.log('TOCADO!!')
    Router.go('/taraturas');
  },

  'click .IniSession': function (e) {
    // console.log('TOCADO!!')
    Router.go('/login');
  },
  'click .CloSession': function (e) {
    // console.log('TOCADO!!')
    Meteor.logout();
    Router.go('/');
  },
  
});


