// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
//tecnologias.push('GraphQL') // Añade al final del array
//tecnologias.unshift('MongoDB') // Añade al final del array

// const nuevoArreglo = [...tecnologias, 'GraphQL']
// const nuevoArreglo = ['GraphQL', ...tecnologias]
const nuevoArreglo = ["MongoDB",...tecnologias, 'GraphQL']

console.log(nuevoArreglo)
//['MongoDB', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'GraphQL']
nuevoArreglo.splice(2, 1) // Elimina de una posición en especifica
console.log(nuevoArreglo)
//['MongoDB', 'HTML', 'JavaScript', 'React', 'Node.js', 'GraphQL']