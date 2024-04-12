const start = document.querySelector('.start')
const next = document.querySelector('.next')
let i=0;

const one1 = document.getElementById('one1')
const two1 = document.getElementById('two1')
const three1 = document.getElementById('three1')
const four1 = document.getElementById('four1')

const one2 = document.getElementById('one2')
const two2 = document.getElementById('two2')
const three2 = document.getElementById('three2')
const four2 = document.getElementById('four2')

const one3 = document.getElementById('one3')
const two3 = document.getElementById('two3')
const three3 = document.getElementById('three3')
const four3 = document.getElementById('four3')

const one4 = document.getElementById('one4')
const two4 = document.getElementById('two4')
const three4 = document.getElementById('three4')
const four4 = document.getElementById('four4')

const one5 = document.getElementById('one5')
const two5 = document.getElementById('two5')
const three5 = document.getElementById('three5')
const four5 = document.getElementById('four5')

const score=document.querySelector('.sre')

start.addEventListener('click', () => {
    setTimeout(() => {
    document.querySelector('.intro').style.display = 'none'
    document.querySelector('.questions').style.display = 'block'
    document.querySelector('.ques1').style.display = 'block'
    document.querySelector('.end').style.display = 'flex'  
    }, 700);

    one1.addEventListener('click',()=>{
        one1.style.backgroundColor='lightgreen'
        one1.style.color='black'
        one1.style.boxShadow='0px 0px 0px'
        i++;
    })

    two1.addEventListener('click',()=>{
        two1.style.backgroundColor='red'
        two1.style.color='black'
        two1.style.boxShadow='0px 0px 0px'
    })

    three1.addEventListener('click',()=>{
        three1.style.backgroundColor='red'
        three1.style.color='black'
        three1.style.boxShadow='0px 0px 0px'
    })

    four1.addEventListener('click',()=>{
        four1.style.backgroundColor='red'
        four1.style.color='black'
        four1.style.boxShadow='0px 0px 0px'
    })

    next.addEventListener('click', () => {
        document.querySelector('.questions').style.display = 'block'
        document.querySelector('.ques1').style.display = 'none'
        document.querySelector('.ques2').style.display = 'block'
        document.querySelector('.end').style.display = 'flex'

        three2.addEventListener('click',()=>{
            three2.style.backgroundColor='lightgreen'
            three2.style.color='black'
            three2.style.boxShadow='0px 0px 0px'
            i++;
        })

        two2.addEventListener('click',()=>{
            two2.style.backgroundColor='red'
            two2.style.color='black'
            two2.style.boxShadow='0px 0px 0px'
        })
    
        one2.addEventListener('click',()=>{
            one2.style.backgroundColor='red'
            one2.style.color='black'
            one2.style.boxShadow='0px 0px 0px'
        })
    
        four2.addEventListener('click',()=>{
            four2.style.backgroundColor='red'
            four2.style.color='black'
            four2.style.boxShadow='0px 0px 0px'
        })

        next.addEventListener('click', () => {
            document.querySelector('.questions').style.display = 'block'
            document.querySelector('.ques1').style.display = 'none'
            document.querySelector('.ques2').style.display = 'none'
            document.querySelector('.ques3').style.display = 'block'
            document.querySelector('.end').style.display = 'flex'

            two3.addEventListener('click',()=>{
                two3.style.backgroundColor='lightgreen'
                two3.style.color='black'
                two3.style.boxShadow='0px 0px 0px'
                i++;
            })

            one3.addEventListener('click',()=>{
                one3.style.backgroundColor='red'
                one3.style.color='black'
                one3.style.boxShadow='0px 0px 0px'
            })
        
            three3.addEventListener('click',()=>{
                three3.style.backgroundColor='red'
                three3.style.color='black'
                three3.style.boxShadow='0px 0px 0px'
            })
        
            four3.addEventListener('click',()=>{
                four3.style.backgroundColor='red'
                four3.style.color='black'
                four3.style.boxShadow='0px 0px 0px'
            })

            next.addEventListener('click', () => {
                document.querySelector('.questions').style.display = 'block'
                document.querySelector('.ques1').style.display = 'none'
                document.querySelector('.ques2').style.display = 'none'
                document.querySelector('.ques3').style.display = 'none'
                document.querySelector('.ques4').style.display = 'block'
                document.querySelector('.end').style.display = 'flex'

                four4.addEventListener('click',()=>{
                    four4.style.backgroundColor='lightgreen'
                    four4.style.color='black'
                    four4.style.boxShadow='0px 0px 0px'
                    i++;
                })

                two4.addEventListener('click',()=>{
                    two4.style.backgroundColor='red'
                    two4.style.color='black'
                    two4.style.boxShadow='0px 0px 0px'
                })
            
                three4.addEventListener('click',()=>{
                    three4.style.backgroundColor='red'
                    three4.style.color='black'
                    three4.style.boxShadow='0px 0px 0px'
                })
            
                one4.addEventListener('click',()=>{
                    one4.style.backgroundColor='red'
                    one4.style.color='black'
                    one4.style.boxShadow='0px 0px 0px'
                })

                next.addEventListener('click', () => {
                    document.querySelector('.questions').style.display = 'block'
                    document.querySelector('.ques1').style.display = 'none'
                    document.querySelector('.ques2').style.display = 'none'
                    document.querySelector('.ques3').style.display = 'none'
                    document.querySelector('.ques4').style.display = 'none'
                    document.querySelector('.ques5').style.display = 'block'
                    document.querySelector('.end').style.display = 'flex'

                    three5.addEventListener('click',()=>{
                        three5.style.backgroundColor='lightgreen'
                        three5.style.color='black'
                        three5.style.boxShadow='0px 0px 0px'
                        i++;
                    })

                    two5.addEventListener('click',()=>{
                        two5.style.backgroundColor='red'
                        two5.style.color='black'
                        two5.style.boxShadow='0px 0px 0px'
                    })
                
                    one5.addEventListener('click',()=>{
                        one5.style.backgroundColor='red'
                        one5.style.color='black'
                        one5.style.boxShadow='0px 0px 0px'
                    })
                
                    four5.addEventListener('click',()=>{
                        four5.style.backgroundColor='red'
                        four5.style.color='black'
                        four5.style.boxShadow='0px 0px 0px'
                    })

                    next.addEventListener('click', () => {
                        document.querySelector('.questions').style.display = 'block'
                        document.querySelector('.ques1').style.display = 'none'
                        document.querySelector('.ques2').style.display = 'none'
                        document.querySelector('.ques3').style.display = 'none'
                        document.querySelector('.ques4').style.display = 'none'
                        document.querySelector('.ques5').style.display = 'none'
                        document.querySelector('.score').style.display='flex'
                        document.querySelector('.end').style.display = 'none'

                        score.innerHTML=`<span class="sre">${i}/5</span>`
                    })
                })
            })
        })


    })
})

