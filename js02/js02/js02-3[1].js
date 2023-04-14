const result = prompt(`넓이와 둘레를 구할 반지름을 입력하세요.`)
    const ex1 = (result * 2 * 3.14)
    const ex2 = (result^2 * 3.14)
    console.log(`둘레, 넓이`)
    document.write
let list = ``
    list += `<table class="a">`
    list +=`<tr><td>입력하신 반지름 : <mark>${result}</mark></td></tr>`
    list +=`<tr><td>둘레 : ${ex1}</td></tr>`
    list +=`<tr><td>넓이 : ${ex2}</td></tr>`
    list +=`</table>`
    document.write(list)