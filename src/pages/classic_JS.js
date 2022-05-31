const moment = require('moment');
/**
 const zamikanieFn1 = (name) => {
    let firstName = name;
    return (surName) => {
        console.log(firstName+'_'+surName)
    }
}

 const user1 = zamikanieFn1('artem')
 const user2 = zamikanieFn1('dima')
 **/


/**

 const serverData = [
 {
        name: 'artem',
        age: 18
    },
 {
        name: 'denis',
        age: 7
    },
 ]
 const serverData2 = [
 {
        name: 'artem2',
        age: 9
    },
 {
        name: 'denis2',
        age: 18
    },
 ]


 const prepareUserList = (users) => {
    let prepUsers = users.filter(item => item.age >= 10);
    return (mode='age') => {
        return prepUsers.map(item=>{
            if (mode === 'name'){
                return item.name
            }else{
                return item.age
            }
        })
    }
}

 const users = prepareUserList(serverData)
 const users2 = prepareUserList(serverData2)

 <Component  users={users2} />
 <Component users={users} />



 **/


/**
 const zamikanieCounter = () => {
    let number = 0;
    return () => {
        number =  number + 1
        return number
    }
}

 const num1 = zamikanieCounter()
 const num2 = zamikanieCounter()
 console.log(num1())
 console.log(num1())
 console.log(num1())
 console.log(num1())
 console.log(num1())
 console.log(num2())
 console.log(num2())
 console.log(num2())
 console.log(num2())
 console.log(num2())
 **/


/**
 set- установить время https://momentjs.com/docs/#/get-set/
 moment().set('year',2010).set('month',0)

 add- добавить время
 moment().add(7,'day').add(10,'hour')

format- форматирование времени
 moment(customTime).format('DD MM YYYY hh:mm:ss') https://momentjs.com/docs/#/displaying/format/

 isAfter- позже ли время
 moment('2010-10-20').isAfter('2010-10-19'); // true
 https://momentjs.com/docs/#/query/is-after/

 Is Before
 https://momentjs.com/docs/#/query/is-before/
 moment('2010-10-20').isBefore('2010-10-21'); // true
 **/
const yearmonth = moment().set('year',2010).set('month',0)
console.log(yearmonth.format('DD MM YYYY hh:mm:ss'))
const customTime = moment().add(7,'day').add(10,'hour')
console.log(moment(customTime).format('DD MM YYYY hh:mm:ss'))