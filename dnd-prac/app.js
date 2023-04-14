// dom에서 item 항목 가져오기
const item = document.querySelector('.item');

// dragstart 이벤트 추가
item.addEventListener('dragstart', dragStart);

// dragstart 제어
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // 드래그 중인 항목의 id 가져오기
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // 드롭 타겟에 드래그 항목 추가
    e.target.appendChild(draggable);

    // 드래그 했던 항목 화면에 보이기
    draggable.classList.remove('hide');
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}