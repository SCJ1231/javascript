let num = prompt('값을 입력하세요.')
let list = ``
    list =`<div><h3><mark>증감연산자</mark></h3>`
    list +=`<table class="a">`;
    list +=`<tr class="b"><th>증강연산자</th><th>설명</th><th>예)let number = ${num}}</th><th>순서</th></tr>`;
    list +=`<tr><td><mark>변수++</mark></td><td>기존의 변수 값에 1을 더합니다(후위)</td><td>number++ 답:${num++}</td><td>1</td></tr>`;
    list +=`<tr><td><mark>++변수</mark></td><td>기존의 변수 값에 1을 더합니다(전위)</td><td>++numbar답:${++num}</td><td>2</td>`;
    list +=`<tr><td><mark>변수--</mark></td><td>기존의 변수 값에 1을 뺍니다(후위)</td><td>number--답:${num--}</td><td>3</td></tr>`;
    list +=`<tr><td><mark>--변수</mark></td><td>기존의 변수 값에 1을 뺍니다(전위)</td><td>--number답:${--num}</td><td>4</td></tr>`;
    list +=`</table></div>` 
document.write(list)







