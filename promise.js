'use strict';

let nyuci = () => {
	return new Promise((resolve, reject) => {
		let iya = true;
		if(!iya){
			reject('Ngga nyuci...');
		}
		resolve('Nyuci selesai...');
	});
};

let masak = (m) => {
	return new Promise((resolve, reject) => {
		let iya = false;
		if(!iya){
			reject('Ngga masak...');
		}
		resolve(`${m}, Masak selesai..`);
	});
};

let makan = (m) => {
	return new Promise((resolve, reject) => {
		let iya = true;
		if(!iya){
			reject('Ngga makan..');
		}
		resolve(`${m}, Lanjut makan....`);
	});
};

nyuci().then(m => masak(m)).then(m => makan(m)).then(m => console.log(m)).catch(error => console.log(error));

