// Завдання 1 Створити таймер, який буде починати відлік з 1 години та
// зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен 
// відправляти повідомлення екран про те, що залишилось менше половини часу.
const timer = setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    if (minutes === 30) {
        clearInterval(timer);
        alert('Залишилось менше половини часу');
    }
}, 1000);
//Завдання 2 Створити таймер, який буде починати відлік з 30 секунд та 
// зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер 
// повинен відтворювати якусь анімацію, а при досягненні 0 секунд — 
// виконувати певну дію, наприклад, робити кнопку почати знову активною.
const timer2 = setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    if (seconds === 10) {
        clearInterval(timer2);
        alert('Виконується певна дія');
    } else if (seconds === 0) {
        clearInterval(timer2);
        alert('Дія виконана');
    }
}, 1000);
