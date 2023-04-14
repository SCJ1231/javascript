
const dollar = prompt(`환전하고자 하는 달러를 입력해 주세요.`)
    const ex1 = 1350
    const ex2 = 1000
    const ex3 = 191
    const won = Number(dollar) * ex1
    const jpy = Number(dollar) * ex2
    const cny = Number(dollar) * ex3
    console.log
    document.write
let list = ``
    list+=`<table class="a">`
    list+=`<tr><td>입력하신 <mark>${dollar}</mark>달러를 환전하면</td></tr>`
    list+=`<tr><td>한국 : ${won}원 입니다.</td></tr>`
    list+=`<tr><td>일본 : ${jpy}엔 입니다.</td></tr>`
    list+=`<tr><td>중국 : ${cny}위안 입니다.</td></tr>`
    list+=`</table>`
    document.write(list)
  