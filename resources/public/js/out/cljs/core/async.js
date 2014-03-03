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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10355 = (function (f,fn_handler,meta10356){
this.f = f;
this.fn_handler = fn_handler;
this.meta10356 = meta10356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10355.cljs$lang$type = true;
cljs.core.async.t10355.cljs$lang$ctorStr = "cljs.core.async/t10355";
cljs.core.async.t10355.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10355");
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10357){var self__ = this;
var _10357__$1 = this;return self__.meta10356;
});
cljs.core.async.t10355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10357,meta10356__$1){var self__ = this;
var _10357__$1 = this;return (new cljs.core.async.t10355(self__.f,self__.fn_handler,meta10356__$1));
});
cljs.core.async.__GT_t10355 = (function __GT_t10355(f__$1,fn_handler__$1,meta10356){return (new cljs.core.async.t10355(f__$1,fn_handler__$1,meta10356));
});
}
return (new cljs.core.async.t10355(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10359 = buff;if(G__10359)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10359.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10359.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10359);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10359);
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
{var val_10360 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10360);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10360);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10361 = n;var x_10362 = 0;while(true){
if((x_10362 < n__4291__auto___10361))
{(a[x_10362] = 0);
{
var G__10363 = (x_10362 + 1);
x_10362 = G__10363;
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
var G__10364 = (i + 1);
i = G__10364;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10368 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10368 = (function (flag,alt_flag,meta10369){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10369 = meta10369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10368.cljs$lang$type = true;
cljs.core.async.t10368.cljs$lang$ctorStr = "cljs.core.async/t10368";
cljs.core.async.t10368.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10368");
});
cljs.core.async.t10368.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10370){var self__ = this;
var _10370__$1 = this;return self__.meta10369;
});
cljs.core.async.t10368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10370,meta10369__$1){var self__ = this;
var _10370__$1 = this;return (new cljs.core.async.t10368(self__.flag,self__.alt_flag,meta10369__$1));
});
cljs.core.async.__GT_t10368 = (function __GT_t10368(flag__$1,alt_flag__$1,meta10369){return (new cljs.core.async.t10368(flag__$1,alt_flag__$1,meta10369));
});
}
return (new cljs.core.async.t10368(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10374 = (function (cb,flag,alt_handler,meta10375){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10375 = meta10375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10374.cljs$lang$type = true;
cljs.core.async.t10374.cljs$lang$ctorStr = "cljs.core.async/t10374";
cljs.core.async.t10374.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10374");
});
cljs.core.async.t10374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10376){var self__ = this;
var _10376__$1 = this;return self__.meta10375;
});
cljs.core.async.t10374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10376,meta10375__$1){var self__ = this;
var _10376__$1 = this;return (new cljs.core.async.t10374(self__.cb,self__.flag,self__.alt_handler,meta10375__$1));
});
cljs.core.async.__GT_t10374 = (function __GT_t10374(cb__$1,flag__$1,alt_handler__$1,meta10375){return (new cljs.core.async.t10374(cb__$1,flag__$1,alt_handler__$1,meta10375));
});
}
return (new cljs.core.async.t10374(cb,flag,alt_handler,null));
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
return (function (p1__10377_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10377_SHARP_,port], null));
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
var G__10378 = (i + 1);
i = G__10378;
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
var alts_BANG___delegate = function (ports,p__10379){var map__10381 = p__10379;var map__10381__$1 = ((cljs.core.seq_QMARK_.call(null,map__10381))?cljs.core.apply.call(null,cljs.core.hash_map,map__10381):map__10381);var opts = map__10381__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10379 = null;if (arguments.length > 1) {
  p__10379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10379);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10382){
var ports = cljs.core.first(arglist__10382);
var p__10379 = cljs.core.rest(arglist__10382);
return alts_BANG___delegate(ports,p__10379);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10390 = (function (ch,f,map_LT_,meta10391){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10391 = meta10391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10390.cljs$lang$type = true;
cljs.core.async.t10390.cljs$lang$ctorStr = "cljs.core.async/t10390";
cljs.core.async.t10390.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10390");
});
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10393 = (function (fn1,_,meta10391,ch,f,map_LT_,meta10394){
this.fn1 = fn1;
this._ = _;
this.meta10391 = meta10391;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10394 = meta10394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10393.cljs$lang$type = true;
cljs.core.async.t10393.cljs$lang$ctorStr = "cljs.core.async/t10393";
cljs.core.async.t10393.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10393");
});
cljs.core.async.t10393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10393.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10383_SHARP_){return f1.call(null,(((p1__10383_SHARP_ == null))?null:self__.f.call(null,p1__10383_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10395){var self__ = this;
var _10395__$1 = this;return self__.meta10394;
});
cljs.core.async.t10393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10395,meta10394__$1){var self__ = this;
var _10395__$1 = this;return (new cljs.core.async.t10393(self__.fn1,self__._,self__.meta10391,self__.ch,self__.f,self__.map_LT_,meta10394__$1));
});
cljs.core.async.__GT_t10393 = (function __GT_t10393(fn1__$1,___$2,meta10391__$1,ch__$2,f__$2,map_LT___$2,meta10394){return (new cljs.core.async.t10393(fn1__$1,___$2,meta10391__$1,ch__$2,f__$2,map_LT___$2,meta10394));
});
}
return (new cljs.core.async.t10393(fn1,___$1,self__.meta10391,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10392){var self__ = this;
var _10392__$1 = this;return self__.meta10391;
});
cljs.core.async.t10390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10392,meta10391__$1){var self__ = this;
var _10392__$1 = this;return (new cljs.core.async.t10390(self__.ch,self__.f,self__.map_LT_,meta10391__$1));
});
cljs.core.async.__GT_t10390 = (function __GT_t10390(ch__$1,f__$1,map_LT___$1,meta10391){return (new cljs.core.async.t10390(ch__$1,f__$1,map_LT___$1,meta10391));
});
}
return (new cljs.core.async.t10390(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10399 = (function (ch,f,map_GT_,meta10400){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10400 = meta10400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10399.cljs$lang$type = true;
cljs.core.async.t10399.cljs$lang$ctorStr = "cljs.core.async/t10399";
cljs.core.async.t10399.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10399");
});
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10401){var self__ = this;
var _10401__$1 = this;return self__.meta10400;
});
cljs.core.async.t10399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10401,meta10400__$1){var self__ = this;
var _10401__$1 = this;return (new cljs.core.async.t10399(self__.ch,self__.f,self__.map_GT_,meta10400__$1));
});
cljs.core.async.__GT_t10399 = (function __GT_t10399(ch__$1,f__$1,map_GT___$1,meta10400){return (new cljs.core.async.t10399(ch__$1,f__$1,map_GT___$1,meta10400));
});
}
return (new cljs.core.async.t10399(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10405 = (function (ch,p,filter_GT_,meta10406){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10406 = meta10406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10405.cljs$lang$type = true;
cljs.core.async.t10405.cljs$lang$ctorStr = "cljs.core.async/t10405";
cljs.core.async.t10405.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10405");
});
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10407){var self__ = this;
var _10407__$1 = this;return self__.meta10406;
});
cljs.core.async.t10405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10407,meta10406__$1){var self__ = this;
var _10407__$1 = this;return (new cljs.core.async.t10405(self__.ch,self__.p,self__.filter_GT_,meta10406__$1));
});
cljs.core.async.__GT_t10405 = (function __GT_t10405(ch__$1,p__$1,filter_GT___$1,meta10406){return (new cljs.core.async.t10405(ch__$1,p__$1,filter_GT___$1,meta10406));
});
}
return (new cljs.core.async.t10405(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10469){var state_val_10470 = (state_10469[1]);if((state_val_10470 === 1))
{var state_10469__$1 = state_10469;var statearr_10471_10491 = state_10469__$1;(statearr_10471_10491[2] = null);
(statearr_10471_10491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 2))
{var state_10469__$1 = state_10469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10469__$1,4,ch);
} else
{if((state_val_10470 === 3))
{var inst_10467 = (state_10469[2]);var state_10469__$1 = state_10469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10469__$1,inst_10467);
} else
{if((state_val_10470 === 4))
{var inst_10451 = (state_10469[7]);var inst_10451__$1 = (state_10469[2]);var inst_10452 = (inst_10451__$1 == null);var state_10469__$1 = (function (){var statearr_10472 = state_10469;(statearr_10472[7] = inst_10451__$1);
return statearr_10472;
})();if(cljs.core.truth_(inst_10452))
{var statearr_10473_10492 = state_10469__$1;(statearr_10473_10492[1] = 5);
} else
{var statearr_10474_10493 = state_10469__$1;(statearr_10474_10493[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 5))
{var inst_10454 = cljs.core.async.close_BANG_.call(null,out);var state_10469__$1 = state_10469;var statearr_10475_10494 = state_10469__$1;(statearr_10475_10494[2] = inst_10454);
(statearr_10475_10494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 6))
{var inst_10451 = (state_10469[7]);var inst_10456 = p.call(null,inst_10451);var state_10469__$1 = state_10469;if(cljs.core.truth_(inst_10456))
{var statearr_10476_10495 = state_10469__$1;(statearr_10476_10495[1] = 8);
} else
{var statearr_10477_10496 = state_10469__$1;(statearr_10477_10496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 7))
{var inst_10465 = (state_10469[2]);var state_10469__$1 = state_10469;var statearr_10478_10497 = state_10469__$1;(statearr_10478_10497[2] = inst_10465);
(statearr_10478_10497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 8))
{var inst_10451 = (state_10469[7]);var state_10469__$1 = state_10469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10469__$1,11,out,inst_10451);
} else
{if((state_val_10470 === 9))
{var state_10469__$1 = state_10469;var statearr_10479_10498 = state_10469__$1;(statearr_10479_10498[2] = null);
(statearr_10479_10498[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 10))
{var inst_10462 = (state_10469[2]);var state_10469__$1 = (function (){var statearr_10480 = state_10469;(statearr_10480[8] = inst_10462);
return statearr_10480;
})();var statearr_10481_10499 = state_10469__$1;(statearr_10481_10499[2] = null);
(statearr_10481_10499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10470 === 11))
{var inst_10459 = (state_10469[2]);var state_10469__$1 = state_10469;var statearr_10482_10500 = state_10469__$1;(statearr_10482_10500[2] = inst_10459);
(statearr_10482_10500[1] = 10);
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
var state_machine__6178__auto____0 = (function (){var statearr_10486 = [null,null,null,null,null,null,null,null,null];(statearr_10486[0] = state_machine__6178__auto__);
(statearr_10486[1] = 1);
return statearr_10486;
});
var state_machine__6178__auto____1 = (function (state_10469){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10487){if((e10487 instanceof Object))
{var ex__6181__auto__ = e10487;var statearr_10488_10501 = state_10469;(statearr_10488_10501[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10502 = state_10469;
state_10469 = G__10502;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10469){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10489 = f__6193__auto__.call(null);(statearr_10489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10490);
return statearr_10489;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10654){var state_val_10655 = (state_10654[1]);if((state_val_10655 === 1))
{var state_10654__$1 = state_10654;var statearr_10656_10693 = state_10654__$1;(statearr_10656_10693[2] = null);
(statearr_10656_10693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 2))
{var state_10654__$1 = state_10654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10654__$1,4,in$);
} else
{if((state_val_10655 === 3))
{var inst_10652 = (state_10654[2]);var state_10654__$1 = state_10654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10654__$1,inst_10652);
} else
{if((state_val_10655 === 4))
{var inst_10600 = (state_10654[7]);var inst_10600__$1 = (state_10654[2]);var inst_10601 = (inst_10600__$1 == null);var state_10654__$1 = (function (){var statearr_10657 = state_10654;(statearr_10657[7] = inst_10600__$1);
return statearr_10657;
})();if(cljs.core.truth_(inst_10601))
{var statearr_10658_10694 = state_10654__$1;(statearr_10658_10694[1] = 5);
} else
{var statearr_10659_10695 = state_10654__$1;(statearr_10659_10695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 5))
{var inst_10603 = cljs.core.async.close_BANG_.call(null,out);var state_10654__$1 = state_10654;var statearr_10660_10696 = state_10654__$1;(statearr_10660_10696[2] = inst_10603);
(statearr_10660_10696[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 6))
{var inst_10600 = (state_10654[7]);var inst_10605 = f.call(null,inst_10600);var inst_10610 = cljs.core.seq.call(null,inst_10605);var inst_10611 = inst_10610;var inst_10612 = null;var inst_10613 = 0;var inst_10614 = 0;var state_10654__$1 = (function (){var statearr_10661 = state_10654;(statearr_10661[8] = inst_10614);
(statearr_10661[9] = inst_10613);
(statearr_10661[10] = inst_10611);
(statearr_10661[11] = inst_10612);
return statearr_10661;
})();var statearr_10662_10697 = state_10654__$1;(statearr_10662_10697[2] = null);
(statearr_10662_10697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 7))
{var inst_10650 = (state_10654[2]);var state_10654__$1 = state_10654;var statearr_10663_10698 = state_10654__$1;(statearr_10663_10698[2] = inst_10650);
(statearr_10663_10698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 8))
{var inst_10614 = (state_10654[8]);var inst_10613 = (state_10654[9]);var inst_10616 = (inst_10614 < inst_10613);var inst_10617 = inst_10616;var state_10654__$1 = state_10654;if(cljs.core.truth_(inst_10617))
{var statearr_10664_10699 = state_10654__$1;(statearr_10664_10699[1] = 10);
} else
{var statearr_10665_10700 = state_10654__$1;(statearr_10665_10700[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 9))
{var inst_10647 = (state_10654[2]);var state_10654__$1 = (function (){var statearr_10666 = state_10654;(statearr_10666[12] = inst_10647);
return statearr_10666;
})();var statearr_10667_10701 = state_10654__$1;(statearr_10667_10701[2] = null);
(statearr_10667_10701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 10))
{var inst_10614 = (state_10654[8]);var inst_10612 = (state_10654[11]);var inst_10619 = cljs.core._nth.call(null,inst_10612,inst_10614);var state_10654__$1 = state_10654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10654__$1,13,out,inst_10619);
} else
{if((state_val_10655 === 11))
{var inst_10625 = (state_10654[13]);var inst_10611 = (state_10654[10]);var inst_10625__$1 = cljs.core.seq.call(null,inst_10611);var state_10654__$1 = (function (){var statearr_10671 = state_10654;(statearr_10671[13] = inst_10625__$1);
return statearr_10671;
})();if(inst_10625__$1)
{var statearr_10672_10702 = state_10654__$1;(statearr_10672_10702[1] = 14);
} else
{var statearr_10673_10703 = state_10654__$1;(statearr_10673_10703[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 12))
{var inst_10645 = (state_10654[2]);var state_10654__$1 = state_10654;var statearr_10674_10704 = state_10654__$1;(statearr_10674_10704[2] = inst_10645);
(statearr_10674_10704[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 13))
{var inst_10614 = (state_10654[8]);var inst_10613 = (state_10654[9]);var inst_10611 = (state_10654[10]);var inst_10612 = (state_10654[11]);var inst_10621 = (state_10654[2]);var inst_10622 = (inst_10614 + 1);var tmp10668 = inst_10613;var tmp10669 = inst_10611;var tmp10670 = inst_10612;var inst_10611__$1 = tmp10669;var inst_10612__$1 = tmp10670;var inst_10613__$1 = tmp10668;var inst_10614__$1 = inst_10622;var state_10654__$1 = (function (){var statearr_10675 = state_10654;(statearr_10675[8] = inst_10614__$1);
(statearr_10675[9] = inst_10613__$1);
(statearr_10675[14] = inst_10621);
(statearr_10675[10] = inst_10611__$1);
(statearr_10675[11] = inst_10612__$1);
return statearr_10675;
})();var statearr_10676_10705 = state_10654__$1;(statearr_10676_10705[2] = null);
(statearr_10676_10705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 14))
{var inst_10625 = (state_10654[13]);var inst_10627 = cljs.core.chunked_seq_QMARK_.call(null,inst_10625);var state_10654__$1 = state_10654;if(inst_10627)
{var statearr_10677_10706 = state_10654__$1;(statearr_10677_10706[1] = 17);
} else
{var statearr_10678_10707 = state_10654__$1;(statearr_10678_10707[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 15))
{var state_10654__$1 = state_10654;var statearr_10679_10708 = state_10654__$1;(statearr_10679_10708[2] = null);
(statearr_10679_10708[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 16))
{var inst_10643 = (state_10654[2]);var state_10654__$1 = state_10654;var statearr_10680_10709 = state_10654__$1;(statearr_10680_10709[2] = inst_10643);
(statearr_10680_10709[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 17))
{var inst_10625 = (state_10654[13]);var inst_10629 = cljs.core.chunk_first.call(null,inst_10625);var inst_10630 = cljs.core.chunk_rest.call(null,inst_10625);var inst_10631 = cljs.core.count.call(null,inst_10629);var inst_10611 = inst_10630;var inst_10612 = inst_10629;var inst_10613 = inst_10631;var inst_10614 = 0;var state_10654__$1 = (function (){var statearr_10681 = state_10654;(statearr_10681[8] = inst_10614);
(statearr_10681[9] = inst_10613);
(statearr_10681[10] = inst_10611);
(statearr_10681[11] = inst_10612);
return statearr_10681;
})();var statearr_10682_10710 = state_10654__$1;(statearr_10682_10710[2] = null);
(statearr_10682_10710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 18))
{var inst_10625 = (state_10654[13]);var inst_10634 = cljs.core.first.call(null,inst_10625);var state_10654__$1 = state_10654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10654__$1,20,out,inst_10634);
} else
{if((state_val_10655 === 19))
{var inst_10640 = (state_10654[2]);var state_10654__$1 = state_10654;var statearr_10683_10711 = state_10654__$1;(statearr_10683_10711[2] = inst_10640);
(statearr_10683_10711[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10655 === 20))
{var inst_10625 = (state_10654[13]);var inst_10636 = (state_10654[2]);var inst_10637 = cljs.core.next.call(null,inst_10625);var inst_10611 = inst_10637;var inst_10612 = null;var inst_10613 = 0;var inst_10614 = 0;var state_10654__$1 = (function (){var statearr_10684 = state_10654;(statearr_10684[8] = inst_10614);
(statearr_10684[9] = inst_10613);
(statearr_10684[15] = inst_10636);
(statearr_10684[10] = inst_10611);
(statearr_10684[11] = inst_10612);
return statearr_10684;
})();var statearr_10685_10712 = state_10654__$1;(statearr_10685_10712[2] = null);
(statearr_10685_10712[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_10689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10689[0] = state_machine__6178__auto__);
(statearr_10689[1] = 1);
return statearr_10689;
});
var state_machine__6178__auto____1 = (function (state_10654){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10690){if((e10690 instanceof Object))
{var ex__6181__auto__ = e10690;var statearr_10691_10713 = state_10654;(statearr_10691_10713[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10714 = state_10654;
state_10654 = G__10714;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10654){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10692 = f__6193__auto__.call(null);(statearr_10692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10692;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___10795 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10774){var state_val_10775 = (state_10774[1]);if((state_val_10775 === 1))
{var state_10774__$1 = state_10774;var statearr_10776_10796 = state_10774__$1;(statearr_10776_10796[2] = null);
(statearr_10776_10796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 2))
{var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10774__$1,4,from);
} else
{if((state_val_10775 === 3))
{var inst_10772 = (state_10774[2]);var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10774__$1,inst_10772);
} else
{if((state_val_10775 === 4))
{var inst_10757 = (state_10774[7]);var inst_10757__$1 = (state_10774[2]);var inst_10758 = (inst_10757__$1 == null);var state_10774__$1 = (function (){var statearr_10777 = state_10774;(statearr_10777[7] = inst_10757__$1);
return statearr_10777;
})();if(cljs.core.truth_(inst_10758))
{var statearr_10778_10797 = state_10774__$1;(statearr_10778_10797[1] = 5);
} else
{var statearr_10779_10798 = state_10774__$1;(statearr_10779_10798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 5))
{var state_10774__$1 = state_10774;if(cljs.core.truth_(close_QMARK_))
{var statearr_10780_10799 = state_10774__$1;(statearr_10780_10799[1] = 8);
} else
{var statearr_10781_10800 = state_10774__$1;(statearr_10781_10800[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 6))
{var inst_10757 = (state_10774[7]);var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10774__$1,11,to,inst_10757);
} else
{if((state_val_10775 === 7))
{var inst_10770 = (state_10774[2]);var state_10774__$1 = state_10774;var statearr_10782_10801 = state_10774__$1;(statearr_10782_10801[2] = inst_10770);
(statearr_10782_10801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 8))
{var inst_10761 = cljs.core.async.close_BANG_.call(null,to);var state_10774__$1 = state_10774;var statearr_10783_10802 = state_10774__$1;(statearr_10783_10802[2] = inst_10761);
(statearr_10783_10802[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 9))
{var state_10774__$1 = state_10774;var statearr_10784_10803 = state_10774__$1;(statearr_10784_10803[2] = null);
(statearr_10784_10803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 10))
{var inst_10764 = (state_10774[2]);var state_10774__$1 = state_10774;var statearr_10785_10804 = state_10774__$1;(statearr_10785_10804[2] = inst_10764);
(statearr_10785_10804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 11))
{var inst_10767 = (state_10774[2]);var state_10774__$1 = (function (){var statearr_10786 = state_10774;(statearr_10786[8] = inst_10767);
return statearr_10786;
})();var statearr_10787_10805 = state_10774__$1;(statearr_10787_10805[2] = null);
(statearr_10787_10805[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_10791 = [null,null,null,null,null,null,null,null,null];(statearr_10791[0] = state_machine__6178__auto__);
(statearr_10791[1] = 1);
return statearr_10791;
});
var state_machine__6178__auto____1 = (function (state_10774){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10774);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10792){if((e10792 instanceof Object))
{var ex__6181__auto__ = e10792;var statearr_10793_10806 = state_10774;(statearr_10793_10806[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10807 = state_10774;
state_10774 = G__10807;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10774){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10794 = f__6193__auto__.call(null);(statearr_10794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10795);
return statearr_10794;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___10894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10872){var state_val_10873 = (state_10872[1]);if((state_val_10873 === 1))
{var state_10872__$1 = state_10872;var statearr_10874_10895 = state_10872__$1;(statearr_10874_10895[2] = null);
(statearr_10874_10895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 2))
{var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10872__$1,4,ch);
} else
{if((state_val_10873 === 3))
{var inst_10870 = (state_10872[2]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10872__$1,inst_10870);
} else
{if((state_val_10873 === 4))
{var inst_10853 = (state_10872[7]);var inst_10853__$1 = (state_10872[2]);var inst_10854 = (inst_10853__$1 == null);var state_10872__$1 = (function (){var statearr_10875 = state_10872;(statearr_10875[7] = inst_10853__$1);
return statearr_10875;
})();if(cljs.core.truth_(inst_10854))
{var statearr_10876_10896 = state_10872__$1;(statearr_10876_10896[1] = 5);
} else
{var statearr_10877_10897 = state_10872__$1;(statearr_10877_10897[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 5))
{var inst_10856 = cljs.core.async.close_BANG_.call(null,tc);var inst_10857 = cljs.core.async.close_BANG_.call(null,fc);var state_10872__$1 = (function (){var statearr_10878 = state_10872;(statearr_10878[8] = inst_10856);
return statearr_10878;
})();var statearr_10879_10898 = state_10872__$1;(statearr_10879_10898[2] = inst_10857);
(statearr_10879_10898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 6))
{var inst_10853 = (state_10872[7]);var inst_10859 = p.call(null,inst_10853);var state_10872__$1 = state_10872;if(cljs.core.truth_(inst_10859))
{var statearr_10880_10899 = state_10872__$1;(statearr_10880_10899[1] = 9);
} else
{var statearr_10881_10900 = state_10872__$1;(statearr_10881_10900[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 7))
{var inst_10868 = (state_10872[2]);var state_10872__$1 = state_10872;var statearr_10882_10901 = state_10872__$1;(statearr_10882_10901[2] = inst_10868);
(statearr_10882_10901[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 8))
{var inst_10865 = (state_10872[2]);var state_10872__$1 = (function (){var statearr_10883 = state_10872;(statearr_10883[9] = inst_10865);
return statearr_10883;
})();var statearr_10884_10902 = state_10872__$1;(statearr_10884_10902[2] = null);
(statearr_10884_10902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 9))
{var state_10872__$1 = state_10872;var statearr_10885_10903 = state_10872__$1;(statearr_10885_10903[2] = tc);
(statearr_10885_10903[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 10))
{var state_10872__$1 = state_10872;var statearr_10886_10904 = state_10872__$1;(statearr_10886_10904[2] = fc);
(statearr_10886_10904[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10873 === 11))
{var inst_10853 = (state_10872[7]);var inst_10863 = (state_10872[2]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10872__$1,8,inst_10863,inst_10853);
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
var state_machine__6178__auto____0 = (function (){var statearr_10890 = [null,null,null,null,null,null,null,null,null,null];(statearr_10890[0] = state_machine__6178__auto__);
(statearr_10890[1] = 1);
return statearr_10890;
});
var state_machine__6178__auto____1 = (function (state_10872){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10872);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10891){if((e10891 instanceof Object))
{var ex__6181__auto__ = e10891;var statearr_10892_10905 = state_10872;(statearr_10892_10905[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10906 = state_10872;
state_10872 = G__10906;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10872){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10893 = f__6193__auto__.call(null);(statearr_10893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10894);
return statearr_10893;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10953){var state_val_10954 = (state_10953[1]);if((state_val_10954 === 7))
{var inst_10949 = (state_10953[2]);var state_10953__$1 = state_10953;var statearr_10955_10971 = state_10953__$1;(statearr_10955_10971[2] = inst_10949);
(statearr_10955_10971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 6))
{var inst_10939 = (state_10953[7]);var inst_10942 = (state_10953[8]);var inst_10946 = f.call(null,inst_10939,inst_10942);var inst_10939__$1 = inst_10946;var state_10953__$1 = (function (){var statearr_10956 = state_10953;(statearr_10956[7] = inst_10939__$1);
return statearr_10956;
})();var statearr_10957_10972 = state_10953__$1;(statearr_10957_10972[2] = null);
(statearr_10957_10972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 5))
{var inst_10939 = (state_10953[7]);var state_10953__$1 = state_10953;var statearr_10958_10973 = state_10953__$1;(statearr_10958_10973[2] = inst_10939);
(statearr_10958_10973[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 4))
{var inst_10942 = (state_10953[8]);var inst_10942__$1 = (state_10953[2]);var inst_10943 = (inst_10942__$1 == null);var state_10953__$1 = (function (){var statearr_10959 = state_10953;(statearr_10959[8] = inst_10942__$1);
return statearr_10959;
})();if(cljs.core.truth_(inst_10943))
{var statearr_10960_10974 = state_10953__$1;(statearr_10960_10974[1] = 5);
} else
{var statearr_10961_10975 = state_10953__$1;(statearr_10961_10975[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 3))
{var inst_10951 = (state_10953[2]);var state_10953__$1 = state_10953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10953__$1,inst_10951);
} else
{if((state_val_10954 === 2))
{var state_10953__$1 = state_10953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10953__$1,4,ch);
} else
{if((state_val_10954 === 1))
{var inst_10939 = init;var state_10953__$1 = (function (){var statearr_10962 = state_10953;(statearr_10962[7] = inst_10939);
return statearr_10962;
})();var statearr_10963_10976 = state_10953__$1;(statearr_10963_10976[2] = null);
(statearr_10963_10976[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_10967 = [null,null,null,null,null,null,null,null,null];(statearr_10967[0] = state_machine__6178__auto__);
(statearr_10967[1] = 1);
return statearr_10967;
});
var state_machine__6178__auto____1 = (function (state_10953){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10968){if((e10968 instanceof Object))
{var ex__6181__auto__ = e10968;var statearr_10969_10977 = state_10953;(statearr_10969_10977[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10978 = state_10953;
state_10953 = G__10978;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10953){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10970 = f__6193__auto__.call(null);(statearr_10970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10970;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11040){var state_val_11041 = (state_11040[1]);if((state_val_11041 === 1))
{var inst_11020 = cljs.core.seq.call(null,coll);var inst_11021 = inst_11020;var state_11040__$1 = (function (){var statearr_11042 = state_11040;(statearr_11042[7] = inst_11021);
return statearr_11042;
})();var statearr_11043_11061 = state_11040__$1;(statearr_11043_11061[2] = null);
(statearr_11043_11061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 2))
{var inst_11021 = (state_11040[7]);var state_11040__$1 = state_11040;if(cljs.core.truth_(inst_11021))
{var statearr_11044_11062 = state_11040__$1;(statearr_11044_11062[1] = 4);
} else
{var statearr_11045_11063 = state_11040__$1;(statearr_11045_11063[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 3))
{var inst_11038 = (state_11040[2]);var state_11040__$1 = state_11040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11040__$1,inst_11038);
} else
{if((state_val_11041 === 4))
{var inst_11021 = (state_11040[7]);var inst_11024 = cljs.core.first.call(null,inst_11021);var state_11040__$1 = state_11040;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11040__$1,7,ch,inst_11024);
} else
{if((state_val_11041 === 5))
{var state_11040__$1 = state_11040;if(cljs.core.truth_(close_QMARK_))
{var statearr_11046_11064 = state_11040__$1;(statearr_11046_11064[1] = 8);
} else
{var statearr_11047_11065 = state_11040__$1;(statearr_11047_11065[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 6))
{var inst_11036 = (state_11040[2]);var state_11040__$1 = state_11040;var statearr_11048_11066 = state_11040__$1;(statearr_11048_11066[2] = inst_11036);
(statearr_11048_11066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 7))
{var inst_11021 = (state_11040[7]);var inst_11026 = (state_11040[2]);var inst_11027 = cljs.core.next.call(null,inst_11021);var inst_11021__$1 = inst_11027;var state_11040__$1 = (function (){var statearr_11049 = state_11040;(statearr_11049[8] = inst_11026);
(statearr_11049[7] = inst_11021__$1);
return statearr_11049;
})();var statearr_11050_11067 = state_11040__$1;(statearr_11050_11067[2] = null);
(statearr_11050_11067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 8))
{var inst_11031 = cljs.core.async.close_BANG_.call(null,ch);var state_11040__$1 = state_11040;var statearr_11051_11068 = state_11040__$1;(statearr_11051_11068[2] = inst_11031);
(statearr_11051_11068[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 9))
{var state_11040__$1 = state_11040;var statearr_11052_11069 = state_11040__$1;(statearr_11052_11069[2] = null);
(statearr_11052_11069[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11041 === 10))
{var inst_11034 = (state_11040[2]);var state_11040__$1 = state_11040;var statearr_11053_11070 = state_11040__$1;(statearr_11053_11070[2] = inst_11034);
(statearr_11053_11070[1] = 6);
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
var state_machine__6178__auto____0 = (function (){var statearr_11057 = [null,null,null,null,null,null,null,null,null];(statearr_11057[0] = state_machine__6178__auto__);
(statearr_11057[1] = 1);
return statearr_11057;
});
var state_machine__6178__auto____1 = (function (state_11040){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11040);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11058){if((e11058 instanceof Object))
{var ex__6181__auto__ = e11058;var statearr_11059_11071 = state_11040;(statearr_11059_11071[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11040);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11072 = state_11040;
state_11040 = G__11072;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11040){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11060 = f__6193__auto__.call(null);(statearr_11060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11060;
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
cljs.core.async.Mux = (function (){var obj11074 = {};return obj11074;
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
cljs.core.async.Mult = (function (){var obj11076 = {};return obj11076;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11300 = (function (cs,ch,mult,meta11301){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11301 = meta11301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11300.cljs$lang$type = true;
cljs.core.async.t11300.cljs$lang$ctorStr = "cljs.core.async/t11300";
cljs.core.async.t11300.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11300");
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11300.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11302){var self__ = this;
var _11302__$1 = this;return self__.meta11301;
});})(cs))
;
cljs.core.async.t11300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11302,meta11301__$1){var self__ = this;
var _11302__$1 = this;return (new cljs.core.async.t11300(self__.cs,self__.ch,self__.mult,meta11301__$1));
});})(cs))
;
cljs.core.async.__GT_t11300 = ((function (cs){
return (function __GT_t11300(cs__$1,ch__$1,mult__$1,meta11301){return (new cljs.core.async.t11300(cs__$1,ch__$1,mult__$1,meta11301));
});})(cs))
;
}
return (new cljs.core.async.t11300(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___11523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11437){var state_val_11438 = (state_11437[1]);if((state_val_11438 === 32))
{var inst_11381 = (state_11437[7]);var inst_11305 = (state_11437[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11437,31,Object,null,30);var inst_11388 = cljs.core.async.put_BANG_.call(null,inst_11381,inst_11305,done);var state_11437__$1 = state_11437;var statearr_11439_11524 = state_11437__$1;(statearr_11439_11524[2] = inst_11388);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 1))
{var state_11437__$1 = state_11437;var statearr_11440_11525 = state_11437__$1;(statearr_11440_11525[2] = null);
(statearr_11440_11525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 33))
{var inst_11394 = (state_11437[9]);var inst_11396 = cljs.core.chunked_seq_QMARK_.call(null,inst_11394);var state_11437__$1 = state_11437;if(inst_11396)
{var statearr_11441_11526 = state_11437__$1;(statearr_11441_11526[1] = 36);
} else
{var statearr_11442_11527 = state_11437__$1;(statearr_11442_11527[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 2))
{var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,4,ch);
} else
{if((state_val_11438 === 34))
{var state_11437__$1 = state_11437;var statearr_11443_11528 = state_11437__$1;(statearr_11443_11528[2] = null);
(statearr_11443_11528[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 3))
{var inst_11435 = (state_11437[2]);var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11437__$1,inst_11435);
} else
{if((state_val_11438 === 35))
{var inst_11419 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11444_11529 = state_11437__$1;(statearr_11444_11529[2] = inst_11419);
(statearr_11444_11529[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 4))
{var inst_11305 = (state_11437[8]);var inst_11305__$1 = (state_11437[2]);var inst_11306 = (inst_11305__$1 == null);var state_11437__$1 = (function (){var statearr_11445 = state_11437;(statearr_11445[8] = inst_11305__$1);
return statearr_11445;
})();if(cljs.core.truth_(inst_11306))
{var statearr_11446_11530 = state_11437__$1;(statearr_11446_11530[1] = 5);
} else
{var statearr_11447_11531 = state_11437__$1;(statearr_11447_11531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 36))
{var inst_11394 = (state_11437[9]);var inst_11398 = cljs.core.chunk_first.call(null,inst_11394);var inst_11399 = cljs.core.chunk_rest.call(null,inst_11394);var inst_11400 = cljs.core.count.call(null,inst_11398);var inst_11373 = inst_11399;var inst_11374 = inst_11398;var inst_11375 = inst_11400;var inst_11376 = 0;var state_11437__$1 = (function (){var statearr_11448 = state_11437;(statearr_11448[10] = inst_11373);
(statearr_11448[11] = inst_11374);
(statearr_11448[12] = inst_11376);
(statearr_11448[13] = inst_11375);
return statearr_11448;
})();var statearr_11449_11532 = state_11437__$1;(statearr_11449_11532[2] = null);
(statearr_11449_11532[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 5))
{var inst_11312 = cljs.core.deref.call(null,cs);var inst_11313 = cljs.core.seq.call(null,inst_11312);var inst_11314 = inst_11313;var inst_11315 = null;var inst_11316 = 0;var inst_11317 = 0;var state_11437__$1 = (function (){var statearr_11450 = state_11437;(statearr_11450[14] = inst_11317);
(statearr_11450[15] = inst_11314);
(statearr_11450[16] = inst_11315);
(statearr_11450[17] = inst_11316);
return statearr_11450;
})();var statearr_11451_11533 = state_11437__$1;(statearr_11451_11533[2] = null);
(statearr_11451_11533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 37))
{var inst_11394 = (state_11437[9]);var inst_11403 = cljs.core.first.call(null,inst_11394);var state_11437__$1 = (function (){var statearr_11452 = state_11437;(statearr_11452[18] = inst_11403);
return statearr_11452;
})();var statearr_11453_11534 = state_11437__$1;(statearr_11453_11534[2] = null);
(statearr_11453_11534[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 6))
{var inst_11365 = (state_11437[19]);var inst_11364 = cljs.core.deref.call(null,cs);var inst_11365__$1 = cljs.core.keys.call(null,inst_11364);var inst_11366 = cljs.core.count.call(null,inst_11365__$1);var inst_11367 = cljs.core.reset_BANG_.call(null,dctr,inst_11366);var inst_11372 = cljs.core.seq.call(null,inst_11365__$1);var inst_11373 = inst_11372;var inst_11374 = null;var inst_11375 = 0;var inst_11376 = 0;var state_11437__$1 = (function (){var statearr_11454 = state_11437;(statearr_11454[10] = inst_11373);
(statearr_11454[11] = inst_11374);
(statearr_11454[12] = inst_11376);
(statearr_11454[13] = inst_11375);
(statearr_11454[20] = inst_11367);
(statearr_11454[19] = inst_11365__$1);
return statearr_11454;
})();var statearr_11455_11535 = state_11437__$1;(statearr_11455_11535[2] = null);
(statearr_11455_11535[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 38))
{var inst_11416 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11456_11536 = state_11437__$1;(statearr_11456_11536[2] = inst_11416);
(statearr_11456_11536[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 7))
{var inst_11433 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11457_11537 = state_11437__$1;(statearr_11457_11537[2] = inst_11433);
(statearr_11457_11537[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 39))
{var inst_11394 = (state_11437[9]);var inst_11412 = (state_11437[2]);var inst_11413 = cljs.core.next.call(null,inst_11394);var inst_11373 = inst_11413;var inst_11374 = null;var inst_11375 = 0;var inst_11376 = 0;var state_11437__$1 = (function (){var statearr_11458 = state_11437;(statearr_11458[10] = inst_11373);
(statearr_11458[11] = inst_11374);
(statearr_11458[21] = inst_11412);
(statearr_11458[12] = inst_11376);
(statearr_11458[13] = inst_11375);
return statearr_11458;
})();var statearr_11459_11538 = state_11437__$1;(statearr_11459_11538[2] = null);
(statearr_11459_11538[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 8))
{var inst_11317 = (state_11437[14]);var inst_11316 = (state_11437[17]);var inst_11319 = (inst_11317 < inst_11316);var inst_11320 = inst_11319;var state_11437__$1 = state_11437;if(cljs.core.truth_(inst_11320))
{var statearr_11460_11539 = state_11437__$1;(statearr_11460_11539[1] = 10);
} else
{var statearr_11461_11540 = state_11437__$1;(statearr_11461_11540[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 40))
{var inst_11403 = (state_11437[18]);var inst_11404 = (state_11437[2]);var inst_11405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11406 = cljs.core.async.untap_STAR_.call(null,m,inst_11403);var state_11437__$1 = (function (){var statearr_11462 = state_11437;(statearr_11462[22] = inst_11404);
(statearr_11462[23] = inst_11405);
return statearr_11462;
})();var statearr_11463_11541 = state_11437__$1;(statearr_11463_11541[2] = inst_11406);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 9))
{var inst_11362 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11464_11542 = state_11437__$1;(statearr_11464_11542[2] = inst_11362);
(statearr_11464_11542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 41))
{var inst_11403 = (state_11437[18]);var inst_11305 = (state_11437[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11437,40,Object,null,39);var inst_11410 = cljs.core.async.put_BANG_.call(null,inst_11403,inst_11305,done);var state_11437__$1 = state_11437;var statearr_11465_11543 = state_11437__$1;(statearr_11465_11543[2] = inst_11410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 10))
{var inst_11317 = (state_11437[14]);var inst_11315 = (state_11437[16]);var inst_11323 = cljs.core._nth.call(null,inst_11315,inst_11317);var inst_11324 = cljs.core.nth.call(null,inst_11323,0,null);var inst_11325 = cljs.core.nth.call(null,inst_11323,1,null);var state_11437__$1 = (function (){var statearr_11466 = state_11437;(statearr_11466[24] = inst_11324);
return statearr_11466;
})();if(cljs.core.truth_(inst_11325))
{var statearr_11467_11544 = state_11437__$1;(statearr_11467_11544[1] = 13);
} else
{var statearr_11468_11545 = state_11437__$1;(statearr_11468_11545[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 42))
{var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,45,dchan);
} else
{if((state_val_11438 === 11))
{var inst_11334 = (state_11437[25]);var inst_11314 = (state_11437[15]);var inst_11334__$1 = cljs.core.seq.call(null,inst_11314);var state_11437__$1 = (function (){var statearr_11469 = state_11437;(statearr_11469[25] = inst_11334__$1);
return statearr_11469;
})();if(inst_11334__$1)
{var statearr_11470_11546 = state_11437__$1;(statearr_11470_11546[1] = 16);
} else
{var statearr_11471_11547 = state_11437__$1;(statearr_11471_11547[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 43))
{var state_11437__$1 = state_11437;var statearr_11472_11548 = state_11437__$1;(statearr_11472_11548[2] = null);
(statearr_11472_11548[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 12))
{var inst_11360 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11473_11549 = state_11437__$1;(statearr_11473_11549[2] = inst_11360);
(statearr_11473_11549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 44))
{var inst_11430 = (state_11437[2]);var state_11437__$1 = (function (){var statearr_11474 = state_11437;(statearr_11474[26] = inst_11430);
return statearr_11474;
})();var statearr_11475_11550 = state_11437__$1;(statearr_11475_11550[2] = null);
(statearr_11475_11550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 13))
{var inst_11324 = (state_11437[24]);var inst_11327 = cljs.core.async.close_BANG_.call(null,inst_11324);var state_11437__$1 = state_11437;var statearr_11476_11551 = state_11437__$1;(statearr_11476_11551[2] = inst_11327);
(statearr_11476_11551[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 45))
{var inst_11427 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11480_11552 = state_11437__$1;(statearr_11480_11552[2] = inst_11427);
(statearr_11480_11552[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 14))
{var state_11437__$1 = state_11437;var statearr_11481_11553 = state_11437__$1;(statearr_11481_11553[2] = null);
(statearr_11481_11553[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 15))
{var inst_11317 = (state_11437[14]);var inst_11314 = (state_11437[15]);var inst_11315 = (state_11437[16]);var inst_11316 = (state_11437[17]);var inst_11330 = (state_11437[2]);var inst_11331 = (inst_11317 + 1);var tmp11477 = inst_11314;var tmp11478 = inst_11315;var tmp11479 = inst_11316;var inst_11314__$1 = tmp11477;var inst_11315__$1 = tmp11478;var inst_11316__$1 = tmp11479;var inst_11317__$1 = inst_11331;var state_11437__$1 = (function (){var statearr_11482 = state_11437;(statearr_11482[27] = inst_11330);
(statearr_11482[14] = inst_11317__$1);
(statearr_11482[15] = inst_11314__$1);
(statearr_11482[16] = inst_11315__$1);
(statearr_11482[17] = inst_11316__$1);
return statearr_11482;
})();var statearr_11483_11554 = state_11437__$1;(statearr_11483_11554[2] = null);
(statearr_11483_11554[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 16))
{var inst_11334 = (state_11437[25]);var inst_11336 = cljs.core.chunked_seq_QMARK_.call(null,inst_11334);var state_11437__$1 = state_11437;if(inst_11336)
{var statearr_11484_11555 = state_11437__$1;(statearr_11484_11555[1] = 19);
} else
{var statearr_11485_11556 = state_11437__$1;(statearr_11485_11556[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 17))
{var state_11437__$1 = state_11437;var statearr_11486_11557 = state_11437__$1;(statearr_11486_11557[2] = null);
(statearr_11486_11557[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 18))
{var inst_11358 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11487_11558 = state_11437__$1;(statearr_11487_11558[2] = inst_11358);
(statearr_11487_11558[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 19))
{var inst_11334 = (state_11437[25]);var inst_11338 = cljs.core.chunk_first.call(null,inst_11334);var inst_11339 = cljs.core.chunk_rest.call(null,inst_11334);var inst_11340 = cljs.core.count.call(null,inst_11338);var inst_11314 = inst_11339;var inst_11315 = inst_11338;var inst_11316 = inst_11340;var inst_11317 = 0;var state_11437__$1 = (function (){var statearr_11488 = state_11437;(statearr_11488[14] = inst_11317);
(statearr_11488[15] = inst_11314);
(statearr_11488[16] = inst_11315);
(statearr_11488[17] = inst_11316);
return statearr_11488;
})();var statearr_11489_11559 = state_11437__$1;(statearr_11489_11559[2] = null);
(statearr_11489_11559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 20))
{var inst_11334 = (state_11437[25]);var inst_11344 = cljs.core.first.call(null,inst_11334);var inst_11345 = cljs.core.nth.call(null,inst_11344,0,null);var inst_11346 = cljs.core.nth.call(null,inst_11344,1,null);var state_11437__$1 = (function (){var statearr_11490 = state_11437;(statearr_11490[28] = inst_11345);
return statearr_11490;
})();if(cljs.core.truth_(inst_11346))
{var statearr_11491_11560 = state_11437__$1;(statearr_11491_11560[1] = 22);
} else
{var statearr_11492_11561 = state_11437__$1;(statearr_11492_11561[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 21))
{var inst_11355 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11493_11562 = state_11437__$1;(statearr_11493_11562[2] = inst_11355);
(statearr_11493_11562[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 22))
{var inst_11345 = (state_11437[28]);var inst_11348 = cljs.core.async.close_BANG_.call(null,inst_11345);var state_11437__$1 = state_11437;var statearr_11494_11563 = state_11437__$1;(statearr_11494_11563[2] = inst_11348);
(statearr_11494_11563[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 23))
{var state_11437__$1 = state_11437;var statearr_11495_11564 = state_11437__$1;(statearr_11495_11564[2] = null);
(statearr_11495_11564[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 24))
{var inst_11334 = (state_11437[25]);var inst_11351 = (state_11437[2]);var inst_11352 = cljs.core.next.call(null,inst_11334);var inst_11314 = inst_11352;var inst_11315 = null;var inst_11316 = 0;var inst_11317 = 0;var state_11437__$1 = (function (){var statearr_11496 = state_11437;(statearr_11496[14] = inst_11317);
(statearr_11496[29] = inst_11351);
(statearr_11496[15] = inst_11314);
(statearr_11496[16] = inst_11315);
(statearr_11496[17] = inst_11316);
return statearr_11496;
})();var statearr_11497_11565 = state_11437__$1;(statearr_11497_11565[2] = null);
(statearr_11497_11565[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 25))
{var inst_11376 = (state_11437[12]);var inst_11375 = (state_11437[13]);var inst_11378 = (inst_11376 < inst_11375);var inst_11379 = inst_11378;var state_11437__$1 = state_11437;if(cljs.core.truth_(inst_11379))
{var statearr_11498_11566 = state_11437__$1;(statearr_11498_11566[1] = 27);
} else
{var statearr_11499_11567 = state_11437__$1;(statearr_11499_11567[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 26))
{var inst_11365 = (state_11437[19]);var inst_11423 = (state_11437[2]);var inst_11424 = cljs.core.seq.call(null,inst_11365);var state_11437__$1 = (function (){var statearr_11500 = state_11437;(statearr_11500[30] = inst_11423);
return statearr_11500;
})();if(inst_11424)
{var statearr_11501_11568 = state_11437__$1;(statearr_11501_11568[1] = 42);
} else
{var statearr_11502_11569 = state_11437__$1;(statearr_11502_11569[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 27))
{var inst_11374 = (state_11437[11]);var inst_11376 = (state_11437[12]);var inst_11381 = cljs.core._nth.call(null,inst_11374,inst_11376);var state_11437__$1 = (function (){var statearr_11503 = state_11437;(statearr_11503[7] = inst_11381);
return statearr_11503;
})();var statearr_11504_11570 = state_11437__$1;(statearr_11504_11570[2] = null);
(statearr_11504_11570[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 28))
{var inst_11373 = (state_11437[10]);var inst_11394 = (state_11437[9]);var inst_11394__$1 = cljs.core.seq.call(null,inst_11373);var state_11437__$1 = (function (){var statearr_11508 = state_11437;(statearr_11508[9] = inst_11394__$1);
return statearr_11508;
})();if(inst_11394__$1)
{var statearr_11509_11571 = state_11437__$1;(statearr_11509_11571[1] = 33);
} else
{var statearr_11510_11572 = state_11437__$1;(statearr_11510_11572[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 29))
{var inst_11421 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11511_11573 = state_11437__$1;(statearr_11511_11573[2] = inst_11421);
(statearr_11511_11573[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 30))
{var inst_11373 = (state_11437[10]);var inst_11374 = (state_11437[11]);var inst_11376 = (state_11437[12]);var inst_11375 = (state_11437[13]);var inst_11390 = (state_11437[2]);var inst_11391 = (inst_11376 + 1);var tmp11505 = inst_11373;var tmp11506 = inst_11374;var tmp11507 = inst_11375;var inst_11373__$1 = tmp11505;var inst_11374__$1 = tmp11506;var inst_11375__$1 = tmp11507;var inst_11376__$1 = inst_11391;var state_11437__$1 = (function (){var statearr_11512 = state_11437;(statearr_11512[10] = inst_11373__$1);
(statearr_11512[11] = inst_11374__$1);
(statearr_11512[12] = inst_11376__$1);
(statearr_11512[13] = inst_11375__$1);
(statearr_11512[31] = inst_11390);
return statearr_11512;
})();var statearr_11513_11574 = state_11437__$1;(statearr_11513_11574[2] = null);
(statearr_11513_11574[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 31))
{var inst_11381 = (state_11437[7]);var inst_11382 = (state_11437[2]);var inst_11383 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11384 = cljs.core.async.untap_STAR_.call(null,m,inst_11381);var state_11437__$1 = (function (){var statearr_11514 = state_11437;(statearr_11514[32] = inst_11382);
(statearr_11514[33] = inst_11383);
return statearr_11514;
})();var statearr_11515_11575 = state_11437__$1;(statearr_11515_11575[2] = inst_11384);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_11519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11519[0] = state_machine__6178__auto__);
(statearr_11519[1] = 1);
return statearr_11519;
});
var state_machine__6178__auto____1 = (function (state_11437){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11437);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11520){if((e11520 instanceof Object))
{var ex__6181__auto__ = e11520;var statearr_11521_11576 = state_11437;(statearr_11521_11576[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11577 = state_11437;
state_11437 = G__11577;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11437){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11522 = f__6193__auto__.call(null);(statearr_11522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11523);
return statearr_11522;
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
cljs.core.async.Mix = (function (){var obj11579 = {};return obj11579;
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
;var m = (function (){if(typeof cljs.core.async.t11689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11689 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11690){
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
this.meta11690 = meta11690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11689.cljs$lang$type = true;
cljs.core.async.t11689.cljs$lang$ctorStr = "cljs.core.async/t11689";
cljs.core.async.t11689.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11689");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11691){var self__ = this;
var _11691__$1 = this;return self__.meta11690;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11691,meta11690__$1){var self__ = this;
var _11691__$1 = this;return (new cljs.core.async.t11689(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11690__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11689 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11689(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11690){return (new cljs.core.async.t11689(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11690));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11689(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___11798 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11756){var state_val_11757 = (state_11756[1]);if((state_val_11757 === 1))
{var inst_11695 = (state_11756[7]);var inst_11695__$1 = calc_state.call(null);var inst_11696 = cljs.core.seq_QMARK_.call(null,inst_11695__$1);var state_11756__$1 = (function (){var statearr_11758 = state_11756;(statearr_11758[7] = inst_11695__$1);
return statearr_11758;
})();if(inst_11696)
{var statearr_11759_11799 = state_11756__$1;(statearr_11759_11799[1] = 2);
} else
{var statearr_11760_11800 = state_11756__$1;(statearr_11760_11800[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 2))
{var inst_11695 = (state_11756[7]);var inst_11698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11695);var state_11756__$1 = state_11756;var statearr_11761_11801 = state_11756__$1;(statearr_11761_11801[2] = inst_11698);
(statearr_11761_11801[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 3))
{var inst_11695 = (state_11756[7]);var state_11756__$1 = state_11756;var statearr_11762_11802 = state_11756__$1;(statearr_11762_11802[2] = inst_11695);
(statearr_11762_11802[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 4))
{var inst_11695 = (state_11756[7]);var inst_11701 = (state_11756[2]);var inst_11702 = cljs.core.get.call(null,inst_11701,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11703 = cljs.core.get.call(null,inst_11701,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11704 = cljs.core.get.call(null,inst_11701,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11705 = inst_11695;var state_11756__$1 = (function (){var statearr_11763 = state_11756;(statearr_11763[8] = inst_11703);
(statearr_11763[9] = inst_11702);
(statearr_11763[10] = inst_11705);
(statearr_11763[11] = inst_11704);
return statearr_11763;
})();var statearr_11764_11803 = state_11756__$1;(statearr_11764_11803[2] = null);
(statearr_11764_11803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 5))
{var inst_11705 = (state_11756[10]);var inst_11708 = cljs.core.seq_QMARK_.call(null,inst_11705);var state_11756__$1 = state_11756;if(inst_11708)
{var statearr_11765_11804 = state_11756__$1;(statearr_11765_11804[1] = 7);
} else
{var statearr_11766_11805 = state_11756__$1;(statearr_11766_11805[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 6))
{var inst_11754 = (state_11756[2]);var state_11756__$1 = state_11756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11756__$1,inst_11754);
} else
{if((state_val_11757 === 7))
{var inst_11705 = (state_11756[10]);var inst_11710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11705);var state_11756__$1 = state_11756;var statearr_11767_11806 = state_11756__$1;(statearr_11767_11806[2] = inst_11710);
(statearr_11767_11806[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 8))
{var inst_11705 = (state_11756[10]);var state_11756__$1 = state_11756;var statearr_11768_11807 = state_11756__$1;(statearr_11768_11807[2] = inst_11705);
(statearr_11768_11807[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 9))
{var inst_11713 = (state_11756[12]);var inst_11713__$1 = (state_11756[2]);var inst_11714 = cljs.core.get.call(null,inst_11713__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11715 = cljs.core.get.call(null,inst_11713__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11716 = cljs.core.get.call(null,inst_11713__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11756__$1 = (function (){var statearr_11769 = state_11756;(statearr_11769[12] = inst_11713__$1);
(statearr_11769[13] = inst_11716);
(statearr_11769[14] = inst_11715);
return statearr_11769;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11756__$1,10,inst_11714);
} else
{if((state_val_11757 === 10))
{var inst_11720 = (state_11756[15]);var inst_11721 = (state_11756[16]);var inst_11719 = (state_11756[2]);var inst_11720__$1 = cljs.core.nth.call(null,inst_11719,0,null);var inst_11721__$1 = cljs.core.nth.call(null,inst_11719,1,null);var inst_11722 = (inst_11720__$1 == null);var inst_11723 = cljs.core._EQ_.call(null,inst_11721__$1,change);var inst_11724 = (inst_11722) || (inst_11723);var state_11756__$1 = (function (){var statearr_11770 = state_11756;(statearr_11770[15] = inst_11720__$1);
(statearr_11770[16] = inst_11721__$1);
return statearr_11770;
})();if(cljs.core.truth_(inst_11724))
{var statearr_11771_11808 = state_11756__$1;(statearr_11771_11808[1] = 11);
} else
{var statearr_11772_11809 = state_11756__$1;(statearr_11772_11809[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 11))
{var inst_11720 = (state_11756[15]);var inst_11726 = (inst_11720 == null);var state_11756__$1 = state_11756;if(cljs.core.truth_(inst_11726))
{var statearr_11773_11810 = state_11756__$1;(statearr_11773_11810[1] = 14);
} else
{var statearr_11774_11811 = state_11756__$1;(statearr_11774_11811[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 12))
{var inst_11716 = (state_11756[13]);var inst_11721 = (state_11756[16]);var inst_11735 = (state_11756[17]);var inst_11735__$1 = inst_11716.call(null,inst_11721);var state_11756__$1 = (function (){var statearr_11775 = state_11756;(statearr_11775[17] = inst_11735__$1);
return statearr_11775;
})();if(cljs.core.truth_(inst_11735__$1))
{var statearr_11776_11812 = state_11756__$1;(statearr_11776_11812[1] = 17);
} else
{var statearr_11777_11813 = state_11756__$1;(statearr_11777_11813[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 13))
{var inst_11752 = (state_11756[2]);var state_11756__$1 = state_11756;var statearr_11778_11814 = state_11756__$1;(statearr_11778_11814[2] = inst_11752);
(statearr_11778_11814[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 14))
{var inst_11721 = (state_11756[16]);var inst_11728 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11721);var state_11756__$1 = state_11756;var statearr_11779_11815 = state_11756__$1;(statearr_11779_11815[2] = inst_11728);
(statearr_11779_11815[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 15))
{var state_11756__$1 = state_11756;var statearr_11780_11816 = state_11756__$1;(statearr_11780_11816[2] = null);
(statearr_11780_11816[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 16))
{var inst_11731 = (state_11756[2]);var inst_11732 = calc_state.call(null);var inst_11705 = inst_11732;var state_11756__$1 = (function (){var statearr_11781 = state_11756;(statearr_11781[10] = inst_11705);
(statearr_11781[18] = inst_11731);
return statearr_11781;
})();var statearr_11782_11817 = state_11756__$1;(statearr_11782_11817[2] = null);
(statearr_11782_11817[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 17))
{var inst_11735 = (state_11756[17]);var state_11756__$1 = state_11756;var statearr_11783_11818 = state_11756__$1;(statearr_11783_11818[2] = inst_11735);
(statearr_11783_11818[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 18))
{var inst_11716 = (state_11756[13]);var inst_11715 = (state_11756[14]);var inst_11721 = (state_11756[16]);var inst_11738 = cljs.core.empty_QMARK_.call(null,inst_11716);var inst_11739 = inst_11715.call(null,inst_11721);var inst_11740 = cljs.core.not.call(null,inst_11739);var inst_11741 = (inst_11738) && (inst_11740);var state_11756__$1 = state_11756;var statearr_11784_11819 = state_11756__$1;(statearr_11784_11819[2] = inst_11741);
(statearr_11784_11819[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 19))
{var inst_11743 = (state_11756[2]);var state_11756__$1 = state_11756;if(cljs.core.truth_(inst_11743))
{var statearr_11785_11820 = state_11756__$1;(statearr_11785_11820[1] = 20);
} else
{var statearr_11786_11821 = state_11756__$1;(statearr_11786_11821[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 20))
{var inst_11720 = (state_11756[15]);var state_11756__$1 = state_11756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11756__$1,23,out,inst_11720);
} else
{if((state_val_11757 === 21))
{var state_11756__$1 = state_11756;var statearr_11787_11822 = state_11756__$1;(statearr_11787_11822[2] = null);
(statearr_11787_11822[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 22))
{var inst_11713 = (state_11756[12]);var inst_11749 = (state_11756[2]);var inst_11705 = inst_11713;var state_11756__$1 = (function (){var statearr_11788 = state_11756;(statearr_11788[10] = inst_11705);
(statearr_11788[19] = inst_11749);
return statearr_11788;
})();var statearr_11789_11823 = state_11756__$1;(statearr_11789_11823[2] = null);
(statearr_11789_11823[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11757 === 23))
{var inst_11746 = (state_11756[2]);var state_11756__$1 = state_11756;var statearr_11790_11824 = state_11756__$1;(statearr_11790_11824[2] = inst_11746);
(statearr_11790_11824[1] = 22);
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
var state_machine__6178__auto____0 = (function (){var statearr_11794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11794[0] = state_machine__6178__auto__);
(statearr_11794[1] = 1);
return statearr_11794;
});
var state_machine__6178__auto____1 = (function (state_11756){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11756);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11795){if((e11795 instanceof Object))
{var ex__6181__auto__ = e11795;var statearr_11796_11825 = state_11756;(statearr_11796_11825[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11826 = state_11756;
state_11756 = G__11826;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11756){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11797 = f__6193__auto__.call(null);(statearr_11797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11798);
return statearr_11797;
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
cljs.core.async.Pub = (function (){var obj11828 = {};return obj11828;
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
return (function (p1__11829_SHARP_){if(cljs.core.truth_(p1__11829_SHARP_.call(null,topic)))
{return p1__11829_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11829_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11954 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11955){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11955 = meta11955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11954.cljs$lang$type = true;
cljs.core.async.t11954.cljs$lang$ctorStr = "cljs.core.async/t11954";
cljs.core.async.t11954.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11954");
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11956){var self__ = this;
var _11956__$1 = this;return self__.meta11955;
});})(mults,ensure_mult))
;
cljs.core.async.t11954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11956,meta11955__$1){var self__ = this;
var _11956__$1 = this;return (new cljs.core.async.t11954(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11955__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11954 = ((function (mults,ensure_mult){
return (function __GT_t11954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11955){return (new cljs.core.async.t11954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11955));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11954(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12030){var state_val_12031 = (state_12030[1]);if((state_val_12031 === 1))
{var state_12030__$1 = state_12030;var statearr_12032_12079 = state_12030__$1;(statearr_12032_12079[2] = null);
(statearr_12032_12079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 2))
{var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12030__$1,4,ch);
} else
{if((state_val_12031 === 3))
{var inst_12028 = (state_12030[2]);var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12030__$1,inst_12028);
} else
{if((state_val_12031 === 4))
{var inst_11959 = (state_12030[7]);var inst_11959__$1 = (state_12030[2]);var inst_11960 = (inst_11959__$1 == null);var state_12030__$1 = (function (){var statearr_12033 = state_12030;(statearr_12033[7] = inst_11959__$1);
return statearr_12033;
})();if(cljs.core.truth_(inst_11960))
{var statearr_12034_12080 = state_12030__$1;(statearr_12034_12080[1] = 5);
} else
{var statearr_12035_12081 = state_12030__$1;(statearr_12035_12081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 5))
{var inst_11966 = cljs.core.deref.call(null,mults);var inst_11967 = cljs.core.vals.call(null,inst_11966);var inst_11968 = cljs.core.seq.call(null,inst_11967);var inst_11969 = inst_11968;var inst_11970 = null;var inst_11971 = 0;var inst_11972 = 0;var state_12030__$1 = (function (){var statearr_12036 = state_12030;(statearr_12036[8] = inst_11972);
(statearr_12036[9] = inst_11971);
(statearr_12036[10] = inst_11970);
(statearr_12036[11] = inst_11969);
return statearr_12036;
})();var statearr_12037_12082 = state_12030__$1;(statearr_12037_12082[2] = null);
(statearr_12037_12082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 6))
{var inst_11959 = (state_12030[7]);var inst_12007 = (state_12030[12]);var inst_12009 = (state_12030[13]);var inst_12007__$1 = topic_fn.call(null,inst_11959);var inst_12008 = cljs.core.deref.call(null,mults);var inst_12009__$1 = cljs.core.get.call(null,inst_12008,inst_12007__$1);var state_12030__$1 = (function (){var statearr_12038 = state_12030;(statearr_12038[12] = inst_12007__$1);
(statearr_12038[13] = inst_12009__$1);
return statearr_12038;
})();if(cljs.core.truth_(inst_12009__$1))
{var statearr_12039_12083 = state_12030__$1;(statearr_12039_12083[1] = 19);
} else
{var statearr_12040_12084 = state_12030__$1;(statearr_12040_12084[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 7))
{var inst_12026 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12041_12085 = state_12030__$1;(statearr_12041_12085[2] = inst_12026);
(statearr_12041_12085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 8))
{var inst_11972 = (state_12030[8]);var inst_11971 = (state_12030[9]);var inst_11974 = (inst_11972 < inst_11971);var inst_11975 = inst_11974;var state_12030__$1 = state_12030;if(cljs.core.truth_(inst_11975))
{var statearr_12045_12086 = state_12030__$1;(statearr_12045_12086[1] = 10);
} else
{var statearr_12046_12087 = state_12030__$1;(statearr_12046_12087[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 9))
{var inst_12005 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12047_12088 = state_12030__$1;(statearr_12047_12088[2] = inst_12005);
(statearr_12047_12088[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 10))
{var inst_11972 = (state_12030[8]);var inst_11971 = (state_12030[9]);var inst_11970 = (state_12030[10]);var inst_11969 = (state_12030[11]);var inst_11977 = cljs.core._nth.call(null,inst_11970,inst_11972);var inst_11978 = cljs.core.async.muxch_STAR_.call(null,inst_11977);var inst_11979 = cljs.core.async.close_BANG_.call(null,inst_11978);var inst_11980 = (inst_11972 + 1);var tmp12042 = inst_11971;var tmp12043 = inst_11970;var tmp12044 = inst_11969;var inst_11969__$1 = tmp12044;var inst_11970__$1 = tmp12043;var inst_11971__$1 = tmp12042;var inst_11972__$1 = inst_11980;var state_12030__$1 = (function (){var statearr_12048 = state_12030;(statearr_12048[8] = inst_11972__$1);
(statearr_12048[9] = inst_11971__$1);
(statearr_12048[10] = inst_11970__$1);
(statearr_12048[11] = inst_11969__$1);
(statearr_12048[14] = inst_11979);
return statearr_12048;
})();var statearr_12049_12089 = state_12030__$1;(statearr_12049_12089[2] = null);
(statearr_12049_12089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 11))
{var inst_11983 = (state_12030[15]);var inst_11969 = (state_12030[11]);var inst_11983__$1 = cljs.core.seq.call(null,inst_11969);var state_12030__$1 = (function (){var statearr_12050 = state_12030;(statearr_12050[15] = inst_11983__$1);
return statearr_12050;
})();if(inst_11983__$1)
{var statearr_12051_12090 = state_12030__$1;(statearr_12051_12090[1] = 13);
} else
{var statearr_12052_12091 = state_12030__$1;(statearr_12052_12091[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 12))
{var inst_12003 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12053_12092 = state_12030__$1;(statearr_12053_12092[2] = inst_12003);
(statearr_12053_12092[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 13))
{var inst_11983 = (state_12030[15]);var inst_11985 = cljs.core.chunked_seq_QMARK_.call(null,inst_11983);var state_12030__$1 = state_12030;if(inst_11985)
{var statearr_12054_12093 = state_12030__$1;(statearr_12054_12093[1] = 16);
} else
{var statearr_12055_12094 = state_12030__$1;(statearr_12055_12094[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 14))
{var state_12030__$1 = state_12030;var statearr_12056_12095 = state_12030__$1;(statearr_12056_12095[2] = null);
(statearr_12056_12095[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 15))
{var inst_12001 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12057_12096 = state_12030__$1;(statearr_12057_12096[2] = inst_12001);
(statearr_12057_12096[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 16))
{var inst_11983 = (state_12030[15]);var inst_11987 = cljs.core.chunk_first.call(null,inst_11983);var inst_11988 = cljs.core.chunk_rest.call(null,inst_11983);var inst_11989 = cljs.core.count.call(null,inst_11987);var inst_11969 = inst_11988;var inst_11970 = inst_11987;var inst_11971 = inst_11989;var inst_11972 = 0;var state_12030__$1 = (function (){var statearr_12058 = state_12030;(statearr_12058[8] = inst_11972);
(statearr_12058[9] = inst_11971);
(statearr_12058[10] = inst_11970);
(statearr_12058[11] = inst_11969);
return statearr_12058;
})();var statearr_12059_12097 = state_12030__$1;(statearr_12059_12097[2] = null);
(statearr_12059_12097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 17))
{var inst_11983 = (state_12030[15]);var inst_11992 = cljs.core.first.call(null,inst_11983);var inst_11993 = cljs.core.async.muxch_STAR_.call(null,inst_11992);var inst_11994 = cljs.core.async.close_BANG_.call(null,inst_11993);var inst_11995 = cljs.core.next.call(null,inst_11983);var inst_11969 = inst_11995;var inst_11970 = null;var inst_11971 = 0;var inst_11972 = 0;var state_12030__$1 = (function (){var statearr_12060 = state_12030;(statearr_12060[8] = inst_11972);
(statearr_12060[9] = inst_11971);
(statearr_12060[10] = inst_11970);
(statearr_12060[11] = inst_11969);
(statearr_12060[16] = inst_11994);
return statearr_12060;
})();var statearr_12061_12098 = state_12030__$1;(statearr_12061_12098[2] = null);
(statearr_12061_12098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 18))
{var inst_11998 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12062_12099 = state_12030__$1;(statearr_12062_12099[2] = inst_11998);
(statearr_12062_12099[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 19))
{var state_12030__$1 = state_12030;var statearr_12063_12100 = state_12030__$1;(statearr_12063_12100[2] = null);
(statearr_12063_12100[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 20))
{var state_12030__$1 = state_12030;var statearr_12064_12101 = state_12030__$1;(statearr_12064_12101[2] = null);
(statearr_12064_12101[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 21))
{var inst_12023 = (state_12030[2]);var state_12030__$1 = (function (){var statearr_12065 = state_12030;(statearr_12065[17] = inst_12023);
return statearr_12065;
})();var statearr_12066_12102 = state_12030__$1;(statearr_12066_12102[2] = null);
(statearr_12066_12102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 22))
{var inst_12020 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12067_12103 = state_12030__$1;(statearr_12067_12103[2] = inst_12020);
(statearr_12067_12103[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 23))
{var inst_12007 = (state_12030[12]);var inst_12011 = (state_12030[2]);var inst_12012 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12007);var state_12030__$1 = (function (){var statearr_12068 = state_12030;(statearr_12068[18] = inst_12011);
return statearr_12068;
})();var statearr_12069_12104 = state_12030__$1;(statearr_12069_12104[2] = inst_12012);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12030__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 24))
{var inst_11959 = (state_12030[7]);var inst_12009 = (state_12030[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12030,23,Object,null,22);var inst_12016 = cljs.core.async.muxch_STAR_.call(null,inst_12009);var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12030__$1,25,inst_12016,inst_11959);
} else
{if((state_val_12031 === 25))
{var inst_12018 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12070_12105 = state_12030__$1;(statearr_12070_12105[2] = inst_12018);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12030__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_12074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12074[0] = state_machine__6178__auto__);
(statearr_12074[1] = 1);
return statearr_12074;
});
var state_machine__6178__auto____1 = (function (state_12030){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12075){if((e12075 instanceof Object))
{var ex__6181__auto__ = e12075;var statearr_12076_12106 = state_12030;(statearr_12076_12106[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12107 = state_12030;
state_12030 = G__12107;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12030){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12077 = f__6193__auto__.call(null);(statearr_12077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12078);
return statearr_12077;
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
,cljs.core.range.call(null,cnt));var c__6192__auto___12244 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12214){var state_val_12215 = (state_12214[1]);if((state_val_12215 === 1))
{var state_12214__$1 = state_12214;var statearr_12216_12245 = state_12214__$1;(statearr_12216_12245[2] = null);
(statearr_12216_12245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 2))
{var inst_12177 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12178 = 0;var state_12214__$1 = (function (){var statearr_12217 = state_12214;(statearr_12217[7] = inst_12178);
(statearr_12217[8] = inst_12177);
return statearr_12217;
})();var statearr_12218_12246 = state_12214__$1;(statearr_12218_12246[2] = null);
(statearr_12218_12246[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 3))
{var inst_12212 = (state_12214[2]);var state_12214__$1 = state_12214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12214__$1,inst_12212);
} else
{if((state_val_12215 === 4))
{var inst_12178 = (state_12214[7]);var inst_12180 = (inst_12178 < cnt);var state_12214__$1 = state_12214;if(cljs.core.truth_(inst_12180))
{var statearr_12219_12247 = state_12214__$1;(statearr_12219_12247[1] = 6);
} else
{var statearr_12220_12248 = state_12214__$1;(statearr_12220_12248[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 5))
{var inst_12198 = (state_12214[2]);var state_12214__$1 = (function (){var statearr_12221 = state_12214;(statearr_12221[9] = inst_12198);
return statearr_12221;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12214__$1,12,dchan);
} else
{if((state_val_12215 === 6))
{var state_12214__$1 = state_12214;var statearr_12222_12249 = state_12214__$1;(statearr_12222_12249[2] = null);
(statearr_12222_12249[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 7))
{var state_12214__$1 = state_12214;var statearr_12223_12250 = state_12214__$1;(statearr_12223_12250[2] = null);
(statearr_12223_12250[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 8))
{var inst_12196 = (state_12214[2]);var state_12214__$1 = state_12214;var statearr_12224_12251 = state_12214__$1;(statearr_12224_12251[2] = inst_12196);
(statearr_12224_12251[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 9))
{var inst_12178 = (state_12214[7]);var inst_12191 = (state_12214[2]);var inst_12192 = (inst_12178 + 1);var inst_12178__$1 = inst_12192;var state_12214__$1 = (function (){var statearr_12225 = state_12214;(statearr_12225[10] = inst_12191);
(statearr_12225[7] = inst_12178__$1);
return statearr_12225;
})();var statearr_12226_12252 = state_12214__$1;(statearr_12226_12252[2] = null);
(statearr_12226_12252[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 10))
{var inst_12182 = (state_12214[2]);var inst_12183 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12214__$1 = (function (){var statearr_12227 = state_12214;(statearr_12227[11] = inst_12182);
return statearr_12227;
})();var statearr_12228_12253 = state_12214__$1;(statearr_12228_12253[2] = inst_12183);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 11))
{var inst_12178 = (state_12214[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12214,10,Object,null,9);var inst_12187 = chs__$1.call(null,inst_12178);var inst_12188 = done.call(null,inst_12178);var inst_12189 = cljs.core.async.take_BANG_.call(null,inst_12187,inst_12188);var state_12214__$1 = state_12214;var statearr_12229_12254 = state_12214__$1;(statearr_12229_12254[2] = inst_12189);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 12))
{var inst_12200 = (state_12214[12]);var inst_12200__$1 = (state_12214[2]);var inst_12201 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12200__$1);var state_12214__$1 = (function (){var statearr_12230 = state_12214;(statearr_12230[12] = inst_12200__$1);
return statearr_12230;
})();if(cljs.core.truth_(inst_12201))
{var statearr_12231_12255 = state_12214__$1;(statearr_12231_12255[1] = 13);
} else
{var statearr_12232_12256 = state_12214__$1;(statearr_12232_12256[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 13))
{var inst_12203 = cljs.core.async.close_BANG_.call(null,out);var state_12214__$1 = state_12214;var statearr_12233_12257 = state_12214__$1;(statearr_12233_12257[2] = inst_12203);
(statearr_12233_12257[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 14))
{var inst_12200 = (state_12214[12]);var inst_12205 = cljs.core.apply.call(null,f,inst_12200);var state_12214__$1 = state_12214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12214__$1,16,out,inst_12205);
} else
{if((state_val_12215 === 15))
{var inst_12210 = (state_12214[2]);var state_12214__$1 = state_12214;var statearr_12234_12258 = state_12214__$1;(statearr_12234_12258[2] = inst_12210);
(statearr_12234_12258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 16))
{var inst_12207 = (state_12214[2]);var state_12214__$1 = (function (){var statearr_12235 = state_12214;(statearr_12235[13] = inst_12207);
return statearr_12235;
})();var statearr_12236_12259 = state_12214__$1;(statearr_12236_12259[2] = null);
(statearr_12236_12259[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12240[0] = state_machine__6178__auto__);
(statearr_12240[1] = 1);
return statearr_12240;
});
var state_machine__6178__auto____1 = (function (state_12214){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12214);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12241){if((e12241 instanceof Object))
{var ex__6181__auto__ = e12241;var statearr_12242_12260 = state_12214;(statearr_12242_12260[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12261 = state_12214;
state_12214 = G__12261;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12214){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12243 = f__6193__auto__.call(null);(statearr_12243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12244);
return statearr_12243;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12345){var state_val_12346 = (state_12345[1]);if((state_val_12346 === 1))
{var inst_12316 = cljs.core.vec.call(null,chs);var inst_12317 = inst_12316;var state_12345__$1 = (function (){var statearr_12347 = state_12345;(statearr_12347[7] = inst_12317);
return statearr_12347;
})();var statearr_12348_12370 = state_12345__$1;(statearr_12348_12370[2] = null);
(statearr_12348_12370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 2))
{var inst_12317 = (state_12345[7]);var inst_12319 = cljs.core.count.call(null,inst_12317);var inst_12320 = (inst_12319 > 0);var state_12345__$1 = state_12345;if(cljs.core.truth_(inst_12320))
{var statearr_12349_12371 = state_12345__$1;(statearr_12349_12371[1] = 4);
} else
{var statearr_12350_12372 = state_12345__$1;(statearr_12350_12372[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 3))
{var inst_12343 = (state_12345[2]);var state_12345__$1 = state_12345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12345__$1,inst_12343);
} else
{if((state_val_12346 === 4))
{var inst_12317 = (state_12345[7]);var state_12345__$1 = state_12345;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12345__$1,7,inst_12317);
} else
{if((state_val_12346 === 5))
{var inst_12339 = cljs.core.async.close_BANG_.call(null,out);var state_12345__$1 = state_12345;var statearr_12351_12373 = state_12345__$1;(statearr_12351_12373[2] = inst_12339);
(statearr_12351_12373[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 6))
{var inst_12341 = (state_12345[2]);var state_12345__$1 = state_12345;var statearr_12352_12374 = state_12345__$1;(statearr_12352_12374[2] = inst_12341);
(statearr_12352_12374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 7))
{var inst_12325 = (state_12345[8]);var inst_12324 = (state_12345[9]);var inst_12324__$1 = (state_12345[2]);var inst_12325__$1 = cljs.core.nth.call(null,inst_12324__$1,0,null);var inst_12326 = cljs.core.nth.call(null,inst_12324__$1,1,null);var inst_12327 = (inst_12325__$1 == null);var state_12345__$1 = (function (){var statearr_12353 = state_12345;(statearr_12353[8] = inst_12325__$1);
(statearr_12353[10] = inst_12326);
(statearr_12353[9] = inst_12324__$1);
return statearr_12353;
})();if(cljs.core.truth_(inst_12327))
{var statearr_12354_12375 = state_12345__$1;(statearr_12354_12375[1] = 8);
} else
{var statearr_12355_12376 = state_12345__$1;(statearr_12355_12376[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 8))
{var inst_12325 = (state_12345[8]);var inst_12326 = (state_12345[10]);var inst_12324 = (state_12345[9]);var inst_12317 = (state_12345[7]);var inst_12329 = (function (){var c = inst_12326;var v = inst_12325;var vec__12322 = inst_12324;var cs = inst_12317;return ((function (c,v,vec__12322,cs,inst_12325,inst_12326,inst_12324,inst_12317,state_val_12346){
return (function (p1__12262_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12262_SHARP_);
});
;})(c,v,vec__12322,cs,inst_12325,inst_12326,inst_12324,inst_12317,state_val_12346))
})();var inst_12330 = cljs.core.filterv.call(null,inst_12329,inst_12317);var inst_12317__$1 = inst_12330;var state_12345__$1 = (function (){var statearr_12356 = state_12345;(statearr_12356[7] = inst_12317__$1);
return statearr_12356;
})();var statearr_12357_12377 = state_12345__$1;(statearr_12357_12377[2] = null);
(statearr_12357_12377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 9))
{var inst_12325 = (state_12345[8]);var state_12345__$1 = state_12345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12345__$1,11,out,inst_12325);
} else
{if((state_val_12346 === 10))
{var inst_12337 = (state_12345[2]);var state_12345__$1 = state_12345;var statearr_12359_12378 = state_12345__$1;(statearr_12359_12378[2] = inst_12337);
(statearr_12359_12378[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12346 === 11))
{var inst_12317 = (state_12345[7]);var inst_12334 = (state_12345[2]);var tmp12358 = inst_12317;var inst_12317__$1 = tmp12358;var state_12345__$1 = (function (){var statearr_12360 = state_12345;(statearr_12360[11] = inst_12334);
(statearr_12360[7] = inst_12317__$1);
return statearr_12360;
})();var statearr_12361_12379 = state_12345__$1;(statearr_12361_12379[2] = null);
(statearr_12361_12379[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12365 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12365[0] = state_machine__6178__auto__);
(statearr_12365[1] = 1);
return statearr_12365;
});
var state_machine__6178__auto____1 = (function (state_12345){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12345);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12366){if((e12366 instanceof Object))
{var ex__6181__auto__ = e12366;var statearr_12367_12380 = state_12345;(statearr_12367_12380[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12381 = state_12345;
state_12345 = G__12381;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12345){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12368 = f__6193__auto__.call(null);(statearr_12368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12369);
return statearr_12368;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12451){var state_val_12452 = (state_12451[1]);if((state_val_12452 === 1))
{var inst_12428 = 0;var state_12451__$1 = (function (){var statearr_12453 = state_12451;(statearr_12453[7] = inst_12428);
return statearr_12453;
})();var statearr_12454_12475 = state_12451__$1;(statearr_12454_12475[2] = null);
(statearr_12454_12475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 2))
{var inst_12428 = (state_12451[7]);var inst_12430 = (inst_12428 < n);var state_12451__$1 = state_12451;if(cljs.core.truth_(inst_12430))
{var statearr_12455_12476 = state_12451__$1;(statearr_12455_12476[1] = 4);
} else
{var statearr_12456_12477 = state_12451__$1;(statearr_12456_12477[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 3))
{var inst_12448 = (state_12451[2]);var inst_12449 = cljs.core.async.close_BANG_.call(null,out);var state_12451__$1 = (function (){var statearr_12457 = state_12451;(statearr_12457[8] = inst_12448);
return statearr_12457;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12451__$1,inst_12449);
} else
{if((state_val_12452 === 4))
{var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12451__$1,7,ch);
} else
{if((state_val_12452 === 5))
{var state_12451__$1 = state_12451;var statearr_12458_12478 = state_12451__$1;(statearr_12458_12478[2] = null);
(statearr_12458_12478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 6))
{var inst_12446 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12459_12479 = state_12451__$1;(statearr_12459_12479[2] = inst_12446);
(statearr_12459_12479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 7))
{var inst_12433 = (state_12451[9]);var inst_12433__$1 = (state_12451[2]);var inst_12434 = (inst_12433__$1 == null);var inst_12435 = cljs.core.not.call(null,inst_12434);var state_12451__$1 = (function (){var statearr_12460 = state_12451;(statearr_12460[9] = inst_12433__$1);
return statearr_12460;
})();if(inst_12435)
{var statearr_12461_12480 = state_12451__$1;(statearr_12461_12480[1] = 8);
} else
{var statearr_12462_12481 = state_12451__$1;(statearr_12462_12481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 8))
{var inst_12433 = (state_12451[9]);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12451__$1,11,out,inst_12433);
} else
{if((state_val_12452 === 9))
{var state_12451__$1 = state_12451;var statearr_12463_12482 = state_12451__$1;(statearr_12463_12482[2] = null);
(statearr_12463_12482[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 10))
{var inst_12443 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12464_12483 = state_12451__$1;(statearr_12464_12483[2] = inst_12443);
(statearr_12464_12483[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 11))
{var inst_12428 = (state_12451[7]);var inst_12438 = (state_12451[2]);var inst_12439 = (inst_12428 + 1);var inst_12428__$1 = inst_12439;var state_12451__$1 = (function (){var statearr_12465 = state_12451;(statearr_12465[7] = inst_12428__$1);
(statearr_12465[10] = inst_12438);
return statearr_12465;
})();var statearr_12466_12484 = state_12451__$1;(statearr_12466_12484[2] = null);
(statearr_12466_12484[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12470 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12470[0] = state_machine__6178__auto__);
(statearr_12470[1] = 1);
return statearr_12470;
});
var state_machine__6178__auto____1 = (function (state_12451){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12471){if((e12471 instanceof Object))
{var ex__6181__auto__ = e12471;var statearr_12472_12485 = state_12451;(statearr_12472_12485[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12486 = state_12451;
state_12451 = G__12486;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12451){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12473 = f__6193__auto__.call(null);(statearr_12473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12474);
return statearr_12473;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12558){var state_val_12559 = (state_12558[1]);if((state_val_12559 === 1))
{var inst_12535 = null;var state_12558__$1 = (function (){var statearr_12560 = state_12558;(statearr_12560[7] = inst_12535);
return statearr_12560;
})();var statearr_12561_12584 = state_12558__$1;(statearr_12561_12584[2] = null);
(statearr_12561_12584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 2))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,4,ch);
} else
{if((state_val_12559 === 3))
{var inst_12555 = (state_12558[2]);var inst_12556 = cljs.core.async.close_BANG_.call(null,out);var state_12558__$1 = (function (){var statearr_12562 = state_12558;(statearr_12562[8] = inst_12555);
return statearr_12562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12558__$1,inst_12556);
} else
{if((state_val_12559 === 4))
{var inst_12538 = (state_12558[9]);var inst_12538__$1 = (state_12558[2]);var inst_12539 = (inst_12538__$1 == null);var inst_12540 = cljs.core.not.call(null,inst_12539);var state_12558__$1 = (function (){var statearr_12563 = state_12558;(statearr_12563[9] = inst_12538__$1);
return statearr_12563;
})();if(inst_12540)
{var statearr_12564_12585 = state_12558__$1;(statearr_12564_12585[1] = 5);
} else
{var statearr_12565_12586 = state_12558__$1;(statearr_12565_12586[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 5))
{var inst_12535 = (state_12558[7]);var inst_12538 = (state_12558[9]);var inst_12542 = cljs.core._EQ_.call(null,inst_12538,inst_12535);var state_12558__$1 = state_12558;if(inst_12542)
{var statearr_12566_12587 = state_12558__$1;(statearr_12566_12587[1] = 8);
} else
{var statearr_12567_12588 = state_12558__$1;(statearr_12567_12588[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 6))
{var state_12558__$1 = state_12558;var statearr_12569_12589 = state_12558__$1;(statearr_12569_12589[2] = null);
(statearr_12569_12589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 7))
{var inst_12553 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12570_12590 = state_12558__$1;(statearr_12570_12590[2] = inst_12553);
(statearr_12570_12590[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 8))
{var inst_12535 = (state_12558[7]);var tmp12568 = inst_12535;var inst_12535__$1 = tmp12568;var state_12558__$1 = (function (){var statearr_12571 = state_12558;(statearr_12571[7] = inst_12535__$1);
return statearr_12571;
})();var statearr_12572_12591 = state_12558__$1;(statearr_12572_12591[2] = null);
(statearr_12572_12591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 9))
{var inst_12538 = (state_12558[9]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12558__$1,11,out,inst_12538);
} else
{if((state_val_12559 === 10))
{var inst_12550 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12573_12592 = state_12558__$1;(statearr_12573_12592[2] = inst_12550);
(statearr_12573_12592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 11))
{var inst_12538 = (state_12558[9]);var inst_12547 = (state_12558[2]);var inst_12535 = inst_12538;var state_12558__$1 = (function (){var statearr_12574 = state_12558;(statearr_12574[10] = inst_12547);
(statearr_12574[7] = inst_12535);
return statearr_12574;
})();var statearr_12575_12593 = state_12558__$1;(statearr_12575_12593[2] = null);
(statearr_12575_12593[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12579 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12579[0] = state_machine__6178__auto__);
(statearr_12579[1] = 1);
return statearr_12579;
});
var state_machine__6178__auto____1 = (function (state_12558){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12580){if((e12580 instanceof Object))
{var ex__6181__auto__ = e12580;var statearr_12581_12594 = state_12558;(statearr_12581_12594[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12595 = state_12558;
state_12558 = G__12595;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12558){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12582 = f__6193__auto__.call(null);(statearr_12582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12583);
return statearr_12582;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12730 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12700){var state_val_12701 = (state_12700[1]);if((state_val_12701 === 1))
{var inst_12663 = (new Array(n));var inst_12664 = inst_12663;var inst_12665 = 0;var state_12700__$1 = (function (){var statearr_12702 = state_12700;(statearr_12702[7] = inst_12665);
(statearr_12702[8] = inst_12664);
return statearr_12702;
})();var statearr_12703_12731 = state_12700__$1;(statearr_12703_12731[2] = null);
(statearr_12703_12731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 2))
{var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12700__$1,4,ch);
} else
{if((state_val_12701 === 3))
{var inst_12698 = (state_12700[2]);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12700__$1,inst_12698);
} else
{if((state_val_12701 === 4))
{var inst_12668 = (state_12700[9]);var inst_12668__$1 = (state_12700[2]);var inst_12669 = (inst_12668__$1 == null);var inst_12670 = cljs.core.not.call(null,inst_12669);var state_12700__$1 = (function (){var statearr_12704 = state_12700;(statearr_12704[9] = inst_12668__$1);
return statearr_12704;
})();if(inst_12670)
{var statearr_12705_12732 = state_12700__$1;(statearr_12705_12732[1] = 5);
} else
{var statearr_12706_12733 = state_12700__$1;(statearr_12706_12733[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 5))
{var inst_12668 = (state_12700[9]);var inst_12673 = (state_12700[10]);var inst_12665 = (state_12700[7]);var inst_12664 = (state_12700[8]);var inst_12672 = (inst_12664[inst_12665] = inst_12668);var inst_12673__$1 = (inst_12665 + 1);var inst_12674 = (inst_12673__$1 < n);var state_12700__$1 = (function (){var statearr_12707 = state_12700;(statearr_12707[10] = inst_12673__$1);
(statearr_12707[11] = inst_12672);
return statearr_12707;
})();if(cljs.core.truth_(inst_12674))
{var statearr_12708_12734 = state_12700__$1;(statearr_12708_12734[1] = 8);
} else
{var statearr_12709_12735 = state_12700__$1;(statearr_12709_12735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 6))
{var inst_12665 = (state_12700[7]);var inst_12686 = (inst_12665 > 0);var state_12700__$1 = state_12700;if(cljs.core.truth_(inst_12686))
{var statearr_12711_12736 = state_12700__$1;(statearr_12711_12736[1] = 12);
} else
{var statearr_12712_12737 = state_12700__$1;(statearr_12712_12737[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 7))
{var inst_12696 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12713_12738 = state_12700__$1;(statearr_12713_12738[2] = inst_12696);
(statearr_12713_12738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 8))
{var inst_12673 = (state_12700[10]);var inst_12664 = (state_12700[8]);var tmp12710 = inst_12664;var inst_12664__$1 = tmp12710;var inst_12665 = inst_12673;var state_12700__$1 = (function (){var statearr_12714 = state_12700;(statearr_12714[7] = inst_12665);
(statearr_12714[8] = inst_12664__$1);
return statearr_12714;
})();var statearr_12715_12739 = state_12700__$1;(statearr_12715_12739[2] = null);
(statearr_12715_12739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 9))
{var inst_12664 = (state_12700[8]);var inst_12678 = cljs.core.vec.call(null,inst_12664);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12700__$1,11,out,inst_12678);
} else
{if((state_val_12701 === 10))
{var inst_12684 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12716_12740 = state_12700__$1;(statearr_12716_12740[2] = inst_12684);
(statearr_12716_12740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 11))
{var inst_12680 = (state_12700[2]);var inst_12681 = (new Array(n));var inst_12664 = inst_12681;var inst_12665 = 0;var state_12700__$1 = (function (){var statearr_12717 = state_12700;(statearr_12717[7] = inst_12665);
(statearr_12717[8] = inst_12664);
(statearr_12717[12] = inst_12680);
return statearr_12717;
})();var statearr_12718_12741 = state_12700__$1;(statearr_12718_12741[2] = null);
(statearr_12718_12741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 12))
{var inst_12664 = (state_12700[8]);var inst_12688 = cljs.core.vec.call(null,inst_12664);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12700__$1,15,out,inst_12688);
} else
{if((state_val_12701 === 13))
{var state_12700__$1 = state_12700;var statearr_12719_12742 = state_12700__$1;(statearr_12719_12742[2] = null);
(statearr_12719_12742[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 14))
{var inst_12693 = (state_12700[2]);var inst_12694 = cljs.core.async.close_BANG_.call(null,out);var state_12700__$1 = (function (){var statearr_12720 = state_12700;(statearr_12720[13] = inst_12693);
return statearr_12720;
})();var statearr_12721_12743 = state_12700__$1;(statearr_12721_12743[2] = inst_12694);
(statearr_12721_12743[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 15))
{var inst_12690 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12722_12744 = state_12700__$1;(statearr_12722_12744[2] = inst_12690);
(statearr_12722_12744[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_12726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12726[0] = state_machine__6178__auto__);
(statearr_12726[1] = 1);
return statearr_12726;
});
var state_machine__6178__auto____1 = (function (state_12700){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12727){if((e12727 instanceof Object))
{var ex__6181__auto__ = e12727;var statearr_12728_12745 = state_12700;(statearr_12728_12745[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12746 = state_12700;
state_12700 = G__12746;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12700){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12729 = f__6193__auto__.call(null);(statearr_12729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12730);
return statearr_12729;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12889 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12859){var state_val_12860 = (state_12859[1]);if((state_val_12860 === 1))
{var inst_12818 = [];var inst_12819 = inst_12818;var inst_12820 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12859__$1 = (function (){var statearr_12861 = state_12859;(statearr_12861[7] = inst_12820);
(statearr_12861[8] = inst_12819);
return statearr_12861;
})();var statearr_12862_12890 = state_12859__$1;(statearr_12862_12890[2] = null);
(statearr_12862_12890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 2))
{var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12859__$1,4,ch);
} else
{if((state_val_12860 === 3))
{var inst_12857 = (state_12859[2]);var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12859__$1,inst_12857);
} else
{if((state_val_12860 === 4))
{var inst_12823 = (state_12859[9]);var inst_12823__$1 = (state_12859[2]);var inst_12824 = (inst_12823__$1 == null);var inst_12825 = cljs.core.not.call(null,inst_12824);var state_12859__$1 = (function (){var statearr_12863 = state_12859;(statearr_12863[9] = inst_12823__$1);
return statearr_12863;
})();if(inst_12825)
{var statearr_12864_12891 = state_12859__$1;(statearr_12864_12891[1] = 5);
} else
{var statearr_12865_12892 = state_12859__$1;(statearr_12865_12892[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 5))
{var inst_12820 = (state_12859[7]);var inst_12823 = (state_12859[9]);var inst_12827 = (state_12859[10]);var inst_12827__$1 = f.call(null,inst_12823);var inst_12828 = cljs.core._EQ_.call(null,inst_12827__$1,inst_12820);var inst_12829 = cljs.core.keyword_identical_QMARK_.call(null,inst_12820,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12830 = (inst_12828) || (inst_12829);var state_12859__$1 = (function (){var statearr_12866 = state_12859;(statearr_12866[10] = inst_12827__$1);
return statearr_12866;
})();if(cljs.core.truth_(inst_12830))
{var statearr_12867_12893 = state_12859__$1;(statearr_12867_12893[1] = 8);
} else
{var statearr_12868_12894 = state_12859__$1;(statearr_12868_12894[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 6))
{var inst_12819 = (state_12859[8]);var inst_12844 = inst_12819.length;var inst_12845 = (inst_12844 > 0);var state_12859__$1 = state_12859;if(cljs.core.truth_(inst_12845))
{var statearr_12870_12895 = state_12859__$1;(statearr_12870_12895[1] = 12);
} else
{var statearr_12871_12896 = state_12859__$1;(statearr_12871_12896[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 7))
{var inst_12855 = (state_12859[2]);var state_12859__$1 = state_12859;var statearr_12872_12897 = state_12859__$1;(statearr_12872_12897[2] = inst_12855);
(statearr_12872_12897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 8))
{var inst_12823 = (state_12859[9]);var inst_12819 = (state_12859[8]);var inst_12827 = (state_12859[10]);var inst_12832 = inst_12819.push(inst_12823);var tmp12869 = inst_12819;var inst_12819__$1 = tmp12869;var inst_12820 = inst_12827;var state_12859__$1 = (function (){var statearr_12873 = state_12859;(statearr_12873[7] = inst_12820);
(statearr_12873[8] = inst_12819__$1);
(statearr_12873[11] = inst_12832);
return statearr_12873;
})();var statearr_12874_12898 = state_12859__$1;(statearr_12874_12898[2] = null);
(statearr_12874_12898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 9))
{var inst_12819 = (state_12859[8]);var inst_12835 = cljs.core.vec.call(null,inst_12819);var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12859__$1,11,out,inst_12835);
} else
{if((state_val_12860 === 10))
{var inst_12842 = (state_12859[2]);var state_12859__$1 = state_12859;var statearr_12875_12899 = state_12859__$1;(statearr_12875_12899[2] = inst_12842);
(statearr_12875_12899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 11))
{var inst_12823 = (state_12859[9]);var inst_12827 = (state_12859[10]);var inst_12837 = (state_12859[2]);var inst_12838 = [];var inst_12839 = inst_12838.push(inst_12823);var inst_12819 = inst_12838;var inst_12820 = inst_12827;var state_12859__$1 = (function (){var statearr_12876 = state_12859;(statearr_12876[12] = inst_12837);
(statearr_12876[7] = inst_12820);
(statearr_12876[13] = inst_12839);
(statearr_12876[8] = inst_12819);
return statearr_12876;
})();var statearr_12877_12900 = state_12859__$1;(statearr_12877_12900[2] = null);
(statearr_12877_12900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 12))
{var inst_12819 = (state_12859[8]);var inst_12847 = cljs.core.vec.call(null,inst_12819);var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12859__$1,15,out,inst_12847);
} else
{if((state_val_12860 === 13))
{var state_12859__$1 = state_12859;var statearr_12878_12901 = state_12859__$1;(statearr_12878_12901[2] = null);
(statearr_12878_12901[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 14))
{var inst_12852 = (state_12859[2]);var inst_12853 = cljs.core.async.close_BANG_.call(null,out);var state_12859__$1 = (function (){var statearr_12879 = state_12859;(statearr_12879[14] = inst_12852);
return statearr_12879;
})();var statearr_12880_12902 = state_12859__$1;(statearr_12880_12902[2] = inst_12853);
(statearr_12880_12902[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12860 === 15))
{var inst_12849 = (state_12859[2]);var state_12859__$1 = state_12859;var statearr_12881_12903 = state_12859__$1;(statearr_12881_12903[2] = inst_12849);
(statearr_12881_12903[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_12885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12885[0] = state_machine__6178__auto__);
(statearr_12885[1] = 1);
return statearr_12885;
});
var state_machine__6178__auto____1 = (function (state_12859){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12859);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12886){if((e12886 instanceof Object))
{var ex__6181__auto__ = e12886;var statearr_12887_12904 = state_12859;(statearr_12887_12904[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12905 = state_12859;
state_12859 = G__12905;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12859){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12888 = f__6193__auto__.call(null);(statearr_12888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12889);
return statearr_12888;
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