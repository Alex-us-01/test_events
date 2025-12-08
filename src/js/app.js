// // Импортируем персонажа
// import { Character } from './Character.js';

// // Создание поля
// const gameField = document.getElementById('gameField');
// const fieldSize = 4;

// // Создание сетки
// const createGrid = () => {
//     for (let i = 0; i < fieldSize * fieldSize; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         gameField.append(cell);
//     }
// };

// // Счетчики
// let hits = 0;
// let misses = 0;

// // Элементы для отображения результатов
// const hitsDisplay = document.querySelector('.dead');
// const missesDisplay = document.querySelector('.lost');


// // Обработка клика по ячейке
// const handleCellClick = (event) => {
//     const target = event.target;
    
//     if (target.closest('.cell').contains(Character.elementNode)) {
//         // Попадание
//         hits++;
//         hitsDisplay.textContent = hits;
//         Character.elementNode.remove();
//         placeCharacter();
//         checkGameOver();
//     } else {
//         // Промах
//         misses++;
//         missesDisplay.textContent = misses;
//         checkGameOver();
//     }
// };


// // Генератор случайных чисел
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// // Размещение персонажа в случайной позиции
// const placeCharacter = () => {
//     const randomCell = getRandomInt(0, fieldSize * fieldSize);
//     const cells = document.getElementsByClassName('cell');
    
//     // Перемещаем персонажа в новую ячейку
//     cells[randomCell].append(Character.elementNode);
// };

// // Перемещение персонажа
// const moveCharacter = () => {
//     const cells = document.getElementsByClassName('cell');
//     let currentPosition = -1;
    
