let result = prompt('true 또는 false 를 입력하세요.')
let list=``
    list+=`<div><h3>논리연산자</h3>`    
    list+=`<h5>입력하신 <mark>${result}</mark>에 대한 결과를 표로 나타내면</h5>`
    list+=`<table class="a">`;
    list+=`<tr class="b"><th>&&연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list+=`<tr><td><mark>${result}</mark></td><td>&&</td><td>false</td><td>${false && result}</td></tr>`
    list+=`<tr><td><mark>${result}</mark></td><td>&&</td><td>true</td><td>${false && result}</td></tr>`
    list+=`<tr class="b"><th>||연산</th><th>연산</th><th>값</th><th>결과</th></tr>`
    list+=`<tr><td><mark>${result}</mark></td><td>||</td><td>false</td><td>${false || result}</td></tr>`
    list+=`<tr><td><mark>${result}</mark></td><td>||</td><td>true</td><td>${false || result}</td></tr>`
    list+=`</table><div>`
    document.write(list)


