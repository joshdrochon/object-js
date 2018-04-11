function createBoard(){

	let objArr = [
  {
    "id": 1,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
	},
  {
    "id": 2,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
	},
  {
    "id": 3,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
	},
  {
    "id": 4,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
	},
  {
    "id": 5,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
	},
  {
    "id": 6,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 7,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 8,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 9,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 10,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 11,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 12,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 13,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 14,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 15,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 16,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 17,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 18,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 19,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 20,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 21,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 22,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 23,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 24,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  },
  {
    "id": 25,
    "category": "Books",
    "question": "Who wrote Harry Potter",
    "answer": "J.L. Rowling",
    "choices": ["Author1", "author2", "author3"],
    "value": 0
  }];

  let gameBoard = [[],[],[],[],[]];
	for(let i = 0; i < 5; i++){
		for(let j = 0; j <5; j++){
    	gameBoard[i].push(objArr[i]);
    }
	}

 	for(let i = 1; i <= 5; i++){
    gameBoard[i-1][0].value = i * 200;
    for(let j = 1; j < 5; j++){
      gameBoard[i-1][j].value = i * 200;
    }
  }
  return gameBoard;

}

console.log(createBoard());

//test function
function assignValues(){
  let myNumGrid = [[],[],[],[],[]];
  for(let i = 1; i <= 5; i++){
    myNumGrid[i-1][0] = i * 200;
    for(let j = 1; j < 5; j++){
      myNumGrid[i-1][j] = i * 200;
    }
  }
  return myNumGrid;
}

console.log(assignValues());

//regex to properly stringify
let myString = "Who wrote &quot;Harry Potter&quot;?"
console.log(myString.replace(/&quot;/g,'"'));
