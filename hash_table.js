class HashMap {
	constructor(size = 50) {
		this.buckets = Array.from({ length: size }, () => []);
		this.size = size;
	}

	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode % this.size;
	}

	setItem(key, value) {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (const pair of bucket) {
			if (pair[0] === key) {
				pair[1] = value;
				return;
			}
		}

		bucket.push([key, value]);
	}

	getItem(key) {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (const pair of bucket) {
			if (pair[0] === key) return pair[1];
		}

		return undefined;
	}

	has(key) {
		return this.getItem(key) !== undefined;
	}

	removeItem(key) {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket.splice(i, 1);
				return true;
			}
		}

		return false;
	}

	printItems(buckets, i = 0) {
		if (i === buckets.length) return;

		const bucket = buckets[i];
		for (const [key, value] of bucket) {
			console.log({ key, value });
		}

		this.printItems(buckets, i + 1);
	}
}

const hashMap = new HashMap(20);
hashMap.setItem("name", "Rafael");
hashMap.setItem("age", 36);
hashMap.setItem("color", "black");
hashMap.setItem("song-name", "deep inside");

hashMap.printItems(hashMap.buckets);

console.log(hashMap.getItem("song-name"));
console.log(hashMap.has("song-name"));
console.log(hashMap.removeItem("song-name"));

hashMap.printItems(hashMap.buckets);

