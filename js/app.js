console.log('app has started');
import '../css/style.sass';
import '../css/fonts.css';
const $ = require('jquery');
const _ = require('underscore');
const Custumer = require('./about.js');
const custumers = require('./custumers.js');

let user = new Custumer( custumers[0] );

$('#push').click(function(){
	let val = $('#in').val();
	// user.custumerShow(val);
	console.log(custumers);
	console.log($('#in').val());
	// console.log(user);
	console.log('it ckicked');
});

