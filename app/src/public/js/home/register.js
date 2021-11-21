"use strict";


//javaScript와 http를 연결해주는 dom 이용
const id=document.querySelector("#id"),
name=document.querySelector("#name"),
psword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn=document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register( ){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if (psword !==confirmPsword) return alert("비밀번호가 일치하지 않습니다.");

    const req={
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    console.log(req);

    fetch("/register", {
        method:"POST", //rest API관련
        headers:{
            "Content-Type": "application/json", //json사용한다고 명시적 암시
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            
            if(res.success){
                location.href="/login";
            }else{
                
                alert(res.msg);
            }
        
        })
        .catch((err) => {
            console.error(new Error('회원가입 중 에러 발생'));
        });
}
