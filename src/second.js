//一个有words组成的数组，找出其中长度前2的word求其长度的乘积，这两个word不能包含同样的字母，假设单词的字母都是小写,如果没有这个的两个word,返回０
//example :["abcd","fax","fc","xndf","mtx","yz"]
//return: "xndf".length*mtx.length = 12
mergeArray = (arr) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let childArr = [arr[i], arr[j]];
            tempArr.push(childArr);
        }
    }
    return tempArr;
}

hasSameLetter = (word1, word2) => {
    let ret = false;
    word2.split("").some((value) => {
        ret = word1.includes(value);
        return ret;
    });
    return ret;
}


getResult = (arr) => {
    let max = 0;
    let tempArr = mergeArray(arr);
    tempArr.forEach((child) => {
        let hasValid = !hasSameLetter(child[0], child[1]);
        if (hasValid) {
            max = Math.max(max, child[0].length * child[1].length)
        }
    });
    console.log(max);
}



//test1
let arr = ["abcd", "fax", "fc", "xndf", "mtx", "yz"];
let result = getResult(arr);
console.log(result); //12


//test2
arr = ["abcd", "fax", "fc", "xndf", "mtx", "yztnsg"];
result = getResult(arr);
console.log(result); //24