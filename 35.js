let data = ['anil', 'peter', 'bruce'];
delete data[1];
console.log(data)

// delete keyword deletes the array element at the given position but doesn't deallocate space taken by it so length doesn't change and at the deleted element's index <1 empty item> is shown.