define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}(function(__fest_context){(function(__fest_context){__fest_blocks.btn=function(params){var __fest_buf="";try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.href)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"" + __fest_attrs[0] + "\" class=\"btn\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</a>");}else{try{__fest_attrs[0]=__fest_escapeHTML(params.classes && params.classes.length ? params.classes.join(' ') : '')}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<button class=\"btn " + __fest_attrs[0] + "\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "7");}__fest_buf+=("</button>");}return __fest_buf;};})(__fest_context);__fest_blocks.form=function(params){var __fest_buf="";__fest_buf+=("<div class=\"form\">");try{__fest_attrs[0]=__fest_escapeHTML(params.type)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.type)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}__fest_buf+=("<form action=\"\/api\/v1\/auth\/" + __fest_attrs[0] + "\" method=\"POST\" id=\"" + __fest_attrs[1] + "-form\"><div><input type=\"text\" name=\"login\" class=\"form__input\" placeholder=\"Логин...\" required=\"\"/></div>");try{__fest_if=params.type === 'signup'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div><input type=\"text\" name=\"email\" class=\"form__input\" placeholder=\"E-mail...\" required=\"\"/></div>");}__fest_buf+=("<div><input type=\"password\" name=\"password\" class=\"form__input\" placeholder=\"Пароль...\" required=\"\"/></div>");__fest_select="btn";__fest_params={};try{__fest_params={title: 'Войти'}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</form></div>");return __fest_buf;};})(__fest_context);__fest_buf+=("<div class=\"signup\">");__fest_select="form";__fest_params={};try{__fest_params={type: 'signup'}}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });