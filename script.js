//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
	const fakeData = {
		name: "John",
		age: 30,
	};
	return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// Використовуємо try для обробки помилок
// Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
async function getData() {
	try {
		const data = await fetchFakeData();
		console.log(data);
	} catch (error) {
		console.error("Сталася помилка:", error);
	}
}




// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
	// Повертаємо новий Promise
	return new Promise((resolve) => {
		// Використовуємо setTimeout для симуляції асинхронної операції.
		// Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
		setTimeout(() => {
			resolve(Math.random());
		}, seconds * 1000);
	});
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
// Використовуємо try для обробки помилок
// Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
// В функцію потрібно передати в seconds в якості аргументу
// Результат виконання функції присвоюється константі randomNumber.
// Виводимо отримане випадкове число в консоль
// Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
async function logRandomNumberAfterSeconds(seconds) {
	try {
		const randomNumber = await getRandomNumberAfterSeconds(seconds)
		this.seconds = seconds;
		console.log(randomNumber);
	} catch (error) {
		console.error("Сталася помилка:", error);
	}
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки GET-запиту на вказаний URL

// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль

// Конвертуємо відповідь у формат JSON

// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є
async function getDataFromUrl(URL) {
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error(`Помилка при отриманні даних: ${response.statusText}`);
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Сталася помилка:", error.message);
	}
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"

// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON

// Перевіряємо через властивість ok, чи є відповідь вдалою

// Конвертуємо відповідь у формат JSON

// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є


async function postDataWithAuth(url, data, authToken) {
	try {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`
			},
			body: JSON.stringify(data)
		};
		const response = await fetch(url, requestOptions);
		if (!response.ok) {
			throw new Error(`Помилка при відправленні даних: ${response.statusText}`);
		}
		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.error("Сталася помилка:", error.message);
	}
}



console.log("Завдання: 4 ==============================");
postDataWithAuth(
	"https://petstore.swagger.io/v2/store/order",
	{
		id: 0,
		petId: 0,
		quantity: 0,
		shipDate: "2023-07-23T19:28:06.229Z",
		status: "placed",
		complete: true,
	},
	"fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
// Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
// Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
// Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
// Віддаємо значення лічильника та збільшуємо його на один

// Використовуємо асинхронний генератор та записуємо його значення в константу gen

// Створюємо асинхрону функцію printFiveItems
// Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
// Перебираємо значення gen
// Виводимо в консоль поточне значення
// Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).

async function* asyncGenerator() {
	let i = 0;
	while (true) {
		await new Promise(resolve => setTimeout(resolve, 1000));
		yield i;
		i++;
	}
}

const gen = asyncGenerator();
async function printFiveItems() {
	for await (const value of gen) {
		console.log(value);
		if (value === 4) break;
	}
}




// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з бази даних");
		}, 1000);
	});
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з API");
		}, 800);
	});
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з кешу");
		}, 600);
	});
}

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з бази даних");
		}, 1000);
	});
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з API");
		}, 800);
	});
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Дані з кешу");
		}, 600);
	});
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
	// Використовуємо try для обробки помилок
	try {
		// Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
		// Результат роботи функції зберігаємо у змінну dbData
		const dbData = await getDataFromDB();

		// yield використовується для того, щоб повернути значення dbData
		yield dbData;

		// Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
		const apiData = await getDataFromAPI();
		yield apiData;

		// І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
		const cacheData = await getDataFromCache();
		yield cacheData;
	} catch (error) {
		// Виводимо помилки в консоль якщо вони є
		console.error(error);
	}
}

// Створюємо асинхрону функцію displayData
async function displayData() {
	// Створюємо екземпляр генератора gatherData
	const dataGenerator = gatherData();
	// Три рази виводимо виводимо поточне значення генератора в консоль
	console.log((await dataGenerator.next()).value);

	console.log((await dataGenerator.next()).value);

	console.log((await dataGenerator.next()).value);
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 6 


// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7

function* countdownGenerator(start) {
	let count = start;

	while (count >= 0) {
		yield count;
		count--;
	}
}

// Створюємо екземпляр генератора countdown з лічильником 5
const countdown = countdownGenerator(5);
console.log("Завдання: 7 ==============================");

// Запускаємо генератор та отримуємо перше значення, яке записуємо в змінну nextValue
let nextValue = countdown.next();

// Цикл while, що виводить значення з генератора і працює доки генератор не вичерпаний
while (!nextValue.done) {
	// Виводимо поточне значення
	console.log(nextValue.value);

	// Отримуємо наступне значення з генератора
	nextValue = countdown.next();
}

