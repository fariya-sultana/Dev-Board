document.getElementById('btn-five').addEventListener('click', function(){
    alert('Board updated Successfully');
    document.getElementById('btn-five').disabled = true;

    const addNumber = document.getElementById('add-number').innerText;
    const convertedAddNumber = parseInt(addNumber);
     
    const divideNumber = document.getElementById('divide-number').innerText;
    const convertedDivideNumber = parseInt(divideNumber);
     
    document.getElementById('add-number').innerText = convertedAddNumber + 1;

    document.getElementById('divide-number').innerText = convertedDivideNumber - 1;

    const fiveTitle = document.getElementById('card-five-title').innerText;
    const time = new Date().toLocaleTimeString();

    const addActivity = document.getElementById('add-activity');

    const p = document.createElement('p');
    p.classList.add('bg-slate-100');
    p.classList.add('my-4');
    p.classList.add('rounded-xl');
    p.innerHTML = `
    <p class="p-2">You have completed the task ${fiveTitle} at ${time}</p>
    `; 

    addActivity.appendChild(p);
})