(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{wT2x:function(t,e,n){"use strict";n.r(e),n.d(e,"ObsModule",(function(){return p}));var i=n("tyNb"),r=n("XNiG"),b=n("l5mm"),s=n("PqYM"),a=n("1G5W"),c=n("fXoL");const o=[{path:"",component:(()=>{class t{constructor(){this.compDest$=new r.a,this.intervalValue=0,this.timerValue=0,this.intervalSubCount=0,this.timerSubCount=0}ngOnInit(){this.startInterval(),this.startTimer()}ngOnDestroy(){this.compDest$.next()}startInterval(){this.intervalSubCount++,Object(b.a)(1e3).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{this.intervalValue=t})}startTimer(){this.timerSubCount++,Object(s.a)(0,1e3).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{this.timerValue=t})}onStartInterval(){this.startInterval(),this.startTimer()}onStopInterval(){this.timerSubCount=0,this.intervalSubCount=0,this.compDest$.next()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-o"]],decls:26,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"btn","btn-primary","btn-sm","mr-3",3,"click"],[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"div",1),c.Vb(2,"div",2),c.Vb(3,"h5"),c.Cc(4,"Practice 8 - Observables"),c.Ub(),c.Qb(5,"hr"),c.Vb(6,"h6"),c.Cc(7,"Requirments:"),c.Ub(),c.Vb(8,"ol"),c.Vb(9,"li"),c.Cc(10,"Creating an interval observable using rxjs interval, timer "),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(11,"div",1),c.Vb(12,"div",2),c.Vb(13,"h6"),c.Cc(14,"Solution"),c.Ub(),c.Vb(15,"div"),c.Cc(16),c.Ub(),c.Vb(17,"div"),c.Vb(18,"button",3),c.dc("click",(function(){return e.onStartInterval()})),c.Cc(19,"Start"),c.Ub(),c.Vb(20,"button",4),c.dc("click",(function(){return e.onStopInterval()})),c.Cc(21,"Stop"),c.Ub(),c.Ub(),c.Vb(22,"div"),c.Cc(23),c.Ub(),c.Vb(24,"div"),c.Cc(25),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Db(16),c.Fc(" Number of times subscribed - interval$: ",e.intervalSubCount," , timer$: ",e.timerSubCount," "),c.Db(7),c.Ec(" Interval value: ",e.intervalValue," (has a 1 second delay due to emitting 0 as first value) "),c.Db(2),c.Ec(" Timer value: ",e.timerValue," "))},styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(o)],i.e]}),t})();var l=n("3Pt+"),m=n("ofXK"),v=n("UmVK");let p=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},providers:[],imports:[[u,l.d,l.l,m.c,v.a]]}),t})()}}]);