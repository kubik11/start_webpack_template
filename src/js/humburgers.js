const $ = require('jquery');
const _ = require('underscore');



class Humburger{
	constructor(className, targetToggle, addedClass){
		this.className = document.getElementsByClassName(`${className}`);
		this.targetToggle = document.getElementsByClassName(`${className}`);
		this.addedClass =  addedClass;
	}
	go(){
		[].forEach.call(this.className, (elem)=>{
			if(!elem.classList.contains('is-active')){
				[].forEach.call(this.targetToggle, (i)=>{
					i.classList.add(`${this.addedClass}`);
					console.log('add is-actie button');
				});	
			}else{
				[].forEach.call(this.targetToggle, (e)=>{
					e.classList.remove(`${this.addedClass}`);
					console.log('remove is-actie button');
				});	
			}
		});
	}

}

module.exports = Humburger;