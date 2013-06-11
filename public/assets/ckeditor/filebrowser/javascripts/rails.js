!function(t,e){var i;t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var i=t('meta[name="csrf-token"]').attr("content");i&&e.setRequestHeader("X-CSRF-Token",i)},fire:function(e,i,n){var s=t.Event(i);return e.trigger(s,n),s.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},handleRemote:function(n){var s,o,r,a,l=n.data("cross-domain")||null,u=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType;if(i.fire(n,"ajax:before")){if(n.is("form")){s=n.attr("method"),o=n.attr("action"),r=n.serializeArray();var c=n.data("ujs:submit-button");c&&(r.push(c),n.data("ujs:submit-button",null))}else n.is(i.inputChangeSelector)?(s=n.data("method"),o=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):(s=n.data("method"),o=n.attr("href"),r=n.data("params")||null);return a={type:s||"GET",data:r,dataType:u,crossDomain:l,beforeSend:function(t,s){return s.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+s.accepts.script),i.fire(n,"ajax:beforeSend",[t,s])},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])}},o&&(a.url=o),i.ajax(a)}return!1},handleMethod:function(i){var n=i.attr("href"),s=i.data("method"),o=i.attr("target"),r=t("meta[name=csrf-token]").attr("content"),a=t("meta[name=csrf-param]").attr("content"),l=t('<form method="post" action="'+n+'"></form>'),u='<input name="_method" value="'+s+'" type="hidden" />';a!==e&&r!==e&&(u+='<input name="'+a+'" value="'+r+'" type="hidden" />'),o&&l.attr("target",o),l.hide().append(u).appendTo("body"),l.submit()},disableFormElements:function(e){e.find(i.disableSelector).each(function(){var e=t(this),i=e.is("button")?"html":"val";e.data("ujs:enable-with",e[i]()),e[i](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(i.enableSelector).each(function(){var e=t(this),i=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[i](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(t){var e,n=t.data("confirm"),s=!1;return n?(i.fire(t,"confirm")&&(s=i.confirm(n),e=i.fire(t,"confirm:complete",[s])),s&&e):!0},blankInputs:function(e,i,n){var s,o=t(),r=i||"input,textarea";return e.find(r).each(function(){s=t(this),(n?s.val():!s.val())&&(o=o.add(s))}),o.length?o:!1},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},callFormSubmitBindings:function(i,n){var s=i.data("events"),o=!0;return s!==e&&s.submit!==e&&t.each(s.submit,function(t,e){return"function"==typeof e.handler?o=e.handler(n):void 0}),o},disableElement:function(t){t.data("ujs:enable-with",t.html()),t.html(t.data("disable-with")),t.bind("click.railsDisable",function(t){return i.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.data("ujs:enable-with",!1)),t.unbind("click.railsDisable")}},t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),t(document).delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(t(this))}),t(document).delegate(i.linkClickSelector,"click.rails",function(n){var s=t(this),o=s.data("method"),r=s.data("params");return i.allowAction(s)?(s.is(i.linkDisableSelector)&&i.disableElement(s),s.data("remote")!==e?!n.metaKey&&!n.ctrlKey||o&&"GET"!==o||r?(i.handleRemote(s)===!1&&i.enableElement(s),!1):!0:s.data("method")?(i.handleMethod(s),!1):void 0):i.stopEverything(n)}),t(document).delegate(i.inputChangeSelector,"change.rails",function(e){var n=t(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),t(document).delegate(i.formSubmitSelector,"submit.rails",function(n){var s=t(this),o=s.data("remote")!==e,r=i.blankInputs(s,i.requiredInputSelector),a=i.nonBlankInputs(s,i.fileInputSelector);return i.allowAction(s)?r&&s.attr("novalidate")==e&&i.fire(s,"ajax:aborted:required",[r])?i.stopEverything(n):o?a?i.fire(s,"ajax:aborted:file",[a]):!t.support.submitBubbles&&t().jquery<"1.7"&&i.callFormSubmitBindings(s,n)===!1?i.stopEverything(n):(i.handleRemote(s),!1):(setTimeout(function(){i.disableFormElements(s)},13),void 0):i.stopEverything(n)}),t(document).delegate(i.formInputClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var s=n.attr("name"),o=s?{name:s,value:n.val()}:null;n.closest("form").data("ujs:submit-button",o)}),t(document).delegate(i.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&i.disableFormElements(t(this))}),t(document).delegate(i.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&i.enableFormElements(t(this))})}(jQuery);