function rain(q) {
    console.log(q);
    let quantity = q;
    let containerRef = document.querySelector('.container');
    let i = 0;

    while( i < quantity) {
        let drop = document.createElement('i');
        let dropSize = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.2 + dropSize + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 10 + duration + 's';

        containerRef.appendChild(drop);
        i++;
    }

}

rain(150);