//     // Поиск текущей позиции
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].contains(Character.elementNode)) {
//             currentPosition = i;
//             break;
//         }
//     }
    
//     // Генерация новой позиции
//     let newPosition = currentPosition;
//     while (newPosition === currentPosition) {
//         newPosition = getRandomInt(0, fieldSize * fieldSize);
//     }
    
//     // Перемещаем персонажа в новую позицию
//     cells[newPosition].append(Character.elementNode);
// };


// const checkGameOver = () => {
//     if (hits >= 10 || misses >= 5) {
//         stopGame();
//         alert(`Игра окончена!\nПопадания: ${hits}\nПропуски: ${misses}`);
//     }
// };


// // Инициализация
// createGrid();
// placeCharacter();

// // Сохраняем идентификатор интервала
// let gameInterval;

// // Запуск таймера
// const startGame = () => {
//     gameInterval = setInterval(moveCharacter, 1000);
// };

// // Остановка таймера
// const stopGame = () => {
//     clearInterval(gameInterval);
// };

// // Пример добавления кнопки остановки
// const stopButton = document.createElement('button');
// stopButton.textContent = 'Стоп';
// stopButton.addEventListener('click', stopGame);
// document.body.append(stopButton);

// // Запускаем игру при загрузке
// startGame();


//__________________________________________________________________________________________________ Рабочий код

// // Импортируем персонажа
// import { Character } from './Character.js';

// // Создание поля
// const gameField = document.getElementById('gameField');
// const fieldSize = 4;

// // Счетчики
// let hits = 0;
// let misses = 0;

// // Элементы для отображения результатов
// const hitsDisplay = document.querySelector('.dead');
// const missesDisplay = document.querySelector('.lost');

// // Создание сетки
// const createGrid = () => {
//     for (let i = 0; i < fieldSize * fieldSize; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.addEventListener('click', handleCellClick);
//         gameField.append(cell);
//     }
// };

// // Генератор случайных чисел
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// // Обработка клика по ячейке
// const handleCellClick = (event) => {
//     const target = event.target;
    
//     if (target.closest('.cell').contains(Character.elementNode)) {
//         // Попадание
//         hits++;
//         hitsDisplay.textContent = hits;
//         Character.elementNode.remove();
//         placeCharacter();
//         checkGameOver();
//     } else {
//         // Промах
//         misses++;
//         missesDisplay.textContent = misses;
//         checkGameOver();
//     }
// };

// // Размещение персонажа в случайной позиции
// const placeCharacter = () => {
//     const randomCell = getRandomInt(0, fieldSize * fieldSize);
//     const cells = document.getElementsByClassName('cell');
//     cells[randomCell].append(Character.elementNode);
// };

// // Перемещение персонажа
// const moveCharacter = () => {
//     const cells = document.getElementsByClassName('cell');
//     let currentPosition = -1;
    
//     // Поиск текущей позиции
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].contains(Character.elementNode)) {
//             currentPosition = i;
//             break;
//         }
//     }
    
//     // Генерация новой позиции
//     let newPosition = currentPosition;
//     while (newPosition === currentPosition) {
//         newPosition = getRandomInt(0, fieldSize * fieldSize);
//     }
    
//     // Перемещаем персонажа в новую позицию
//     cells[newPosition].append(Character.elementNode);
// };

// // Проверка окончания игры
// const checkGameOver = () => {
//     if (hits >= 10 || misses >= 5) {
//         stopGame();
//         alert(`Игра окончена!\nПопадания: ${hits}\nПропуски: ${misses}`);
//     }
// };

// // Инициализация
// createGrid();
// placeCharacter();

// // Сохраняем идентификатор интервала
// let gameInterval;

// // Запуск таймера
// const startGame = () => {
//     gameInterval = setInterval(moveCharacter, 1000);
// };

// // Остановка таймера
// const stopGame = () => {
//     clearInterval(gameInterval);
// };

// // Пример добавления кнопки остановки
// const stopButton = document.createElement('button');
// stopButton.textContent = 'Стоп';
// stopButton.addEventListener('click', stopGame);
// document.body.append(stopButton);

// // Запускаем игру при загрузке
// startGame();






//______________________________________________________________________________________ Рабочий код

// // Импортируем персонажа
// import { Character } from './Character.js';

// // Создание поля
// const gameField = document.getElementById('gameField');
// const fieldSize = 4;

// // Счетчики
// let hits = 0;
// let misses = 0;

// // Элементы для отображения результатов
// const hitsDisplay = document.querySelector('.dead');
// const missesDisplay = document.querySelector('.lost');

// // Создание сетки
// const createGrid = () => {
//     for (let i = 0; i < fieldSize * fieldSize; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.addEventListener('click', handleCellClick);
//         gameField.append(cell);
//     }
// };

// // Генератор случайных чисел
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// // Обработка клика по ячейке
// const handleCellClick = (event) => {
//     const target = event.target;
    
//     if (target.closest('.cell').contains(Character.elementNode)) {
//         // Попадание
//         hits++;
//         hitsDisplay.textContent = hits;
//         Character.elementNode.remove();
//         placeCharacter();
//         checkGameOver();
//     }
// };

// // Размещение персонажа в случайной позиции
// const placeCharacter = () => {
//     const randomCell = getRandomInt(0, fieldSize * fieldSize);
//     const cells = document.getElementsByClassName('cell');
    
//     // Добавляем изображение в ячейку
//     cells[randomCell].append(Character.elementNode);
    
//     // Удаляем изображение через 1 секунду
//     setTimeout(() => {
//         Character.elementNode.remove();
//         misses++;
//         missesDisplay.textContent = misses;
//         checkGameOver();
//         placeCharacter(); // Повторное размещение
//     }, 1000);
// };

// // Проверка окончания игры
// const checkGameOver = () => {
//     if (hits >= 10 || misses >= 5) {
//         stopGame();
//         alert(`Игра окончена!\nПопадания: ${hits}\nПропуски: ${misses}`);
//     }
// };

// // Инициализация
// createGrid();
// placeCharacter();

// // Сохраняем идентификатор интервала
// let gameInterval;

// // Запуск таймера
// const startGame = () => {
//     gameInterval = setInterval(placeCharacter, 1000);
// };

// // Остановка таймера
// const stopGame = () => {
//     clearInterval(gameInterval);
// };

// // Пример добавления кнопки остановки
// const stopButton = document.createElement('button');
// stopButton.textContent = 'Стоп';
// stopButton.addEventListener('click', stopGame);
// document.body.append(stopButton);

// // Запускаем игру при загрузке
// startGame();
//____________________________________________________________________________________________________________________________________________

// // Импортируем персонажа
// import { Character } from './Character.js';

// // Создание поля
// const gameField = document.getElementById('gameField');
// const fieldSize = 4;

// // Счетчики
// let hits = 0;
// let misses = 0;

// // Элементы для отображения результатов
// const hitsDisplay = document.querySelector('.dead');
// const missesDisplay = document.querySelector('.lost');

// // Создание сетки
// const createGrid = () => {
//     for (let i = 0; i < fieldSize * fieldSize; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.addEventListener('click', handleCellClick);
//         gameField.append(cell);
//     }
// };

// // Генератор случайных чисел
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// // Обработка клика по ячейке
// const handleCellClick = (event) => {
//     const target = event.target;
    
//     if (target.closest('.cell').contains(Character.elementNode)) {
//         // Попадание
//         hits++;
//         hitsDisplay.textContent = hits;
//         Character.elementNode.remove();
        
//         // Запускаем таймер на 1 секунду для нового появления
//         setTimeout(() => {
//             placeCharacter();
//         }, 1000);
        
//         checkGameOver();
//     } else {
//         // Промах
//         misses++;
//         missesDisplay.textContent = misses;
//         checkGameOver();
//     }
// };

// // Размещение персонажа в случайной позиции
// const placeCharacter = () => {
//     const randomCell = getRandomInt(0, fieldSize * fieldSize);
//     const cells = document.getElementsByClassName('cell');
    
//     // Добавляем изображение в ячейку
//     cells[randomCell].append(Character.elementNode);
    
//     // Удаляем изображение через 1 секунду
//     setTimeout(() => {
//         Character.elementNode.remove();
//         misses++;
//         missesDisplay.textContent = misses;
//         checkGameOver();
//     }, 1000);
// };

// // Проверка окончания игры
// const checkGameOver = () => {
//     if (hits >= 10 || misses >= 5) {
//         stopGame();
//         alert(`Игра окончена!\nПопадания: ${hits}\nПропуски: ${misses}`);
//     }
// };

// // Инициализация
// createGrid();
// placeCharacter();

// // Сохраняем идентификатор интервала
// let gameInterval;

// // Запуск таймера
// const startGame = () => {
//     gameInterval = setInterval(placeCharacter, 1000);
// };

// // Остановка таймера
// const stopGame = () => {
//     clearInterval(gameInterval);
// };

// // Пример добавления кнопки остановки
// const stopButton = document.createElement('button');
// stopButton.textContent = 'Стоп';
// stopButton.addEventListener('click', stopGame);
// document.body.append(stopButton);

// // Запускаем игру при загрузке
// startGame();





// Импортируем персонажа
import { Character } from './Character.js';

// Создание поля
const gameField = document.getElementById('gameField');
const fieldSize = 4;

// Счетчики
let hits = 0;
let misses = 0;

// Элементы для отображения результатов
const hitsDisplay = document.querySelector('.dead');
const missesDisplay = document.querySelector('.lost');

// Создание сетки
const createGrid = () => {
    for (let i = 0; i < fieldSize * fieldSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleCellClick);
        gameField.append(cell);
    }
};

