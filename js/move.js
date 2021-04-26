const divs = document.querySelectorAll('.move');
let divX;
let divY;
let drawActive = false;
let insertX;
let insertY;
let move;
divs.forEach(div => {
    div.addEventListener('mousedown', function(e) {
        this.style.backgroundColor = 'grey';
        move = document.querySelector(`[data-id='${this.getAttribute('data-id')}'] `)
        drawActive = !drawActive;
        insertX = e.offsetX;
        insertY = e.offsetY;
    })
    document.addEventListener('mousemove', function(e) {
        if (drawActive) {
            divX = e.clientX;
            divY = e.clientY;
            move.style.left = `${divX-insertX}px`;
            move.style.top = `${divY-insertY}px`;
        }
    })
    div.ondragstart = (e) => {
        e.preventDefault();
    }
    div.addEventListener('mouseup', function() {
        this.style.backgroundColor = 'black';
        drawActive = !drawActive;
    })
})