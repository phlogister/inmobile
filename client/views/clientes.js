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

Template.clientes.onRendered(function () {
  this.$('.top.menu .item').tab();
  // $('.top.menu .item').tab();
});

Template.tclientesList.helpers({
  'mostrar': function(){
    return Clientes.find({}, { sort: {lname: 1, lname2: 1, name: 1}});//.fetch();
  },
  // <Segment style={{overflow: 'auto', maxHeight: 200 }}> //<-SCROLL
  // </Segment>

  // 'apps': function(elem){ //REVISAAAAARRR
  //   return elem.lname + " " + elem.lname2
  //   //lname}}{{lname2
  // },
  'selectedClass': function(){
    let clientId = this._id;
    let selectedClient = Session.get('selectedClient');
    if(clientId == selectedClient){
      return "selected"
    }
  },
});

Template.tclientesEdit.helpers({
  'mostrar': function(){
    //console.log(Meteor.userId());
    let selectedClient = Session.get('selectedClient');
    if (selectedClient){
      cli = Clientes.findOne({_id: selectedClient});
      form = `<form>
      Documento de Identidad*:<br><input type="text" name="clientDocId" value="${cli.docid}" required><br>
      Nombre*:<br><input type="text" name="clientName" value="${cli.name}" required><br>
      Apellido1*:<br><input type="text" name="clientLname" value="${cli.lname}" required><br>
      Apellido2:<br><input type="text" name="clientLname2" value="${cli.lname2}"><br>
      Teléfono1*:<br><input type="text" name="clientTlfno1" value="${cli.tlfno1}" required><br>
      Teléfono2:<br><input type="text" name="clientTlfno2" value="${cli.tlfno2}"><br>
      Dirección*:<br><input type="text" name="clientDir" value="${cli.direccion}" required><br>
      CP*:<br><input type="text" name="clientCP" value="${cli.cp}" required><br>
      Ciudad*:<br><input type="text" name="clientCity" value="${cli.city}" required><br>
      <br>* Campos obligatorios<br>
      <input type="submit" value="Guardar cambios">
      </form>`;
      $('#clientesEdit').html(form);
      //return form;
    }
    // else{
    // }
  },
});

Template.tclientesShow.helpers({
  'mostrar': function(){
    //console.log(Meteor.userId());
    let selectedClient = Session.get('selectedClient');
    if (selectedClient){
      cli = Clientes.findOne({_id: selectedClient});
      form = `<form>
      Documento de Identidad:<br><input type="text" name="clientDocId" value="${cli.docid}" readonly><br>
      Nombre:<br><input type="text" name="clientName" value="${cli.name}" readonly><br>
      Apellido1:<br><input type="text" name="clientLname" value="${cli.lname}" readonly><br>
      Apellido2:<br><input type="text" name="clientLname2" value="${cli.lname2}" readonly><br>
      Teléfono1:<br><input type="text" name="clientTlfno1" value="${cli.tlfno1}" readonly><br>
      Teléfono2:<br><input type="text" name="clientTlfno2" value="${cli.tlfno2}" readonly><br>
      Dirección:<br><input type="text" name="clientDir" value="${cli.direccion}" readonly><br>
      CP:<br><input type="text" name="clientCP" value="${cli.cp}" readonly><br>
      Ciudad:<br><input type="text" name="clientCity" value="${cli.city}" readonly><br>
      </form>`;
      $('#clientesShow').html(form);
    }
  },
});

Template.tclientesList.events({
  'click .cliente': function(){
    let clientId = this._id;
    //console.log(clientId);
    Session.set('selectedClient', clientId);
  },
  'click .delcli': function(){
    let clientId = Session.get('selectedClient');
    //console.log(clientId);
    let confirmar = confirm("¿Está seguro de borrar este cliente?");
    if (confirmar){
      Clientes.remove({ _id: clientId });  //PREPARAR LOG??
      alert("Cliente borrado."); 
    }
  },
  //'submit form': function(event){
});

Template.tclientesAdd.events({
  'submit form': function(event){
    event.preventDefault();
    let cliNameVar = event.target.clientName.value.trim();
    let cliLnameVar = event.target.clientLname.value.trim();
    let cliLnameVar2;
    let cliTlfnoVar2;
    let cliLnamefVar;

    cliNameVar  = CapsFirst(cliNameVar.toLowerCase());
    cliLnameVar = CapsFirst(cliLnameVar.toLowerCase());
    cliLnameVar2 = event.target.clientLname2.value.trim();

    if ((cliLnameVar2 === "undefined") || (cliLnameVar2 == "")) {
      cliLnameVar2 = "";
      cliLnamefVar = cliLnameVar;
    }
    else{
      cliLnameVar2 = CapsFirst(cliLnameVar2.toLowerCase());
      cliLnamefVar = cliLnameVar + " " + cliLnameVar2;
    }
    if (event.target.clientTlfno2.value === "undefined"){
      cliTlfnoVar2 = "";
    }
    else{
      cliTlfnoVar2 = event.target.clientTlfno2.value.trim();
    }

    Clientes.insert({
        name: cliNameVar,
        lname: cliLnameVar,
        lname2: cliLnameVar2,
        lnamef: cliLnamefVar,
        docid: event.target.clientDocId.value.trim(),
        tlfno1: event.target.clientTlfno1.value.trim(),
        tlfno2: cliTlfnoVar2,
        direccion: event.target.clientDir.value.trim(),
        cp: event.target.clientCP.value.trim(),
        city: CapsFirst(event.target.clientCity.value.trim().toLowerCase()),
        //oficina: Meteor.userId().ofi.id, <- invariable
        //global???: true/false
        //user_add: Meteor.userId(),
        //created: tstamp,
    });
    alert("Cliente añadido");
    document.getElementById("formAdd").reset();
  },
});

Template.tclientesEdit.events({
  'submit form': function(event){
    let clientId = Session.get('selectedClient');
    //console.log(clientId);
    event.preventDefault();
    let cliNameVar = event.target.clientName.value.trim();
    let cliLnameVar = event.target.clientLname.value.trim();
    let cliLnameVar2;
    let cliTlfnoVar2;
    let cliLnamefVar;

    cliNameVar  = CapsFirst(cliNameVar.toLowerCase());
    cliLnameVar = CapsFirst(cliLnameVar.toLowerCase());
    cliLnameVar2 = event.target.clientLname2.value.trim();

    if ((cliLnameVar2 === "undefined") || (cliLnameVar2 == "")) {
      cliLnameVar2 = "";
      cliLnamefVar = cliLnameVar;
    }
    else{
      cliLnameVar2 = CapsFirst(cliLnameVar2.toLowerCase());
      cliLnamefVar = cliLnameVar + " " + cliLnameVar2;
    }
    if (event.target.clientTlfno2.value === "undefined"){
      cliTlfno2 = "";
    }
    else{
      cliTlfnoVar2 = event.target.clientTlfno2.value.trim();
    }

    Clientes.update(clientId, {
      //$addToSet: {
      $set: {
        name: cliNameVar,
        lname: cliLnameVar,
        lname2: cliLnameVar2,
        lnamef: cliLnamefVar,
        docid: event.target.clientDocId.value.trim(),
        tlfno1: event.target.clientTlfno1.value.trim(),
        tlfno2: cliTlfnoVar2,
        direccion: event.target.clientDir.value.trim(),
        cp: event.target.clientCP.value.trim(),
        city: CapsFirst(event.target.clientCity.value.trim().toLowerCase()),
        //user_mod: Meteor.userId(),
        //modified: tstamp,
      }
    });
    alert("Cliente actualizado");
  },
});