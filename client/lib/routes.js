Router.route('/', function () {
  this.render('main', {
  //this.render('Home', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});
  //this.render('main');
//});

Router.route('/clientes', function () {
  this.render('clientes');
});