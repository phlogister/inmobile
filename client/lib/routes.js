import { Meteor } from 'meteor/meteor'

Router.route('/', function () {
  // this.layout('ApplicationLayout');
  if (Meteor.userId()) {
    this.render('main', {
      title: "iNmobile - Datos de Cuenta",
    });
  }
  else {
    // this.render('login', {
    //   title: "iNmobile - Login",
    // });
    Router.go('/login');
  }
  // this.render('tsclientes', {to: 'aside'});
  // this.render('tspisos', {to: 'footer'});
});

Router.route('/login', function () {
  if (Meteor.userId()) {
    Router.go('/');
  }
  else {
    // Router.go('/login');
    this.render('login', {
      title: "iNmobile - Login",
    });
  }
});

Router.route('/agenda', function () {
  if (Meteor.userId()) {
    this.render('agenda', {
      title: "iNmobile - Agenda",
    });
  }
  else {
    // this.render('login', {
    //   title: "iNmobile - Login",
    // });
    Router.go('/login');
  }
});

Router.route('/clientes', function () {
  if (Meteor.userId()) {
    this.render('clientes', {
      title: "iNmobile - Clientes",
    });
  }
  else {
    // this.render('login', {
    //   title: "iNmobile - Login",
    // });
    Router.go('/login');
  }
});

Router.route('/taraturas', function () {
  if (Meteor.userId()) {
    this.render('taraturas', {
      title: "iNmobile - Taraturas",
    });
  }
  else {
    // this.render('login', {
    //   title: "iNmobile - Login",
    // });
    Router.go('/login');
  }
});

//NOT defined routes
Router.route('/(.*)', function() {//regex for every route, must be last
  if (Meteor.userId()) {
    Router.go('/');
  }
  else {
    Router.go('/login');
  }
  // if (this.ready()) {
  //   document.title = "404";
  //   this.render('login');// this.render('error');
  // } //else this.render('loading');
})
