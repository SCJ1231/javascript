const a = prompt(`국어점수를 입력하세요.`)*1
const b = prompt(`수학점수를 입력하세요.`)*1
const c = prompt(`과학점수를 입력하세요.`)*1
const ex = ( a+b+c)/3
alert(`평균점수는 ${ex}입니다.`)
alert(`결과는 ${a>=70 && b>50 && c>=80}입니다.`)

let list = ``
    list = `<h3>점수표</h3>`
    list+=`<table class="a">`
    list+=`<tr class="b"><td></td><th>국어점수</th>`
    list+=`<th>수학점수</th>`
    list+=`<th>과학점수</th></tr>`
    list+=`<tr><th>점수</th><td>${a}</td>`
    list+=`<td>${b}</td>`
    list+=`<td>${c}</td></tr>`
    list+=`<tr><th>평균</th><td colspan="3">${ex}</td></tr>`
    list+=`<tr class="c"><th>결과</th><td colspan="3">${a>=70 && b>50 && c>=80}</td></tr>`
    list+=`</table>`
    document.write(list)
