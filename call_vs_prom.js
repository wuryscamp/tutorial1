'use strict';

let nyuci = (cb, errCb) => {
	let iya = false;
	if(!iya){
		errCb('Ngga nyuci...');
	} else {
		cb('Nyuci selesai..');
	}
};

let masak = (m, cb, errCb) => {
	let iya = true;
	if(!iya){
		errCb('Ngga masak...');
	} else{
		cb(`${m}, Masak selesai..`);
	}
};

let makan = (m, cb, errCb) => {
	let iya = true;
	if(!iya){
		errCb('Gagal makan...');
	} else {
		cb(`${m}, Lanjut makan...`);
	}
};

nyuci(mNyuci => {
	masak(mNyuci, mMasak => {
		makan(mMasak, mMakan => {
			console.log(mMakan);
		}, errMakan => {
			console.log(errMakan);
		});
	}, errMasak => {
		console.log(errMasak);
	});
}, errNyuci => {
	console.log(errNyuci);
});


