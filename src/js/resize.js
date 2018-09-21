const $ = require('jquery');
const _ = require('underscore');
import Humburgers from './humburgers.js'
const button = new Humburgers('hamburger', 'header-inner', 'breakpoint');
class Resize{
	constructor(){
		this.width = window.outerWidth;
	}
	
	go(){
		if(this.width < 767){
			button.go();
			console.log('view is less than 767px');
		}else{
			button.go();
			console.log('sds');
		}
	}
}
module.exports = Resize;