const $ = require('jquery');
const _ = require('underscore');

console.log('about has started');

class Custumer{
	constructor(age, name, hobbie, sex){
		this.age = age;
		this.name = name;
		this.hobbie = hobbie;
		this.sex = sex;
	}

	custumerShow(id){
		if(typeof id !== 'string'){
			consloe.log('you have to pass a string!!!');
			return;
		}
		debugger;
		let element = document.getElementById(id);
		let mestoimenie;
		if(this.sex == 'male'){
			mestoimenie = 'he\'s ';
		}else{
			mestoimenie = 'she\'s ';
		}
		let content = `This guy name is ${this.name}, ${mestoimenie} ${this.age} and  ${mestoimenie} hobbie is ${this.hobbie} `;
		// $(`#${element}`).textContent = content;
		$(`#1`).textContent = content;
	}
}

module.exports = Custumer;