// Генератор случайных чисел
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Обработка клика по ячейке
const handleCellClick = (event) => {
    const target = event.target;
    
    if (target.closest('.cell').contains(Character.elementNode)) {
        // Попадание
        hits++;
        hitsDisplay.textContent = hits;
        Character.elementNode.remove();
        placeCharacter();
        checkGameOver();
    } else {
        // Промах
        misses++;
        missesDisplay.textContent = misses;
        checkGameOver();
    }
};

// Размещение персонажа в случайной позиции
const placeCharacter = () => {
    const randomCell = getRandomInt(0, fieldSize * fieldSize);
    const cells = document.getElementsByClassName('cell');
    
    // Добавляем изображение в ячейку
    cells[randomCell].append(Character.elementNode);
    
    // Удаляем изображение через 1 секунду
    setTimeout(() => {
        Character.elementNode.remove();
        misses++;
        missesDisplay.textContent = misses;
        checkGameOver();
    }, 1000);
};

// Проверка окончания игры
const checkGameOver = () => {
    if (misses >= 5) {
        stopGame();
        alert(`Игра окончена!\nПопадания: ${hits}\nПропуски: ${misses}`);
    }
};

// Инициализация
createGrid();

// Таймер для появления персонажа
let gameInterval;

// Запускаем появление гоблина
const startGame = () => {
    placeCharacter();
    
    // Запускаем таймер для следующего появления
    gameInterval = setInterval(() => {
        placeCharacter();
    }, 0); // Интервал между появлениями
};

// Остановка игры
const stopGame = () => {
    clearInterval(gameInterval);
};

// Пример добавления кнопки остановки
const stopButton = document.createElement('button');
stopButton.textContent = 'Стоп';
stopButton.addEventListener('click', stopGame);
document.body.append(stopButton);

// Запускаем игру при загрузке
startGame();
