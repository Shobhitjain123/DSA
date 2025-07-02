function insertionSort(arr, n){
    for(let i = 1; i<n; i++){
        let current = arr[i] // Store the Current Value
        let j = i - 1 // Take Cares of sorted part of the array
        while(j >= 0 && arr[j] > current){ // Check if sorted condition
            arr[j+1] = arr[j] // shifts elements to right 
            j-- // Move j back to 1 position to validate all values till starting of array
        }
        arr[j+1] = current // Finally places Currnet value to correct position
    }
    console.log(arr);
    
}

const arr = [3, 4, 1, 5, 7, 3, 5, 1, 8, 9]

insertionSort(arr, arr.length)
