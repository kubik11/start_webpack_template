console.log('app has started');
import '../css/fonts.css';
// const $ = require('jquery');
const _ = require('underscore');
// import $ from "jquery";
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '../css/style.sass';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
import '../css/media.sass';
const Custumer = require('./about.js');
import {Search} from './about.js'
const custumers = require('./custumers.js');
import Humburgers from './humburgers.js'
import Resize from './resize.js'
 // let user = new Custumer( custumers[0] );

$('#push').click(function(){
	let val = $('#in').val();
	let counter = false;
	custumers.forEach(( elem, i, arr)=>{
		if(elem.name == val){
			counter = !counter;
			console.log(elem);
		}else{
			if (!counter) {
				console.log('nothing has found');
			}
		}
	});
	// console.log('it ckicked');
});

// initialization the resizing window
const resize = new Resize();
document.addEventListener("DOMContentLoaded", resize.go());
window.onresize = ()=>{
	resize.go();
}
// initialization the button wind-down
const button = new Humburgers('hamburger', 'header-inner', 'breakpoint');
[].forEach.call(button.className, (b)=>{
	b.addEventListener('click', ()=>{
		button.go();
	});
});