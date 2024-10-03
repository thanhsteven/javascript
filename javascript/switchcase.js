const fruit = "oranage";
if (fruit === "apple") {
	console.log("You like to eat apple");
}

const fruit2 = "water melon";
switch (fruit2) {
	case "apple":
		console.log("You like to eat Apple");
		break;
	case "orange":
		console.log("You like to eat Orange");
		break;
	case "banana":
	case "lemon":
		console.log("You like to eat Banana");
	default:
		console.log("You like to eat Water Melon");
		break;
}

const number = "500";
switch (Number(number)) {
	case 90:
		console.log(number);
		break;
	case 100:
		console.log(number);
		break;
	default:
		console.log(number);
		break;
}

// ! Ternary Operator
const yourAge = 18;
let message = "";
if (yourAge >= 18) {
	message = "You are 18 years old";
} else {
	message = "You are 10 years old";
}

let message2 = yourAge >= 19 ? "You are 19 years old" : "You are not 19 years old";
console.log(message2);

let message3 = yourAge >= 18 ? "You are Adult" : yourAge <= 10 ? "You are still a Child" : "You are a Young people";
console.log(message3);
