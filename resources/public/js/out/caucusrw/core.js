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
caucusrw.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",4741419973),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Ben",new cljs.core.Keyword(null,"last","last",1017218568),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1110523662),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"P",new cljs.core.Keyword(null,"last","last",1017218568),"Hacker",new cljs.core.Keyword(null,"email","email",1110523662),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Eva",new cljs.core.Keyword(null,"middle","middle",4234530055),"Lu",new cljs.core.Keyword(null,"last","last",1017218568),"Ator",new cljs.core.Keyword(null,"email","email",1110523662),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Louis",new cljs.core.Keyword(null,"last","last",1017218568),"Reasoner",new cljs.core.Keyword(null,"email","email",1110523662),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"D",new cljs.core.Keyword(null,"last","last",1017218568),"Effect",new cljs.core.Keyword(null,"email","email",1110523662),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"E",new cljs.core.Keyword(null,"last","last",1017218568),"Tweakit",new cljs.core.Keyword(null,"email","email",1110523662),"morebugs@mit.edu"], null)], null)], null));
caucusrw.core.middle_name = (function middle_name(p__13890){var map__13892 = p__13890;var map__13892__$1 = ((cljs.core.seq_QMARK_.call(null,map__13892))?cljs.core.apply.call(null,cljs.core.hash_map,map__13892):map__13892);var middle_initial = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
caucusrw.core.display_name = (function display_name(p__13893){var map__13895 = p__13893;var map__13895__$1 = ((cljs.core.seq_QMARK_.call(null,map__13895))?cljs.core.apply.call(null,cljs.core.hash_map,map__13895):map__13895);var contact = map__13895__$1;var last = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(caucusrw.core.middle_name.call(null,contact))].join('');
});
caucusrw.core.parse_contact = (function parse_contact(contact_str){var vec__13899 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__13899,0,null);var middle = cljs.core.nth.call(null,vec__13899,1,null);var last = cljs.core.nth.call(null,vec__13899,2,null);var parts = vec__13899;var vec__13900 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__13900,0,null);var last__$1 = cljs.core.nth.call(null,vec__13900,1,null);var middle__$1 = cljs.core.nth.call(null,vec__13900,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__13901 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__13901__$1 = (((c === 1))?cljs.core.assoc.call(null,G__13901,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__13901);var G__13901__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__13901__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__13901__$1);return G__13901__$2;
} else
{return null;
}
});
caucusrw.core.add_contact = (function add_contact(app,owner){var new_contact = caucusrw.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__13902_SHARP_){return cljs.core.conj.call(null,p1__13902_SHARP_,new_contact);
}));
} else
{return null;
}
});
caucusrw.core.contact_view = (function contact_view(contact,owner){if(typeof caucusrw.core.t13908 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t13908 = (function (owner,contact,contact_view,meta13909){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta13909 = meta13909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t13908.cljs$lang$type = true;
caucusrw.core.t13908.cljs$lang$ctorStr = "caucusrw.core/t13908";
caucusrw.core.t13908.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t13908");
});
caucusrw.core.t13908.prototype.om$core$IRenderState$ = true;
caucusrw.core.t13908.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13911){var self__ = this;
var map__13912 = p__13911;var map__13912__$1 = ((cljs.core.seq_QMARK_.call(null,map__13912))?cljs.core.apply.call(null,cljs.core.hash_map,map__13912):map__13912);var delete$ = cljs.core.get.call(null,map__13912__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,caucusrw.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
caucusrw.core.t13908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13910){var self__ = this;
var _13910__$1 = this;return self__.meta13909;
});
caucusrw.core.t13908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13910,meta13909__$1){var self__ = this;
var _13910__$1 = this;return (new caucusrw.core.t13908(self__.owner,self__.contact,self__.contact_view,meta13909__$1));
});
caucusrw.core.__GT_t13908 = (function __GT_t13908(owner__$1,contact__$1,contact_view__$1,meta13909){return (new caucusrw.core.t13908(owner__$1,contact__$1,contact_view__$1,meta13909));
});
}
return (new caucusrw.core.t13908(owner,contact,contact_view,null));
});
caucusrw.core.contacts_view = (function contacts_view(app,owner){if(typeof caucusrw.core.t13938 !== 'undefined')
{} else
{
/**
* @constructor
*/
caucusrw.core.t13938 = (function (owner,app,contacts_view,meta13939){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta13939 = meta13939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
caucusrw.core.t13938.cljs$lang$type = true;
caucusrw.core.t13938.cljs$lang$ctorStr = "caucusrw.core/t13938";
caucusrw.core.t13938.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"caucusrw.core/t13938");
});
caucusrw.core.t13938.prototype.om$core$IRenderState$ = true;
caucusrw.core.t13938.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contact list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,caucusrw.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"ref": "new-contact", "type": "text"}),React.DOM.button({"onClick": (function (){return caucusrw.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
caucusrw.core.t13938.prototype.om$core$IWillMount$ = true;
caucusrw.core.t13938.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13950){var state_val_13951 = (state_13950[1]);if((state_val_13951 === 4))
{var inst_13943 = (state_13950[2]);var inst_13944 = (function (){var contact = inst_13943;return ((function (contact,inst_13943,state_val_13951){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_13943,state_val_13951){
return (function (p1__13913_SHARP_){return cljs.core._EQ_.call(null,contact,p1__13913_SHARP_);
});})(contact,inst_13943,state_val_13951))
,xs));
});
;})(contact,inst_13943,state_val_13951))
})();var inst_13945 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_13944);var state_13950__$1 = (function (){var statearr_13952 = state_13950;(statearr_13952[7] = inst_13945);
return statearr_13952;
})();var statearr_13953_13962 = state_13950__$1;(statearr_13953_13962[2] = null);
(statearr_13953_13962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 3))
{var inst_13948 = (state_13950[2]);var state_13950__$1 = state_13950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13950__$1,inst_13948);
} else
{if((state_val_13951 === 2))
{var state_13950__$1 = state_13950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13950__$1,4,delete$);
} else
{if((state_val_13951 === 1))
{var state_13950__$1 = state_13950;var statearr_13954_13963 = state_13950__$1;(statearr_13954_13963[2] = null);
(statearr_13954_13963[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_13958 = [null,null,null,null,null,null,null,null];(statearr_13958[0] = state_machine__6178__auto__);
(statearr_13958[1] = 1);
return statearr_13958;
});
var state_machine__6178__auto____1 = (function (state_13950){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13950);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13959){if((e13959 instanceof Object))
{var ex__6181__auto__ = e13959;var statearr_13960_13964 = state_13950;(statearr_13960_13964[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13950);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13965 = state_13950;
state_13950 = G__13965;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13950){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13961 = f__6193__auto__.call(null);(statearr_13961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
caucusrw.core.t13938.prototype.om$core$IInitState$ = true;
caucusrw.core.t13938.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null)], null);
});
caucusrw.core.t13938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13940){var self__ = this;
var _13940__$1 = this;return self__.meta13939;
});
caucusrw.core.t13938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13940,meta13939__$1){var self__ = this;
var _13940__$1 = this;return (new caucusrw.core.t13938(self__.owner,self__.app,self__.contacts_view,meta13939__$1));
});
caucusrw.core.__GT_t13938 = (function __GT_t13938(owner__$1,app__$1,contacts_view__$1,meta13939){return (new caucusrw.core.t13938(owner__$1,app__$1,contacts_view__$1,meta13939));
});
}
return (new caucusrw.core.t13938(owner,app,contacts_view,null));
});
om.core.root.call(null,caucusrw.core.contacts_view,caucusrw.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("contacts")], null));

//# sourceMappingURL=core.js.map