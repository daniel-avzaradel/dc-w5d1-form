const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const send = document.getElementById('send');


send.addEventListener('click', (e) => {
    e.preventDefault()
    let fullname = { "name": '', "last name": ''}
    let first = firstName.value;
    let last = lastName.value;
    fullname["name"] = first;
    fullname["last name"] = last;

    console.log(fullname)

    const fullJson = JSON.stringify(fullname);
    console.log(fullJson);
})