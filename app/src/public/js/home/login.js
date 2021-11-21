"use strict";


//javaScript와 http를 연결해주는 dom 이용
const id=document.querySelector("#id"),
    psword=document.querySelector("#psword"),
    loginBtn=document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login( ){
    const req={
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method:"POST", //rest API관련
        headers:{
            "Content-Type": "application/json", //json사용한다고 명시적 암시
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            
            if(res.success){
                location.href="/";
            }else{
                
                alert(res.msg);
            }
        
        })
        .catch((err) => {
            console.error(new Error('로그인 중 에러 발생'));
        });
}