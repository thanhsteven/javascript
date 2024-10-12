
var myInfo = {
    lastName : 'pham',
    midName : 'Kim',
    firstName : 'Thanh',
    age : 22,
    getName : function() {
        return `${this.lastName} ${this.midName} ${this.firstName}`;
    },
};

console.log(myInfo);

for (var key in myInfo) {
    console.log(myInfo[key]);
};

var languages = ['javascript', 'php', 'nodejs', 'html', 'css'];

for (var key in languages) {
    console.log(languages[key]);
};