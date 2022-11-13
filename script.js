let button1 = document.querySelector('.button');

button1.addEventListener('click', function () {
    if(document.querySelector('.write').value.length == 0){
        alert("Enter Task!")
    }
else{
    let bool=true;
    let list1 = document.querySelector('.list');
    let write1 = document.querySelector('.write');
    let div1 = document.createElement('div');
    div1.style.display = 'flex';
    let li1 = document.createElement('li');
    let del = document.createElement('cancelbutton');
    del.innerHTML= '<img src="images/Group 56.svg">'
    del.classList.add('delete')
    li1.textContent = write1.value;
    div1.append(li1);
    div1.append(del);
    list1.append(div1);
    write1.value = null;
    del.addEventListener('click', function (event){
        let func = event.currentTarget.parentElement;
        func.remove();
    
    })

    let sorting1= document.querySelector('.sorting');
    sorting1.addEventListener('click',function(){
        if(bool){
            bool=false;
        let list0 =[]
        let list1 = document.querySelectorAll('li');
        list1.forEach(el => {
            list0.push(el.innerText);
        })
        list0.sort();
        for(let i=0;i<list0.length;i++){
            let list2 = document.querySelectorAll('li')[i];
            list2.textContent=list0[i];
        }
    }
    else{
        bool=true;
        let list0 =[]
        let list1 = document.querySelectorAll('li');
        list1.forEach(el => {
            list0.push(el.innerText);
        })
        list0.sort();
        list0.reverse();
        for(let i=0;i<list0.length;i++){
            let list2 = document.querySelectorAll('li')[i];
            list2.textContent=list0[i];
        }
    }
    }) }
})