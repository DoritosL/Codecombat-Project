require.register("templates/courses/courses-view", function(exports, require, module) {
var __templateData = function anonymous(locals
/**/) {
var buf = [];
var locals_ = (locals || {}),view = locals_.view,me = locals_.me,serverConfig = locals_.serverConfig,i18n = locals_.i18n;var course_instance_body_mixin = function(courseInstance, classroom){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var course = view.courses.get(courseInstance.get('courseID'));
var stats = classroom.statsForSessions(courseInstance.sessions, course.id);
if ( stats.levels.done)
{
buf.push("<div class=\"text-success\"><span class=\"glyphicon glyphicon-ok\"></span><span data-i18n=\"courses.course_complete\" class=\"spl\"></span><span>!</span></div>");
}
buf.push("<div class=\"pull-right\">");
if ( stats.levels.done)
{
var arenaLevel = stats.levels.arena;
var projectLevel = stats.levels.project;
if ( arenaLevel)
{
var url = view.urls.courseArenaLadder({level: view.originalLevelMap[arenaLevel.get('original')] || arenaLevel, courseInstance: courseInstance});
buf.push("<a" + (jade.attrs({ 'data-href':(url), 'data-level-slug':(arenaLevel.get('slug')), 'data-event-action':("Students Play Arena"), "class": [('play-btn'),('btn'),('btn-forest-alt'),('btn-lg'),('m-b-1')] }, {"data-href":true,"data-level-slug":true,"data-event-action":true})) + "><span data-i18n=\"courses.play_arena\"></span></a>");
}
else if ( projectLevel)
{
var url = view.urls.courseLevel({level: view.originalLevelMap[projectLevel.get('original')] || projectLevel, courseInstance: courseInstance});
buf.push("<a" + (jade.attrs({ 'data-href':(url), 'data-level-slug':(projectLevel.get('slug')), 'data-event-action':("Students Play Project"), "class": [('play-btn'),('btn'),('btn-forest-alt'),('btn-lg'),('m-b-1')] }, {"data-href":true,"data-level-slug":true,"data-event-action":true})) + "><span data-i18n=\"courses.view_project\"></span></a>");
}
else
{
buf.push("<a disabled=\"disabled\" data-i18n=\"courses.course_complete\" class=\"btn btn-default btn-lg m-b-1\"></a>");
}
}
else if ( stats.levels.next != stats.levels.first)
{
var next = stats.levels.next;
var url = view.urls.courseLevel({level: view.originalLevelMap[next.get('original')] || next, courseInstance: courseInstance});
buf.push("<a" + (jade.attrs({ 'data-href':(url), 'data-level-slug':(next.get('slug')), 'data-event-action':("Students Continue Course"), "class": [('play-btn'),('btn'),('btn-forest'),('btn-lg'),('m-b-1')] }, {"data-href":true,"data-level-slug":true,"data-event-action":true})) + "><span data-i18n=\"common.continue\"></span></a>");
}
else
{
var firstLevel = stats.levels.first;
var url = view.urls.courseLevel({level: view.originalLevelMap[firstLevel.get('original')] || firstLevel, courseInstance: courseInstance});
buf.push("<a" + (jade.attrs({ 'data-href':(url), 'data-level-slug':(firstLevel.get('slug')), 'data-event-action':("Students Start Course"), "class": [('play-btn'),('btn'),('btn-navy'),('btn-lg'),('m-b-1')] }, {"data-href":true,"data-level-slug":true,"data-event-action":true})) + "><span data-i18n=\"courses.start\"></span></a>");
}
buf.push("</div>");
if ( stats.levels.lastPlayed)
{
buf.push("<div><span data-i18n=\"courses.last_level\"></span><span>: " + (jade.escape((jade.interp = stats.levels.lastPlayedNumber) == null ? '' : jade.interp)) + ".</span><span class=\"spl\">" + (jade.escape(null == (jade.interp = stats.levels.lastPlayed.get('name')) ? "" : jade.interp)) + "</span></div>");
}
buf.push("<div class=\"clearfix\"></div><div class=\"progress\"><div" + (jade.attrs({ 'style':("width:"+stats.levels.pctDone), "class": [('progress-bar')] }, {"style":true})) + ">" + (jade.escape(null == (jade.interp = stats.levels.pctDone) ? "" : jade.interp)) + "</div></div>");
};
var accountLinks_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li><a" + (jade.attrs({ 'href':("/user/" + (me.getSlugOrID()) + ""), 'data-i18n':("nav.profile") }, {"href":true,"data-i18n":true})) + "></a></li><li><a href=\"/account/settings\" data-i18n=\"play.settings\"></a></li>");
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
buf.push("<li><a id=\"logout-button\" data-i18n=\"login.log_out\"></a></li>");
};
buf.push("<div class=\"style-flat\"><nav id=\"main-nav\" class=\"navbar navbar-default\"><div class=\"container-fluid container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"navbar-header\"><button data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\" class=\"navbar-toggle collapsed\"><span data-i18n=\"nav.toggle_nav\" class=\"sr-only\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\">");
if ( serverConfig.codeNinjas)
{
buf.push("<img id=\"logo-img\" src=\"/images/pages/base/logo.png\" class=\"code-ninjas-powered-by\"/><img src=\"/images/pages/base/code-ninjas-logo-right.png\" class=\"code-ninjas-logo\"/>");
}
else
{
buf.push("<img id=\"logo-img\" src=\"/images/pages/base/logo.png\"/>");
}
buf.push("<span class=\"glyphicon glyphicon-home\"></span></a></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav\"><li><a href=\"/about\" data-i18n=\"nav.about\"></a></li>");
if ( me.isStudent())
{
buf.push("<li><a href=\"/students\" data-i18n=\"nav.my_courses\"></a></li>");
}
if ( !me.isAnonymous() && me.isTeacher())
{
buf.push("<li><a href=\"/teachers/classes\" data-i18n=\"nav.my_classrooms\"></a></li>");
}
if ( !me.isAnonymous() && !me.isStudent() && !me.isTeacher())
{
buf.push("<li><a href=\"/play\" data-i18n=\"common.play\"></a></li><li><a" + (jade.attrs({ 'href':(view.forumLink()), 'data-i18n':("nav.forum") }, {"href":true,"data-i18n":true})) + "></a></li>");
}
buf.push("</ul>");
if ( me.isAnonymous())
{
buf.push("<ul class=\"nav navbar-nav\"><li><a id=\"create-account-link\" data-i18n=\"login.sign_up\" class=\"signup-button\"></a></li><li><a id=\"login-link\" data-i18n=\"login.log_in\" class=\"login-button\"></a></li></ul>");
}
else
{
buf.push("<ul class=\"nav navbar-nav hidden-md hidden-lg\"><li class=\"disabled\"><a><img" + (jade.attrs({ 'src':(me.getPhotoURL()), "class": [('img-circle'),('img-circle-small'),('m-r-1'),((me.isTeacher() ? 'border-navy' : ''))] }, {"class":true,"src":true})) + "/><span>" + (jade.escape(null == (jade.interp = me.displayName()) ? "" : jade.interp)) + "</span></a></li>");
accountLinks_mixin();
buf.push("</ul><ul class=\"nav navbar-nav\"><li class=\"dropdown hidden-xs hidden-sm\"><a href=\"#\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\"><img" + (jade.attrs({ 'src':(me.getPhotoURL()), "class": [('img-circle'),('img-circle-small'),('m-r-1'),((me.isTeacher() ? 'border-navy' : ''))] }, {"class":true,"src":true})) + "/><span data-i18n=\"nav.my_account\"></span></a><ul class=\"dropdown-menu\"><li class=\"user-dropdown-header text-center\"><span class=\"user-level\">" + (jade.escape(null == (jade.interp = me.level()) ? "" : jade.interp)) + "</span><a" + (jade.attrs({ 'href':("/user/" + (me.getSlugOrID()) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':(me.getPhotoURL()), "class": [('img-circle'),((me.isTeacher() ? 'border-navy' : ''))] }, {"class":true,"src":true})) + "/></a><h5>" + (jade.escape(null == (jade.interp = me.broadName()) ? "" : jade.interp)) + "</h5></li>");
accountLinks_mixin();
buf.push("</ul></li></ul>");
}
buf.push("<ul class=\"nav navbar-nav\"><li><div id=\"language-dropdown-wrapper\"><select class=\"language-dropdown form-control\"></select></div></li></ul></div></div></div></div></nav><div id=\"site-content-area\"><div class=\"container\"><div class=\"row m-y-3\"><div class=\"col-xs-12\">");
if ( me.isTeacher())
{
buf.push("<div class=\"alert alert-danger text-center\"><!-- DNT: Temporary--><h3>ATTENTION TEACHERS:</h3><p>We are transitioning to a new classroom management system; this page will soon be student-only.</p><a href=\"/teachers/classes\">Go to teachers area.</a></div>");
}
buf.push("<div id=\"main-content\">");
if ( me.isAnonymous())
{
buf.push("<h1 data-i18n=\"courses.welcome_to_courses\" class=\"text-center\"></h1><div class=\"text-center\"><p><h2 data-i18n=\"courses.ready_to_play\"></h2></p><p><button id=\"start-new-game-btn\" data-i18n=\"courses.start_new_game\" class=\"btn btn-navy\"></button></p><p><span class=\"spr\">-</span><span data-i18n=\"general.or\" class=\"text-uppercase\"></span><span class=\"spl\">-</span></p><p><button id=\"log-in-btn\" data-i18n=\"login.log_in\" class=\"btn btn-forest\"></button></p></div><h2 id=\"play-now-to-learn-header\" data-i18n=\"courses.play_now_learn_header\" class=\"text-center text-uppercase\"></h2><ul id=\"benefits-ul\"><li data-i18n=\"courses.play_now_learn_1\"></li><li data-i18n=\"courses.play_now_learn_2\"></li><li data-i18n=\"courses.play_now_learn_3\"></li><li data-i18n=\"courses.play_now_learn_4\"></li></ul>");
}
else
{
buf.push("<div class=\"text-center\"><h1 data-i18n=\"courses.welcome_to_page\"></h1></div><div class=\"current-hero-container text-center row\"><div class=\"hero-avatar\"><img" + (jade.attrs({ 'src':(view.hero.getPortraitURL()) }, {"src":true})) + "/></div><div class=\"current-hero-right-col\"><div class=\"semibold current-hero-text\"><span data-i18n=\"courses.current_hero\" class=\"spr\"></span><span class=\"current-hero-name\">" + (jade.escape(null == (jade.interp = view.hero.getHeroShortName()) ? "" : jade.interp)) + "</span></div><button class=\"change-hero-btn btn btn-lg btn-forest\"><span data-i18n=\"courses.change_hero\"></span></button></div></div>");
if ( view.classrooms.size())
{
buf.push("<br/><h3 data-i18n=\"courses.my_classes\"></h3>");
// iterate view.classrooms.models
;(function(){
  var $$obj = view.classrooms.models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var classroom = $$obj[$index];

buf.push("<hr class=\"class-break\"/>");
var justAdded = classroom.id === view.classroomJustAdded;
var classroomClass = justAdded ? 'just-added' : '';
if ( justAdded)
{
buf.push("<div id=\"just-added-text\" data-i18n=\"courses.class_added\" class=\"text-center\"></div>");
}
buf.push("<div" + (jade.attrs({ "class": [(classroomClass)] }, {"class":true})) + "><h5><span class=\"spr\">" + (jade.escape(null == (jade.interp = classroom.get('name')) ? "" : jade.interp)) + "</span><span class=\"spr\">(" + (jade.escape((jade.interp = (classroom.get('aceConfig') || {}).language === 'javascript' ? 'JavaScript' : 'Python') == null ? '' : jade.interp)) + ")</span></h5><p><span data-i18n=\"courses.teacher\"></span><span>:</span>");
if ( view.ownerNameMap && view.ownerNameMap[classroom.get('ownerID')])
{
buf.push("<span class=\"spl\">" + (jade.escape(null == (jade.interp = view.ownerNameMap[classroom.get('ownerID')]) ? "" : jade.interp)) + "</span>");
}
buf.push("</p>");
var courseInstances = view.courseInstances.where({classroomID: classroom.id});
// iterate courseInstances
;(function(){
  var $$obj = courseInstances;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var courseInstance = $$obj[$index];

buf.push("<div class=\"course-instance-entry\">");
var course = view.courses.get(courseInstance.get('courseID'));
buf.push("<h6><span class=\"spr\">" + (jade.escape(null == (jade.interp = i18n(course.attributes, 'name')) ? "" : jade.interp)) + "</span><small><a" + (jade.attrs({ 'data-course-id':(courseInstance.get('courseID')), 'data-courseinstance-id':(courseInstance.id), 'data-i18n':("courses.view_levels"), "class": [('view-levels-btn')] }, {"data-course-id":true,"data-courseinstance-id":true,"data-i18n":true})) + "></a></small></h6>");
course_instance_body_mixin(courseInstance, classroom);
buf.push("<div class=\"clearfix\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var courseInstance = $$obj[$index];

buf.push("<div class=\"course-instance-entry\">");
var course = view.courses.get(courseInstance.get('courseID'));
buf.push("<h6><span class=\"spr\">" + (jade.escape(null == (jade.interp = i18n(course.attributes, 'name')) ? "" : jade.interp)) + "</span><small><a" + (jade.attrs({ 'data-course-id':(courseInstance.get('courseID')), 'data-courseinstance-id':(courseInstance.id), 'data-i18n':("courses.view_levels"), "class": [('view-levels-btn')] }, {"data-course-id":true,"data-courseinstance-id":true,"data-i18n":true})) + "></a></small></h6>");
course_instance_body_mixin(courseInstance, classroom);
buf.push("<div class=\"clearfix\"></div></div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var classroom = $$obj[$index];

buf.push("<hr class=\"class-break\"/>");
var justAdded = classroom.id === view.classroomJustAdded;
var classroomClass = justAdded ? 'just-added' : '';
if ( justAdded)
{
buf.push("<div id=\"just-added-text\" data-i18n=\"courses.class_added\" class=\"text-center\"></div>");
}
buf.push("<div" + (jade.attrs({ "class": [(classroomClass)] }, {"class":true})) + "><h5><span class=\"spr\">" + (jade.escape(null == (jade.interp = classroom.get('name')) ? "" : jade.interp)) + "</span><span class=\"spr\">(" + (jade.escape((jade.interp = (classroom.get('aceConfig') || {}).language === 'javascript' ? 'JavaScript' : 'Python') == null ? '' : jade.interp)) + ")</span></h5><p><span data-i18n=\"courses.teacher\"></span><span>:</span>");
if ( view.ownerNameMap && view.ownerNameMap[classroom.get('ownerID')])
{
buf.push("<span class=\"spl\">" + (jade.escape(null == (jade.interp = view.ownerNameMap[classroom.get('ownerID')]) ? "" : jade.interp)) + "</span>");
}
buf.push("</p>");
var courseInstances = view.courseInstances.where({classroomID: classroom.id});
// iterate courseInstances
;(function(){
  var $$obj = courseInstances;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var courseInstance = $$obj[$index];

buf.push("<div class=\"course-instance-entry\">");
var course = view.courses.get(courseInstance.get('courseID'));
buf.push("<h6><span class=\"spr\">" + (jade.escape(null == (jade.interp = i18n(course.attributes, 'name')) ? "" : jade.interp)) + "</span><small><a" + (jade.attrs({ 'data-course-id':(courseInstance.get('courseID')), 'data-courseinstance-id':(courseInstance.id), 'data-i18n':("courses.view_levels"), "class": [('view-levels-btn')] }, {"data-course-id":true,"data-courseinstance-id":true,"data-i18n":true})) + "></a></small></h6>");
course_instance_body_mixin(courseInstance, classroom);
buf.push("<div class=\"clearfix\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var courseInstance = $$obj[$index];

buf.push("<div class=\"course-instance-entry\">");
var course = view.courses.get(courseInstance.get('courseID'));
buf.push("<h6><span class=\"spr\">" + (jade.escape(null == (jade.interp = i18n(course.attributes, 'name')) ? "" : jade.interp)) + "</span><small><a" + (jade.attrs({ 'data-course-id':(courseInstance.get('courseID')), 'data-courseinstance-id':(courseInstance.id), 'data-i18n':("courses.view_levels"), "class": [('view-levels-btn')] }, {"data-course-id":true,"data-courseinstance-id":true,"data-i18n":true})) + "></a></small></h6>");
course_instance_body_mixin(courseInstance, classroom);
buf.push("<div class=\"clearfix\"></div></div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("<h3 data-i18n=\"courses.join_class\" class=\"text-uppercase\"></h3><hr/><form id=\"join-class-form\" class=\"form-inline\"><div class=\"help-block\"><em data-i18n=\"courses.ask_teacher_for_code\"></em></div><div class=\"form-group\"><input" + (jade.attrs({ 'id':('class-code-input'), 'data-i18n':("[placeholder]courses.enter_c_code"), 'placeholder':("<Enter Class Code>"), 'value':(view.classCode), "class": [('form-control')] }, {"data-i18n":true,"placeholder":true,"value":true})) + "/></div><input id=\"join-class-button\" type=\"submit\" data-i18n=\"[value]courses.join\" value=\"Join\" class=\"btn btn-navy\"/>");
if ( view.state === 'enrolling')
{
buf.push("<div class=\"progress progress-striped active\"><div style=\"width: 100%\" data-i18n=\"courses.joining\" class=\"progress-bar\">Joining class</div></div>");
}
if ( view.errorMessage)
{
buf.push("<div class=\"alert alert-danger\">" + (jade.escape(null == (jade.interp = view.errorMessage) ? "" : jade.interp)) + "</div>");
}
buf.push("</form>");
}
buf.push("</div></div></div></div></div><div class=\"container-fluid\"><div id=\"footer\" class=\"small\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\"><ul class=\"list-unstyled\"><li><strong>CodeCombat</strong></li><li><a href=\"/about\" data-i18n=\"nav.about\"></a></li><li><a href=\"/about#jobs\" data-i18n=\"nav.jobs\"></a></li><li><a href=\"http://blog.codecombat.com/\" data-i18n=\"nav.blog\"></a></li><li><a href=\"/legal\" data-i18n=\"nav.legal\"></a></li><li><a href=\"/privacy\" data-i18n=\"nav.privacy\"></a></li></ul></div>");
if ( !me.isStudent())
{
buf.push("<div class=\"col-sm-3\"><ul class=\"list-unstyled\"><li><strong data-i18n=\"nav.schools\"></strong></li><li><a href=\"/teachers/resources/faq\" data-i18n=\"teacher.educator_faq\"></a></li><li><a href=\"/teachers/classes\" data-i18n=\"nav.my_classrooms\"></a></li><li><a href=\"/teachers/resources\" data-i18n=\"nav.resource_hub\"></a></li><li><a href=\"/teachers/demo\" data-i18n=\"new_home.request_demo\"></a></li></ul></div>");
}
buf.push("<div class=\"col-sm-3\"><ul class=\"list-unstyled\"><li><strong data-i18n=\"nav.get_involved\"></strong></li><li><a href=\"/community\" data-i18n=\"nav.community\"></a></li><li><a href=\"/contribute\" data-i18n=\"nav.contribute\"></a></li>");
if ( !me.isStudent())
{
buf.push("<li><a" + (jade.attrs({ 'href':(view.forumLink()), 'data-i18n':("nav.forum") }, {"href":true,"data-i18n":true})) + "></a></li>");
}
buf.push("<li><a href=\"/play/ladder\" data-i18n=\"game_menu.multiplayer_tab\"></a></li><li><a href=\"https://github.com/codecombat/codecombat\" data-i18n=\"nav.open_source\"></a></li></ul></div><div class=\"col-sm-3\"><ul class=\"list-unstyled\"><li><strong data-i18n=\"nav.support\"></strong></li>");
if ( !me.isStudent())
{
buf.push("<li><a tabindex=\"-1\" data-i18n=\"nav.contact\" class=\"contact-modal\"></a></li>");
}
buf.push("<li><a href=\"https://www.facebook.com/codecombat\" data-i18n=\"nav.facebook\"></a></li><li><a href=\"https://twitter.com/codecombat\" data-i18n=\"nav.twitter\"></a></li></ul></div></div></div></div><div id=\"final-footer\" class=\"small text-center\">Copyright ©2016 CodeCombat. All Rights Reserved.<br class=\"hidden-lg hidden-md\"/><img src=\"/images/pages/base/logo.png\" alt=\"CodeCombat\"/><br class=\"hidden-lg hidden-md\"/>");
if ( !me.isStudent())
{
buf.push("<span data-i18n=\"nav.help_pref\" class=\"spr\"></span>");
var supportEmail = (me.get('preferredLanguage', true) || 'en-US').split('-')[0] == 'nl' ? 'klantenservice@codecombat.nl' : 'team@codecombat.com';
buf.push("<a" + (jade.attrs({ 'href':("mailto:" + supportEmail) }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = supportEmail) ? "" : jade.interp)) + "</a><span data-i18n=\"nav.help_suff\" class=\"spl\"></span>");
}
buf.push("</div></div></div>");;return buf.join("");
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

;require.register("views/courses/CoursesView", function(exports, require, module) {
var AuthModal, Campaign, ChangeCourseLanguageModal, ChooseLanguageModal, Classroom, Classrooms, CocoCollection, Course, CourseInstance, CoursesView, CreateAccountModal, HeroSelectModal, JoinClassModal, LevelSession, Levels, NameLoader, RootView, ThangType, app, template, utils,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

app = require('core/application');

RootView = require('views/core/RootView');

template = require('templates/courses/courses-view');

AuthModal = require('views/core/AuthModal');

CreateAccountModal = require('views/core/CreateAccountModal');

ChangeCourseLanguageModal = require('views/courses/ChangeCourseLanguageModal');

HeroSelectModal = require('views/courses/HeroSelectModal');

ChooseLanguageModal = require('views/courses/ChooseLanguageModal');

JoinClassModal = require('views/courses/JoinClassModal');

CourseInstance = require('models/CourseInstance');

CocoCollection = require('collections/CocoCollection');

Course = require('models/Course');

Classroom = require('models/Classroom');

Classrooms = require('collections/Classrooms');

LevelSession = require('models/LevelSession');

Levels = require('collections/Levels');

NameLoader = require('core/NameLoader');

Campaign = require('models/Campaign');

ThangType = require('models/ThangType');

utils = require('core/utils');

module.exports = CoursesView = (function(superClass) {
  extend(CoursesView, superClass);

  function CoursesView() {
    return CoursesView.__super__.constructor.apply(this, arguments);
  }

  CoursesView.prototype.id = 'courses-view';

  CoursesView.prototype.template = template;

  CoursesView.prototype.events = {
    'click #log-in-btn': 'onClickLogInButton',
    'click #start-new-game-btn': 'openSignUpModal',
    'click .change-hero-btn': 'onClickChangeHeroButton',
    'click #join-class-btn': 'onClickJoinClassButton',
    'submit #join-class-form': 'onSubmitJoinClassForm',
    'click .play-btn': 'onClickPlay',
    'click .view-class-btn': 'onClickViewClass',
    'click .view-levels-btn': 'onClickViewLevels'
  };

  CoursesView.prototype.getTitle = function() {
    return $.i18n.t('courses.students');
  };

  CoursesView.prototype.initialize = function() {
    var defaultHeroOriginal, heroOriginal, ref;
    this.classCodeQueryVar = utils.getQueryVariable('_cc', false);
    this.courseInstances = new CocoCollection([], {
      url: "/db/user/" + me.id + "/course_instances",
      model: CourseInstance
    });
    this.courseInstances.comparator = function(ci) {
      return ci.get('classroomID') + ci.get('courseID');
    };
    this.listenToOnce(this.courseInstances, 'sync', this.onCourseInstancesLoaded);
    this.supermodel.loadCollection(this.courseInstances, {
      cache: false
    });
    this.classrooms = new CocoCollection([], {
      url: "/db/classroom",
      model: Classroom
    });
    this.classrooms.comparator = function(a, b) {
      return b.id.localeCompare(a.id);
    };
    this.supermodel.loadCollection(this.classrooms, {
      data: {
        memberID: me.id
      },
      cache: false
    });
    this.ownedClassrooms = new Classrooms();
    this.ownedClassrooms.fetchMine({
      data: {
        project: '_id'
      }
    });
    this.supermodel.trackCollection(this.ownedClassrooms);
    this.courses = new CocoCollection([], {
      url: "/db/course",
      model: Course
    });
    this.supermodel.loadCollection(this.courses);
    this.originalLevelMap = {};
    this.urls = require('core/urls');
    this.hero = new ThangType;
    defaultHeroOriginal = ThangType.heroes.captain;
    heroOriginal = ((ref = me.get('heroConfig')) != null ? ref.thangType : void 0) || defaultHeroOriginal;
    this.hero.url = "/db/thang.type/" + heroOriginal + "/version";
    this.supermodel.loadModel(this.hero, 'hero');
    return this.listenTo(this.hero, 'all', function() {
      return this.render();
    });
  };

  CoursesView.prototype.afterInsert = function() {
    CoursesView.__super__.afterInsert.call(this);
    if (!(me.isStudent() || (this.classCodeQueryVar && !me.isTeacher()))) {
      return this.onClassLoadError();
    }
  };

  CoursesView.prototype.onCourseInstancesLoaded = function() {
    var courseID, courseInstance, i, len, ref, results;
    this.courseInstances.remove(this.courseInstances.where({
      hourOfCode: true
    }));
    ref = this.courseInstances.models;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      courseInstance = ref[i];
      if (!courseInstance.get('classroomID')) {
        continue;
      }
      courseID = courseInstance.get('courseID');
      courseInstance.sessions = new CocoCollection([], {
        url: courseInstance.url() + '/my-course-level-sessions',
        model: LevelSession
      });
      courseInstance.sessions.comparator = 'changed';
      results.push(this.supermodel.loadCollection(courseInstance.sessions, {
        data: {
          project: 'state.complete,level.original,playtime,changed'
        }
      }));
    }
    return results;
  };

  CoursesView.prototype.onLoaded = function() {
    var ownerIDs, ref, ref1;
    CoursesView.__super__.onLoaded.call(this);
    if (this.classCodeQueryVar && !me.isAnonymous()) {
      if ((ref = window.tracker) != null) {
        ref.trackEvent('Students Join Class Link', {
          category: 'Students',
          classCode: this.classCodeQueryVar
        }, ['Mixpanel']);
      }
      this.joinClass();
    } else if (this.classCodeQueryVar && me.isAnonymous()) {
      this.openModalView(new CreateAccountModal());
    }
    ownerIDs = (ref1 = _.map(this.classrooms.models, function(c) {
      return c.get('ownerID');
    })) != null ? ref1 : [];
    Promise.resolve($.ajax(NameLoader.loadNames(ownerIDs))).then((function(_this) {
      return function() {
        var i, len, ownerID;
        _this.ownerNameMap = {};
        for (i = 0, len = ownerIDs.length; i < len; i++) {
          ownerID = ownerIDs[i];
          _this.ownerNameMap[ownerID] = NameLoader.getName(ownerID);
        }
        return typeof _this.render === "function" ? _this.render() : void 0;
      };
    })(this));
    return _.forEach(_.unique(_.pluck(this.classrooms.models, 'id')), (function(_this) {
      return function(classroomID) {
        var levels;
        levels = new Levels();
        _this.listenTo(levels, 'sync', function() {
          var i, len, level, ref2;
          if (_this.destroyed) {
            return;
          }
          ref2 = levels.models;
          for (i = 0, len = ref2.length; i < len; i++) {
            level = ref2[i];
            _this.originalLevelMap[level.get('original')] = level;
          }
          return _this.render();
        });
        return _this.supermodel.trackRequest(levels.fetchForClassroom(classroomID, {
          data: {
            project: 'original,primerLanguage,slug'
          }
        }));
      };
    })(this));
  };

  CoursesView.prototype.onClickLogInButton = function() {
    var modal, ref;
    modal = new AuthModal();
    this.openModalView(modal);
    return (ref = window.tracker) != null ? ref.trackEvent('Students Login Started', {
      category: 'Students'
    }, ['Mixpanel']) : void 0;
  };

  CoursesView.prototype.openSignUpModal = function() {
    var modal, ref;
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students Signup Started', {
        category: 'Students'
      }, ['Mixpanel']);
    }
    modal = new CreateAccountModal({
      initialValues: {
        classCode: utils.getQueryVariable('_cc', "")
      }
    });
    return this.openModalView(modal);
  };

  CoursesView.prototype.onClickChangeHeroButton = function() {
    var modal, ref;
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students Change Hero Started', {
        category: 'Students'
      }, ['Mixpanel']);
    }
    modal = new HeroSelectModal({
      currentHeroID: this.hero.id
    });
    this.openModalView(modal);
    this.listenTo(modal, 'hero-select:success', (function(_this) {
      return function(newHero) {
        return _this.hero.set(newHero.attributes);
      };
    })(this));
    return this.listenTo(modal, 'hide', function() {
      return this.stopListening(modal);
    });
  };

  CoursesView.prototype.onSubmitJoinClassForm = function(e) {
    var classCode, ref;
    e.preventDefault();
    classCode = this.$('#class-code-input').val() || this.classCodeQueryVar;
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students Join Class With Code', {
        category: 'Students',
        classCode: classCode
      }, ['Mixpanel']);
    }
    return this.joinClass();
  };

  CoursesView.prototype.onClickJoinClassButton = function(e) {
    var classCode, ref;
    classCode = this.$('#class-code-input').val() || this.classCodeQueryVar;
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students Join Class With Code', {
        category: 'Students',
        classCode: classCode
      }, ['Mixpanel']);
    }
    return this.joinClass();
  };

  CoursesView.prototype.joinClass = function() {
    var jqxhr, modal, newClassroom;
    if (this.state) {
      return;
    }
    this.state = 'enrolling';
    this.errorMessage = null;
    this.classCode = this.$('#class-code-input').val() || this.classCodeQueryVar;
    if (!this.classCode) {
      this.state = null;
      this.errorMessage = 'Please enter a code.';
      this.renderSelectors('#join-class-form');
      return;
    }
    this.renderSelectors('#join-class-form');
    if (me.get('emailVerified') || me.isStudent()) {
      newClassroom = new Classroom();
      jqxhr = newClassroom.joinWithCode(this.classCode);
      this.listenTo(newClassroom, 'join:success', function() {
        return this.onJoinClassroomSuccess(newClassroom);
      });
      return this.listenTo(newClassroom, 'join:error', function() {
        return this.onJoinClassroomError(newClassroom, jqxhr);
      });
    } else {
      modal = new JoinClassModal({
        classCode: this.classCode
      });
      this.openModalView(modal);
      this.listenTo(modal, 'error', this.onClassLoadError);
      this.listenTo(modal, 'join:success', this.onJoinClassroomSuccess);
      this.listenTo(modal, 'join:error', this.onJoinClassroomError);
      this.listenToOnce(modal, 'hidden', function() {
        if (!me.isStudent()) {
          return this.onClassLoadError();
        }
      });
      return this.listenTo(modal, 'hidden', function() {
        this.state = null;
        return this.renderSelectors('#join-class-form');
      });
    }
  };

  CoursesView.prototype.onClassLoadError = function() {
    return _.defer(function() {
      return application.router.routeDirectly('courses/RestrictedToStudentsView');
    });
  };

  CoursesView.prototype.onJoinClassroomError = function(classroom, jqxhr, options) {
    this.state = null;
    if (jqxhr.status === 422) {
      this.errorMessage = 'Please enter a code.';
    } else if (jqxhr.status === 404) {
      this.errorMessage = $.t('signup.classroom_not_found');
    } else {
      this.errorMessage = "" + jqxhr.responseText;
    }
    return this.renderSelectors('#join-class-form');
  };

  CoursesView.prototype.onJoinClassroomSuccess = function(newClassroom, data, options) {
    var classroomCourseInstances, ref;
    this.state = null;
    if ((ref = application.tracker) != null) {
      ref.trackEvent('Joined classroom', {
        category: 'Courses',
        classCode: this.classCode,
        classroomID: newClassroom.id,
        classroomName: newClassroom.get('name'),
        ownerID: newClassroom.get('ownerID')
      });
    }
    this.classrooms.add(newClassroom);
    this.render();
    this.classroomJustAdded = newClassroom.id;
    classroomCourseInstances = new CocoCollection([], {
      url: "/db/course_instance",
      model: CourseInstance
    });
    classroomCourseInstances.fetch({
      data: {
        classroomID: newClassroom.id
      }
    });
    return this.listenToOnce(classroomCourseInstances, 'sync', function() {
      return document.location.search = '';
    });
  };

  CoursesView.prototype.onClickPlay = function(e) {
    var levelSlug, ref;
    levelSlug = $(e.currentTarget).data('level-slug');
    if ((ref = window.tracker) != null) {
      ref.trackEvent($(e.currentTarget).data('event-action'), {
        category: 'Students',
        levelSlug: levelSlug
      }, ['Mixpanel']);
    }
    return application.router.navigate($(e.currentTarget).data('href'), {
      trigger: true
    });
  };

  CoursesView.prototype.onClickViewClass = function(e) {
    var classroomID, ref;
    classroomID = $(e.target).data('classroom-id');
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students View Class', {
        category: 'Students',
        classroomID: classroomID
      }, ['Mixpanel']);
    }
    return application.router.navigate("/students/" + classroomID, {
      trigger: true
    });
  };

  CoursesView.prototype.onClickViewLevels = function(e) {
    var courseID, courseInstanceID, ref;
    courseID = $(e.target).data('course-id');
    courseInstanceID = $(e.target).data('courseinstance-id');
    if ((ref = window.tracker) != null) {
      ref.trackEvent('Students View Levels', {
        category: 'Students',
        courseID: courseID,
        courseInstanceID: courseInstanceID
      }, ['Mixpanel']);
    }
    return application.router.navigate("/students/" + courseID + "/" + courseInstanceID, {
      trigger: true
    });
  };

  return CoursesView;

})(RootView);
});

;
//# sourceMappingURL=/javascripts/app/views/courses/CoursesView.js.map