function bubbleSort(arr, n){
    for(let i = n-1; i>0; i--){ // Outer loop starts from last index to make sure largest element is not touched again after one iteration
        let isSwapped = false // Optimization check to check if any swap happens, if not, means array is already sorted
        for(let j=0; j<i; j++){ // Loop from 0 -> last array index i
            if(arr[j] > arr[j+1]){ // Sorting conditoin check
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] // swap
                isSwapped = true // Boolean check
            }
        }
        if(!isSwapped) break // if this is true, means array is sorted, it breaks out of outer for loop
    }
    console.log(arr);
    
}

const arr = [2, 4, 5, 1, 6, 3, 7, 1, 0, 4, 6, 4]

bubbleSort(arr, arr.length)