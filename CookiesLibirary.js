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



/* Main */

var d = new Date("2024-03-25");
SetCookie('User','Ahmed',d);
SetCookie('id',5,d);


// console.log(GetCookie('id'));

// console.log(HasCookie('id'))

DeleteCookie('User');
AllCookie();