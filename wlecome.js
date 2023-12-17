var GetCookie = function(skey){
    if(!skey) throw 'Enter a key';
    if(!HasCookie(skey)) throw 'Not Found';

    var arr = document.cookie.split(';');

    for(var i=0;i<arr.length;i++){

        var subarr =  arr[i].split('=')

        var key = subarr[0].trim();
        var val = subarr[1].trim();
        if(key == skey) return val
        
    }
}

var SetCookie = function(key,val,date){
    document.cookie = key + '=' + val +';expires=' +date;
}

var DeleteCookie = function(skey){
    if(!skey) throw 'Enter a key';
    if(!HasCookie(skey)) throw 'Not Found';

    var arr = document.cookie.split(';');

    for(var i=0;i<arr.length;i++){

        var subarr =  arr[i].split('=')

        var key = subarr[0];
        var val = subarr[1].trim();
        
        if(key === skey){
            var exdate = new Date('2010-05-01');
            document.cookie = key +'null;expires='+exdate;
        }
        
    }
}

var AllCookie = function(){
    var arr = document.cookie.split(';');

    for(var i=0;i<arr.length;i++){

        var subarr =  arr[i].split('=')

        var key = subarr[0].trim();
        var val = subarr[1].trim();

            console.log('key: ' + key + ' | Value: '+ val )        
    }
}

var HasCookie = function(skey){
    if(!skey) throw 'Enter a key';

    var arr = document.cookie.split(';');

    for(var i=0;i<arr.length;i++){

        var subarr =  arr[i].split('=')
        var key = subarr[0].trim();
        if(key === skey) return true
        
    }
    return false;
}
var d = new Date("2024-03-25");


var h1 = document.getElementsByTagName('h1')[0];
var h2 = document.getElementsByTagName('h2')[0];
var img = document.getElementsByTagName('img')[0];

var gender = GetCookie('gender');
var color = GetCookie('color');
var myname = GetCookie('name');
var id = GetCookie('id');
var age = GetCookie('age');

var span = document.createElement('span');
span.style.color = color;
span.textContent = myname;
h1.append(span)


var span2 = document.createElement('span');
span2.textContent = ' age:  '+age+' ID: '+id ;
h1.append(span2)
img.src='./'+gender+'.png';



history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };


window.addEventListener('load',function(){
    history.pushState(null, null, window.location.href);
    
    if( HasCookie('clicktime')){
        var num = parseInt(GetCookie('clicktime'));
        SetCookie('clicktime',num+1,d);
    } else{
        SetCookie('clicktime',1,d);
    }
    
    var span3 = document.createElement('span');
    span3.textContent =GetCookie('clicktime') ;
    h2.append(span3)
    history.pushState(null, null, window.location.href);

})
