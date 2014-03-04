// Compiled by ClojureScript 0.0-2173
goog.provide('caucusrw.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('goog.events');
goog.require('clojure.data');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
caucusrw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",4741419973),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first","first",1111344674),"Ben",new cljs.core.Keyword(null,"last","last",1017218568),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1110523662),"benb@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"first","first",1111344674),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"P",new cljs.core.Keyword(null,"last","last",1017218568),"Hacker",new cljs.core.Keyword(null,"email","email",1110523662),"aphacker@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"first","first",1111344674),"Eva",new cljs.core.Keyword(null,"middle","middle",4234530055),"Lu",new cljs.core.Keyword(null,"last","last",1017218568),"Ator",new cljs.core.Keyword(null,"email","email",1110523662),"eval@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first","first",1111344674),"Louis",new cljs.core.Keyword(null,"last","last",1017218568),"Reasoner",new cljs.core.Keyword(null,"email","email",1110523662),"prolog@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"first","first",1111344674),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"D",new cljs.core.Keyword(null,"last","last",1017218568),"Effect",new cljs.core.Keyword(null,"email","email",1110523662),"bugs@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"first","first",1111344674),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"E",new cljs.core.Keyword(null,"last","last",1017218568),"Tweakit",new cljs.core.Keyword(null,"email","email",1110523662),"morebugs@mit.edu",new cljs.core.Keyword(null,"grade","grade",1112519497),12,new cljs.core.Keyword(null,"school","school",4400893670),"NOAA"], null)], null)], null));
caucusrw.core.middle_name = (function middle_name(p__13967){var map__13969 = p__13967;var map__13969__$1 = ((cljs.core.seq_QMARK_.call(null,map__13969))?cljs.core.apply.call(null,cljs.core.hash_map,map__13969):map__13969);var middle_initial = cljs.core.get.call(null,map__13969__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__13969__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
caucusrw.core.display_name = (function display_name(p__13970){var map__13972 = p__13970;var map__13972__$1 = ((cljs.core.seq_QMARK_.call(null,map__13972))?cljs.core.apply.call(null,cljs.core.hash_map,map__13972):map__13972);var contact = map__13972__$1;var last = cljs.core.get.call(null,map__13972__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__13972__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(caucusrw.core.middle_name.call(null,contact))].join('');
});
caucusrw.core.parse_contact = (function parse_contact(contact_str){var vec__13976 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__13976,0,null);var middle = cljs.core.nth.call(null,vec__13976,1,null);var last = cljs.core.nth.call(null,vec__13976,2,null);var parts = vec__13976;var vec__13977 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__13977,0,null);var last__$1 = cljs.core.nth.call(null,vec__13977,1,null);var middle__$1 = cljs.core.nth.call(null,vec__13977,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__13978 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__13978__$1 = (((c === 1))?cljs.core.assoc.call(null,G__13978,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__13978);var G__13978__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__13978__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__13978__$1);return G__13978__$2;
} else
{return null;
}
});
caucusrw.core.add_contact = (function add_contact(app,owner){var new_contact = caucusrw.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__13979_SHARP_){return cljs.core.conj.call(null,p1__13979_SHARP_,new_contact);
}));
} else
{return null;
}
});
caucusrw.core.contact_view = (function contact_view(contact,owner){if(typeof caucusrw.core.t13985 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t13985 = (function (owner,contact,contact_view,meta13986){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta13986 = meta13986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t13985.cljs$lang$type = true;
caucusrw.core.t13985.cljs$lang$ctorStr = "caucusrw.core/t13985";
caucusrw.core.t13985.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t13985");
});
caucusrw.core.t13985.prototype.om$core$IRenderState$ = true;
caucusrw.core.t13985.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13988){var self__ = this;
var map__13989 = p__13988;var map__13989__$1 = ((cljs.core.seq_QMARK_.call(null,map__13989))?cljs.core.apply.call(null,cljs.core.hash_map,map__13989):map__13989);var delete$ = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,caucusrw.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
caucusrw.core.t13985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13987){var self__ = this;
var _13987__$1 = this;return self__.meta13986;
});
caucusrw.core.t13985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13987,meta13986__$1){var self__ = this;
var _13987__$1 = this;return (new caucusrw.core.t13985(self__.owner,self__.contact,self__.contact_view,meta13986__$1));
});
caucusrw.core.__GT_t13985 = (function __GT_t13985(owner__$1,contact__$1,contact_view__$1,meta13986){return (new caucusrw.core.t13985(owner__$1,contact__$1,contact_view__$1,meta13986));
});
}
return (new caucusrw.core.t13985(owner,contact,contact_view,null));
});
caucusrw.core.contacts_view = (function contacts_view(app,owner){if(typeof caucusrw.core.t14015 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t14015 = (function (owner,app,contacts_view,meta14016){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta14016 = meta14016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t14015.cljs$lang$type = true;
caucusrw.core.t14015.cljs$lang$ctorStr = "caucusrw.core/t14015";
caucusrw.core.t14015.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t14015");
});
caucusrw.core.t14015.prototype.om$core$IRenderState$ = true;
caucusrw.core.t14015.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contact list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,caucusrw.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"ref": "new-contact", "type": "text"}),React.DOM.button({"onClick": (function (){return caucusrw.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
caucusrw.core.t14015.prototype.om$core$IWillMount$ = true;
caucusrw.core.t14015.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14027){var state_val_14028 = (state_14027[1]);if((state_val_14028 === 4))
{var inst_14020 = (state_14027[2]);var inst_14021 = (function (){var contact = inst_14020;return ((function (contact,inst_14020,state_val_14028){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_14020,state_val_14028){
return (function (p1__13990_SHARP_){return cljs.core._EQ_.call(null,contact,p1__13990_SHARP_);
});})(contact,inst_14020,state_val_14028))
,xs));
});
;})(contact,inst_14020,state_val_14028))
})();var inst_14022 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_14021);var state_14027__$1 = (function (){var statearr_14029 = state_14027;(statearr_14029[7] = inst_14022);
return statearr_14029;
})();var statearr_14030_14039 = state_14027__$1;(statearr_14030_14039[2] = null);
(statearr_14030_14039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14028 === 3))
{var inst_14025 = (state_14027[2]);var state_14027__$1 = state_14027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14027__$1,inst_14025);
} else
{if((state_val_14028 === 2))
{var state_14027__$1 = state_14027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14027__$1,4,delete$);
} else
{if((state_val_14028 === 1))
{var state_14027__$1 = state_14027;var statearr_14031_14040 = state_14027__$1;(statearr_14031_14040[2] = null);
(statearr_14031_14040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14035 = [null,null,null,null,null,null,null,null];(statearr_14035[0] = state_machine__6178__auto__);
(statearr_14035[1] = 1);
return statearr_14035;
});
var state_machine__6178__auto____1 = (function (state_14027){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14036){if((e14036 instanceof Object))
{var ex__6181__auto__ = e14036;var statearr_14037_14041 = state_14027;(statearr_14037_14041[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14042 = state_14027;
state_14027 = G__14042;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14027){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14038 = f__6193__auto__.call(null);(statearr_14038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
caucusrw.core.t14015.prototype.om$core$IInitState$ = true;
caucusrw.core.t14015.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null)], null);
});
caucusrw.core.t14015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14017){var self__ = this;
var _14017__$1 = this;return self__.meta14016;
});
caucusrw.core.t14015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14017,meta14016__$1){var self__ = this;
var _14017__$1 = this;return (new caucusrw.core.t14015(self__.owner,self__.app,self__.contacts_view,meta14016__$1));
});
caucusrw.core.__GT_t14015 = (function __GT_t14015(owner__$1,app__$1,contacts_view__$1,meta14016){return (new caucusrw.core.t14015(owner__$1,app__$1,contacts_view__$1,meta14016));
});
}
return (new caucusrw.core.t14015(owner,app,contacts_view,null));
});
om.core.root.call(null,caucusrw.core.contacts_view,caucusrw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("contacts")], null));

//# sourceMappingURL=core.js.map