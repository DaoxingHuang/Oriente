# Oriente

一个有words组成的数组，找出其中长度前2的word求其长度的乘积，这两个word不能包含同样的字母，假设单词的字母都是小写,如果没有这个的两个word,返回０  
example :["abcd","fax","fc","xndf","mtx","yz"]  
return: "xndf".length*mtx.length = 12

# Way1
倒序排列，按前面相邻或邻近的值总是大于后续值得思想(面试时第一个提出的想法)

# Way2
将数组两两合并，并去除有相同word的组合，剩下的取长度乘积最大的
