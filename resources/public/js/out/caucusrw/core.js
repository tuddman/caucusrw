// Compiled by ClojureScript 0.0-2173
goog.provide('caucusrw.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
caucusrw.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.root.call(null,caucusrw.core.app_state,caucusrw.core.om_app,document.getElementById("content"));
caucusrw.core.om_app = (function om_app(app,owner){if(typeof caucusrw.core.t9280 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t9280 = (function (owner,app,om_app,meta9281){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta9281 = meta9281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t9280.cljs$lang$type = true;
caucusrw.core.t9280.cljs$lang$ctorStr = "caucusrw.core/t9280";
caucusrw.core.t9280.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t9280");
});
caucusrw.core.t9280.prototype.om$core$IRender$ = true;
caucusrw.core.t9280.prototype.om$core$IRender$render$arity$1 = (function (this__4962__auto__){var self__ = this;
var this__4962__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,caucusrw.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
caucusrw.core.t9280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9282){var self__ = this;
var _9282__$1 = this;return self__.meta9281;
});
caucusrw.core.t9280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9282,meta9281__$1){var self__ = this;
var _9282__$1 = this;return (new caucusrw.core.t9280(self__.owner,self__.app,self__.om_app,meta9281__$1));
});
caucusrw.core.__GT_t9280 = (function __GT_t9280(owner__$1,app__$1,om_app__$1,meta9281){return (new caucusrw.core.t9280(owner__$1,app__$1,om_app__$1,meta9281));
});
}
return (new caucusrw.core.t9280(owner,app,om_app,null));
});
caucusrw.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6192__auto___9341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9327){var state_val_9328 = (state_9327[1]);if((state_val_9328 === 6))
{var inst_9325 = (state_9327[2]);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9327__$1,inst_9325);
} else
{if((state_val_9328 === 5))
{var inst_9321 = (state_9327[2]);var inst_9322 = cljs.core.get.call(null,inst_9321,new cljs.core.Keyword(null,"body","body",1016933652));var inst_9323 = cljs.core.vec.call(null,inst_9322);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9327__$1,6,c,inst_9323);
} else
{if((state_val_9328 === 4))
{var inst_9315 = (state_9327[7]);var state_9327__$1 = state_9327;var statearr_9329_9342 = state_9327__$1;(statearr_9329_9342[2] = inst_9315);
(statearr_9329_9342[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 3))
{var inst_9315 = (state_9327[7]);var inst_9318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9315);var state_9327__$1 = state_9327;var statearr_9330_9343 = state_9327__$1;(statearr_9330_9343[2] = inst_9318);
(statearr_9330_9343[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 2))
{var inst_9315 = (state_9327[7]);var inst_9315__$1 = (state_9327[2]);var inst_9316 = cljs.core.seq_QMARK_.call(null,inst_9315__$1);var state_9327__$1 = (function (){var statearr_9331 = state_9327;(statearr_9331[7] = inst_9315__$1);
return statearr_9331;
})();if(inst_9316)
{var statearr_9332_9344 = state_9327__$1;(statearr_9332_9344[1] = 3);
} else
{var statearr_9333_9345 = state_9327__$1;(statearr_9333_9345[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 1))
{var inst_9313 = cljs_http.client.get.call(null,url);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9327__$1,2,inst_9313);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9337 = [null,null,null,null,null,null,null,null];(statearr_9337[0] = state_machine__6178__auto__);
(statearr_9337[1] = 1);
return statearr_9337;
});
var state_machine__6178__auto____1 = (function (state_9327){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9327);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9338){if((e9338 instanceof Object))
{var ex__6181__auto__ = e9338;var statearr_9339_9346 = state_9327;(statearr_9339_9346[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9347 = state_9327;
state_9327 = G__9347;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9327){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9340 = f__6193__auto__.call(null);(statearr_9340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9341);
return statearr_9340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c;
});
caucusrw.core.widget_box = (function widget_box(app,owner,opts){if(typeof caucusrw.core.t9390 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t9390 = (function (opts,owner,app,widget_box,meta9391){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta9391 = meta9391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t9390.cljs$lang$type = true;
caucusrw.core.t9390.cljs$lang$ctorStr = "caucusrw.core/t9390";
caucusrw.core.t9390.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t9390");
});
caucusrw.core.t9390.prototype.om$core$IRender$ = true;
caucusrw.core.t9390.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;React.DOM.h1(null,"Widgets");
return om.core.build.call(null,caucusrw.core.widget_list,self__.app);
});
caucusrw.core.t9390.prototype.om$core$IWillMount$ = true;
caucusrw.core.t9390.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9414){var state_val_9415 = (state_9414[1]);if((state_val_9415 === 8))
{var inst_9406 = (state_9414[2]);var state_9414__$1 = (function (){var statearr_9416 = state_9414;(statearr_9416[7] = inst_9406);
return statearr_9416;
})();var statearr_9417_9431 = state_9414__$1;(statearr_9417_9431[2] = null);
(statearr_9417_9431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9415 === 7))
{var inst_9398 = (state_9414[2]);var inst_9399 = cljs.core.pr_str.call(null,inst_9398);var inst_9400 = console.log(inst_9399);var inst_9401 = (function (){var widgets = inst_9398;return ((function (widgets,inst_9398,inst_9399,inst_9400,state_val_9415){
return (function (p1__9348_SHARP_){return cljs.core.assoc.call(null,p1__9348_SHARP_,new cljs.core.Keyword(null,"widgets","widgets",2354242081),widgets);
});
;})(widgets,inst_9398,inst_9399,inst_9400,state_val_9415))
})();var inst_9402 = om.core.update_BANG_.call(null,self__.app,inst_9401);var inst_9403 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9404 = cljs.core.async.timeout.call(null,inst_9403);var state_9414__$1 = (function (){var statearr_9418 = state_9414;(statearr_9418[8] = inst_9402);
(statearr_9418[9] = inst_9400);
return statearr_9418;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9414__$1,8,inst_9404);
} else
{if((state_val_9415 === 6))
{var inst_9410 = (state_9414[2]);var state_9414__$1 = state_9414;var statearr_9419_9432 = state_9414__$1;(statearr_9419_9432[2] = inst_9410);
(statearr_9419_9432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9415 === 5))
{var state_9414__$1 = state_9414;var statearr_9420_9433 = state_9414__$1;(statearr_9420_9433[2] = null);
(statearr_9420_9433[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9415 === 4))
{var inst_9395 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9396 = caucusrw.core.fetch_widgets.call(null,inst_9395);var state_9414__$1 = state_9414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9414__$1,7,inst_9396);
} else
{if((state_val_9415 === 3))
{var inst_9412 = (state_9414[2]);var state_9414__$1 = state_9414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9414__$1,inst_9412);
} else
{if((state_val_9415 === 2))
{var state_9414__$1 = state_9414;if(true)
{var statearr_9421_9434 = state_9414__$1;(statearr_9421_9434[1] = 4);
} else
{var statearr_9422_9435 = state_9414__$1;(statearr_9422_9435[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9415 === 1))
{var state_9414__$1 = state_9414;var statearr_9423_9436 = state_9414__$1;(statearr_9423_9436[2] = null);
(statearr_9423_9436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9427 = [null,null,null,null,null,null,null,null,null,null];(statearr_9427[0] = state_machine__6178__auto__);
(statearr_9427[1] = 1);
return statearr_9427;
});
var state_machine__6178__auto____1 = (function (state_9414){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9428){if((e9428 instanceof Object))
{var ex__6181__auto__ = e9428;var statearr_9429_9437 = state_9414;(statearr_9429_9437[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9438 = state_9414;
state_9414 = G__9438;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9414){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9430 = f__6193__auto__.call(null);(statearr_9430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
caucusrw.core.t9390.prototype.om$core$IInitState$ = true;
caucusrw.core.t9390.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",2354242081)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
caucusrw.core.t9390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9392){var self__ = this;
var _9392__$1 = this;return self__.meta9391;
});
caucusrw.core.t9390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9392,meta9391__$1){var self__ = this;
var _9392__$1 = this;return (new caucusrw.core.t9390(self__.opts,self__.owner,self__.app,self__.widget_box,meta9391__$1));
});
caucusrw.core.__GT_t9390 = (function __GT_t9390(opts__$1,owner__$1,app__$1,widget_box__$1,meta9391){return (new caucusrw.core.t9390(opts__$1,owner__$1,app__$1,widget_box__$1,meta9391));
});
}
return (new caucusrw.core.t9390(opts,owner,app,widget_box,null));
});
caucusrw.core.widget = (function widget(p__9439,owner,opts){var map__9444 = p__9439;var map__9444__$1 = ((cljs.core.seq_QMARK_.call(null,map__9444))?cljs.core.apply.call(null,cljs.core.hash_map,map__9444):map__9444);var name = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof caucusrw.core.t9445 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t9445 = (function (name,map__9444,opts,owner,p__9439,widget,meta9446){
this.name = name;
this.map__9444 = map__9444;
this.opts = opts;
this.owner = owner;
this.p__9439 = p__9439;
this.widget = widget;
this.meta9446 = meta9446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t9445.cljs$lang$type = true;
caucusrw.core.t9445.cljs$lang$ctorStr = "caucusrw.core/t9445";
caucusrw.core.t9445.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t9445");
});
caucusrw.core.t9445.prototype.om$core$IRender$ = true;
caucusrw.core.t9445.prototype.om$core$IRender$render$arity$1 = (function (this__4962__auto__){var self__ = this;
var this__4962__auto____$1 = this;return React.DOM.li(null,self__.name);
});
caucusrw.core.t9445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9447){var self__ = this;
var _9447__$1 = this;return self__.meta9446;
});
caucusrw.core.t9445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9447,meta9446__$1){var self__ = this;
var _9447__$1 = this;return (new caucusrw.core.t9445(self__.name,self__.map__9444,self__.opts,self__.owner,self__.p__9439,self__.widget,meta9446__$1));
});
caucusrw.core.__GT_t9445 = (function __GT_t9445(name__$1,map__9444__$2,opts__$1,owner__$1,p__9439__$1,widget__$1,meta9446){return (new caucusrw.core.t9445(name__$1,map__9444__$2,opts__$1,owner__$1,p__9439__$1,widget__$1,meta9446));
});
}
return (new caucusrw.core.t9445(name,map__9444__$1,opts,owner,p__9439,widget,null));
});
caucusrw.core.widget_list = (function widget_list(p__9448){var map__9453 = p__9448;var map__9453__$1 = ((cljs.core.seq_QMARK_.call(null,map__9453))?cljs.core.apply.call(null,cljs.core.hash_map,map__9453):map__9453);var widgets = cljs.core.get.call(null,map__9453__$1,new cljs.core.Keyword(null,"widgets","widgets",2354242081));if(typeof caucusrw.core.t9454 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t9454 = (function (widgets,map__9453,p__9448,widget_list,meta9455){
this.widgets = widgets;
this.map__9453 = map__9453;
this.p__9448 = p__9448;
this.widget_list = widget_list;
this.meta9455 = meta9455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t9454.cljs$lang$type = true;
caucusrw.core.t9454.cljs$lang$ctorStr = "caucusrw.core/t9454";
caucusrw.core.t9454.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t9454");
});
caucusrw.core.t9454.prototype.om$core$IRender$ = true;
caucusrw.core.t9454.prototype.om$core$IRender$render$arity$1 = (function (this__4962__auto__){var self__ = this;
var this__4962__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,caucusrw.core.widget,self__.widgets));
});
caucusrw.core.t9454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9456){var self__ = this;
var _9456__$1 = this;return self__.meta9455;
});
caucusrw.core.t9454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9456,meta9455__$1){var self__ = this;
var _9456__$1 = this;return (new caucusrw.core.t9454(self__.widgets,self__.map__9453,self__.p__9448,self__.widget_list,meta9455__$1));
});
caucusrw.core.__GT_t9454 = (function __GT_t9454(widgets__$1,map__9453__$2,p__9448__$1,widget_list__$1,meta9455){return (new caucusrw.core.t9454(widgets__$1,map__9453__$2,p__9448__$1,widget_list__$1,meta9455));
});
}
return (new caucusrw.core.t9454(widgets,map__9453__$1,p__9448,widget_list,null));
});

//# sourceMappingURL=core.js.map