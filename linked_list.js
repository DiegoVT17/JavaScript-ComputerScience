class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// insertar el primer nodo
	insertFirst(value) {
		this.head = new Node(value, this.head);
		this.size += 1;
	}

	// insertar al final
	insertLast(value) {
		let node = new Node(value);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size += 1;
	}

	// insert at index
	insertAt(value, index) {
		if (index > 0 && index > this.size) {
			return;
		}

		if (index === 0) {
			this.head = new Node(value, this.head);
			return;
		}

		const node = new Node(value);
		let current, prev;

		current = this.head;
		let count = 0;

		while (count < index) {
			prev = current;
			count++;
			current = current.next;
		}

		node.next = current;
		prev.next = node;
		this.size++;
	}

	getAtIndex(index) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count === index) {
				console.log(current.value);
			}
			count++;
			current = current.next;
		}

		return null;
	}

	removeAt(index) {
		if (index > 0 && index > this.size) {
			console.log("Invalid index");
			return;
		}

		let current = this.head;
		let prev;
		let count = 0;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				prev = current;
				current = current.next;
			}
			prev.next = current.next;
		}

		this.size--;
	}

	clearList() {
		this.head = null;
		this.size = 0;
	}

	// print
	printListData() {
		let current = this.head;

		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertFirst(500);

ll.insertAt(132, 1);
ll.getAtIndex(7);

ll.printListData();
ll.removeAt(2);
ll.printListData();
ll.clearList();
console.log("Borrado");
ll.printListData();
