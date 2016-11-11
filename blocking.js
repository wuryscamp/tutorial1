'use strict';

let nyuci = () => {
	let iya = true;
	if(!iya){
		return 'Ngga nyuci..';
	} else {
		return 'Nyuci selesai..';
	}
};

let masak = (m) => {
	let iya = true;
	if(!iya){
		return 'Ngga masak';
	} else{
		return `${m}, Masak selesai`;
	}
};

let makan = (m) => {
	let iya = true;
	if(!iya){
		return 'Ngga makan';
	} else {
		return `${m}, baru bisa makan`;
	}
};

let fnNyuci = nyuci();
let fnMasak = masak(fnNyuci);
let fnMakan = makan(fnMasak);

console.log(fnMakan);