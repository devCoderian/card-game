

        let cards = document.querySelector(".card");
        let cardEl = [];
        // alert('restart');
    
bindEvents();
function bindEvents(){
    let start = new Date();  // 시작
        cards.addEventListener('click', (event) =>{
            const elClicked = event.target;
            console.log(elClicked.tagName);

            if(elClicked.tagName === "LI"){
                if(cardEl.length <2 && cardEl[0] !== elClicked){
                    cardEl.push(elClicked);
                  
                    elClicked.classList.add("click"); 

                    if(cardEl.length === 2){
                        setTimeout(() =>{
                            cardEl.forEach((item) =>{
                                if(cardEl[0].dataset.name === cardEl[1].dataset.name){
                                    item.style.visibility = "hidden";
                                }else{
                                    item.classList.remove("click");
                                }
                                console.log(item);
                            });
                            cardEl.splice(0); //카드 데이터 초기화
                        }, 500) 
                        //카드 애니메이션 시간   
                    }
                }
            }
            let check =[];
            cards.querySelectorAll('li').forEach((i)=>{
                 if(i.classList.value.includes('click')){
                    check.push(i);
                 }
                 console.log(check);
            })
            if(check.length === 10){
                 end = new Date();
                 let time = end-start;
                 console.log(end-start);
                setTimeout(() =>{
                alert('소요 시간: '+time+'초');
                window.location.reload();    
            }, 500);
               
            }
        });
    }

