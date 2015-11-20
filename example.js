
(function (global, factory) {
  factory(global);
}(window , function() {
  // zz is future MyLib (long name)
  var zz = function(elem) {
    return new zz.asd.init(elem);
  }
  zz.asd = {
    init: function(elem) {
      elem = typeof elem == 'string' ? window.document.getElementById(elem) : elem;
      this[0] = elem;
      return this;
    },
// (1) 	

    tFunc1 : function() {return 'tFunc1 done ';},    
    tFunc : function() {
      var s = 'zz().me.where.am '+zz().me.where.am()+' ' + zz().me.where.a;
      window.console.log(s);
      window.console.log(zz().tFunc1()+' '+zz().me.where.a);
      window.console.log(zz().lastF()+' '+zz().me.where.a);      
      },
     me : {
      where:{
        a : 1,
        am : function(){
          window.console.log('zz().me.where.am ' + zz().me.where.a);
          return zz().me.where.a;
          }
        }}, 

  
    // last func
    lastF : function() { window.console.log(this[0]);
      this[0].appendChild(document.createElement("br"));
      this[0].appendChild(document.createTextNode('On\n2' ));      
      return 'lastF done ';}    
// end (1)	   
  };
// !! js magic !!  
  zz.asd.init.prototype = zz.asd;
  zz.tempo ;
  zz.tempo = {
// (2) 
    uId : (function () {
    var counter = 0;
    return function () {return counter += 1;}
    })(),
    
    tFunc1 : function() {return 'tFunc1 done ';},    
    tFunc : function() {
      var s = 'zz.me.where.am '+zz.me.where.am()+' ' + zz.me.where.a;
      window.console.log(s);
      window.console.log(zz.tFunc1()+' '+zz.me.where.a);
      window.console.log(zz.lastF()+' '+zz.me.where.a);      
      },
    me : {
      // short lib name
      name: 'qq',
      where:{
        a : 2,
        am : function(){
          window.console.log('zz.me.where.am ' + zz.me.where.a);
          return zz.me.where.a;
          }
        }}, 
  
    welcomeOnBoardJss : function() {
      
      }  ,
  // last func
      lastF : function() {return 'lastF done ';},  
// end (2)
    };
     
  for (var key in   zz.tempo)   {
//    window.console.log(key+' '+zz.tempo[key]);
    {zz[key] = zz.tempo[key];};
    }
    zz.tempo = '';
// !! js magic !!   !! short name window[zz.me.name] should be variable // do not use 
  window.zz = window[zz.me.name] = zz;

// autorun  

  zz.cnt =  zz.uId; 

  window.console.log('counter '+zz.cnt());
  var aa = "gj " + ( zz.cnt()+ Math.random() )+' cnt '+zz.cnt()  ;
  zz[aa] =  zz.uId; 
  window.console.log(aa+' is '+zz[aa]());
  zz['cnt'+zz.cnt()] =  zz.uId; 
  aa = 'cnt'+zz.cnt()  ;
  zz[aa] =  zz.uId; 
  window.console.log(aa+' '+zz[aa]());  
  zz.qwertyop={a:{b:'c'}};
  window.console.log(zz.qwertyop.a.b);
  window.console.log(JSON.stringify(zz));
  
  zz.welcomeOnBoardJss();
  
  var elNew = window.document.createElement('div');
  elNew.className = 'btn_el';
  elNew.appendChild(window.document.createTextNode('me\n2' ));
  elNew.setAttribute('id','the1st1');
//  elNew.style.position = 'fixed';
  elNew.addEventListener("click", function(){zz(this).lastF();}, false);
  window.document.body.insertBefore(elNew, null);
  
// end autorun

//return zz; // ?  
}));

function outerFunc(elem) {
  //qq(elem).tFunc();
  //qq.tFunc();
  zz(elem).lastF(); 
  zz.asd.outF = function() {
     
    // var o = zz(this[0]) // It's your element
    return this[0];
    };

  window.console.log(qq(elem).outF().id);
  //qq.ext = function() {window.console.log('ext2 works!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');};  
  
  
}
