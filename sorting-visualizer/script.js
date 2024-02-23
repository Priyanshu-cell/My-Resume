function generateRandomArray(size, min, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  }
  
  function renderArray(array) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    array.forEach(num => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = num + 'px';
      container.appendChild(bar);
    });
  }
  
  async function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap array[j] and array[j+1]
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
          // Render array after swapping
          renderArray(array);
          await new Promise(resolve =>
            setTimeout(resolve, 100) // Adjust the speed of sorting
          );
        }
      }
    }
  }
  
  function startSorting() {
    const array = generateRandomArray(20, 10, 200); // Generate a random array of 20 elements
    renderArray(array); // Render the initial array
  
    // Start sorting (you can change the sorting algorithm here)
    bubbleSort(array);
  }
  