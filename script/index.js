const keyName = 'visited';
const keyValue = true;

function asyncAlert(msg) {
    return new Promise(res => {
        const dialog = document.createElement('dialog');
        dialog.style.maxWidth = '75%';
        const right = document.createElement('div');
        right.style.textAlign = 'end';
        const para = document.createElement('p');
        para.style.whiteSpace = 'pre-wrap';
        para.textContent = msg;
        const button = document.createElement('button');
        button.textContent = 'OK';
        button.autofocus = true;
        const handler = ev => {
            dialog.close();
            dialog.remove();
            res(ev.type === 'click');
        };
        dialog.addEventListener('close', handler);
        button.addEventListener('click', handler);
        right.append(button);
        dialog.append(para, right);
        document.body.append(dialog);
        dialog.showModal();
    });
}

if (!sessionStorage.getItem(keyName)) {
    sessionStorage.setItem(keyName, keyValue);
    if (window.matchMedia('(max-width: 480px)').matches) {
        asyncAlert('このサイトの作者は、CSS を完全に理解しています。');
    }
}
