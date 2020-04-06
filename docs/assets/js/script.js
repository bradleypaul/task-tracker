document.querySelector('.btn').addEventListener("click", function() {
    const element = document.createElement('li');
    element.classList.add('task-item');
    element.innerText = "Fart";
    document.querySelector('.task-list').append(element);
})