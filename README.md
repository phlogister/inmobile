# Inmobile - Notas
-----------------------------------------------------------------
## 1. .meteor/packages
### Incluir (meteor add):
+ clinical:router -> var current = Iron.Location.get();
  > https://github.com/clinical-meteor/router
  > http://iron-meteor.github.io/iron-router/
+ semantic:ui (meteor integration)
  > https://semantic-ui.com/modules/tab.html#/definition
  > https://semantic-ui.com/behaviors/visibility.html#/introduction
+ session
+ accounts-password
  > http://meteortips.com/first-meteor-tutorial/accounts/
+ accounts-ui
  > https://docs.meteor.com/api/accounts.html#Accounts-ui-config
  > https://guide.meteor.com/accounts.html#useraccounts
  > https://github.com/meteor-useraccounts/core/blob/master/Guide.md#content-protection
  > https://stackoverflow.com/questions/23507384/adding-more-fields-to-meteor-user-accounts
+ bcrypt
- accounts-base
  > https://guide.meteor.com/accounts.html
  > https://docs.meteor.com/api/accounts.html
  > https://rurri.com/articles/Creating-a-custom-authentication-service-in-Meteor.html
- accounts:unstyled
- alanning:roles
  > https://atmospherejs.com/alanning/roles
- tap:i18n
- tap:i18n-db
- tap:i18n-ui
- npm-bcrypt@0.9.3
- dhtmlx:scheduler
  > https://www.codeproject.com/Articles/1112927/Using-dhtmlxScheduler-with-MeteorJS
- aldeed:autoform
- planifica:encryption
  > https://github.com/Planifica/encryption
  > https://medium.com/@PhilippSpo/client-side-encryption-in-meteor-3ae982e557a8

### Opcionales:
- brentjanderson:buzz
- meteor-ssl <- no cifra mongo entre cli-serv
- force-ssl
-Auth0:
  > https://auth0.com/blog/developing-real-time-apps-with-meteor/
  > https://auth0.com/docs/dashboard/reference/settings-api
- kepler.gl
  > https://github.com/keplergl/kepler.gl
  > https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/a-introduction.md
  > https://kepler.gl/
- gmaps:
  > https://github.com/googlemaps/google-maps-services-js
  > https://developers.google.com/maps/web-services/client-library

### Casi q no:
- nconf -> buscar info
- fabricjs
- moment
- moment-timezone
- mssql

### Iconos:
- newspaper outline (noticias/publicidad?)
- comment (noticias?)
- download (backup)
- wrench/cog (Control Oficina)
- building (Taraturas)
- home (encargos?)
- book (pedidos?)
- globe (Global)
- map/map marker alternate/compass (Mapa)
- bullhorn, key, info, archive, file alternate[ outline], pencil alternate, comment, euro sign, bell, bell slash, money bill alternate outline
- eye, ban, id badge, id card, users
- rebel, empire, first order, linux, node js, docker, 

### Implementacion:
#### Subitems:
  > https://stackoverflow.com/questions/30925665/add-subitems-to-meteor-document

#### Input form:
  > https://zellwk.com/blog/check-empty-input-js/
  > https://www.npmjs.com/package/validate-phone-number-node-js
  > https://www.npmjs.com/package/phone
  > https://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript
  > https://www.w3resource.com/javascript/form/phone-no-validation.php


-----------------------------------------------------------------
## 2. Módulos
- Semantic UI
  > https://medium.com/codebagng/getting-started-with-semantic-ui-framework-c5c34070fafc
  > https://github.com/mdehoog/Semantic-UI-Calendar
-----------------------------------------------------------------
## 3. Despliegue
+ Kubernetes
  > https://github.com/Gregivy/meteor-kubernetes-guide
+ Docker Registry
  > https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-18-04
  > https://www.docker.com/blog/how-to-use-your-own-registry/
  > https://www.howtoforge.com/how-to-setup-private-docker-registry-on-ubuntu-1804-lts/
