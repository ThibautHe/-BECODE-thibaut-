let user = {
  firstname: "tibo",
  lastname: "hel",
  age: 24,
  printAge: function () {
    console.log(this.age);
  },
  yearpassed: function () {
    this.age++;
  },
};

user.printAge();
user.yearpassed();
user.printAge();

const obj = {
  people: [
    { name: "alice", age: 30 },
    { name: "bob", age: 20 },
    { name: "charlie", age: 10 },
  ],
  city: "new york",
  year: 2023,
};

function filterByAttr(jsonObj, attr) {
  let jsonKeys = Object.keys(jsonObj);
  jsonKeys.forEach(key => {
    if(Array.isArray(jsonObj[key]))
    {
        jsonObj[key].filter(element => element[attr] ? true : false)
    }else if(key !== attr){
        delete jsonObj[key]
    }
  });


  console.log(jsonObj);
}

filterByAttr(obj, "test");

//     //Find and return the value at the given nested path in the JSON object.
// test('findNestedValue should find and return the value at the given nested path', () => {
//     expect(findNestedValue(sampleJSON, 'people[0].name')).toBe('Alice');
//     expect(findNestedValue(sampleJSON, 'city')).toBe('New York');
//   });

// function findNestedValue(JSON, path) {
//   let { objectName, arrayIndex, propertyName } = extractParts(path);
//   console.log(JSON[objectName][arrayIndex][propertyName]);
// }

function findNestedValue(obj, path) {
    const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');

    console.log(parts);
    
    console.log(parts.reduce((currentValue, key) => {
        return currentValue ? currentValue[key] : undefined;
    }, obj))

    console.log([obj]);
    
}

// findNestedValue(obj, "people[0].name");

function extractParts(inputString) {
  // Extract the object name before the first bracket or dot
  const objectMatch = inputString.match(/^(\w+)/);
  const objectName = objectMatch ? objectMatch[0] : null;

  // Extract the index within the brackets (e.g., [0])
  const indexMatch = inputString.match(/\[(\d+)\]/);
  const arrayIndex = indexMatch ? indexMatch[1] : null;

  // Extract the property after the dot
  const propertyMatch = inputString.match(/\.(\w+)/);
  const propertyName = propertyMatch ? propertyMatch[1] : null;

  return { objectName, arrayIndex, propertyName };
}
