// Constructor
function Human(firstName, lastName, age, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
};

let pkt = new Human('Thanh', 'Kim', 24, 'Frontend Dev');

console.log(pkt);

let chouchou = {
    firstName : 'Chau',
    lastName : 'Nguyen',
    age : 22,
    job : 'Content Marketing',
};

console.log(chouchou);

