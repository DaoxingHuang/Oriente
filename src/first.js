//一个有words组成的数组，找出其中长度前2的word求其长度的乘积，这两个word不能包含同样的字母，假设单词的字母都是小写,如果没有这个的两个word,返回０
//example :["abcd","fax","fc","xndf","mtx","yz"]
//return: "xndf".length*mtx.length = 12
getResult = (arr) => {
    if (!Array.isArray(arr))
        return 0;
    arr.sort((a, b) => {
        return b.length - a.length;
    });
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let isSame = hasSameLetter(arr[i], arr[j]);
            if (!isSame) {
                console.log(arr[i], arr[j]);
                return arr[i].length * arr[j].length;
            }
        }
    }

    return 0;
}

hasSameLetter = (word1, word2) => {
    let ret = false;
    word2.split("").some((value) => {
        ret = word1.includes(value);
        return ret;
    });
    return ret;
}
//test1
let arr = ["abcd", "fax", "fc", "xndf", "mtx", "yz"];
let result = getResult(arr);
console.log(result); //12


//test2
arr = ["abcd", "fax", "fc", "xndf", "mtx", "yztnsg"];
result = getResult(arr);
console.log(result); //24