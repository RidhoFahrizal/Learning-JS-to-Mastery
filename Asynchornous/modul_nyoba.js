export function foo(foo, callback){
    
    let isTrue = true;

    setTimeout(()=> {
        node('This is my practice');
    }, 5000)

    if(isTrue){
        callback(foo, null);
    }
}

function percobaan(){
    console.log('This massage will displayed when everything is good');
}