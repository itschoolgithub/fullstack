fetch('/backend/text.php').then(function (result) {
    return result.text();
}).then(function (text) {
    document.querySelector('.text').textContent = text;
});

fetch('/backend/json.php').then(function (result) {
    return result.json();
}).then(function (json) {
    document.querySelector('.json').textContent = json.name + ' ' + json.age;
});

const form = document.querySelector('.form');
form.querySelector('button').addEventListener('click', function () {
    fetch('/backend/form.php', {
        method: 'POST',
        body: new FormData(form)
    }).then(function (result) {
        return result.json();
    }).then(function (json) {
        form.querySelector('div').textContent = json.answer;
    });
});

const send = document.querySelector('.send');
send.querySelector('button').addEventListener('click', function () {
    let object = {
        country: send.querySelector('[name="country"]').value,
        city: send.querySelector('[name="city"]').value,
    };

    fetch('/backend/send.php', {
        method: 'POST',
        body: JSON.stringify(object)
    }).then(function (result) {
        return result.json();
    }).then(function (json) {
        send.querySelector('div').textContent = json.echo;
    });
});