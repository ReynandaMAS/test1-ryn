const isPalindrome = (str) => {
	// Menghapus whitespace dan mengubah ke huruf kecil
	str = str.toLowerCase().replace(/\s/g, "");

	// Mendefinisikan dua indeks: satu dari awal dan satu dari akhir string
	let left = 0;
	let right = str.length - 1;

	// Memeriksa karakter dari kedua ujung string
	while (left < right) {
		if (str[left] !== str[right]) {
			return false;
		}
		left++;
		right--;
	} 

	return true;
}

module.exports = isPalindrome;
