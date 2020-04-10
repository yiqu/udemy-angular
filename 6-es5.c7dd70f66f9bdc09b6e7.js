function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9Nm5":function(e,t,n){"use strict";n.r(t),n.d(t,"FormsComponentModule",(function(){return D}));var i=n("3Pt+"),o=n("ofXK"),r=n("tyNb"),a=n("Cicx"),c=n("XNiG"),l=n("fXoL"),s=n("wZkO"),b=function(e){return[e]};function u(e,t){if(1&e){var n=l.Wb();l.Vb(0,"a",5),l.dc("click",(function(){l.uc(n);var e=t.$implicit;return l.hc().activeLink=e})),l.Cc(1),l.Ub()}if(2&e){var i=t.$implicit,o=l.hc();l.mc("active",o.activeLink==i)("routerLink",l.oc(3,b,i.url)),l.Db(1),l.Ec(" ",i.display," ")}}var m,d=((m=function(){function e(){_classCallCheck(this,e),this.compDest$=new c.a,this.tabLinks=[],this.tabLinks.push(new a.a("Template Forms","template-forms","creating template driven forms"),new a.a("Reactive Froms","reactive-forms","creating reactive forms")),this.activeLink=this.tabLinks[0]}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=l.Jb({type:m,selectors:[["app-f-forms"]],decls:11,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["mat-tab-nav-bar","",3,"backgroundColor"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"div",2),l.Vb(3,"h5"),l.Cc(4,"Practice 9 - Angular Forms"),l.Ub(),l.Qb(5,"hr"),l.Ub(),l.Ub(),l.Vb(6,"div",1),l.Vb(7,"div",2),l.Vb(8,"nav",3),l.Ac(9,u,2,5,"a",4),l.Ub(),l.Qb(10,"router-outlet"),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(8),l.mc("backgroundColor",void 0),l.Db(1),l.mc("ngForOf",t.tabLinks))},directives:[s.b,o.k,r.f,r.d,s.a],styles:["a[_ngcontent-%COMP%]{text-decoration:none}"]}),m),f=n("Cs7S"),p=n("QibW"),v=["myForm"];function h(e,t){if(1&e&&(l.Vb(0,"mat-radio-button",33),l.Cc(1),l.Ub()),2&e){var n=t.$implicit;l.mc("value",n),l.Db(1),l.Ec(" ",n," ")}}function g(e,t){1&e&&(l.Vb(0,"small",34),l.Cc(1," Max allowed is 5 (using #nameInput to check its value in template code) "),l.Ub())}function V(e,t){if(1&e&&(l.Vb(0,"div",1),l.Cc(1," After submission and assigning this form to a variable. Form Values: "),l.Vb(2,"div",6),l.Cc(3),l.ic(4,"json"),l.Ub(),l.Vb(5,"div",35),l.Cc(6),l.Ub(),l.Ub()),2&e){var n=l.hc();l.Db(3),l.Ec(" ",l.jc(4,4,n.formValues)," "),l.Db(3),l.Gc(" Submitted: ",n.wholeForm.submitted," Touched: ",n.wholeForm.touched," Valid: ",n.wholeForm.valid," ")}}var C,U,w,k,y=[{path:"",component:d,children:[{path:"",redirectTo:"template-forms",pathMatch:"full"},{path:"template-forms",component:(U=function(){function e(t){_classCallCheck(this,e),this.us=t,this.userAdminStatus=!0,this.defaultEmail="Kevin@aol.com",this.genderList=["Male","Female"]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this;this.f.valueChanges.subscribe((function(t){e.fValues=t,e.formValid=e.f.valid,console.log(e.f.form)}))}},{key:"onFormSubmit",value:function(e){this.us.openSnackBar("Form Submitted!"),console.log(e),this.formValues=e.value,this.wholeForm=e}},{key:"suggestPw",value:function(){this.f.form.get("reqUserData").get("userPassword").setValue("abc")}}]),e}(),U.\u0275fac=function(e){return new(e||U)(l.Pb(f.a))},U.\u0275cmp=l.Jb({type:U,selectors:[["app-f-template"]],viewQuery:function(e,t){var n;1&e&&l.Ic(v,!0),2&e&&l.qc(n=l.ec())&&(t.f=n.first)},decls:65,vars:9,consts:[[1,"row","mt-3"],[1,"col-md-12"],[1,"row","mt-2"],[1,"col-md"],[1,"mt-1","font-weight-bold"],[1,"mt-2"],[1,"font-weight-bold"],[1,"row","mt-2","mb-2"],[1,"col-md-6","offset-md-3"],[1,"mt-3",3,"ngSubmit"],["myForm","ngForm"],["ngModelGroup","reqUserData",1,"border","border-info","p-10","mb-2"],["requiredUserData","ngModelGroup"],[1,"mt-2","mb-3","font-weight-bold"],[1,"form-group"],["for","emailAddress"],["type","email","id","emailAddress","placeholder","Enter email","name","emailAddress","required","",1,"form-control",3,"ngModel"],["id","emailHelp",1,"form-text","text-muted"],["for","passwordInput"],["type","password","id","passwordInput","placeholder","Password","ngModel","","name","userPassword","required","",1,"form-control"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],["name","genderSelection","ngModel","","required",""],["class","radio-btn mr-2","color","primary",3,"value",4,"ngFor","ngForOf"],["for","subInput"],["type","input","id","subInput","placeholder","Number of subscriptions","ngModel","","name","userSubCount",1,"form-control"],["subCountInput","ngModel"],["id","subHelp","class","form-text text-muted",4,"ngIf"],[1,"form-check"],["type","checkbox","id","exampleCheck1","name","adminCheck",1,"form-check-input",3,"ngModel"],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[1,"row"],["class","col-md-12",4,"ngIf"],["color","primary",1,"radio-btn","mr-2",3,"value"],["id","subHelp",1,"form-text","text-muted"],[1,"font-weight-bold","mt-1"]],template:function(e,t){if(1&e){var n=l.Wb();l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"h6"),l.Cc(3,"Requirments:"),l.Ub(),l.Vb(4,"ol"),l.Vb(5,"li"),l.Cc(6,"Creating forms using template-driven approach. "),l.Ub(),l.Vb(7,"li"),l.Cc(8,'create a form with the following directives: < form #myForm="ngForm" (ngSubmit)="onFormSubmit(myForm)" >.'),l.Ub(),l.Vb(9,"li"),l.Cc(10,'#myForm="ngForm" will tell Angular that this form is an Angular Form, which turns this form to an NgForm type.'),l.Ub(),l.Vb(11,"li"),l.Cc(12,"Add the directive 'ngModel' to each control, and assign each control a name=\"variableName\"."),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Qb(13,"hr"),l.Vb(14,"div",2),l.Vb(15,"div",3),l.Vb(16,"h6"),l.Cc(17,"Solution"),l.Ub(),l.Ub(),l.Ub(),l.Vb(18,"div",2),l.Vb(19,"div",1),l.Cc(20," Using ViewChild() to get the form, and subscribe to its values. "),l.Vb(21,"div",4),l.Cc(22),l.ic(23,"json"),l.Ub(),l.Vb(24,"div",5),l.Cc(25," Valid status: "),l.Vb(26,"span",6),l.Cc(27),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(28,"div",7),l.Vb(29,"div",8),l.Vb(30,"form",9,10),l.dc("ngSubmit",(function(){l.uc(n);var e=l.rc(31);return t.onFormSubmit(e)})),l.Vb(32,"div",11,12),l.Vb(34,"div",13),l.Cc(35,"These two inputs email and password are under a ngModelGroup called reqUserData."),l.Ub(),l.Vb(36,"div",14),l.Vb(37,"label",15),l.Cc(38,'Email address (required) - default value is set using [ngModel]="variableName" '),l.Ub(),l.Qb(39,"input",16),l.Vb(40,"small",17),l.Cc(41,"We'll never share your email with anyone else."),l.Ub(),l.Ub(),l.Vb(42,"div",14),l.Vb(43,"label",18),l.Cc(44,"Password (required)"),l.Ub(),l.Qb(45,"input",19),l.Vb(46,"button",20),l.dc("click",(function(){return t.suggestPw()})),l.Cc(47,"Suggest a password (Using form.get().setValue)"),l.Ub(),l.Ub(),l.Vb(48,"div",14),l.Vb(49,"mat-radio-group",21),l.Ac(50,h,2,2,"mat-radio-button",22),l.Ub(),l.Ub(),l.Ub(),l.Vb(51,"div",14),l.Vb(52,"label",23),l.Cc(53,"Subscription count. Max allowed is 5 (optional)"),l.Ub(),l.Qb(54,"input",24,25),l.Ac(56,g,2,0,"small",26),l.Ub(),l.Vb(57,"div",27),l.Qb(58,"input",28),l.Vb(59,"label",29),l.Cc(60,"Admin"),l.Ub(),l.Ub(),l.Vb(61,"button",30),l.Cc(62,"Submit"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(63,"div",31),l.Ac(64,V,7,6,"div",32),l.Ub()}if(2&e){var i=l.rc(55);l.Db(22),l.Ec(" ",l.jc(23,7,t.fValues)," "),l.Db(5),l.Dc(t.formValid),l.Db(12),l.mc("ngModel",t.defaultEmail),l.Db(11),l.mc("ngForOf",t.genderList),l.Db(6),l.mc("ngIf",i.value>5),l.Db(2),l.mc("ngModel",t.userAdminStatus),l.Db(6),l.mc("ngIf",t.formValues)}},directives:[i.t,i.j,i.k,i.m,i.c,i.p,i.i,i.l,p.b,o.k,o.l,i.a,p.a],pipes:[o.f],styles:["input.ng-touched.ng-valid[_ngcontent-%COMP%]{background-color:#e6ffe6}input.ng-touched.ng-invalid[_ngcontent-%COMP%]{background-color:#ffc2b3}.p-10[_ngcontent-%COMP%]{padding:10px}"]}),U)},{path:"reactive-forms",component:(C=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=l.Jb({type:C,selectors:[["app-f-reactive"]],decls:12,vars:0,consts:[[1,"row","mt-3"],[1,"col-md-12"],[1,"row","mt-2"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"h6"),l.Cc(3,"Requirments:"),l.Ub(),l.Vb(4,"ol"),l.Vb(5,"li"),l.Cc(6,"Creating forms using reactive approach "),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Qb(7,"hr"),l.Vb(8,"div",2),l.Vb(9,"div",1),l.Vb(10,"h6"),l.Cc(11,"Solution"),l.Ub(),l.Ub(),l.Ub())},styles:[""]}),C)}]}],F=((w=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:w}),w.\u0275inj=l.Mb({factory:function(e){return new(e||w)},imports:[[r.e.forChild(y)],r.e]}),w),M=n("UmVK"),D=((k=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:k}),k.\u0275inj=l.Mb({factory:function(e){return new(e||k)},providers:[],imports:[[i.o,i.e,o.c,M.a,F]]}),k)}}]);