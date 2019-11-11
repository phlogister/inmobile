import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Pisos } from '../both/collections';
import { Clientes } from '../both/collections';

//VERY IMPORTANTE!! para testing
window.Pisos = Pisos;
window.Clientes = Clientes;
//******************************

import './main.html';

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
