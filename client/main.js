import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Pisos } from '../both/collections';
import { Clientes } from '../both/collections';

import './main.html';
import './views/menu.html';
import './views/clientes.html';

//VERY IMPORTANTE!! para testing
window.Pisos = Pisos;
window.Clientes = Clientes;
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

  Router.route('/', function () {
    this.render('main', {
    //this.render('Home', {
      //data: function () { return Items.findOne({_id: this.params._id}); }
    });
  });
    //this.render('main');
  //});
  
  Router.route('/clientes', function () {
    //this.render('clientes');
  });

});
*/

/* //Router.js
Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/thankyou', function() {
  this.render('thankyou')
});

Router.route('/', function () {
  this.render('Home', {
    data: function () { return true }
  });
});
*/


Template.main.onRendered(function () {
  //console.log($('#homeSidebar'));
});

Template.main.events({
  /*'click #homeSidebarToggle': function(ev){
    $('#homeSidebar').sidebar('toggle');
  }*/
});

Template.tclientes.helpers({
  'mostrar': function(){
    return Clientes.find({});//.fetch();
  },
  'selectedClass': function(){
    var clientId = this._id;
    var selectedClient = Session.get('selectedClient');
    if(clientId == selectedClient){
        return "selected"
    }
  }
});

Template.tclientes.events({
  'click .cliente': function(){
    var clientId = this._id;
    Session.set('selectedClient', clientId);
  }
});

Template.tpisos.helpers({
  'mostrar': function(){
    return Pisos.find();
  }
});

Template.tpisos.events({
  'click': function(){
    // code goes here
  }
});


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