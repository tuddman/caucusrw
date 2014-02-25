// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11023 = (function (f,fn_handler,meta11024){
this.f = f;
this.fn_handler = fn_handler;
this.meta11024 = meta11024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11023.cljs$lang$type = true;
cljs.core.async.t11023.cljs$lang$ctorStr = "cljs.core.async/t11023";
cljs.core.async.t11023.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11023");
});
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11025){var self__ = this;
var _11025__$1 = this;return self__.meta11024;
});
cljs.core.async.t11023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11025,meta11024__$1){var self__ = this;
var _11025__$1 = this;return (new cljs.core.async.t11023(self__.f,self__.fn_handler,meta11024__$1));
});
cljs.core.async.__GT_t11023 = (function __GT_t11023(f__$1,fn_handler__$1,meta11024){return (new cljs.core.async.t11023(f__$1,fn_handler__$1,meta11024));
});
}
return (new cljs.core.async.t11023(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11027 = buff;if(G__11027)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11027.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11027.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11027);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11028 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11028);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11028);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11029 = n;var x_11030 = 0;while(true){
if((x_11030 < n__4291__auto___11029))
{(a[x_11030] = 0);
{
var G__11031 = (x_11030 + 1);
x_11030 = G__11031;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11032 = (i + 1);
i = G__11032;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11036 = (function (flag,alt_flag,meta11037){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11037 = meta11037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11036.cljs$lang$type = true;
cljs.core.async.t11036.cljs$lang$ctorStr = "cljs.core.async/t11036";
cljs.core.async.t11036.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11036");
});
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11038){var self__ = this;
var _11038__$1 = this;return self__.meta11037;
});
cljs.core.async.t11036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11038,meta11037__$1){var self__ = this;
var _11038__$1 = this;return (new cljs.core.async.t11036(self__.flag,self__.alt_flag,meta11037__$1));
});
cljs.core.async.__GT_t11036 = (function __GT_t11036(flag__$1,alt_flag__$1,meta11037){return (new cljs.core.async.t11036(flag__$1,alt_flag__$1,meta11037));
});
}
return (new cljs.core.async.t11036(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11042 = (function (cb,flag,alt_handler,meta11043){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11043 = meta11043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11042.cljs$lang$type = true;
cljs.core.async.t11042.cljs$lang$ctorStr = "cljs.core.async/t11042";
cljs.core.async.t11042.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11042");
});
cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11044){var self__ = this;
var _11044__$1 = this;return self__.meta11043;
});
cljs.core.async.t11042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11044,meta11043__$1){var self__ = this;
var _11044__$1 = this;return (new cljs.core.async.t11042(self__.cb,self__.flag,self__.alt_handler,meta11043__$1));
});
cljs.core.async.__GT_t11042 = (function __GT_t11042(cb__$1,flag__$1,alt_handler__$1,meta11043){return (new cljs.core.async.t11042(cb__$1,flag__$1,alt_handler__$1,meta11043));
});
}
return (new cljs.core.async.t11042(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11045_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11045_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11046 = (i + 1);
i = G__11046;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11047){var map__11049 = p__11047;var map__11049__$1 = ((cljs.core.seq_QMARK_.call(null,map__11049))?cljs.core.apply.call(null,cljs.core.hash_map,map__11049):map__11049);var opts = map__11049__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11047 = null;if (arguments.length > 1) {
  p__11047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11047);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11050){
var ports = cljs.core.first(arglist__11050);
var p__11047 = cljs.core.rest(arglist__11050);
return alts_BANG___delegate(ports,p__11047);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11058 = (function (ch,f,map_LT_,meta11059){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11059 = meta11059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11058.cljs$lang$type = true;
cljs.core.async.t11058.cljs$lang$ctorStr = "cljs.core.async/t11058";
cljs.core.async.t11058.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11058");
});
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11061 = (function (fn1,_,meta11059,ch,f,map_LT_,meta11062){
this.fn1 = fn1;
this._ = _;
this.meta11059 = meta11059;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11062 = meta11062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11061.cljs$lang$type = true;
cljs.core.async.t11061.cljs$lang$ctorStr = "cljs.core.async/t11061";
cljs.core.async.t11061.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11061");
});
cljs.core.async.t11061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11061.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11051_SHARP_){return f1.call(null,(((p1__11051_SHARP_ == null))?null:self__.f.call(null,p1__11051_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11063){var self__ = this;
var _11063__$1 = this;return self__.meta11062;
});
cljs.core.async.t11061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11063,meta11062__$1){var self__ = this;
var _11063__$1 = this;return (new cljs.core.async.t11061(self__.fn1,self__._,self__.meta11059,self__.ch,self__.f,self__.map_LT_,meta11062__$1));
});
cljs.core.async.__GT_t11061 = (function __GT_t11061(fn1__$1,___$2,meta11059__$1,ch__$2,f__$2,map_LT___$2,meta11062){return (new cljs.core.async.t11061(fn1__$1,___$2,meta11059__$1,ch__$2,f__$2,map_LT___$2,meta11062));
});
}
return (new cljs.core.async.t11061(fn1,___$1,self__.meta11059,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11060){var self__ = this;
var _11060__$1 = this;return self__.meta11059;
});
cljs.core.async.t11058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11060,meta11059__$1){var self__ = this;
var _11060__$1 = this;return (new cljs.core.async.t11058(self__.ch,self__.f,self__.map_LT_,meta11059__$1));
});
cljs.core.async.__GT_t11058 = (function __GT_t11058(ch__$1,f__$1,map_LT___$1,meta11059){return (new cljs.core.async.t11058(ch__$1,f__$1,map_LT___$1,meta11059));
});
}
return (new cljs.core.async.t11058(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11067 = (function (ch,f,map_GT_,meta11068){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11068 = meta11068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11067.cljs$lang$type = true;
cljs.core.async.t11067.cljs$lang$ctorStr = "cljs.core.async/t11067";
cljs.core.async.t11067.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11067");
});
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11069){var self__ = this;
var _11069__$1 = this;return self__.meta11068;
});
cljs.core.async.t11067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11069,meta11068__$1){var self__ = this;
var _11069__$1 = this;return (new cljs.core.async.t11067(self__.ch,self__.f,self__.map_GT_,meta11068__$1));
});
cljs.core.async.__GT_t11067 = (function __GT_t11067(ch__$1,f__$1,map_GT___$1,meta11068){return (new cljs.core.async.t11067(ch__$1,f__$1,map_GT___$1,meta11068));
});
}
return (new cljs.core.async.t11067(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11073 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11073 = (function (ch,p,filter_GT_,meta11074){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11074 = meta11074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11073.cljs$lang$type = true;
cljs.core.async.t11073.cljs$lang$ctorStr = "cljs.core.async/t11073";
cljs.core.async.t11073.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11073");
});
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11075){var self__ = this;
var _11075__$1 = this;return self__.meta11074;
});
cljs.core.async.t11073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11075,meta11074__$1){var self__ = this;
var _11075__$1 = this;return (new cljs.core.async.t11073(self__.ch,self__.p,self__.filter_GT_,meta11074__$1));
});
cljs.core.async.__GT_t11073 = (function __GT_t11073(ch__$1,p__$1,filter_GT___$1,meta11074){return (new cljs.core.async.t11073(ch__$1,p__$1,filter_GT___$1,meta11074));
});
}
return (new cljs.core.async.t11073(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11137){var state_val_11138 = (state_11137[1]);if((state_val_11138 === 1))
{var state_11137__$1 = state_11137;var statearr_11139_11159 = state_11137__$1;(statearr_11139_11159[2] = null);
(statearr_11139_11159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 2))
{var state_11137__$1 = state_11137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11137__$1,4,ch);
} else
{if((state_val_11138 === 3))
{var inst_11135 = (state_11137[2]);var state_11137__$1 = state_11137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11137__$1,inst_11135);
} else
{if((state_val_11138 === 4))
{var inst_11119 = (state_11137[7]);var inst_11119__$1 = (state_11137[2]);var inst_11120 = (inst_11119__$1 == null);var state_11137__$1 = (function (){var statearr_11140 = state_11137;(statearr_11140[7] = inst_11119__$1);
return statearr_11140;
})();if(cljs.core.truth_(inst_11120))
{var statearr_11141_11160 = state_11137__$1;(statearr_11141_11160[1] = 5);
} else
{var statearr_11142_11161 = state_11137__$1;(statearr_11142_11161[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 5))
{var inst_11122 = cljs.core.async.close_BANG_.call(null,out);var state_11137__$1 = state_11137;var statearr_11143_11162 = state_11137__$1;(statearr_11143_11162[2] = inst_11122);
(statearr_11143_11162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 6))
{var inst_11119 = (state_11137[7]);var inst_11124 = p.call(null,inst_11119);var state_11137__$1 = state_11137;if(cljs.core.truth_(inst_11124))
{var statearr_11144_11163 = state_11137__$1;(statearr_11144_11163[1] = 8);
} else
{var statearr_11145_11164 = state_11137__$1;(statearr_11145_11164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 7))
{var inst_11133 = (state_11137[2]);var state_11137__$1 = state_11137;var statearr_11146_11165 = state_11137__$1;(statearr_11146_11165[2] = inst_11133);
(statearr_11146_11165[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 8))
{var inst_11119 = (state_11137[7]);var state_11137__$1 = state_11137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11137__$1,11,out,inst_11119);
} else
{if((state_val_11138 === 9))
{var state_11137__$1 = state_11137;var statearr_11147_11166 = state_11137__$1;(statearr_11147_11166[2] = null);
(statearr_11147_11166[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 10))
{var inst_11130 = (state_11137[2]);var state_11137__$1 = (function (){var statearr_11148 = state_11137;(statearr_11148[8] = inst_11130);
return statearr_11148;
})();var statearr_11149_11167 = state_11137__$1;(statearr_11149_11167[2] = null);
(statearr_11149_11167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11138 === 11))
{var inst_11127 = (state_11137[2]);var state_11137__$1 = state_11137;var statearr_11150_11168 = state_11137__$1;(statearr_11150_11168[2] = inst_11127);
(statearr_11150_11168[1] = 10);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11154 = [null,null,null,null,null,null,null,null,null];(statearr_11154[0] = state_machine__6178__auto__);
(statearr_11154[1] = 1);
return statearr_11154;
});
var state_machine__6178__auto____1 = (function (state_11137){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11137);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11155){if((e11155 instanceof Object))
{var ex__6181__auto__ = e11155;var statearr_11156_11169 = state_11137;(statearr_11156_11169[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11170 = state_11137;
state_11137 = G__11170;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11137){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11157 = f__6193__auto__.call(null);(statearr_11157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11158);
return statearr_11157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11322){var state_val_11323 = (state_11322[1]);if((state_val_11323 === 1))
{var state_11322__$1 = state_11322;var statearr_11324_11361 = state_11322__$1;(statearr_11324_11361[2] = null);
(statearr_11324_11361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 2))
{var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11322__$1,4,in$);
} else
{if((state_val_11323 === 3))
{var inst_11320 = (state_11322[2]);var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11322__$1,inst_11320);
} else
{if((state_val_11323 === 4))
{var inst_11268 = (state_11322[7]);var inst_11268__$1 = (state_11322[2]);var inst_11269 = (inst_11268__$1 == null);var state_11322__$1 = (function (){var statearr_11325 = state_11322;(statearr_11325[7] = inst_11268__$1);
return statearr_11325;
})();if(cljs.core.truth_(inst_11269))
{var statearr_11326_11362 = state_11322__$1;(statearr_11326_11362[1] = 5);
} else
{var statearr_11327_11363 = state_11322__$1;(statearr_11327_11363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 5))
{var inst_11271 = cljs.core.async.close_BANG_.call(null,out);var state_11322__$1 = state_11322;var statearr_11328_11364 = state_11322__$1;(statearr_11328_11364[2] = inst_11271);
(statearr_11328_11364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 6))
{var inst_11268 = (state_11322[7]);var inst_11273 = f.call(null,inst_11268);var inst_11278 = cljs.core.seq.call(null,inst_11273);var inst_11279 = inst_11278;var inst_11280 = null;var inst_11281 = 0;var inst_11282 = 0;var state_11322__$1 = (function (){var statearr_11329 = state_11322;(statearr_11329[8] = inst_11279);
(statearr_11329[9] = inst_11280);
(statearr_11329[10] = inst_11282);
(statearr_11329[11] = inst_11281);
return statearr_11329;
})();var statearr_11330_11365 = state_11322__$1;(statearr_11330_11365[2] = null);
(statearr_11330_11365[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 7))
{var inst_11318 = (state_11322[2]);var state_11322__$1 = state_11322;var statearr_11331_11366 = state_11322__$1;(statearr_11331_11366[2] = inst_11318);
(statearr_11331_11366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 8))
{var inst_11282 = (state_11322[10]);var inst_11281 = (state_11322[11]);var inst_11284 = (inst_11282 < inst_11281);var inst_11285 = inst_11284;var state_11322__$1 = state_11322;if(cljs.core.truth_(inst_11285))
{var statearr_11332_11367 = state_11322__$1;(statearr_11332_11367[1] = 10);
} else
{var statearr_11333_11368 = state_11322__$1;(statearr_11333_11368[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 9))
{var inst_11315 = (state_11322[2]);var state_11322__$1 = (function (){var statearr_11334 = state_11322;(statearr_11334[12] = inst_11315);
return statearr_11334;
})();var statearr_11335_11369 = state_11322__$1;(statearr_11335_11369[2] = null);
(statearr_11335_11369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 10))
{var inst_11280 = (state_11322[9]);var inst_11282 = (state_11322[10]);var inst_11287 = cljs.core._nth.call(null,inst_11280,inst_11282);var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11322__$1,13,out,inst_11287);
} else
{if((state_val_11323 === 11))
{var inst_11293 = (state_11322[13]);var inst_11279 = (state_11322[8]);var inst_11293__$1 = cljs.core.seq.call(null,inst_11279);var state_11322__$1 = (function (){var statearr_11339 = state_11322;(statearr_11339[13] = inst_11293__$1);
return statearr_11339;
})();if(inst_11293__$1)
{var statearr_11340_11370 = state_11322__$1;(statearr_11340_11370[1] = 14);
} else
{var statearr_11341_11371 = state_11322__$1;(statearr_11341_11371[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 12))
{var inst_11313 = (state_11322[2]);var state_11322__$1 = state_11322;var statearr_11342_11372 = state_11322__$1;(statearr_11342_11372[2] = inst_11313);
(statearr_11342_11372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 13))
{var inst_11279 = (state_11322[8]);var inst_11280 = (state_11322[9]);var inst_11282 = (state_11322[10]);var inst_11281 = (state_11322[11]);var inst_11289 = (state_11322[2]);var inst_11290 = (inst_11282 + 1);var tmp11336 = inst_11279;var tmp11337 = inst_11280;var tmp11338 = inst_11281;var inst_11279__$1 = tmp11336;var inst_11280__$1 = tmp11337;var inst_11281__$1 = tmp11338;var inst_11282__$1 = inst_11290;var state_11322__$1 = (function (){var statearr_11343 = state_11322;(statearr_11343[14] = inst_11289);
(statearr_11343[8] = inst_11279__$1);
(statearr_11343[9] = inst_11280__$1);
(statearr_11343[10] = inst_11282__$1);
(statearr_11343[11] = inst_11281__$1);
return statearr_11343;
})();var statearr_11344_11373 = state_11322__$1;(statearr_11344_11373[2] = null);
(statearr_11344_11373[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 14))
{var inst_11293 = (state_11322[13]);var inst_11295 = cljs.core.chunked_seq_QMARK_.call(null,inst_11293);var state_11322__$1 = state_11322;if(inst_11295)
{var statearr_11345_11374 = state_11322__$1;(statearr_11345_11374[1] = 17);
} else
{var statearr_11346_11375 = state_11322__$1;(statearr_11346_11375[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 15))
{var state_11322__$1 = state_11322;var statearr_11347_11376 = state_11322__$1;(statearr_11347_11376[2] = null);
(statearr_11347_11376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 16))
{var inst_11311 = (state_11322[2]);var state_11322__$1 = state_11322;var statearr_11348_11377 = state_11322__$1;(statearr_11348_11377[2] = inst_11311);
(statearr_11348_11377[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 17))
{var inst_11293 = (state_11322[13]);var inst_11297 = cljs.core.chunk_first.call(null,inst_11293);var inst_11298 = cljs.core.chunk_rest.call(null,inst_11293);var inst_11299 = cljs.core.count.call(null,inst_11297);var inst_11279 = inst_11298;var inst_11280 = inst_11297;var inst_11281 = inst_11299;var inst_11282 = 0;var state_11322__$1 = (function (){var statearr_11349 = state_11322;(statearr_11349[8] = inst_11279);
(statearr_11349[9] = inst_11280);
(statearr_11349[10] = inst_11282);
(statearr_11349[11] = inst_11281);
return statearr_11349;
})();var statearr_11350_11378 = state_11322__$1;(statearr_11350_11378[2] = null);
(statearr_11350_11378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 18))
{var inst_11293 = (state_11322[13]);var inst_11302 = cljs.core.first.call(null,inst_11293);var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11322__$1,20,out,inst_11302);
} else
{if((state_val_11323 === 19))
{var inst_11308 = (state_11322[2]);var state_11322__$1 = state_11322;var statearr_11351_11379 = state_11322__$1;(statearr_11351_11379[2] = inst_11308);
(statearr_11351_11379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 20))
{var inst_11293 = (state_11322[13]);var inst_11304 = (state_11322[2]);var inst_11305 = cljs.core.next.call(null,inst_11293);var inst_11279 = inst_11305;var inst_11280 = null;var inst_11281 = 0;var inst_11282 = 0;var state_11322__$1 = (function (){var statearr_11352 = state_11322;(statearr_11352[8] = inst_11279);
(statearr_11352[9] = inst_11280);
(statearr_11352[10] = inst_11282);
(statearr_11352[15] = inst_11304);
(statearr_11352[11] = inst_11281);
return statearr_11352;
})();var statearr_11353_11380 = state_11322__$1;(statearr_11353_11380[2] = null);
(statearr_11353_11380[1] = 8);
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
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_11357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11357[0] = state_machine__6178__auto__);
(statearr_11357[1] = 1);
return statearr_11357;
});
var state_machine__6178__auto____1 = (function (state_11322){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11358){if((e11358 instanceof Object))
{var ex__6181__auto__ = e11358;var statearr_11359_11381 = state_11322;(statearr_11359_11381[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11382 = state_11322;
state_11322 = G__11382;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11322){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11360 = f__6193__auto__.call(null);(statearr_11360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___11463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11442){var state_val_11443 = (state_11442[1]);if((state_val_11443 === 1))
{var state_11442__$1 = state_11442;var statearr_11444_11464 = state_11442__$1;(statearr_11444_11464[2] = null);
(statearr_11444_11464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 2))
{var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11442__$1,4,from);
} else
{if((state_val_11443 === 3))
{var inst_11440 = (state_11442[2]);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11442__$1,inst_11440);
} else
{if((state_val_11443 === 4))
{var inst_11425 = (state_11442[7]);var inst_11425__$1 = (state_11442[2]);var inst_11426 = (inst_11425__$1 == null);var state_11442__$1 = (function (){var statearr_11445 = state_11442;(statearr_11445[7] = inst_11425__$1);
return statearr_11445;
})();if(cljs.core.truth_(inst_11426))
{var statearr_11446_11465 = state_11442__$1;(statearr_11446_11465[1] = 5);
} else
{var statearr_11447_11466 = state_11442__$1;(statearr_11447_11466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 5))
{var state_11442__$1 = state_11442;if(cljs.core.truth_(close_QMARK_))
{var statearr_11448_11467 = state_11442__$1;(statearr_11448_11467[1] = 8);
} else
{var statearr_11449_11468 = state_11442__$1;(statearr_11449_11468[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 6))
{var inst_11425 = (state_11442[7]);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11442__$1,11,to,inst_11425);
} else
{if((state_val_11443 === 7))
{var inst_11438 = (state_11442[2]);var state_11442__$1 = state_11442;var statearr_11450_11469 = state_11442__$1;(statearr_11450_11469[2] = inst_11438);
(statearr_11450_11469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 8))
{var inst_11429 = cljs.core.async.close_BANG_.call(null,to);var state_11442__$1 = state_11442;var statearr_11451_11470 = state_11442__$1;(statearr_11451_11470[2] = inst_11429);
(statearr_11451_11470[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 9))
{var state_11442__$1 = state_11442;var statearr_11452_11471 = state_11442__$1;(statearr_11452_11471[2] = null);
(statearr_11452_11471[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 10))
{var inst_11432 = (state_11442[2]);var state_11442__$1 = state_11442;var statearr_11453_11472 = state_11442__$1;(statearr_11453_11472[2] = inst_11432);
(statearr_11453_11472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 11))
{var inst_11435 = (state_11442[2]);var state_11442__$1 = (function (){var statearr_11454 = state_11442;(statearr_11454[8] = inst_11435);
return statearr_11454;
})();var statearr_11455_11473 = state_11442__$1;(statearr_11455_11473[2] = null);
(statearr_11455_11473[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11459 = [null,null,null,null,null,null,null,null,null];(statearr_11459[0] = state_machine__6178__auto__);
(statearr_11459[1] = 1);
return statearr_11459;
});
var state_machine__6178__auto____1 = (function (state_11442){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object))
{var ex__6181__auto__ = e11460;var statearr_11461_11474 = state_11442;(statearr_11461_11474[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11475 = state_11442;
state_11442 = G__11475;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11442){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11462 = f__6193__auto__.call(null);(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11463);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11540){var state_val_11541 = (state_11540[1]);if((state_val_11541 === 1))
{var state_11540__$1 = state_11540;var statearr_11542_11563 = state_11540__$1;(statearr_11542_11563[2] = null);
(statearr_11542_11563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 2))
{var state_11540__$1 = state_11540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11540__$1,4,ch);
} else
{if((state_val_11541 === 3))
{var inst_11538 = (state_11540[2]);var state_11540__$1 = state_11540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11540__$1,inst_11538);
} else
{if((state_val_11541 === 4))
{var inst_11521 = (state_11540[7]);var inst_11521__$1 = (state_11540[2]);var inst_11522 = (inst_11521__$1 == null);var state_11540__$1 = (function (){var statearr_11543 = state_11540;(statearr_11543[7] = inst_11521__$1);
return statearr_11543;
})();if(cljs.core.truth_(inst_11522))
{var statearr_11544_11564 = state_11540__$1;(statearr_11544_11564[1] = 5);
} else
{var statearr_11545_11565 = state_11540__$1;(statearr_11545_11565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 5))
{var inst_11524 = cljs.core.async.close_BANG_.call(null,tc);var inst_11525 = cljs.core.async.close_BANG_.call(null,fc);var state_11540__$1 = (function (){var statearr_11546 = state_11540;(statearr_11546[8] = inst_11524);
return statearr_11546;
})();var statearr_11547_11566 = state_11540__$1;(statearr_11547_11566[2] = inst_11525);
(statearr_11547_11566[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 6))
{var inst_11521 = (state_11540[7]);var inst_11527 = p.call(null,inst_11521);var state_11540__$1 = state_11540;if(cljs.core.truth_(inst_11527))
{var statearr_11548_11567 = state_11540__$1;(statearr_11548_11567[1] = 9);
} else
{var statearr_11549_11568 = state_11540__$1;(statearr_11549_11568[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 7))
{var inst_11536 = (state_11540[2]);var state_11540__$1 = state_11540;var statearr_11550_11569 = state_11540__$1;(statearr_11550_11569[2] = inst_11536);
(statearr_11550_11569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 8))
{var inst_11533 = (state_11540[2]);var state_11540__$1 = (function (){var statearr_11551 = state_11540;(statearr_11551[9] = inst_11533);
return statearr_11551;
})();var statearr_11552_11570 = state_11540__$1;(statearr_11552_11570[2] = null);
(statearr_11552_11570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 9))
{var state_11540__$1 = state_11540;var statearr_11553_11571 = state_11540__$1;(statearr_11553_11571[2] = tc);
(statearr_11553_11571[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 10))
{var state_11540__$1 = state_11540;var statearr_11554_11572 = state_11540__$1;(statearr_11554_11572[2] = fc);
(statearr_11554_11572[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 11))
{var inst_11521 = (state_11540[7]);var inst_11531 = (state_11540[2]);var state_11540__$1 = state_11540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11540__$1,8,inst_11531,inst_11521);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11558 = [null,null,null,null,null,null,null,null,null,null];(statearr_11558[0] = state_machine__6178__auto__);
(statearr_11558[1] = 1);
return statearr_11558;
});
var state_machine__6178__auto____1 = (function (state_11540){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11559){if((e11559 instanceof Object))
{var ex__6181__auto__ = e11559;var statearr_11560_11573 = state_11540;(statearr_11560_11573[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11574 = state_11540;
state_11540 = G__11574;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11540){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11561 = f__6193__auto__.call(null);(statearr_11561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11562);
return statearr_11561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11621){var state_val_11622 = (state_11621[1]);if((state_val_11622 === 7))
{var inst_11617 = (state_11621[2]);var state_11621__$1 = state_11621;var statearr_11623_11639 = state_11621__$1;(statearr_11623_11639[2] = inst_11617);
(statearr_11623_11639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 6))
{var inst_11610 = (state_11621[7]);var inst_11607 = (state_11621[8]);var inst_11614 = f.call(null,inst_11607,inst_11610);var inst_11607__$1 = inst_11614;var state_11621__$1 = (function (){var statearr_11624 = state_11621;(statearr_11624[8] = inst_11607__$1);
return statearr_11624;
})();var statearr_11625_11640 = state_11621__$1;(statearr_11625_11640[2] = null);
(statearr_11625_11640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 5))
{var inst_11607 = (state_11621[8]);var state_11621__$1 = state_11621;var statearr_11626_11641 = state_11621__$1;(statearr_11626_11641[2] = inst_11607);
(statearr_11626_11641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 4))
{var inst_11610 = (state_11621[7]);var inst_11610__$1 = (state_11621[2]);var inst_11611 = (inst_11610__$1 == null);var state_11621__$1 = (function (){var statearr_11627 = state_11621;(statearr_11627[7] = inst_11610__$1);
return statearr_11627;
})();if(cljs.core.truth_(inst_11611))
{var statearr_11628_11642 = state_11621__$1;(statearr_11628_11642[1] = 5);
} else
{var statearr_11629_11643 = state_11621__$1;(statearr_11629_11643[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 3))
{var inst_11619 = (state_11621[2]);var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11621__$1,inst_11619);
} else
{if((state_val_11622 === 2))
{var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,4,ch);
} else
{if((state_val_11622 === 1))
{var inst_11607 = init;var state_11621__$1 = (function (){var statearr_11630 = state_11621;(statearr_11630[8] = inst_11607);
return statearr_11630;
})();var statearr_11631_11644 = state_11621__$1;(statearr_11631_11644[2] = null);
(statearr_11631_11644[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11635 = [null,null,null,null,null,null,null,null,null];(statearr_11635[0] = state_machine__6178__auto__);
(statearr_11635[1] = 1);
return statearr_11635;
});
var state_machine__6178__auto____1 = (function (state_11621){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11621);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11636){if((e11636 instanceof Object))
{var ex__6181__auto__ = e11636;var statearr_11637_11645 = state_11621;(statearr_11637_11645[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11646 = state_11621;
state_11621 = G__11646;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11621){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11638 = f__6193__auto__.call(null);(statearr_11638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11708){var state_val_11709 = (state_11708[1]);if((state_val_11709 === 1))
{var inst_11688 = cljs.core.seq.call(null,coll);var inst_11689 = inst_11688;var state_11708__$1 = (function (){var statearr_11710 = state_11708;(statearr_11710[7] = inst_11689);
return statearr_11710;
})();var statearr_11711_11729 = state_11708__$1;(statearr_11711_11729[2] = null);
(statearr_11711_11729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 2))
{var inst_11689 = (state_11708[7]);var state_11708__$1 = state_11708;if(cljs.core.truth_(inst_11689))
{var statearr_11712_11730 = state_11708__$1;(statearr_11712_11730[1] = 4);
} else
{var statearr_11713_11731 = state_11708__$1;(statearr_11713_11731[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 3))
{var inst_11706 = (state_11708[2]);var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11708__$1,inst_11706);
} else
{if((state_val_11709 === 4))
{var inst_11689 = (state_11708[7]);var inst_11692 = cljs.core.first.call(null,inst_11689);var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11708__$1,7,ch,inst_11692);
} else
{if((state_val_11709 === 5))
{var state_11708__$1 = state_11708;if(cljs.core.truth_(close_QMARK_))
{var statearr_11714_11732 = state_11708__$1;(statearr_11714_11732[1] = 8);
} else
{var statearr_11715_11733 = state_11708__$1;(statearr_11715_11733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 6))
{var inst_11704 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11716_11734 = state_11708__$1;(statearr_11716_11734[2] = inst_11704);
(statearr_11716_11734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 7))
{var inst_11689 = (state_11708[7]);var inst_11694 = (state_11708[2]);var inst_11695 = cljs.core.next.call(null,inst_11689);var inst_11689__$1 = inst_11695;var state_11708__$1 = (function (){var statearr_11717 = state_11708;(statearr_11717[7] = inst_11689__$1);
(statearr_11717[8] = inst_11694);
return statearr_11717;
})();var statearr_11718_11735 = state_11708__$1;(statearr_11718_11735[2] = null);
(statearr_11718_11735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 8))
{var inst_11699 = cljs.core.async.close_BANG_.call(null,ch);var state_11708__$1 = state_11708;var statearr_11719_11736 = state_11708__$1;(statearr_11719_11736[2] = inst_11699);
(statearr_11719_11736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 9))
{var state_11708__$1 = state_11708;var statearr_11720_11737 = state_11708__$1;(statearr_11720_11737[2] = null);
(statearr_11720_11737[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 10))
{var inst_11702 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11721_11738 = state_11708__$1;(statearr_11721_11738[2] = inst_11702);
(statearr_11721_11738[1] = 6);
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
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11725 = [null,null,null,null,null,null,null,null,null];(statearr_11725[0] = state_machine__6178__auto__);
(statearr_11725[1] = 1);
return statearr_11725;
});
var state_machine__6178__auto____1 = (function (state_11708){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11726){if((e11726 instanceof Object))
{var ex__6181__auto__ = e11726;var statearr_11727_11739 = state_11708;(statearr_11727_11739[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11740 = state_11708;
state_11708 = G__11740;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11708){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11728 = f__6193__auto__.call(null);(statearr_11728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11742 = {};return obj11742;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11744 = {};return obj11744;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11968 = (function (cs,ch,mult,meta11969){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11969 = meta11969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11968.cljs$lang$type = true;
cljs.core.async.t11968.cljs$lang$ctorStr = "cljs.core.async/t11968";
cljs.core.async.t11968.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11968");
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11968.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11970){var self__ = this;
var _11970__$1 = this;return self__.meta11969;
});})(cs))
;
cljs.core.async.t11968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11970,meta11969__$1){var self__ = this;
var _11970__$1 = this;return (new cljs.core.async.t11968(self__.cs,self__.ch,self__.mult,meta11969__$1));
});})(cs))
;
cljs.core.async.__GT_t11968 = ((function (cs){
return (function __GT_t11968(cs__$1,ch__$1,mult__$1,meta11969){return (new cljs.core.async.t11968(cs__$1,ch__$1,mult__$1,meta11969));
});})(cs))
;
}
return (new cljs.core.async.t11968(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___12191 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12105){var state_val_12106 = (state_12105[1]);if((state_val_12106 === 32))
{var inst_11973 = (state_12105[7]);var inst_12049 = (state_12105[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12105,31,Object,null,30);var inst_12056 = cljs.core.async.put_BANG_.call(null,inst_12049,inst_11973,done);var state_12105__$1 = state_12105;var statearr_12107_12192 = state_12105__$1;(statearr_12107_12192[2] = inst_12056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 1))
{var state_12105__$1 = state_12105;var statearr_12108_12193 = state_12105__$1;(statearr_12108_12193[2] = null);
(statearr_12108_12193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 33))
{var inst_12062 = (state_12105[9]);var inst_12064 = cljs.core.chunked_seq_QMARK_.call(null,inst_12062);var state_12105__$1 = state_12105;if(inst_12064)
{var statearr_12109_12194 = state_12105__$1;(statearr_12109_12194[1] = 36);
} else
{var statearr_12110_12195 = state_12105__$1;(statearr_12110_12195[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 2))
{var state_12105__$1 = state_12105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12105__$1,4,ch);
} else
{if((state_val_12106 === 34))
{var state_12105__$1 = state_12105;var statearr_12111_12196 = state_12105__$1;(statearr_12111_12196[2] = null);
(statearr_12111_12196[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 3))
{var inst_12103 = (state_12105[2]);var state_12105__$1 = state_12105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12105__$1,inst_12103);
} else
{if((state_val_12106 === 35))
{var inst_12087 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12112_12197 = state_12105__$1;(statearr_12112_12197[2] = inst_12087);
(statearr_12112_12197[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 4))
{var inst_11973 = (state_12105[7]);var inst_11973__$1 = (state_12105[2]);var inst_11974 = (inst_11973__$1 == null);var state_12105__$1 = (function (){var statearr_12113 = state_12105;(statearr_12113[7] = inst_11973__$1);
return statearr_12113;
})();if(cljs.core.truth_(inst_11974))
{var statearr_12114_12198 = state_12105__$1;(statearr_12114_12198[1] = 5);
} else
{var statearr_12115_12199 = state_12105__$1;(statearr_12115_12199[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 36))
{var inst_12062 = (state_12105[9]);var inst_12066 = cljs.core.chunk_first.call(null,inst_12062);var inst_12067 = cljs.core.chunk_rest.call(null,inst_12062);var inst_12068 = cljs.core.count.call(null,inst_12066);var inst_12041 = inst_12067;var inst_12042 = inst_12066;var inst_12043 = inst_12068;var inst_12044 = 0;var state_12105__$1 = (function (){var statearr_12116 = state_12105;(statearr_12116[10] = inst_12044);
(statearr_12116[11] = inst_12042);
(statearr_12116[12] = inst_12043);
(statearr_12116[13] = inst_12041);
return statearr_12116;
})();var statearr_12117_12200 = state_12105__$1;(statearr_12117_12200[2] = null);
(statearr_12117_12200[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 5))
{var inst_11980 = cljs.core.deref.call(null,cs);var inst_11981 = cljs.core.seq.call(null,inst_11980);var inst_11982 = inst_11981;var inst_11983 = null;var inst_11984 = 0;var inst_11985 = 0;var state_12105__$1 = (function (){var statearr_12118 = state_12105;(statearr_12118[14] = inst_11983);
(statearr_12118[15] = inst_11982);
(statearr_12118[16] = inst_11984);
(statearr_12118[17] = inst_11985);
return statearr_12118;
})();var statearr_12119_12201 = state_12105__$1;(statearr_12119_12201[2] = null);
(statearr_12119_12201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 37))
{var inst_12062 = (state_12105[9]);var inst_12071 = cljs.core.first.call(null,inst_12062);var state_12105__$1 = (function (){var statearr_12120 = state_12105;(statearr_12120[18] = inst_12071);
return statearr_12120;
})();var statearr_12121_12202 = state_12105__$1;(statearr_12121_12202[2] = null);
(statearr_12121_12202[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 6))
{var inst_12033 = (state_12105[19]);var inst_12032 = cljs.core.deref.call(null,cs);var inst_12033__$1 = cljs.core.keys.call(null,inst_12032);var inst_12034 = cljs.core.count.call(null,inst_12033__$1);var inst_12035 = cljs.core.reset_BANG_.call(null,dctr,inst_12034);var inst_12040 = cljs.core.seq.call(null,inst_12033__$1);var inst_12041 = inst_12040;var inst_12042 = null;var inst_12043 = 0;var inst_12044 = 0;var state_12105__$1 = (function (){var statearr_12122 = state_12105;(statearr_12122[20] = inst_12035);
(statearr_12122[19] = inst_12033__$1);
(statearr_12122[10] = inst_12044);
(statearr_12122[11] = inst_12042);
(statearr_12122[12] = inst_12043);
(statearr_12122[13] = inst_12041);
return statearr_12122;
})();var statearr_12123_12203 = state_12105__$1;(statearr_12123_12203[2] = null);
(statearr_12123_12203[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 38))
{var inst_12084 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12124_12204 = state_12105__$1;(statearr_12124_12204[2] = inst_12084);
(statearr_12124_12204[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 7))
{var inst_12101 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12125_12205 = state_12105__$1;(statearr_12125_12205[2] = inst_12101);
(statearr_12125_12205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 39))
{var inst_12062 = (state_12105[9]);var inst_12080 = (state_12105[2]);var inst_12081 = cljs.core.next.call(null,inst_12062);var inst_12041 = inst_12081;var inst_12042 = null;var inst_12043 = 0;var inst_12044 = 0;var state_12105__$1 = (function (){var statearr_12126 = state_12105;(statearr_12126[21] = inst_12080);
(statearr_12126[10] = inst_12044);
(statearr_12126[11] = inst_12042);
(statearr_12126[12] = inst_12043);
(statearr_12126[13] = inst_12041);
return statearr_12126;
})();var statearr_12127_12206 = state_12105__$1;(statearr_12127_12206[2] = null);
(statearr_12127_12206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 8))
{var inst_11984 = (state_12105[16]);var inst_11985 = (state_12105[17]);var inst_11987 = (inst_11985 < inst_11984);var inst_11988 = inst_11987;var state_12105__$1 = state_12105;if(cljs.core.truth_(inst_11988))
{var statearr_12128_12207 = state_12105__$1;(statearr_12128_12207[1] = 10);
} else
{var statearr_12129_12208 = state_12105__$1;(statearr_12129_12208[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 40))
{var inst_12071 = (state_12105[18]);var inst_12072 = (state_12105[2]);var inst_12073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12074 = cljs.core.async.untap_STAR_.call(null,m,inst_12071);var state_12105__$1 = (function (){var statearr_12130 = state_12105;(statearr_12130[22] = inst_12072);
(statearr_12130[23] = inst_12073);
return statearr_12130;
})();var statearr_12131_12209 = state_12105__$1;(statearr_12131_12209[2] = inst_12074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 9))
{var inst_12030 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12132_12210 = state_12105__$1;(statearr_12132_12210[2] = inst_12030);
(statearr_12132_12210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 41))
{var inst_11973 = (state_12105[7]);var inst_12071 = (state_12105[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12105,40,Object,null,39);var inst_12078 = cljs.core.async.put_BANG_.call(null,inst_12071,inst_11973,done);var state_12105__$1 = state_12105;var statearr_12133_12211 = state_12105__$1;(statearr_12133_12211[2] = inst_12078);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 10))
{var inst_11983 = (state_12105[14]);var inst_11985 = (state_12105[17]);var inst_11991 = cljs.core._nth.call(null,inst_11983,inst_11985);var inst_11992 = cljs.core.nth.call(null,inst_11991,0,null);var inst_11993 = cljs.core.nth.call(null,inst_11991,1,null);var state_12105__$1 = (function (){var statearr_12134 = state_12105;(statearr_12134[24] = inst_11992);
return statearr_12134;
})();if(cljs.core.truth_(inst_11993))
{var statearr_12135_12212 = state_12105__$1;(statearr_12135_12212[1] = 13);
} else
{var statearr_12136_12213 = state_12105__$1;(statearr_12136_12213[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 42))
{var state_12105__$1 = state_12105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12105__$1,45,dchan);
} else
{if((state_val_12106 === 11))
{var inst_11982 = (state_12105[15]);var inst_12002 = (state_12105[25]);var inst_12002__$1 = cljs.core.seq.call(null,inst_11982);var state_12105__$1 = (function (){var statearr_12137 = state_12105;(statearr_12137[25] = inst_12002__$1);
return statearr_12137;
})();if(inst_12002__$1)
{var statearr_12138_12214 = state_12105__$1;(statearr_12138_12214[1] = 16);
} else
{var statearr_12139_12215 = state_12105__$1;(statearr_12139_12215[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 43))
{var state_12105__$1 = state_12105;var statearr_12140_12216 = state_12105__$1;(statearr_12140_12216[2] = null);
(statearr_12140_12216[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 12))
{var inst_12028 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12141_12217 = state_12105__$1;(statearr_12141_12217[2] = inst_12028);
(statearr_12141_12217[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 44))
{var inst_12098 = (state_12105[2]);var state_12105__$1 = (function (){var statearr_12142 = state_12105;(statearr_12142[26] = inst_12098);
return statearr_12142;
})();var statearr_12143_12218 = state_12105__$1;(statearr_12143_12218[2] = null);
(statearr_12143_12218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 13))
{var inst_11992 = (state_12105[24]);var inst_11995 = cljs.core.async.close_BANG_.call(null,inst_11992);var state_12105__$1 = state_12105;var statearr_12144_12219 = state_12105__$1;(statearr_12144_12219[2] = inst_11995);
(statearr_12144_12219[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 45))
{var inst_12095 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12148_12220 = state_12105__$1;(statearr_12148_12220[2] = inst_12095);
(statearr_12148_12220[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 14))
{var state_12105__$1 = state_12105;var statearr_12149_12221 = state_12105__$1;(statearr_12149_12221[2] = null);
(statearr_12149_12221[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 15))
{var inst_11983 = (state_12105[14]);var inst_11982 = (state_12105[15]);var inst_11984 = (state_12105[16]);var inst_11985 = (state_12105[17]);var inst_11998 = (state_12105[2]);var inst_11999 = (inst_11985 + 1);var tmp12145 = inst_11983;var tmp12146 = inst_11982;var tmp12147 = inst_11984;var inst_11982__$1 = tmp12146;var inst_11983__$1 = tmp12145;var inst_11984__$1 = tmp12147;var inst_11985__$1 = inst_11999;var state_12105__$1 = (function (){var statearr_12150 = state_12105;(statearr_12150[14] = inst_11983__$1);
(statearr_12150[15] = inst_11982__$1);
(statearr_12150[27] = inst_11998);
(statearr_12150[16] = inst_11984__$1);
(statearr_12150[17] = inst_11985__$1);
return statearr_12150;
})();var statearr_12151_12222 = state_12105__$1;(statearr_12151_12222[2] = null);
(statearr_12151_12222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 16))
{var inst_12002 = (state_12105[25]);var inst_12004 = cljs.core.chunked_seq_QMARK_.call(null,inst_12002);var state_12105__$1 = state_12105;if(inst_12004)
{var statearr_12152_12223 = state_12105__$1;(statearr_12152_12223[1] = 19);
} else
{var statearr_12153_12224 = state_12105__$1;(statearr_12153_12224[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 17))
{var state_12105__$1 = state_12105;var statearr_12154_12225 = state_12105__$1;(statearr_12154_12225[2] = null);
(statearr_12154_12225[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 18))
{var inst_12026 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12155_12226 = state_12105__$1;(statearr_12155_12226[2] = inst_12026);
(statearr_12155_12226[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 19))
{var inst_12002 = (state_12105[25]);var inst_12006 = cljs.core.chunk_first.call(null,inst_12002);var inst_12007 = cljs.core.chunk_rest.call(null,inst_12002);var inst_12008 = cljs.core.count.call(null,inst_12006);var inst_11982 = inst_12007;var inst_11983 = inst_12006;var inst_11984 = inst_12008;var inst_11985 = 0;var state_12105__$1 = (function (){var statearr_12156 = state_12105;(statearr_12156[14] = inst_11983);
(statearr_12156[15] = inst_11982);
(statearr_12156[16] = inst_11984);
(statearr_12156[17] = inst_11985);
return statearr_12156;
})();var statearr_12157_12227 = state_12105__$1;(statearr_12157_12227[2] = null);
(statearr_12157_12227[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 20))
{var inst_12002 = (state_12105[25]);var inst_12012 = cljs.core.first.call(null,inst_12002);var inst_12013 = cljs.core.nth.call(null,inst_12012,0,null);var inst_12014 = cljs.core.nth.call(null,inst_12012,1,null);var state_12105__$1 = (function (){var statearr_12158 = state_12105;(statearr_12158[28] = inst_12013);
return statearr_12158;
})();if(cljs.core.truth_(inst_12014))
{var statearr_12159_12228 = state_12105__$1;(statearr_12159_12228[1] = 22);
} else
{var statearr_12160_12229 = state_12105__$1;(statearr_12160_12229[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 21))
{var inst_12023 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12161_12230 = state_12105__$1;(statearr_12161_12230[2] = inst_12023);
(statearr_12161_12230[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 22))
{var inst_12013 = (state_12105[28]);var inst_12016 = cljs.core.async.close_BANG_.call(null,inst_12013);var state_12105__$1 = state_12105;var statearr_12162_12231 = state_12105__$1;(statearr_12162_12231[2] = inst_12016);
(statearr_12162_12231[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 23))
{var state_12105__$1 = state_12105;var statearr_12163_12232 = state_12105__$1;(statearr_12163_12232[2] = null);
(statearr_12163_12232[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 24))
{var inst_12002 = (state_12105[25]);var inst_12019 = (state_12105[2]);var inst_12020 = cljs.core.next.call(null,inst_12002);var inst_11982 = inst_12020;var inst_11983 = null;var inst_11984 = 0;var inst_11985 = 0;var state_12105__$1 = (function (){var statearr_12164 = state_12105;(statearr_12164[14] = inst_11983);
(statearr_12164[15] = inst_11982);
(statearr_12164[29] = inst_12019);
(statearr_12164[16] = inst_11984);
(statearr_12164[17] = inst_11985);
return statearr_12164;
})();var statearr_12165_12233 = state_12105__$1;(statearr_12165_12233[2] = null);
(statearr_12165_12233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 25))
{var inst_12044 = (state_12105[10]);var inst_12043 = (state_12105[12]);var inst_12046 = (inst_12044 < inst_12043);var inst_12047 = inst_12046;var state_12105__$1 = state_12105;if(cljs.core.truth_(inst_12047))
{var statearr_12166_12234 = state_12105__$1;(statearr_12166_12234[1] = 27);
} else
{var statearr_12167_12235 = state_12105__$1;(statearr_12167_12235[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 26))
{var inst_12033 = (state_12105[19]);var inst_12091 = (state_12105[2]);var inst_12092 = cljs.core.seq.call(null,inst_12033);var state_12105__$1 = (function (){var statearr_12168 = state_12105;(statearr_12168[30] = inst_12091);
return statearr_12168;
})();if(inst_12092)
{var statearr_12169_12236 = state_12105__$1;(statearr_12169_12236[1] = 42);
} else
{var statearr_12170_12237 = state_12105__$1;(statearr_12170_12237[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 27))
{var inst_12044 = (state_12105[10]);var inst_12042 = (state_12105[11]);var inst_12049 = cljs.core._nth.call(null,inst_12042,inst_12044);var state_12105__$1 = (function (){var statearr_12171 = state_12105;(statearr_12171[8] = inst_12049);
return statearr_12171;
})();var statearr_12172_12238 = state_12105__$1;(statearr_12172_12238[2] = null);
(statearr_12172_12238[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 28))
{var inst_12062 = (state_12105[9]);var inst_12041 = (state_12105[13]);var inst_12062__$1 = cljs.core.seq.call(null,inst_12041);var state_12105__$1 = (function (){var statearr_12176 = state_12105;(statearr_12176[9] = inst_12062__$1);
return statearr_12176;
})();if(inst_12062__$1)
{var statearr_12177_12239 = state_12105__$1;(statearr_12177_12239[1] = 33);
} else
{var statearr_12178_12240 = state_12105__$1;(statearr_12178_12240[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 29))
{var inst_12089 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12179_12241 = state_12105__$1;(statearr_12179_12241[2] = inst_12089);
(statearr_12179_12241[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 30))
{var inst_12044 = (state_12105[10]);var inst_12042 = (state_12105[11]);var inst_12043 = (state_12105[12]);var inst_12041 = (state_12105[13]);var inst_12058 = (state_12105[2]);var inst_12059 = (inst_12044 + 1);var tmp12173 = inst_12042;var tmp12174 = inst_12043;var tmp12175 = inst_12041;var inst_12041__$1 = tmp12175;var inst_12042__$1 = tmp12173;var inst_12043__$1 = tmp12174;var inst_12044__$1 = inst_12059;var state_12105__$1 = (function (){var statearr_12180 = state_12105;(statearr_12180[10] = inst_12044__$1);
(statearr_12180[11] = inst_12042__$1);
(statearr_12180[12] = inst_12043__$1);
(statearr_12180[31] = inst_12058);
(statearr_12180[13] = inst_12041__$1);
return statearr_12180;
})();var statearr_12181_12242 = state_12105__$1;(statearr_12181_12242[2] = null);
(statearr_12181_12242[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 31))
{var inst_12049 = (state_12105[8]);var inst_12050 = (state_12105[2]);var inst_12051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12052 = cljs.core.async.untap_STAR_.call(null,m,inst_12049);var state_12105__$1 = (function (){var statearr_12182 = state_12105;(statearr_12182[32] = inst_12050);
(statearr_12182[33] = inst_12051);
return statearr_12182;
})();var statearr_12183_12243 = state_12105__$1;(statearr_12183_12243[2] = inst_12052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_12187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12187[0] = state_machine__6178__auto__);
(statearr_12187[1] = 1);
return statearr_12187;
});
var state_machine__6178__auto____1 = (function (state_12105){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12188){if((e12188 instanceof Object))
{var ex__6181__auto__ = e12188;var statearr_12189_12244 = state_12105;(statearr_12189_12244[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12245 = state_12105;
state_12105 = G__12245;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12105){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12190 = f__6193__auto__.call(null);(statearr_12190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12191);
return statearr_12190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12247 = {};return obj12247;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12357 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12358){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12357.cljs$lang$type = true;
cljs.core.async.t12357.cljs$lang$ctorStr = "cljs.core.async/t12357";
cljs.core.async.t12357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12359){var self__ = this;
var _12359__$1 = this;return self__.meta12358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12359,meta12358__$1){var self__ = this;
var _12359__$1 = this;return (new cljs.core.async.t12357(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12357(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12358){return (new cljs.core.async.t12357(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12357(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___12466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12424){var state_val_12425 = (state_12424[1]);if((state_val_12425 === 1))
{var inst_12363 = (state_12424[7]);var inst_12363__$1 = calc_state.call(null);var inst_12364 = cljs.core.seq_QMARK_.call(null,inst_12363__$1);var state_12424__$1 = (function (){var statearr_12426 = state_12424;(statearr_12426[7] = inst_12363__$1);
return statearr_12426;
})();if(inst_12364)
{var statearr_12427_12467 = state_12424__$1;(statearr_12427_12467[1] = 2);
} else
{var statearr_12428_12468 = state_12424__$1;(statearr_12428_12468[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 2))
{var inst_12363 = (state_12424[7]);var inst_12366 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12363);var state_12424__$1 = state_12424;var statearr_12429_12469 = state_12424__$1;(statearr_12429_12469[2] = inst_12366);
(statearr_12429_12469[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 3))
{var inst_12363 = (state_12424[7]);var state_12424__$1 = state_12424;var statearr_12430_12470 = state_12424__$1;(statearr_12430_12470[2] = inst_12363);
(statearr_12430_12470[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 4))
{var inst_12363 = (state_12424[7]);var inst_12369 = (state_12424[2]);var inst_12370 = cljs.core.get.call(null,inst_12369,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12371 = cljs.core.get.call(null,inst_12369,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12372 = cljs.core.get.call(null,inst_12369,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12373 = inst_12363;var state_12424__$1 = (function (){var statearr_12431 = state_12424;(statearr_12431[8] = inst_12372);
(statearr_12431[9] = inst_12373);
(statearr_12431[10] = inst_12371);
(statearr_12431[11] = inst_12370);
return statearr_12431;
})();var statearr_12432_12471 = state_12424__$1;(statearr_12432_12471[2] = null);
(statearr_12432_12471[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 5))
{var inst_12373 = (state_12424[9]);var inst_12376 = cljs.core.seq_QMARK_.call(null,inst_12373);var state_12424__$1 = state_12424;if(inst_12376)
{var statearr_12433_12472 = state_12424__$1;(statearr_12433_12472[1] = 7);
} else
{var statearr_12434_12473 = state_12424__$1;(statearr_12434_12473[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 6))
{var inst_12422 = (state_12424[2]);var state_12424__$1 = state_12424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12424__$1,inst_12422);
} else
{if((state_val_12425 === 7))
{var inst_12373 = (state_12424[9]);var inst_12378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12373);var state_12424__$1 = state_12424;var statearr_12435_12474 = state_12424__$1;(statearr_12435_12474[2] = inst_12378);
(statearr_12435_12474[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 8))
{var inst_12373 = (state_12424[9]);var state_12424__$1 = state_12424;var statearr_12436_12475 = state_12424__$1;(statearr_12436_12475[2] = inst_12373);
(statearr_12436_12475[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 9))
{var inst_12381 = (state_12424[12]);var inst_12381__$1 = (state_12424[2]);var inst_12382 = cljs.core.get.call(null,inst_12381__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12383 = cljs.core.get.call(null,inst_12381__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12384 = cljs.core.get.call(null,inst_12381__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12424__$1 = (function (){var statearr_12437 = state_12424;(statearr_12437[13] = inst_12383);
(statearr_12437[14] = inst_12384);
(statearr_12437[12] = inst_12381__$1);
return statearr_12437;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12424__$1,10,inst_12382);
} else
{if((state_val_12425 === 10))
{var inst_12389 = (state_12424[15]);var inst_12388 = (state_12424[16]);var inst_12387 = (state_12424[2]);var inst_12388__$1 = cljs.core.nth.call(null,inst_12387,0,null);var inst_12389__$1 = cljs.core.nth.call(null,inst_12387,1,null);var inst_12390 = (inst_12388__$1 == null);var inst_12391 = cljs.core._EQ_.call(null,inst_12389__$1,change);var inst_12392 = (inst_12390) || (inst_12391);var state_12424__$1 = (function (){var statearr_12438 = state_12424;(statearr_12438[15] = inst_12389__$1);
(statearr_12438[16] = inst_12388__$1);
return statearr_12438;
})();if(cljs.core.truth_(inst_12392))
{var statearr_12439_12476 = state_12424__$1;(statearr_12439_12476[1] = 11);
} else
{var statearr_12440_12477 = state_12424__$1;(statearr_12440_12477[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 11))
{var inst_12388 = (state_12424[16]);var inst_12394 = (inst_12388 == null);var state_12424__$1 = state_12424;if(cljs.core.truth_(inst_12394))
{var statearr_12441_12478 = state_12424__$1;(statearr_12441_12478[1] = 14);
} else
{var statearr_12442_12479 = state_12424__$1;(statearr_12442_12479[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 12))
{var inst_12384 = (state_12424[14]);var inst_12389 = (state_12424[15]);var inst_12403 = (state_12424[17]);var inst_12403__$1 = inst_12384.call(null,inst_12389);var state_12424__$1 = (function (){var statearr_12443 = state_12424;(statearr_12443[17] = inst_12403__$1);
return statearr_12443;
})();if(cljs.core.truth_(inst_12403__$1))
{var statearr_12444_12480 = state_12424__$1;(statearr_12444_12480[1] = 17);
} else
{var statearr_12445_12481 = state_12424__$1;(statearr_12445_12481[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 13))
{var inst_12420 = (state_12424[2]);var state_12424__$1 = state_12424;var statearr_12446_12482 = state_12424__$1;(statearr_12446_12482[2] = inst_12420);
(statearr_12446_12482[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 14))
{var inst_12389 = (state_12424[15]);var inst_12396 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12389);var state_12424__$1 = state_12424;var statearr_12447_12483 = state_12424__$1;(statearr_12447_12483[2] = inst_12396);
(statearr_12447_12483[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 15))
{var state_12424__$1 = state_12424;var statearr_12448_12484 = state_12424__$1;(statearr_12448_12484[2] = null);
(statearr_12448_12484[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 16))
{var inst_12399 = (state_12424[2]);var inst_12400 = calc_state.call(null);var inst_12373 = inst_12400;var state_12424__$1 = (function (){var statearr_12449 = state_12424;(statearr_12449[18] = inst_12399);
(statearr_12449[9] = inst_12373);
return statearr_12449;
})();var statearr_12450_12485 = state_12424__$1;(statearr_12450_12485[2] = null);
(statearr_12450_12485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 17))
{var inst_12403 = (state_12424[17]);var state_12424__$1 = state_12424;var statearr_12451_12486 = state_12424__$1;(statearr_12451_12486[2] = inst_12403);
(statearr_12451_12486[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 18))
{var inst_12383 = (state_12424[13]);var inst_12384 = (state_12424[14]);var inst_12389 = (state_12424[15]);var inst_12406 = cljs.core.empty_QMARK_.call(null,inst_12384);var inst_12407 = inst_12383.call(null,inst_12389);var inst_12408 = cljs.core.not.call(null,inst_12407);var inst_12409 = (inst_12406) && (inst_12408);var state_12424__$1 = state_12424;var statearr_12452_12487 = state_12424__$1;(statearr_12452_12487[2] = inst_12409);
(statearr_12452_12487[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 19))
{var inst_12411 = (state_12424[2]);var state_12424__$1 = state_12424;if(cljs.core.truth_(inst_12411))
{var statearr_12453_12488 = state_12424__$1;(statearr_12453_12488[1] = 20);
} else
{var statearr_12454_12489 = state_12424__$1;(statearr_12454_12489[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 20))
{var inst_12388 = (state_12424[16]);var state_12424__$1 = state_12424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12424__$1,23,out,inst_12388);
} else
{if((state_val_12425 === 21))
{var state_12424__$1 = state_12424;var statearr_12455_12490 = state_12424__$1;(statearr_12455_12490[2] = null);
(statearr_12455_12490[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 22))
{var inst_12381 = (state_12424[12]);var inst_12417 = (state_12424[2]);var inst_12373 = inst_12381;var state_12424__$1 = (function (){var statearr_12456 = state_12424;(statearr_12456[19] = inst_12417);
(statearr_12456[9] = inst_12373);
return statearr_12456;
})();var statearr_12457_12491 = state_12424__$1;(statearr_12457_12491[2] = null);
(statearr_12457_12491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12425 === 23))
{var inst_12414 = (state_12424[2]);var state_12424__$1 = state_12424;var statearr_12458_12492 = state_12424__$1;(statearr_12458_12492[2] = inst_12414);
(statearr_12458_12492[1] = 22);
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
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_12462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12462[0] = state_machine__6178__auto__);
(statearr_12462[1] = 1);
return statearr_12462;
});
var state_machine__6178__auto____1 = (function (state_12424){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12463){if((e12463 instanceof Object))
{var ex__6181__auto__ = e12463;var statearr_12464_12493 = state_12424;(statearr_12464_12493[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12494 = state_12424;
state_12424 = G__12494;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12424){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12465 = f__6193__auto__.call(null);(statearr_12465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12466);
return statearr_12465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12496 = {};return obj12496;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12497_SHARP_){if(cljs.core.truth_(p1__12497_SHARP_.call(null,topic)))
{return p1__12497_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12497_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12622 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12623){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12623 = meta12623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12622.cljs$lang$type = true;
cljs.core.async.t12622.cljs$lang$ctorStr = "cljs.core.async/t12622";
cljs.core.async.t12622.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12622");
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12624){var self__ = this;
var _12624__$1 = this;return self__.meta12623;
});})(mults,ensure_mult))
;
cljs.core.async.t12622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12624,meta12623__$1){var self__ = this;
var _12624__$1 = this;return (new cljs.core.async.t12622(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12623__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12622 = ((function (mults,ensure_mult){
return (function __GT_t12622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12623){return (new cljs.core.async.t12622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12623));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12622(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12698){var state_val_12699 = (state_12698[1]);if((state_val_12699 === 1))
{var state_12698__$1 = state_12698;var statearr_12700_12747 = state_12698__$1;(statearr_12700_12747[2] = null);
(statearr_12700_12747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 2))
{var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12698__$1,4,ch);
} else
{if((state_val_12699 === 3))
{var inst_12696 = (state_12698[2]);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12698__$1,inst_12696);
} else
{if((state_val_12699 === 4))
{var inst_12627 = (state_12698[7]);var inst_12627__$1 = (state_12698[2]);var inst_12628 = (inst_12627__$1 == null);var state_12698__$1 = (function (){var statearr_12701 = state_12698;(statearr_12701[7] = inst_12627__$1);
return statearr_12701;
})();if(cljs.core.truth_(inst_12628))
{var statearr_12702_12748 = state_12698__$1;(statearr_12702_12748[1] = 5);
} else
{var statearr_12703_12749 = state_12698__$1;(statearr_12703_12749[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 5))
{var inst_12634 = cljs.core.deref.call(null,mults);var inst_12635 = cljs.core.vals.call(null,inst_12634);var inst_12636 = cljs.core.seq.call(null,inst_12635);var inst_12637 = inst_12636;var inst_12638 = null;var inst_12639 = 0;var inst_12640 = 0;var state_12698__$1 = (function (){var statearr_12704 = state_12698;(statearr_12704[8] = inst_12638);
(statearr_12704[9] = inst_12637);
(statearr_12704[10] = inst_12639);
(statearr_12704[11] = inst_12640);
return statearr_12704;
})();var statearr_12705_12750 = state_12698__$1;(statearr_12705_12750[2] = null);
(statearr_12705_12750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 6))
{var inst_12675 = (state_12698[12]);var inst_12627 = (state_12698[7]);var inst_12677 = (state_12698[13]);var inst_12675__$1 = topic_fn.call(null,inst_12627);var inst_12676 = cljs.core.deref.call(null,mults);var inst_12677__$1 = cljs.core.get.call(null,inst_12676,inst_12675__$1);var state_12698__$1 = (function (){var statearr_12706 = state_12698;(statearr_12706[12] = inst_12675__$1);
(statearr_12706[13] = inst_12677__$1);
return statearr_12706;
})();if(cljs.core.truth_(inst_12677__$1))
{var statearr_12707_12751 = state_12698__$1;(statearr_12707_12751[1] = 19);
} else
{var statearr_12708_12752 = state_12698__$1;(statearr_12708_12752[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 7))
{var inst_12694 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12709_12753 = state_12698__$1;(statearr_12709_12753[2] = inst_12694);
(statearr_12709_12753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 8))
{var inst_12639 = (state_12698[10]);var inst_12640 = (state_12698[11]);var inst_12642 = (inst_12640 < inst_12639);var inst_12643 = inst_12642;var state_12698__$1 = state_12698;if(cljs.core.truth_(inst_12643))
{var statearr_12713_12754 = state_12698__$1;(statearr_12713_12754[1] = 10);
} else
{var statearr_12714_12755 = state_12698__$1;(statearr_12714_12755[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 9))
{var inst_12673 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12715_12756 = state_12698__$1;(statearr_12715_12756[2] = inst_12673);
(statearr_12715_12756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 10))
{var inst_12638 = (state_12698[8]);var inst_12637 = (state_12698[9]);var inst_12639 = (state_12698[10]);var inst_12640 = (state_12698[11]);var inst_12645 = cljs.core._nth.call(null,inst_12638,inst_12640);var inst_12646 = cljs.core.async.muxch_STAR_.call(null,inst_12645);var inst_12647 = cljs.core.async.close_BANG_.call(null,inst_12646);var inst_12648 = (inst_12640 + 1);var tmp12710 = inst_12638;var tmp12711 = inst_12637;var tmp12712 = inst_12639;var inst_12637__$1 = tmp12711;var inst_12638__$1 = tmp12710;var inst_12639__$1 = tmp12712;var inst_12640__$1 = inst_12648;var state_12698__$1 = (function (){var statearr_12716 = state_12698;(statearr_12716[8] = inst_12638__$1);
(statearr_12716[9] = inst_12637__$1);
(statearr_12716[10] = inst_12639__$1);
(statearr_12716[14] = inst_12647);
(statearr_12716[11] = inst_12640__$1);
return statearr_12716;
})();var statearr_12717_12757 = state_12698__$1;(statearr_12717_12757[2] = null);
(statearr_12717_12757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 11))
{var inst_12637 = (state_12698[9]);var inst_12651 = (state_12698[15]);var inst_12651__$1 = cljs.core.seq.call(null,inst_12637);var state_12698__$1 = (function (){var statearr_12718 = state_12698;(statearr_12718[15] = inst_12651__$1);
return statearr_12718;
})();if(inst_12651__$1)
{var statearr_12719_12758 = state_12698__$1;(statearr_12719_12758[1] = 13);
} else
{var statearr_12720_12759 = state_12698__$1;(statearr_12720_12759[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 12))
{var inst_12671 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12721_12760 = state_12698__$1;(statearr_12721_12760[2] = inst_12671);
(statearr_12721_12760[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 13))
{var inst_12651 = (state_12698[15]);var inst_12653 = cljs.core.chunked_seq_QMARK_.call(null,inst_12651);var state_12698__$1 = state_12698;if(inst_12653)
{var statearr_12722_12761 = state_12698__$1;(statearr_12722_12761[1] = 16);
} else
{var statearr_12723_12762 = state_12698__$1;(statearr_12723_12762[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 14))
{var state_12698__$1 = state_12698;var statearr_12724_12763 = state_12698__$1;(statearr_12724_12763[2] = null);
(statearr_12724_12763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 15))
{var inst_12669 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12725_12764 = state_12698__$1;(statearr_12725_12764[2] = inst_12669);
(statearr_12725_12764[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 16))
{var inst_12651 = (state_12698[15]);var inst_12655 = cljs.core.chunk_first.call(null,inst_12651);var inst_12656 = cljs.core.chunk_rest.call(null,inst_12651);var inst_12657 = cljs.core.count.call(null,inst_12655);var inst_12637 = inst_12656;var inst_12638 = inst_12655;var inst_12639 = inst_12657;var inst_12640 = 0;var state_12698__$1 = (function (){var statearr_12726 = state_12698;(statearr_12726[8] = inst_12638);
(statearr_12726[9] = inst_12637);
(statearr_12726[10] = inst_12639);
(statearr_12726[11] = inst_12640);
return statearr_12726;
})();var statearr_12727_12765 = state_12698__$1;(statearr_12727_12765[2] = null);
(statearr_12727_12765[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 17))
{var inst_12651 = (state_12698[15]);var inst_12660 = cljs.core.first.call(null,inst_12651);var inst_12661 = cljs.core.async.muxch_STAR_.call(null,inst_12660);var inst_12662 = cljs.core.async.close_BANG_.call(null,inst_12661);var inst_12663 = cljs.core.next.call(null,inst_12651);var inst_12637 = inst_12663;var inst_12638 = null;var inst_12639 = 0;var inst_12640 = 0;var state_12698__$1 = (function (){var statearr_12728 = state_12698;(statearr_12728[8] = inst_12638);
(statearr_12728[9] = inst_12637);
(statearr_12728[10] = inst_12639);
(statearr_12728[16] = inst_12662);
(statearr_12728[11] = inst_12640);
return statearr_12728;
})();var statearr_12729_12766 = state_12698__$1;(statearr_12729_12766[2] = null);
(statearr_12729_12766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 18))
{var inst_12666 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12730_12767 = state_12698__$1;(statearr_12730_12767[2] = inst_12666);
(statearr_12730_12767[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 19))
{var state_12698__$1 = state_12698;var statearr_12731_12768 = state_12698__$1;(statearr_12731_12768[2] = null);
(statearr_12731_12768[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 20))
{var state_12698__$1 = state_12698;var statearr_12732_12769 = state_12698__$1;(statearr_12732_12769[2] = null);
(statearr_12732_12769[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 21))
{var inst_12691 = (state_12698[2]);var state_12698__$1 = (function (){var statearr_12733 = state_12698;(statearr_12733[17] = inst_12691);
return statearr_12733;
})();var statearr_12734_12770 = state_12698__$1;(statearr_12734_12770[2] = null);
(statearr_12734_12770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 22))
{var inst_12688 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12735_12771 = state_12698__$1;(statearr_12735_12771[2] = inst_12688);
(statearr_12735_12771[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 23))
{var inst_12675 = (state_12698[12]);var inst_12679 = (state_12698[2]);var inst_12680 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12675);var state_12698__$1 = (function (){var statearr_12736 = state_12698;(statearr_12736[18] = inst_12679);
return statearr_12736;
})();var statearr_12737_12772 = state_12698__$1;(statearr_12737_12772[2] = inst_12680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12698__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 24))
{var inst_12627 = (state_12698[7]);var inst_12677 = (state_12698[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12698,23,Object,null,22);var inst_12684 = cljs.core.async.muxch_STAR_.call(null,inst_12677);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12698__$1,25,inst_12684,inst_12627);
} else
{if((state_val_12699 === 25))
{var inst_12686 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12738_12773 = state_12698__$1;(statearr_12738_12773[2] = inst_12686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12698__$1);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_12742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12742[0] = state_machine__6178__auto__);
(statearr_12742[1] = 1);
return statearr_12742;
});
var state_machine__6178__auto____1 = (function (state_12698){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12698);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12743){if((e12743 instanceof Object))
{var ex__6181__auto__ = e12743;var statearr_12744_12774 = state_12698;(statearr_12744_12774[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12775 = state_12698;
state_12698 = G__12775;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12698){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12745 = f__6193__auto__.call(null);(statearr_12745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12746);
return statearr_12745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___12912 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12882){var state_val_12883 = (state_12882[1]);if((state_val_12883 === 1))
{var state_12882__$1 = state_12882;var statearr_12884_12913 = state_12882__$1;(statearr_12884_12913[2] = null);
(statearr_12884_12913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 2))
{var inst_12845 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12846 = 0;var state_12882__$1 = (function (){var statearr_12885 = state_12882;(statearr_12885[7] = inst_12846);
(statearr_12885[8] = inst_12845);
return statearr_12885;
})();var statearr_12886_12914 = state_12882__$1;(statearr_12886_12914[2] = null);
(statearr_12886_12914[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 3))
{var inst_12880 = (state_12882[2]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12882__$1,inst_12880);
} else
{if((state_val_12883 === 4))
{var inst_12846 = (state_12882[7]);var inst_12848 = (inst_12846 < cnt);var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12848))
{var statearr_12887_12915 = state_12882__$1;(statearr_12887_12915[1] = 6);
} else
{var statearr_12888_12916 = state_12882__$1;(statearr_12888_12916[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 5))
{var inst_12866 = (state_12882[2]);var state_12882__$1 = (function (){var statearr_12889 = state_12882;(statearr_12889[9] = inst_12866);
return statearr_12889;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12882__$1,12,dchan);
} else
{if((state_val_12883 === 6))
{var state_12882__$1 = state_12882;var statearr_12890_12917 = state_12882__$1;(statearr_12890_12917[2] = null);
(statearr_12890_12917[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 7))
{var state_12882__$1 = state_12882;var statearr_12891_12918 = state_12882__$1;(statearr_12891_12918[2] = null);
(statearr_12891_12918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 8))
{var inst_12864 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12892_12919 = state_12882__$1;(statearr_12892_12919[2] = inst_12864);
(statearr_12892_12919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 9))
{var inst_12846 = (state_12882[7]);var inst_12859 = (state_12882[2]);var inst_12860 = (inst_12846 + 1);var inst_12846__$1 = inst_12860;var state_12882__$1 = (function (){var statearr_12893 = state_12882;(statearr_12893[7] = inst_12846__$1);
(statearr_12893[10] = inst_12859);
return statearr_12893;
})();var statearr_12894_12920 = state_12882__$1;(statearr_12894_12920[2] = null);
(statearr_12894_12920[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 10))
{var inst_12850 = (state_12882[2]);var inst_12851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12882__$1 = (function (){var statearr_12895 = state_12882;(statearr_12895[11] = inst_12850);
return statearr_12895;
})();var statearr_12896_12921 = state_12882__$1;(statearr_12896_12921[2] = inst_12851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 11))
{var inst_12846 = (state_12882[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12882,10,Object,null,9);var inst_12855 = chs__$1.call(null,inst_12846);var inst_12856 = done.call(null,inst_12846);var inst_12857 = cljs.core.async.take_BANG_.call(null,inst_12855,inst_12856);var state_12882__$1 = state_12882;var statearr_12897_12922 = state_12882__$1;(statearr_12897_12922[2] = inst_12857);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 12))
{var inst_12868 = (state_12882[12]);var inst_12868__$1 = (state_12882[2]);var inst_12869 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12868__$1);var state_12882__$1 = (function (){var statearr_12898 = state_12882;(statearr_12898[12] = inst_12868__$1);
return statearr_12898;
})();if(cljs.core.truth_(inst_12869))
{var statearr_12899_12923 = state_12882__$1;(statearr_12899_12923[1] = 13);
} else
{var statearr_12900_12924 = state_12882__$1;(statearr_12900_12924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 13))
{var inst_12871 = cljs.core.async.close_BANG_.call(null,out);var state_12882__$1 = state_12882;var statearr_12901_12925 = state_12882__$1;(statearr_12901_12925[2] = inst_12871);
(statearr_12901_12925[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 14))
{var inst_12868 = (state_12882[12]);var inst_12873 = cljs.core.apply.call(null,f,inst_12868);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12882__$1,16,out,inst_12873);
} else
{if((state_val_12883 === 15))
{var inst_12878 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12902_12926 = state_12882__$1;(statearr_12902_12926[2] = inst_12878);
(statearr_12902_12926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 16))
{var inst_12875 = (state_12882[2]);var state_12882__$1 = (function (){var statearr_12903 = state_12882;(statearr_12903[13] = inst_12875);
return statearr_12903;
})();var statearr_12904_12927 = state_12882__$1;(statearr_12904_12927[2] = null);
(statearr_12904_12927[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12908[0] = state_machine__6178__auto__);
(statearr_12908[1] = 1);
return statearr_12908;
});
var state_machine__6178__auto____1 = (function (state_12882){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12909){if((e12909 instanceof Object))
{var ex__6181__auto__ = e12909;var statearr_12910_12928 = state_12882;(statearr_12910_12928[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12929 = state_12882;
state_12882 = G__12929;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12911 = f__6193__auto__.call(null);(statearr_12911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12912);
return statearr_12911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13013){var state_val_13014 = (state_13013[1]);if((state_val_13014 === 1))
{var inst_12984 = cljs.core.vec.call(null,chs);var inst_12985 = inst_12984;var state_13013__$1 = (function (){var statearr_13015 = state_13013;(statearr_13015[7] = inst_12985);
return statearr_13015;
})();var statearr_13016_13038 = state_13013__$1;(statearr_13016_13038[2] = null);
(statearr_13016_13038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 2))
{var inst_12985 = (state_13013[7]);var inst_12987 = cljs.core.count.call(null,inst_12985);var inst_12988 = (inst_12987 > 0);var state_13013__$1 = state_13013;if(cljs.core.truth_(inst_12988))
{var statearr_13017_13039 = state_13013__$1;(statearr_13017_13039[1] = 4);
} else
{var statearr_13018_13040 = state_13013__$1;(statearr_13018_13040[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 3))
{var inst_13011 = (state_13013[2]);var state_13013__$1 = state_13013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13013__$1,inst_13011);
} else
{if((state_val_13014 === 4))
{var inst_12985 = (state_13013[7]);var state_13013__$1 = state_13013;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13013__$1,7,inst_12985);
} else
{if((state_val_13014 === 5))
{var inst_13007 = cljs.core.async.close_BANG_.call(null,out);var state_13013__$1 = state_13013;var statearr_13019_13041 = state_13013__$1;(statearr_13019_13041[2] = inst_13007);
(statearr_13019_13041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 6))
{var inst_13009 = (state_13013[2]);var state_13013__$1 = state_13013;var statearr_13020_13042 = state_13013__$1;(statearr_13020_13042[2] = inst_13009);
(statearr_13020_13042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 7))
{var inst_12993 = (state_13013[8]);var inst_12992 = (state_13013[9]);var inst_12992__$1 = (state_13013[2]);var inst_12993__$1 = cljs.core.nth.call(null,inst_12992__$1,0,null);var inst_12994 = cljs.core.nth.call(null,inst_12992__$1,1,null);var inst_12995 = (inst_12993__$1 == null);var state_13013__$1 = (function (){var statearr_13021 = state_13013;(statearr_13021[10] = inst_12994);
(statearr_13021[8] = inst_12993__$1);
(statearr_13021[9] = inst_12992__$1);
return statearr_13021;
})();if(cljs.core.truth_(inst_12995))
{var statearr_13022_13043 = state_13013__$1;(statearr_13022_13043[1] = 8);
} else
{var statearr_13023_13044 = state_13013__$1;(statearr_13023_13044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 8))
{var inst_12985 = (state_13013[7]);var inst_12994 = (state_13013[10]);var inst_12993 = (state_13013[8]);var inst_12992 = (state_13013[9]);var inst_12997 = (function (){var c = inst_12994;var v = inst_12993;var vec__12990 = inst_12992;var cs = inst_12985;return ((function (c,v,vec__12990,cs,inst_12985,inst_12994,inst_12993,inst_12992,state_val_13014){
return (function (p1__12930_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12930_SHARP_);
});
;})(c,v,vec__12990,cs,inst_12985,inst_12994,inst_12993,inst_12992,state_val_13014))
})();var inst_12998 = cljs.core.filterv.call(null,inst_12997,inst_12985);var inst_12985__$1 = inst_12998;var state_13013__$1 = (function (){var statearr_13024 = state_13013;(statearr_13024[7] = inst_12985__$1);
return statearr_13024;
})();var statearr_13025_13045 = state_13013__$1;(statearr_13025_13045[2] = null);
(statearr_13025_13045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 9))
{var inst_12993 = (state_13013[8]);var state_13013__$1 = state_13013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13013__$1,11,out,inst_12993);
} else
{if((state_val_13014 === 10))
{var inst_13005 = (state_13013[2]);var state_13013__$1 = state_13013;var statearr_13027_13046 = state_13013__$1;(statearr_13027_13046[2] = inst_13005);
(statearr_13027_13046[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13014 === 11))
{var inst_12985 = (state_13013[7]);var inst_13002 = (state_13013[2]);var tmp13026 = inst_12985;var inst_12985__$1 = tmp13026;var state_13013__$1 = (function (){var statearr_13028 = state_13013;(statearr_13028[7] = inst_12985__$1);
(statearr_13028[11] = inst_13002);
return statearr_13028;
})();var statearr_13029_13047 = state_13013__$1;(statearr_13029_13047[2] = null);
(statearr_13029_13047[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13033 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13033[0] = state_machine__6178__auto__);
(statearr_13033[1] = 1);
return statearr_13033;
});
var state_machine__6178__auto____1 = (function (state_13013){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13013);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13034){if((e13034 instanceof Object))
{var ex__6181__auto__ = e13034;var statearr_13035_13048 = state_13013;(statearr_13035_13048[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13049 = state_13013;
state_13013 = G__13049;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13013){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13036 = f__6193__auto__.call(null);(statearr_13036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13037);
return statearr_13036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13119){var state_val_13120 = (state_13119[1]);if((state_val_13120 === 1))
{var inst_13096 = 0;var state_13119__$1 = (function (){var statearr_13121 = state_13119;(statearr_13121[7] = inst_13096);
return statearr_13121;
})();var statearr_13122_13143 = state_13119__$1;(statearr_13122_13143[2] = null);
(statearr_13122_13143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 2))
{var inst_13096 = (state_13119[7]);var inst_13098 = (inst_13096 < n);var state_13119__$1 = state_13119;if(cljs.core.truth_(inst_13098))
{var statearr_13123_13144 = state_13119__$1;(statearr_13123_13144[1] = 4);
} else
{var statearr_13124_13145 = state_13119__$1;(statearr_13124_13145[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 3))
{var inst_13116 = (state_13119[2]);var inst_13117 = cljs.core.async.close_BANG_.call(null,out);var state_13119__$1 = (function (){var statearr_13125 = state_13119;(statearr_13125[8] = inst_13116);
return statearr_13125;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13119__$1,inst_13117);
} else
{if((state_val_13120 === 4))
{var state_13119__$1 = state_13119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13119__$1,7,ch);
} else
{if((state_val_13120 === 5))
{var state_13119__$1 = state_13119;var statearr_13126_13146 = state_13119__$1;(statearr_13126_13146[2] = null);
(statearr_13126_13146[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 6))
{var inst_13114 = (state_13119[2]);var state_13119__$1 = state_13119;var statearr_13127_13147 = state_13119__$1;(statearr_13127_13147[2] = inst_13114);
(statearr_13127_13147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 7))
{var inst_13101 = (state_13119[9]);var inst_13101__$1 = (state_13119[2]);var inst_13102 = (inst_13101__$1 == null);var inst_13103 = cljs.core.not.call(null,inst_13102);var state_13119__$1 = (function (){var statearr_13128 = state_13119;(statearr_13128[9] = inst_13101__$1);
return statearr_13128;
})();if(inst_13103)
{var statearr_13129_13148 = state_13119__$1;(statearr_13129_13148[1] = 8);
} else
{var statearr_13130_13149 = state_13119__$1;(statearr_13130_13149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 8))
{var inst_13101 = (state_13119[9]);var state_13119__$1 = state_13119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13119__$1,11,out,inst_13101);
} else
{if((state_val_13120 === 9))
{var state_13119__$1 = state_13119;var statearr_13131_13150 = state_13119__$1;(statearr_13131_13150[2] = null);
(statearr_13131_13150[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 10))
{var inst_13111 = (state_13119[2]);var state_13119__$1 = state_13119;var statearr_13132_13151 = state_13119__$1;(statearr_13132_13151[2] = inst_13111);
(statearr_13132_13151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13120 === 11))
{var inst_13096 = (state_13119[7]);var inst_13106 = (state_13119[2]);var inst_13107 = (inst_13096 + 1);var inst_13096__$1 = inst_13107;var state_13119__$1 = (function (){var statearr_13133 = state_13119;(statearr_13133[10] = inst_13106);
(statearr_13133[7] = inst_13096__$1);
return statearr_13133;
})();var statearr_13134_13152 = state_13119__$1;(statearr_13134_13152[2] = null);
(statearr_13134_13152[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13138 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13138[0] = state_machine__6178__auto__);
(statearr_13138[1] = 1);
return statearr_13138;
});
var state_machine__6178__auto____1 = (function (state_13119){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13139){if((e13139 instanceof Object))
{var ex__6181__auto__ = e13139;var statearr_13140_13153 = state_13119;(statearr_13140_13153[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13154 = state_13119;
state_13119 = G__13154;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13119){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13141 = f__6193__auto__.call(null);(statearr_13141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13142);
return statearr_13141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13226){var state_val_13227 = (state_13226[1]);if((state_val_13227 === 1))
{var inst_13203 = null;var state_13226__$1 = (function (){var statearr_13228 = state_13226;(statearr_13228[7] = inst_13203);
return statearr_13228;
})();var statearr_13229_13252 = state_13226__$1;(statearr_13229_13252[2] = null);
(statearr_13229_13252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 2))
{var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,4,ch);
} else
{if((state_val_13227 === 3))
{var inst_13223 = (state_13226[2]);var inst_13224 = cljs.core.async.close_BANG_.call(null,out);var state_13226__$1 = (function (){var statearr_13230 = state_13226;(statearr_13230[8] = inst_13223);
return statearr_13230;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else
{if((state_val_13227 === 4))
{var inst_13206 = (state_13226[9]);var inst_13206__$1 = (state_13226[2]);var inst_13207 = (inst_13206__$1 == null);var inst_13208 = cljs.core.not.call(null,inst_13207);var state_13226__$1 = (function (){var statearr_13231 = state_13226;(statearr_13231[9] = inst_13206__$1);
return statearr_13231;
})();if(inst_13208)
{var statearr_13232_13253 = state_13226__$1;(statearr_13232_13253[1] = 5);
} else
{var statearr_13233_13254 = state_13226__$1;(statearr_13233_13254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 5))
{var inst_13203 = (state_13226[7]);var inst_13206 = (state_13226[9]);var inst_13210 = cljs.core._EQ_.call(null,inst_13206,inst_13203);var state_13226__$1 = state_13226;if(inst_13210)
{var statearr_13234_13255 = state_13226__$1;(statearr_13234_13255[1] = 8);
} else
{var statearr_13235_13256 = state_13226__$1;(statearr_13235_13256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 6))
{var state_13226__$1 = state_13226;var statearr_13237_13257 = state_13226__$1;(statearr_13237_13257[2] = null);
(statearr_13237_13257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 7))
{var inst_13221 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13238_13258 = state_13226__$1;(statearr_13238_13258[2] = inst_13221);
(statearr_13238_13258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 8))
{var inst_13203 = (state_13226[7]);var tmp13236 = inst_13203;var inst_13203__$1 = tmp13236;var state_13226__$1 = (function (){var statearr_13239 = state_13226;(statearr_13239[7] = inst_13203__$1);
return statearr_13239;
})();var statearr_13240_13259 = state_13226__$1;(statearr_13240_13259[2] = null);
(statearr_13240_13259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 9))
{var inst_13206 = (state_13226[9]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,11,out,inst_13206);
} else
{if((state_val_13227 === 10))
{var inst_13218 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13241_13260 = state_13226__$1;(statearr_13241_13260[2] = inst_13218);
(statearr_13241_13260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 11))
{var inst_13206 = (state_13226[9]);var inst_13215 = (state_13226[2]);var inst_13203 = inst_13206;var state_13226__$1 = (function (){var statearr_13242 = state_13226;(statearr_13242[7] = inst_13203);
(statearr_13242[10] = inst_13215);
return statearr_13242;
})();var statearr_13243_13261 = state_13226__$1;(statearr_13243_13261[2] = null);
(statearr_13243_13261[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13247 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13247[0] = state_machine__6178__auto__);
(statearr_13247[1] = 1);
return statearr_13247;
});
var state_machine__6178__auto____1 = (function (state_13226){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object))
{var ex__6181__auto__ = e13248;var statearr_13249_13262 = state_13226;(statearr_13249_13262[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13263 = state_13226;
state_13226 = G__13263;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13250 = f__6193__auto__.call(null);(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13251);
return statearr_13250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13368){var state_val_13369 = (state_13368[1]);if((state_val_13369 === 1))
{var inst_13331 = (new Array(n));var inst_13332 = inst_13331;var inst_13333 = 0;var state_13368__$1 = (function (){var statearr_13370 = state_13368;(statearr_13370[7] = inst_13332);
(statearr_13370[8] = inst_13333);
return statearr_13370;
})();var statearr_13371_13399 = state_13368__$1;(statearr_13371_13399[2] = null);
(statearr_13371_13399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 2))
{var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13368__$1,4,ch);
} else
{if((state_val_13369 === 3))
{var inst_13366 = (state_13368[2]);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13368__$1,inst_13366);
} else
{if((state_val_13369 === 4))
{var inst_13336 = (state_13368[9]);var inst_13336__$1 = (state_13368[2]);var inst_13337 = (inst_13336__$1 == null);var inst_13338 = cljs.core.not.call(null,inst_13337);var state_13368__$1 = (function (){var statearr_13372 = state_13368;(statearr_13372[9] = inst_13336__$1);
return statearr_13372;
})();if(inst_13338)
{var statearr_13373_13400 = state_13368__$1;(statearr_13373_13400[1] = 5);
} else
{var statearr_13374_13401 = state_13368__$1;(statearr_13374_13401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 5))
{var inst_13332 = (state_13368[7]);var inst_13341 = (state_13368[10]);var inst_13336 = (state_13368[9]);var inst_13333 = (state_13368[8]);var inst_13340 = (inst_13332[inst_13333] = inst_13336);var inst_13341__$1 = (inst_13333 + 1);var inst_13342 = (inst_13341__$1 < n);var state_13368__$1 = (function (){var statearr_13375 = state_13368;(statearr_13375[11] = inst_13340);
(statearr_13375[10] = inst_13341__$1);
return statearr_13375;
})();if(cljs.core.truth_(inst_13342))
{var statearr_13376_13402 = state_13368__$1;(statearr_13376_13402[1] = 8);
} else
{var statearr_13377_13403 = state_13368__$1;(statearr_13377_13403[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 6))
{var inst_13333 = (state_13368[8]);var inst_13354 = (inst_13333 > 0);var state_13368__$1 = state_13368;if(cljs.core.truth_(inst_13354))
{var statearr_13379_13404 = state_13368__$1;(statearr_13379_13404[1] = 12);
} else
{var statearr_13380_13405 = state_13368__$1;(statearr_13380_13405[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 7))
{var inst_13364 = (state_13368[2]);var state_13368__$1 = state_13368;var statearr_13381_13406 = state_13368__$1;(statearr_13381_13406[2] = inst_13364);
(statearr_13381_13406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 8))
{var inst_13332 = (state_13368[7]);var inst_13341 = (state_13368[10]);var tmp13378 = inst_13332;var inst_13332__$1 = tmp13378;var inst_13333 = inst_13341;var state_13368__$1 = (function (){var statearr_13382 = state_13368;(statearr_13382[7] = inst_13332__$1);
(statearr_13382[8] = inst_13333);
return statearr_13382;
})();var statearr_13383_13407 = state_13368__$1;(statearr_13383_13407[2] = null);
(statearr_13383_13407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 9))
{var inst_13332 = (state_13368[7]);var inst_13346 = cljs.core.vec.call(null,inst_13332);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,11,out,inst_13346);
} else
{if((state_val_13369 === 10))
{var inst_13352 = (state_13368[2]);var state_13368__$1 = state_13368;var statearr_13384_13408 = state_13368__$1;(statearr_13384_13408[2] = inst_13352);
(statearr_13384_13408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 11))
{var inst_13348 = (state_13368[2]);var inst_13349 = (new Array(n));var inst_13332 = inst_13349;var inst_13333 = 0;var state_13368__$1 = (function (){var statearr_13385 = state_13368;(statearr_13385[12] = inst_13348);
(statearr_13385[7] = inst_13332);
(statearr_13385[8] = inst_13333);
return statearr_13385;
})();var statearr_13386_13409 = state_13368__$1;(statearr_13386_13409[2] = null);
(statearr_13386_13409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 12))
{var inst_13332 = (state_13368[7]);var inst_13356 = cljs.core.vec.call(null,inst_13332);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,15,out,inst_13356);
} else
{if((state_val_13369 === 13))
{var state_13368__$1 = state_13368;var statearr_13387_13410 = state_13368__$1;(statearr_13387_13410[2] = null);
(statearr_13387_13410[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 14))
{var inst_13361 = (state_13368[2]);var inst_13362 = cljs.core.async.close_BANG_.call(null,out);var state_13368__$1 = (function (){var statearr_13388 = state_13368;(statearr_13388[13] = inst_13361);
return statearr_13388;
})();var statearr_13389_13411 = state_13368__$1;(statearr_13389_13411[2] = inst_13362);
(statearr_13389_13411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13369 === 15))
{var inst_13358 = (state_13368[2]);var state_13368__$1 = state_13368;var statearr_13390_13412 = state_13368__$1;(statearr_13390_13412[2] = inst_13358);
(statearr_13390_13412[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_13394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13394[0] = state_machine__6178__auto__);
(statearr_13394[1] = 1);
return statearr_13394;
});
var state_machine__6178__auto____1 = (function (state_13368){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13395){if((e13395 instanceof Object))
{var ex__6181__auto__ = e13395;var statearr_13396_13413 = state_13368;(statearr_13396_13413[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13414 = state_13368;
state_13368 = G__13414;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13368){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13397 = f__6193__auto__.call(null);(statearr_13397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13398);
return statearr_13397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13527){var state_val_13528 = (state_13527[1]);if((state_val_13528 === 1))
{var inst_13486 = [];var inst_13487 = inst_13486;var inst_13488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13527__$1 = (function (){var statearr_13529 = state_13527;(statearr_13529[7] = inst_13488);
(statearr_13529[8] = inst_13487);
return statearr_13529;
})();var statearr_13530_13558 = state_13527__$1;(statearr_13530_13558[2] = null);
(statearr_13530_13558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 2))
{var state_13527__$1 = state_13527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13527__$1,4,ch);
} else
{if((state_val_13528 === 3))
{var inst_13525 = (state_13527[2]);var state_13527__$1 = state_13527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13527__$1,inst_13525);
} else
{if((state_val_13528 === 4))
{var inst_13491 = (state_13527[9]);var inst_13491__$1 = (state_13527[2]);var inst_13492 = (inst_13491__$1 == null);var inst_13493 = cljs.core.not.call(null,inst_13492);var state_13527__$1 = (function (){var statearr_13531 = state_13527;(statearr_13531[9] = inst_13491__$1);
return statearr_13531;
})();if(inst_13493)
{var statearr_13532_13559 = state_13527__$1;(statearr_13532_13559[1] = 5);
} else
{var statearr_13533_13560 = state_13527__$1;(statearr_13533_13560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 5))
{var inst_13488 = (state_13527[7]);var inst_13495 = (state_13527[10]);var inst_13491 = (state_13527[9]);var inst_13495__$1 = f.call(null,inst_13491);var inst_13496 = cljs.core._EQ_.call(null,inst_13495__$1,inst_13488);var inst_13497 = cljs.core.keyword_identical_QMARK_.call(null,inst_13488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13498 = (inst_13496) || (inst_13497);var state_13527__$1 = (function (){var statearr_13534 = state_13527;(statearr_13534[10] = inst_13495__$1);
return statearr_13534;
})();if(cljs.core.truth_(inst_13498))
{var statearr_13535_13561 = state_13527__$1;(statearr_13535_13561[1] = 8);
} else
{var statearr_13536_13562 = state_13527__$1;(statearr_13536_13562[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 6))
{var inst_13487 = (state_13527[8]);var inst_13512 = inst_13487.length;var inst_13513 = (inst_13512 > 0);var state_13527__$1 = state_13527;if(cljs.core.truth_(inst_13513))
{var statearr_13538_13563 = state_13527__$1;(statearr_13538_13563[1] = 12);
} else
{var statearr_13539_13564 = state_13527__$1;(statearr_13539_13564[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 7))
{var inst_13523 = (state_13527[2]);var state_13527__$1 = state_13527;var statearr_13540_13565 = state_13527__$1;(statearr_13540_13565[2] = inst_13523);
(statearr_13540_13565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 8))
{var inst_13487 = (state_13527[8]);var inst_13495 = (state_13527[10]);var inst_13491 = (state_13527[9]);var inst_13500 = inst_13487.push(inst_13491);var tmp13537 = inst_13487;var inst_13487__$1 = tmp13537;var inst_13488 = inst_13495;var state_13527__$1 = (function (){var statearr_13541 = state_13527;(statearr_13541[7] = inst_13488);
(statearr_13541[8] = inst_13487__$1);
(statearr_13541[11] = inst_13500);
return statearr_13541;
})();var statearr_13542_13566 = state_13527__$1;(statearr_13542_13566[2] = null);
(statearr_13542_13566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 9))
{var inst_13487 = (state_13527[8]);var inst_13503 = cljs.core.vec.call(null,inst_13487);var state_13527__$1 = state_13527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13527__$1,11,out,inst_13503);
} else
{if((state_val_13528 === 10))
{var inst_13510 = (state_13527[2]);var state_13527__$1 = state_13527;var statearr_13543_13567 = state_13527__$1;(statearr_13543_13567[2] = inst_13510);
(statearr_13543_13567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 11))
{var inst_13495 = (state_13527[10]);var inst_13491 = (state_13527[9]);var inst_13505 = (state_13527[2]);var inst_13506 = [];var inst_13507 = inst_13506.push(inst_13491);var inst_13487 = inst_13506;var inst_13488 = inst_13495;var state_13527__$1 = (function (){var statearr_13544 = state_13527;(statearr_13544[7] = inst_13488);
(statearr_13544[8] = inst_13487);
(statearr_13544[12] = inst_13505);
(statearr_13544[13] = inst_13507);
return statearr_13544;
})();var statearr_13545_13568 = state_13527__$1;(statearr_13545_13568[2] = null);
(statearr_13545_13568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 12))
{var inst_13487 = (state_13527[8]);var inst_13515 = cljs.core.vec.call(null,inst_13487);var state_13527__$1 = state_13527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13527__$1,15,out,inst_13515);
} else
{if((state_val_13528 === 13))
{var state_13527__$1 = state_13527;var statearr_13546_13569 = state_13527__$1;(statearr_13546_13569[2] = null);
(statearr_13546_13569[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 14))
{var inst_13520 = (state_13527[2]);var inst_13521 = cljs.core.async.close_BANG_.call(null,out);var state_13527__$1 = (function (){var statearr_13547 = state_13527;(statearr_13547[14] = inst_13520);
return statearr_13547;
})();var statearr_13548_13570 = state_13527__$1;(statearr_13548_13570[2] = inst_13521);
(statearr_13548_13570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13528 === 15))
{var inst_13517 = (state_13527[2]);var state_13527__$1 = state_13527;var statearr_13549_13571 = state_13527__$1;(statearr_13549_13571[2] = inst_13517);
(statearr_13549_13571[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_13553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13553[0] = state_machine__6178__auto__);
(statearr_13553[1] = 1);
return statearr_13553;
});
var state_machine__6178__auto____1 = (function (state_13527){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13527);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13554){if((e13554 instanceof Object))
{var ex__6181__auto__ = e13554;var statearr_13555_13572 = state_13527;(statearr_13555_13572[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13527);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13573 = state_13527;
state_13527 = G__13573;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13527){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13556 = f__6193__auto__.call(null);(statearr_13556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13557);
return statearr_13556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map