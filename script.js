let questions=document.querySelectorAll(".question");

questions.forEach(function(question){
    let btns=question.querySelector(".question-btn");
    // let ans=question.querySelector(".question-ans");
    let divider=question.querySelector(".question-end");

    btns.addEventListener("click",function(){
        questions.forEach(function(item){
            if(question!==item){
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
        divider.classList.toggle("show-text");
    })
})
