class Instructor{
    name;
    location;
    constructor(add1, add2){
        this.name = add1;
        this.location= add2;
    }
    desigantion = 'insructor'
    team = 'web'
    supportSession(time){
        console.log(`star the supportSession ${time}`)
    }
}
const amir = new Instructor('ASmir', 'Dhaka');
console.log(amir);
amir.supportSession('9:00');