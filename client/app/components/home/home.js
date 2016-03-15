import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import angularIntercom from 'angular-intercom';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  // angularIntercom.name,
])

.config(($stateProvider, $urlRouterProvider/*, $intercomProvider*/) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });

  // $intercomProvider
  //   .asyncLoading(true)
  //   .appID("d0idn8ii");
})
.run((/*$intercom*/) => {
  // $intercom.boot(fakeUser);
  // $intercom.show();
})
.component('home', homeComponent);

export default homeModule;
