/**
 * @params str 一个含有img标签的的字符串
 * @return arr 一个含有所有src地址的数组
 */

// export function filterSrc(str) {
//     var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
//     var imgReg = /<img.*?(?:>|\/>)/gi;
//     var arr = str.match(imgReg);
//     let imgarr=[];
//     for (var i = 0; i < arr.length; i++) {
//         var src = arr[i].match(srcReg);
//         imgarr.push(src[1])
//     }
//     return imgarr
// }






Object.prototype.result = () => {
    console.log(this.width * this.height)
}

let ret = {
    width: 3,
    height: 4
}

ret.result()

