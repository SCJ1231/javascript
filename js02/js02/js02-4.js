const a = prompt(`확인할 숫자 입력`, `2~9까지만 입력` )*1
const q1 = (a*1)
const q2 = (a*2)
const q3 = (a*3)
const q4 = (a*4)
const q5 = (a*5)
const q6 = (a*6)
const q7 = (a*7)
const q8 = (a*8)
const q9 = (a*9)

let list = ``
    list = `<h3>구구단</h3>`
    list+=`<table class="a">`
    list+=`<tr class="b"><td>입력한 구구단 숫자 : <mark>${a}</mark></td></tr>`
    list+=`<tr><td> ${a}x1  :  <mark>${q1}</mark></td></tr>`
    list+=`<tr><td> ${a}x2  :  <mark>${q2}</mark></td></tr>`
    list+=`<tr><td> ${a}x3  :  <mark>${q3}</mark></td></tr>`
    list+=`<tr><td> ${a}x4  :  <mark>${q4}</mark></td></tr>`
    list+=`<tr><td> ${a}x5  :  <mark>${q5}</mark></td></tr>`
    list+=`<tr><td> ${a}x6  :  <mark>${q6}</mark></td></tr>`
    list+=`<tr><td> ${a}x7  :  <mark>${q7}</mark></td></tr>`
    list+=`<tr><td> ${a}x8  :  <mark>${q8}</mark></td></tr>`
    list+=`<tr><td> ${a}x9  :  <mark>${q9}</mark></td></tr>`
    list+=`</table>`
    document.write(list)