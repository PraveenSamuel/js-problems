const arr1 = [0,3,5,7,13,16,17];
const arr2 = [2,4,5,6,7,8,9,11,13,15,16];

function mergeTwoSortedArray(arr1, arr2) {
    const arr3 = []
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    let i=0,j=0,k=0
    if((arr1Length == 0 && arr2Length == 0))
        return 0
    if(arr1Length !=0 && arr2Length ==0)
        return arr1
    if(arr2Length !=0 && arr1Length ==0)
        return arr2

    for( ;i<arr1Length&&k<arr2Length; ){
        if(arr1[i] < arr2[k]){
            arr3[j]=arr1[i]
            ++i
            ++j
            continue
        }
        if(arr1[i] > arr2[k]){
            arr3[j]=arr2[k]
            ++k
            ++j
            continue
        }
        if(arr1[i] == arr2[k]){
            arr3[j] = arr1[i]
            ++j
            ++i
            arr3[j] = arr2[k]
            ++j
            ++k
            continue
        }
    }
    if(arr1[arr1Length-1] > arr2[arr2Length-1])
        arr3[j] = arr1[arr1Length-1]
    else if(arr2[arr2Length-1] > arr1[arr1Length-1])
        arr3[j] = arr2[arr2Length-1]
    else
        arr3[j] = arr2[arr2Length-1]
    return arr3
}

console.log(mergeTwoSortedArray(arr1, arr2))