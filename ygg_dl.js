// ==UserScript==
// @name         Ygg
// @version      0.1
// @namespace    Ygg
// @description  Test
// @include      https://*.yggtorrent.*/*
// @grant       none
// ==/UserScript==

var DL_URL = '/engine/download_torrent?id=';

this.jQuery = jQuery.noConflict(true);

$(document).ready(function() {
  $("th:contains('NFO')").each(function () {
    $(this).before('<th width="45px">DL</th>');
  });

  $('[id="get_nfo"]').each(function () {
    let $t = $(this);
    let $td = $("<td>");
    $("<a>").attr('href', DL_URL + $t.attr('target')).text('DL').appendTo($td)
    $t.parent().before($td);
  })
});
