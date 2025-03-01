document.getElementById('btn-six').addEventListener('click', function(){
    alert('Board updated Successfully');
    alert('congrats!!! You have completed all the current task');

    document.getElementById('btn-six').disabled = true;

    const addNumber = document.getElementById('add-number').innerText;
    const convertedAddNumber = parseInt(addNumber);
     
    const divideNumber = document.getElementById('divide-number').innerText;
    const convertedDivideNumber = parseInt(divideNumber);
     
    document.getElementById('add-number').innerText = convertedAddNumber + 1;

    document.getElementById('divide-number').innerText = convertedDivideNumber - 1;

    const sixTitle = document.getElementById('card-six-title').innerText;
    const time = new Date().toLocaleTimeString();

    const addActivity = document.getElementById('add-activity');

    const p = document.createElement('p');
    p.classList.add('bg-slate-100');
    p.classList.add('my-4');
    p.classList.add('rounded-xl');
    p.innerHTML = `
    <p class="p-2">You have completed the task ${sixTitle} at ${time}</p>
    `; 

    addActivity.appendChild(p);
})