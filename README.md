# Inmobile - Notas
-----------------------------------------------------------------
## 1. .meteor/packages
### Incluir (meteor add):
+ clinical:router -> var current = Iron.Location.get();
  > https://github.com/clinical-meteor/router
  > http://iron-meteor.github.io/iron-router/
+ semantic:ui (meteor integration)
+ session
+ accounts-password
  > http://meteortips.com/first-meteor-tutorial/accounts/
+ accounts-ui
+ bcrypt
- accounts-base
  > https://guide.meteor.com/accounts.html
  > https://docs.meteor.com/api/accounts.html
- accounts:unstyled 
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
- kepler.gl
  > https://github.com/keplergl/kepler.gl
  > https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/a-introduction.md
  > https://kepler.gl/

### Casi q no:
- nconf -> buscar info
- fabricjs
- moment
- moment-timezone
- mssql
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
