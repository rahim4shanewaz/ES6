const arr = [2,3,4,5,6];
const number= 30;
const doubleIt = num => num*2;
//console.log(doubleIt(number));

// map function
const result = arr.map(doubleIt);
//console.log(Math.max(...result));


const arrString= ['ratul','royans','sakibs','arkans'];

const strinng = arrString.map(name=> name);
//console.log(strinng);
    const arryOfObject = [
        {
            price: 5000,
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
              street: 'Norberto Crossing',
              suite: 'Apt. 950',
              city: 'South Christy',
              zipcode: '23505-1337',
              geo: { lat: '-71.4197', lng: '71.7478' }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
              name: 'Considine-Lockman',
              catchPhrase: 'Synchronised bottom-line interface',
              bs: 'e-enable innovative applications'
            }
          },
          {
            price: 15000,
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
              street: 'Rex Trail',
              suite: 'Suite 280',
              city: 'Howemouth',
              zipcode: '58804-1099',
              geo: { lat: '24.8918', lng: '21.8984' }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
              name: 'Johns Group',
              catchPhrase: 'Configurable multimedia task-force',
              bs: 'generate enterprise e-tailers'
            }
          }
    ]

    const arryOfObjects = arryOfObject.map(element => element.address.geo.lat);
    //console.log(arryOfObjects);



    const numbers = [2,45,67,34,4,11,89,25];

    const bigNumbers = numbers.filter(number => number  < 20)
    console.log(bigNumbers);
    const bigNumber = numbers.find(number => number  > 20)
    console.log(bigNumber);
    const price = arryOfObject.find(element => element.price  > 5000)
    console.log(price);


    const num = numbers.reduce((pre, current) => pre + current, 0)
    console.log(num);

  