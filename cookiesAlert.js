function saveToLS(key, val) {

    if (!("localStorage" in window)) return;

    window.localStorage.setItem(key, val);

}

function readFromLS(key) {
    if (!("localStorage" in window)) return;

    return window.localStorage.getItem(key);
}

function cookieAlert(body, infoTxt, acceptTxt, ppTxt, ppLink) {

    if (readFromLS("cookiesAccepted") === "1") {
        return body;
    }

    let div = document.createElement('div');
    div.setAttribute("id", "cookie");
    div.setAttribute("class", "cookie");

    let p = document.createElement('p');
    p.setAttribute("id", "cookie__text");
    p.setAttribute("class", "cookie__text");
    p.innerText = infoTxt;

    let span = document.createElement('span');
    span.setAttribute("id", 'cookie__close');
    span.setAttribute("class", 'cookie__close');
    span.innerText = acceptTxt;

    span.addEventListener("click", function() {

        saveToLS("cookiesAccepted", 1);

        div.remove();
    });

    let info = document.createElement('a');
    info.setAttribute('href', ppLink);
    info.setAttribute('id', 'cookie__info');
    info.setAttribute('class', 'cookie__close');
    info.innerText = ppTxt;
    
    p.append(span);
    p.append(info);
    div.append(p);
    body.prepend(div);

    return body;

};

window.addEventListener("load", function() {

    const cookieInfoText = 'This website uses cookies '
    const acceptText = 'Understood '
    const privacyPoliticsText = ' Privacy Politics'
    const privacyPoliticsLink = 'https://google.com/'

    cookieAlert(document.querySelector('body'), cookieInfoText, acceptText, privacyPoliticsText, privacyPoliticsLink);

});