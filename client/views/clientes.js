import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import { Taraturas } from '../../both/collections';
import { Clientes } from '../../both/collections';

//import './main.html';
//import './views/menu.html';

//VERY IMPORTANTE!! para testing
//window.Taraturas = Taraturas;
window.Clientes = Clientes;
//******************************

//import './main.html';

function CapsFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

Template.tclientesList.helpers({
  'mostrar': function(){
    return Clientes.find({}, { sort: {lname: 1}});//.fetch();
  },
  'apps': function(elem){ //REVISAAAAARRR
    return elem.lname + " " + elem.lname2
    //lname}}{{lname2
  },
  'selectedClass': function(){
    var clientId = this._id;
    var selectedClient = Session.get('selectedClient');
    if(clientId == selectedClient){
      return "selected"
    }
  }
});

Template.tclientesEdit.helpers({
  'mostrar': function(){
    //console.log(Meteor.userId());
    var selectedClient = Session.get('selectedClient');
    if (selectedClient){
      cli = Clientes.findOne({_id: selectedClient});//.name;
      //console.log(cosa.name);
      form = `<form>
      Nombre*:<br><input type="text" name="clientName" value="${cli.name}" required><br>
      Apellido1*:<br><input type="text" name="clientLname" value="${cli.lname}" required><br>
      Apellido2*:<br><input type="text" name="clientLname2"value="${cli.lname2}"><br>
      Documento de Identidad*:<br><input type="text" name="clientDocId" value="${cli.docid}" required><br>
      Teléfono1*:<br><input type="text" name="clientTlfno1" value="${cli.tlfno1}" required><br>
      Teléfono2:<br><input type="text" name="clientTlfno2 value="${cli.tlfno2}"><br>
      Dirección*:<br><input type="text" name="clientDir" value="${cli.direccion}" required><br>
      CP*:<br><input type="text" name="clientCP" value="${cli.cp}" required><br>
      Ciudad*:<br><input type="text" name="clientCity" value="${cli.city}" required><br>
      <br>* Campos obligatorios<br>
      <input type="submit" value="Guardar cambios">
      </form>`;
      $('#clientesEdit').html(form);
      //return form;
    }
    else{

    }
  },
});

Template.tclientesList.events({
  'click .cliente': function(){
    var clientId = this._id;
    //console.log(clientId);
    Session.set('selectedClient', clientId);
  },
  'click .delcli': function(){
    var clientId = Session.get('selectedClient');
    //console.log(clientId);
    Clientes.remove({ _id: clientId });
  },
  //'submit form': function(event){
});

Template.tclientesAdd.events({
  'submit form': function(event){
    event.preventDefault();
    var cliNameVar = event.target.clientName.value.trim();
    var cliLnameVar = event.target.clientLname.value.trim();
    var cliLnameVar2 = event.target.clientLname2.value.trim();

    cliNameVar  = CapsFirst(cliNameVar.toLowerCase());
    cliLnameVar = CapsFirst(cliLnameVar.toLowerCase());
    cliLnameVar2 = CapsFirst(cliLnameVar2.toLowerCase());

    Clientes.insert({
        name: cliNameVar,
        lname: cliLnameVar,
        lname2: cliLnameVar2,
        lnamef: cliLnameVar + " " + cliLnameVar2, //REVISAR
        docid: event.target.clientDocId.value,
        tlfno1: event.target.clientTlfno1.value,
        tlfno2: event.target.clientTlfno2.value,
        direccion: event.target.clientDir.value,
        cp: event.target.clientCP.value,
        city: event.target.clientCity.value,
        //user: Meteor.userId(), //PREPARAR LOG??
    });
    alert("Cliente añadido");
  }
});

Template.tclientesEdit.events({
  'submit form': function(event){
    var clientId = Session.get('selectedClient', clientId);
    //console.log(clientId);
    event.preventDefault();
    var cliNameVar = event.target.clientName.value.trim();
    var cliLnameVar = event.target.clientLname.value.trim();
    var cliLnameVar2 = event.target.clientLname2.value.trim();

    cliNameVar  = CapsFirst(cliNameVar.toLowerCase());
    cliLnameVar = CapsFirst(cliLnameVar.toLowerCase());
    cliLnameVar2 = CapsFirst(cliLnameVar2.toLowerCase());

    if (event.target.clientTlfno2 == null){ //REVISAR EL IF POR EL TLFNO2
      Clientes.update(clientId, { //clientId
        $set: {
          name: cliNameVar,
          lname: cliLnameVar,
          lname2: cliLnameVar2,
          lnamef: cliLnameVar + " " + cliLnameVar2, //REVISAR
          docid: event.target.clientDocId.value,
          tlfno1: event.target.clientTlfno1.value,
          //tlfno2: event.target.clientTlfno2.value,
          direccion: event.target.clientDir.value,
          cp: event.target.clientCP.value,
          city: event.target.clientCity.value,
          //user: Meteor.userId(), //PREPARAR LOG??
        }
      });
      alert("Cliente actualizado");
    }
    else{
      Clientes.update(clientId, { //clientId
        $addToSet: {
          name: cliNameVar,
          lname: cliLnameVar,
          lname2: cliLnameVar2,
          lnamef: cliLnameVar + " " + cliLnameVar2, //REVISAR
          docid: event.target.clientDocId.value,
          tlfno1: event.target.clientTlfno1.value,
          tlfno2: event.target.clientTlfno2.value,
          direccion: event.target.clientDir.value,
          cp: event.target.clientCP.value,
          city: event.target.clientCity.value,
          //user: Meteor.userId(), //PREPARAR LOG??
        }
      });
      alert("Cliente actualizado");

    }
  }
});