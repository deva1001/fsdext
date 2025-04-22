function task(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  
  task("Task 1", 1000)
    .then(() => task("Task 2", 1000))
    .then(() => task("Task 3", 1000))
    .then(() => console.log("All tasks done (Promise Chaining)"));
    function task(message, delay) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(message);
            resolve();
          }, delay);
        });
      }
      
      async function runTasks() {
        await task("Task 1", 1000);
        await task("Task 2", 1000);
        await task("Task 3", 1000);
        console.log("All tasks done (Async/Await)");
      }
      
      runTasks();
      