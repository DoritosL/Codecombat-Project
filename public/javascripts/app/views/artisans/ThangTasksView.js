require.register("templates/artisans/thang-tasks-view", function(exports, require, module) {
var __templateData = function anonymous(locals
/**/) {
var buf = [];
var locals_ = (locals || {}),features = locals_.features,me = locals_.me,view = locals_.view,usesSocialMedia = locals_.usesSocialMedia,isIE = locals_.isIE,fbRef = locals_.fbRef;var thangRow_mixin = function(thang){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<tr><td class=\"taskOwner\"><a" + (jade.attrs({ 'href':('thang/' + thang.get('slug')) }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = thang.get('name')) ? "" : jade.interp)) + "</a></td><td class=\"tasks\"><table class=\"table-striped table-hover tasksTable\">");
// iterate (thang.tasks || [])
;(function(){
  var $$obj = (thang.tasks || []);
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var task = $$obj[$index];

if ( !task.complete)
{
buf.push("<tr><td>" + (jade.escape(null == (jade.interp = task.name) ? "" : jade.interp)) + "</td></tr>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var task = $$obj[$index];

if ( !task.complete)
{
buf.push("<tr><td>" + (jade.escape(null == (jade.interp = task.name) ? "" : jade.interp)) + "</td></tr>");
}
    }

  }
}).call(this);

buf.push("</table></td></tr>");
};
buf.push("<div id=\"site-nav\"><a href=\"/\"><img id=\"nav-logo\" src=\"/images/pages/base/logo.png\" title=\"CodeCombat - Learn how to code by playing a game\" alt=\"CodeCombat\"/></a><div id=\"site-nav-links\"><a href=\"/\"><img id=\"small-nav-logo\" src=\"/images/pages/base/logo.png\" title=\"CodeCombat - Learn how to code by playing a game\" alt=\"CodeCombat\"/></a><a href=\"/\"><span class=\"glyphicon glyphicon-home\"></span></a>");
if ( !features.playViewsOnly)
{
buf.push("<a href=\"/about\" data-i18n=\"nav.about\"></a>");
if ( me.isStudent())
{
buf.push("<a href=\"/students\" data-i18n=\"nav.my_courses\"></a>");
}
if ( me.isTeacher())
{
buf.push("<a href=\"/teachers/classes\" data-i18n=\"nav.my_classrooms\"></a>");
}
if ( !me.isAnonymous() && !me.isStudent() && !me.isTeacher())
{
buf.push("<a href=\"/play\" data-i18n=\"common.play\"></a><a" + (jade.attrs({ 'href':(view.forumLink()), 'data-i18n':("nav.forum") }, {"href":true,"data-i18n":true})) + "></a>");
}
buf.push("<a href=\"/community\" data-i18n=\"nav.community\"></a>");
if ( me.get('anonymous') === false)
{
buf.push("<span class=\"dropdown\"><button href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-sm header-font dropdown-toggle\">");
if ( me.get('photoURL'))
{
buf.push("<img" + (jade.attrs({ 'src':(me.getPhotoURL(18)), 'alt':(""), "class": [('account-settings-image')] }, {"src":true,"alt":true})) + "/>");
}
else
{
buf.push("<i class=\"glyphicon glyphicon-user\"></i>");
}
buf.push("<span data-i18n=\"nav.account\" href=\"/account\" class=\"spl spr\"></span><span class=\"caret\"></span></button><ul role=\"menu\" class=\"dropdown-menu\"><li class=\"user-dropdown-header\"><span class=\"user-level\">" + (jade.escape(null == (jade.interp = me.level()) ? "" : jade.interp)) + "</span><a" + (jade.attrs({ 'href':("/user/" + (me.getSlugOrID()) + "") }, {"href":true})) + "><div" + (jade.attrs({ 'style':("background-image: url(" + (me.getPhotoURL()) + ")"), "class": [('img-circle')] }, {"style":true})) + "></div></a><h3>" + (jade.escape(null == (jade.interp = me.broadName()) ? "" : jade.interp)) + "</h3></li><li><a" + (jade.attrs({ 'href':("/user/" + (me.getSlugOrID()) + ""), 'data-i18n':("nav.profile") }, {"href":true,"data-i18n":true})) + "></a></li><li><a href=\"/account/settings\" data-i18n=\"play.settings\"></a></li>");
if ( me.isAdmin() || !(me.isTeacher() || me.isStudent()))
{
buf.push("<li><a href=\"/account/payments\" data-i18n=\"account.payments\"></a></li>");
}
if ( me.isAdmin() || !(me.isTeacher() || me.isStudent()) || me.hasSubscription())
{
buf.push("<li><a href=\"/account/subscription\" data-i18n=\"account.subscription\"></a></li>");
}
if ( me.isAdmin() || !(me.isTeacher() || me.isStudent()))
{
buf.push("<li><a href=\"/account/prepaid\" data-i18n=\"account.prepaid_codes\"></a></li>");
}
buf.push("<li><a id=\"logout-button\" data-i18n=\"login.log_out\"></a></li></ul></span>");
}
else
{
buf.push("<button data-i18n=\"login.sign_up\" class=\"btn btn-sm btn-primary header-font signup-button\"></button><button data-i18n=\"login.log_in\" class=\"btn btn-sm btn-default header-font login-button\"></button>");
}
}
buf.push("<select class=\"language-dropdown form-control\"></select></div></div><div id=\"site-content-area\"><div id=\"thang-tasks-view\"><div><a href=\"/artisans\"><span class=\"glyphicon glyphicon-chevron-left\"></span><span>Artisans Home</span></a></div><input id=\"name-search\" placeholder=\"Filter: Thang Name\" class=\"inputSearch\"/><br/><input id=\"desc-search\" placeholder=\"Filter: Task Description\" class=\"inputSearch\"/><hr/><div id=\"thang-table\">");
if ( view.processedThangs)
{
buf.push("<table class=\"table table-striped\"><tr><th>Thang Name</th><th>Task List</th></tr>");
// iterate view.processedThangs
;(function(){
  var $$obj = view.processedThangs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var thang = $$obj[$index];

if ( view.hasIncompleteTasks(thang))
{
thangRow_mixin(thang);
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var thang = $$obj[$index];

if ( view.hasIncompleteTasks(thang))
{
thangRow_mixin(thang);
}
    }

  }
}).call(this);

buf.push("</table>");
}
else
{
buf.push("<span>No view.processedThangs</span>");
}
buf.push("</div></div></div><div class=\"achievement-corner\"></div><div id=\"site-footer\"><img id=\"footer-background\" src=\"/images/pages/base/nav_background.png\"/><div" + (jade.attrs({ 'id':('footer-links'), "class": [(features.playViewsOnly ? 'hide' : '')] }, {"class":true})) + "><a href=\"/about\" data-i18n=\"nav.about\"></a>");
if ( !me.isStudent())
{
buf.push("<a tabindex=\"-1\" data-i18n=\"nav.contact\" class=\"contact-modal\"></a>");
}
buf.push("<a href=\"http://blog.codecombat.com/\" data-i18n=\"nav.blog\"></a><a href=\"https://jobs.lever.co/codecombat\" tabindex=\"-1\" data-i18n=\"nav.careers\"></a><a href=\"/legal\" tabindex=\"-1\" data-i18n=\"nav.legal\"></a><a href=\"/privacy\" tabindex=\"-1\" data-i18n=\"legal.privacy_title\"></a><a href=\"/contribute\" tabindex=\"-1\" data-i18n=\"nav.contribute\"></a>");
if ( !me.isStudent())
{
buf.push("<a href=\"/play/ladder\" tabindex=\"-1\" data-i18n=\"game_menu.multiplayer_tab\"></a>");
}
if ( me.isAdmin())
{
buf.push("<a href=\"/admin\">Admin</a>");
}
if ( usesSocialMedia)
{
buf.push("<div class=\"share-buttons\">");
if ( !isIE)
{
buf.push("<div data-href=\"http://codecombat.com\" data-size=\"medium\" class=\"g-plusone\"></div>");
}
buf.push("<div" + (jade.attrs({ 'data-href':("https://www.facebook.com/codecombat"), 'data-send':("false"), 'data-layout':("button_count"), 'data-width':("350"), 'data-show-faces':("true"), 'data-ref':("coco_footer_" + (fbRef) + ""), "class": [('fb-like')] }, {"data-href":true,"data-send":true,"data-layout":true,"data-width":true,"data-show-faces":true,"data-ref":true})) + "></div>");
if ( !isIE)
{
buf.push("<a href=\"https://twitter.com/CodeCombat\" data-show-count=\"true\" data-show-screen-name=\"false\" data-dnt=\"true\" data-align=\"right\" data-i18n=\"nav.twitter_follow\" class=\"twitter-follow-button\"></a><iframe src=\"https://ghbtns.com/github-btn.html?user=codecombat&amp;repo=codecombat&amp;type=watch&amp;count=true\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"110\" height=\"20\" class=\"github-star-button\"></iframe>");
}
buf.push("</div>");
}
buf.push("</div><div id=\"footer-credits\"><span><span>© All Rights Reserved</span><br/><span>CodeCombat 2015</span></span><img id=\"footer-logo\" src=\"/images/pages/base/logo.png\" alt=\"CodeCombat\"/><span><span>Site Design by</span><br/><a href=\"http://www.fullyillustrated.com/\">Fully Illustrated</a></span><!--a.firebase-bade(href=\"https://www.firebase.com/\")  // Not using right now--><!--  img(src=\"/images/pages/base/firebase.png\", alt=\"Powered by Firebase\")--></div></div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/artisans/ThangTasksView", function(exports, require, module) {
var RootView, ThangTasksView, ThangType, ThangTypes, template,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

RootView = require('views/core/RootView');

template = require('templates/artisans/thang-tasks-view');

ThangType = require('models/ThangType');

ThangTypes = require('collections/ThangTypes');

require('game-libraries');

module.exports = ThangTasksView = (function(superClass) {
  extend(ThangTasksView, superClass);

  function ThangTasksView() {
    return ThangTasksView.__super__.constructor.apply(this, arguments);
  }

  ThangTasksView.prototype.template = template;

  ThangTasksView.prototype.id = 'thang-tasks-view';

  ThangTasksView.prototype.events = {
    'input input': 'processThangs',
    'change input': 'processThangs'
  };

  ThangTasksView.prototype.thangs = {};

  ThangTasksView.prototype.processedThangs = {};

  ThangTasksView.prototype.initialize = function() {
    this.processThangs = _.debounce(this.processThangs, 250);
    this.thangs = new ThangTypes();
    this.listenTo(this.thangs, 'sync', this.onThangsLoaded);
    return this.supermodel.trackRequest(this.thangs.fetch({
      data: {
        project: 'name,tasks,slug'
      }
    }));
  };

  ThangTasksView.prototype.onThangsLoaded = function(thangCollection) {
    return this.processThangs();
  };

  ThangTasksView.prototype.processThangs = function() {
    var i, len, ref, thang;
    this.processedThangs = this.thangs.filter(function(_elem) {
      return RegExp("" + ($('#name-search')[0].value), "i").test(_elem.get('name'));
    });
    ref = this.processedThangs;
    for (i = 0, len = ref.length; i < len; i++) {
      thang = ref[i];
      thang.tasks = _.filter(thang.attributes.tasks, function(_elem) {
        return RegExp("" + ($('#desc-search')[0].value), "i").test(_elem.name);
      });
    }
    return this.renderSelectors('#thang-table');
  };

  ThangTasksView.prototype.sortThangs = function(a, b) {
    return a.get('name').localeCompare(b.get('name'));
  };

  ThangTasksView.prototype.hasIncompleteTasks = function(thang) {
    return thang.tasks && thang.tasks.filter(function(_elem) {
      return !_elem.complete;
    }).length > 0;
  };

  return ThangTasksView;

})(RootView);
});

;
//# sourceMappingURL=/javascripts/app/views/artisans/ThangTasksView.js.map