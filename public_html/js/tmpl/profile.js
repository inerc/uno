define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var profile=__fest_context;(function(__fest_context){__fest_blocks.btn=function(params){var __fest_buf="";try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.href)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"" + __fest_attrs[0] + "\" class=\"btn\"");try{__fest_if=params.props}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,prop,__fest_iterator0;try{__fest_iterator0=params.props || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(i in __fest_iterator0){prop=__fest_iterator0[i];try{__fest_select=(i)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(prop))}catch(e){__fest_log_error(e.message + "8");}__fest_buf+=("\"");}}}__fest_buf+=(">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "12");}__fest_buf+=("</a>");}else{try{__fest_attrs[0]=__fest_escapeHTML(params.classes && params.classes.length ? params.classes.join(' ') : '')}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<button class=\"btn " + __fest_attrs[0] + "\"");try{__fest_if=params.props}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,prop,__fest_iterator1;try{__fest_iterator1=params.props || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(i in __fest_iterator1){prop=__fest_iterator1[i];try{__fest_select=(i)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(prop))}catch(e){__fest_log_error(e.message + "19");}__fest_buf+=("\"");}}}__fest_buf+=(">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "23");}__fest_buf+=("</button>");}return __fest_buf;};})(__fest_context);__fest_buf+=("<div class=\"profile\"><div class=\"profile__title\">Профиль</div><div class=\"email-field\"><div class=\"email-field__title\">E-mail:</div><div class=\"email-field__value\">");try{__fest_buf+=(__fest_escapeHTML(profile.email))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</div></div><form method=\"POST\"><div class=\"login-field\"><div class=\"login-field__title\">Логин:</div><div class=\"email-field__value\">");try{__fest_buf+=(__fest_escapeHTML(profile.login))}catch(e){__fest_log_error(e.message + "11");}__fest_buf+=("</div></div>");__fest_select="btn";__fest_params={};try{__fest_params={title: 'Назад', href: '#'}}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_buf+=("</form></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });