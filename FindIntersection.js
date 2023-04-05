function FindIntersection(strArr) { 
    let arr1 = strArr[0].split(', ')
    let arr2 = strArr[1].split(', ')
    
    let result = arr1.filter(x => arr2.find(y => x === y))
    return result.length === 0 ? 'false' : result.join()
  }
     
  // keep this function call here 
 //let arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
  let arr = ["", ""]

  console.log(FindIntersection(arr));