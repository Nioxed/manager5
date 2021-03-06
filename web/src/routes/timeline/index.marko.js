// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/manager-web3$1.0.0/src/routes/timeline/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Timeline");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"container\"><div class=\"timeline\"><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\">Channel Manager</span><br><i>10/06/2017</i><br><br><span>Manager started out as <b>Channel Manager</b>. The initial bot. <b>Channel Manager</b>. Only supported basic voice channels and adding/removing people.</span></div></div><div class=\"timeline-badge green white-text\"><i class=\"material-icons\">launch</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> Certified Bot! </span><br><i>10/21/2017</i><br><br><span>Channel Manager was accepted into Discordbots.org's certification program!</span></div></div><div class=\"timeline-badge orange white-text\"><i class=\"material-icons\">stars</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> 1000 Servers! </span><br><i>11/8/2017</i><br><br><span>Channel Manager reached 1000 Servers! I Had no idea what to do with the fact that my tiny little bot got 1000 servers in a month! But I wanted to make it better! After this I Started working on a \"v2\" of the bot with a more modular approach.</span></div></div><div class=\"timeline-badge blue white-text\"><i class=\"material-icons\">insert_chart</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> 2000 Servers! </span><br><i>12/31/2017</i><br><br><span>Channel Manager hit 2k Servers on 31 December 2017! This was a very neat milestone, I Was watching the server count for most of the day as it was fluctuating between 1980 and 1990. Then at ~9pm the bot passed the 2k mark right before the new year!</span></div></div><div class=\"timeline-badge blue white-text\"><i class=\"material-icons\">insert_chart</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> Channel Manager 2 </span><br><i>14/1/2018</i><br><br><span>Channel Manager 2 was the first \"Major\" update to the bot. Lots of smaller things were already added over time but this was the first rewrite of the entire bot.<br>V2 Brought the ability to customize the bot via a configuration page. This page was very basic but it got the job done. V2 Also introduced the ability to change the prefix and the ability to change the bots language! ( At that time there were 2 languages: English & Dutch )</span></div></div><div class=\"timeline-badge red white-text\"><i class=\"material-icons\">new_releases</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span>Quickly after the implementation of the language system, The bot started being translated into multiple languages! Russian, Spanish, Italian & German were some of the first languages to be added.</span></div></div><div class=\"timeline-badge purple white-text\"><i class=\"material-icons\">translate</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> 3000 Servers! </span><br><i>1/2/2018</i><br><br><span>Channel Manager hit 3k Servers on 1 Febuary 2018! When I realized the bot had grown another 1k servers in 1 month I got kind of scared. I Realized entire servers depend on manager and its features. I Started working on reworking some of the more unstable parts of manager and polishing already existing features. The last thing I wanted to have happen is accidentally leaving some exploit that allowed members to destroy servers. (Luckily I wasn't able to find any).</span></div></div><div class=\"timeline-badge blue white-text\"><i class=\"material-icons\">insert_chart</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> <del>Channel</del> Manager </span><br><i>2/2/2018</i><br><br><span>Channel Manager changes its name to Manager!<br> This change also brought in a couple of new features!</span></div></div><div class=\"timeline-badge green white-text\"><i class=\"material-icons\">textsms</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> Manager 3 </span><br><i>10/2/2018</i><br><br><span>Manager 3 was the first big update on the manager name. Mainly focused on updating the web config panel and adding Moderator & Admin roles. These were to be used by commands later. Image liking, Autorole & Discord Message deletion was added in this version.</span></div></div><div class=\"timeline-badge red white-text\"><i class=\"material-icons\">new_releases</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> Command Batch 1 </span><br><i>10/2/2018</i><br><br><span>A Lot of new commands were added. Mainly focused on image manipulation.</span></div></div><div class=\"timeline-badge grey white-text\"><i class=\"material-icons\">note_add</i></div></div><div class=\"timeline-event\"><div class=\"card timeline-content\"><div class=\"card-panel white black-text\"><span class=\"card-title\"> Manager 5 </span><br><i>??/??/????</i><br><br><span>Manager 5 got released to the public bringing loads of new features like News, Audits+ & ITTA. Manager 5 also saw yet another rework of the site.</span></div></div><div class=\"timeline-badge red white-text\"><i class=\"material-icons\">new_releases</i></div></div></div></div><br><br><div class=\"center\"><span style=\"font-size: 150%\">But this timeline is far from complete, So why not join in on the ride?</span><br><br><br><a class=\"waves-effect waves-light btn-large blue grow pulse\"><i class=\"material-icons left\">add</i>Add to discord server</a></div><br><br>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/manager-web3$1.0.0/src/routes/timeline/index.marko",
    tags: [
      "../../components/site-layout"
    ]
  };
