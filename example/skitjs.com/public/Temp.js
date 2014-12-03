'use strict';

var events = skit.browser.events;
var Controller = skit.platform.Controller;
var net = skit.platform.net;

var BaseController = library.BaseController;

var html = __module__.html;


return Controller.create(BaseController, {
  __title__: function() {
    return 'JavaScript web application environment';
  },

  __body__: function() {
    return html();
  }
});