import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Pisos } from '../both/collections';
import { Clientes } from '../both/collections';

//import './main.html';
//import './views/menu.html';

//VERY IMPORTANTE!! para testing
window.Pisos = Pisos;
window.Clientes = Clientes;
//******************************

//import './main.html';

Template.tclientes2.helpers({
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

Template.tclientes2.events({
  'click .cliente': function(){
    var clientId = this._id;
    Session.set('selectedClient', clientId);
  }
});

Template.tpisos2.helpers({
  'mostrar': function(){
    return Pisos.find();
  }
});

Template.tpisos2.events({
  'click': function(){
    // code goes here
  }
});
