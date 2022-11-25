document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#red').onclick=function(){
        document.querySelector('#hello').style.color='red';
    }
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#green').onclick=function(){
        document.querySelector('#hello').style.color='green';
    }
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#blue').onclick=function(){
        document.querySelector('#hello').style.color='blue';
    }
})


// TO DO LIST .............

document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('#submit').disabled = true ;
document.querySelector('#task').onkeyup=function(){
        if (document.querySelector('#task').value.length>6){
        document.querySelector('#submit').disabled = false ;
        }else{
        document.querySelector('#submit').disabled = true ;
        }

document.querySelector('form').onsubmit=function(){
        var taask= document.querySelector('#task').value ;
        var li= document.createElement('li');
        li.innerHTML=taask;
        document.querySelector('#tasks').appendChild(li);
        document.querySelector('#task').value= " ";
        document.querySelector('#submit').disabled = true ;

        //   عشان ميعملش رفريش 
        return false;
}
}
})


var text = document.querySelectorAll('#ddddd');
console.log(text);

var text = document.getElementById("ddddd").style.color="blue" ;
for (var i=0 ; i<10 ; i++){
        document.write(i);}

var h1h1h1=document.getElementById('alaa').classList.add('khaled');
console.log(h1h1h1);