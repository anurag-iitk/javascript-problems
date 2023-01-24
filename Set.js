// Set data structure

const data = new Set();

data.add(1)
data.add(2)
data.add(3)
data.add(3)
data.add(4)

data.delete(4)

console.log(data)
console.log(data.size)
console.log(data.has(3))
console.log(data.keys())
console.log(data.values())
console.log(data.entries())