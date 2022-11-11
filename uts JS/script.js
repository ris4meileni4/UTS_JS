const img = document.createElement('img');

const input = document.querySelectorAll('input');

const tagScript = document.querySelector('script');

const appearEmoticon = (hewan = '') => {
    img.setAttribute('src', 'img/' + hewan + '.jpg',);
    document.body.insertBefore(img, tagScript);
};

input.forEach((inp) => {
    inp.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'hamster':
                appearEmoticon(event.target.id);
                break;
            case 'kelinci':
                appearEmoticon(event.target.id);
                break;
            case 'kucing':
                appearEmoticon(event.target.id);
                break;
            case 'sapi':
                appearEmoticon(event.target.id);
                break;
            case 'kuda':
                appearEmoticon(event.target.id);
                break;
        }
    });
});