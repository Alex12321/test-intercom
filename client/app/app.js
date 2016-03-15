import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import angularIntercom from 'angular-intercom';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  angularIntercom.name,
])
.config(($locationProvider, $intercomProvider) => {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');
  $intercomProvider
    .asyncLoading(true)
    .appID("d0idn8ii");
})
.run(['$intercom', ($intercom) => {
  $intercom.boot({email:"vps@test.ru"});
  $intercom.show();
}])
.component('app', AppComponent);
