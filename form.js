let name = document.getElementById('name');
name.addEventListener('keyup', captureName);

function captureName() {
    let output = document.getElementById('output');
    output.innerHTML = name.value;
}

document.getElementById('name').addEventListener('keyup', function(){
    document.getElementById('output').innerHTML = document.getElementById('name').value;
})