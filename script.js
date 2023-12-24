const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
];


let div = document.getElementById('root');
let list = document.createElement('ul');
div.append(list);

books.forEach(function (value, index) {
    let keys = Object.keys(value);
    let li = document.createElement('li');

    try {
        const requiredProperties = ['author', 'name', 'price'];
        const missingProperties = requiredProperties.filter(prop => !value.hasOwnProperty(prop));

        if (missingProperties.length === 0) {
            keys.forEach(key => {
                li.append(key + ': ' + value[key] + ', ');
            });
            list.append(li);
        } else {
            throw new Error(`Book (index ${index}) misses ${missingProperties} property.`);
        }
    } catch (error) {
        console.log(error.name + ': ' + error.message);
    }
});


