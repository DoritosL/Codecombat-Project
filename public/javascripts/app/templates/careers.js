require.register("templates/careers", function(exports, require, module) {
var __templateData = function anonymous(locals
/**/) {
var buf = [];
var locals_ = (locals || {}),features = locals_.features,me = locals_.me,view = locals_.view,usesSocialMedia = locals_.usesSocialMedia,isIE = locals_.isIE,fbRef = locals_.fbRef;var next_steps_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<h3>Next Steps</h3><div class=\"big-text\"><p>If this sounds exciting to you, we want to hear from you!</p><p><span class=\"spr\">Please send a resume (and anything else you’d like us to see) to</span><a href=\"mailto:careers@codecombat.com\">careers@codecombat.com</a></p><p><em>Note: you'll be working in our San Francisco office, so you'll need US work authorization.</em></p></div>");
};
var company_blurb_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<div class=\"big-side-margins big-text\"><p>CodeCombat is changing how kids learn computer science, using real programming languages to explore an adventure game.  Students start with simple function calls to move a hero and before long they’re writing functions to send archers to the eastern defenses.</p><p>Our teacher tools allow CodeCombat to create classroom experiences that inspire students to become programmers. Can you imagine how cool it would have been to play CodeCombat in school when you were growing up? We are bringing the wizardry of programming to everyone.</p><div class=\"big-side-margins\"><p><div class=\"praise-quote\">My students have started working on CodeCombat and love it! I love that they are learning coding and problem solving skills without them even knowing it!!</div><div class=\"praise-author\">- Kristin Huff, Teacher, Webb City School District</div></p></div><p>We’re looking for team members who can help us reach our students around the world. If you are passionate about gaming or education, a self starter, and looking to join a small, scrappy team, we want to meet you!</p></div>");
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
buf.push("<select class=\"language-dropdown form-control\"></select></div></div><div id=\"site-content-area\"><div class=\"center\"><img src=\"/images/pages/careers/recruiting.png\"/></div>");
if ( view.position === 'software-engineer')
{
buf.push("<h1 class=\"center\">Software Engineer</h1>");
company_blurb_mixin();
buf.push("<div class=\"big-side-margins\"><h3>Engineering at CodeCombat</h3><div class=\"big-text\"><p>Although we've already reached millions of players, we are just getting started, and there is so much more to build. Over the next year, we'll be pushing hard on mobile, gameplay, and education tools. We are looking for strong engineers who are eager to jump in and take the lead on shipping these projects and more.</p><p>CodeCombat is built with Node, Backbone, and CoffeeScript. If you don’t know these particular technologies yet we’ll help you ramp up in no time.</p><p>CodeCombat is 100% open source, which is a lot of fun–you'll get to work with 400 open source contributors and be able to take your code (and your awesome GitHub profile) wherever you go.</p></div><h3>Upcoming Projects</h3><div class=\"big-text\"><p><strong>iPad app</strong><div>Bring the CodeCombat experience to the iPad</div></p><p><strong>Social debugging</strong><div>Allow players to jump in and help others that are stuck</div></p><p><strong>Language parsing and manipulation</strong><div>Dial up the intelligence behind our language parsers so we can help players fix their code</div></p><p><strong>Adaptive pacing</strong><div>Modify level difficulties or skip some altogether to ensure players are at maximum fun</div></p><p><strong>Real-time multiplayer</strong><div>Wouldn’t it be cool if players could battle head-to-head or team up in an epic real-time dungeon crawl?  Great, you should come help us build it!</div></p></div>");
next_steps_mixin();
buf.push("</div>");
}
else if ( view.position === 'software-engineer-ios')
{
buf.push("<h1 class=\"center\">Software Engineer, iOS</h1>");
company_blurb_mixin();
buf.push("<div class=\"big-side-margins\"><h3>iOS at CodeCombat</h3><div class=\"big-text\"><p>Want to write the first iPad app for CodeCombat?  We’re looking for a product-focused engineer to translate our core gameplay and educational tools into an experience that feels like it was born on the iPad.</p><p>Building a great iPad experience is important to CodeCombat because many classrooms are using iPads instead of desktops with their students.  It’s essential that we bring CodeCombat to those students as well.</p><p>We’re looking for someone who is well-versed in iOS development, has a strong understanding of good UX, and isn’t afraid to get their hands dirty in the backend code.</p><p>(Typing real code on a iPad–how could that be any fun? Well, just wait until you see what we've been working on.)</p></div>");
next_steps_mixin();
buf.push("</div>");
}
else if ( view.position === 'game-designer')
{
buf.push("<h1 class=\"center\">Game Designer</h1>");
company_blurb_mixin();
buf.push("<div class=\"big-side-margins\"><h3>Game Design at CodeCombat</h3><div class=\"big-text\"><p>Our game levels are a core piece of CodeCombat.  Much of the work we do revolves around improving them or the way they’re accessed by our players.</p></div><h3>Example Projects</h3><div class=\"big-text\"><p><strong>Build levels</strong><div>Turn learning computer science concepts into a game!  For example, teach loops by creating a patterned maze.</div></p><p><strong>Tune levels</strong><div>We have extensive analytics on where players get confused or stop having fun. You’ll dig into that data to come up with balance tweaks, helpful asides, and improved pacing for all our levels.</div></p><p><strong>Create level components</strong><div>Code up new hero abilities, spells, items, and enemies that will be used across multiple levels.</div></p></div><h3>Requirements</h3><div class=\"big-text\"><p>We’re looking for someone with some programming experience, has played through the CodeCombat levels, can creatively bring levels to life, and has an eye for detail.</p></div>");
next_steps_mixin();
buf.push("</div>");
}
else
{
buf.push("<div class=\"center\"><h1>Available Positions – San Francisco</h1><div class=\"big-text\"><p><a href=\"/careers/software-engineer\">Software Engineer</a></p><p><a href=\"/careers/software-engineer-ios\">Software Engineer, iOS</a></p><p><a href=\"/careers/game-designer\">Game Designer</a></p><br/><p>Don't see a position that suits you, but still want to to contribute?</p><p><span class=\"spr\">Please contact us at</span><a href=\"mailto:careers@codecombat.com\">careers@codecombat.com</a></p></div></div>");
}
buf.push("</div><div class=\"achievement-corner\"></div><div id=\"site-footer\"><img id=\"footer-background\" src=\"/images/pages/base/nav_background.png\"/><div" + (jade.attrs({ 'id':('footer-links'), "class": [(features.playViewsOnly ? 'hide' : '')] }, {"class":true})) + "><a href=\"/about\" data-i18n=\"nav.about\"></a>");
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

;
//# sourceMappingURL=/javascripts/app/templates/careers.js.map