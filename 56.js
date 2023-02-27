let data = 'size';
const bird = {
    size:'small'
}

console.log(bird[data]);
console.log(bird["size"]);
console.log(bird.size);
console.log(bird.data); //undefined as data is not a proprty inside bird object

