const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promiseOne, promiseTwo]).then(res => console.log(res));

// race method starts the race between promises; the one whose state gets settled first, its output is shown first. 