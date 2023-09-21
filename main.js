const login=()=>{
    window.location.href='./signup.html';
}

const url=window.location.href.split('=')[1];
const x=url.split('%')[0];

if(x.length>0)
{
    document.getElementById("lgn_btn").innerHTML=x;
    document.getElementById("lgn_btn").disabled=true;
    

}