
// ---------------------
const dateTag = document.getElementById('date-tag');

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const newDate = (new Date().toLocaleDateString(undefined, options));

const p = document.createElement('p');
p.innerHTML = `
<p> ${newDate} </p>
`;

dateTag.appendChild(p);
// ---------------------

// ---------------------
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('add-activity').innerText = " ";
})
// ---------------------

// ---------------------
const bodyColors = document.getElementById("body");
const colors = [
    "pink",
    "Turquoise",
    "silver",
    "lightsalmon",
    "gold"
];
let index = 0;
document.getElementById("color-btn").onclick = function() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
};
// ---------------------------