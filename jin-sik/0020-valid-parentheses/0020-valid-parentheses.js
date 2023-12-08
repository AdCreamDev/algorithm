/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // 여는 대괄호를 저장할 빈 스택을 만듭니다.
    for (let c of s) { // 문자열의 각 문자를 반복합니다.
        if (c === '(' || c === '{' || c === '[') { // 문자가 여는 대괄호인 경우
            stack.push(c); // 스택에 밀어 넣습니다.
        } else { // 문자가 닫는 대괄호인 경우
            if (!stack.length || // 스택이 비어 있거나
                (c === ')' && stack[stack.length - 1] !== '(') || // 닫는 브래킷이 스택 상단의 해당 여는 브래킷과 일치하지 않는 경우
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; // 이면 문자열이 유효하지 않으므로 거짓을 반환합니다.
            }
            stack.pop(); // 그렇지 않으면 스택에서 오프닝 브래킷을 꺼냅니다.
        }
    }
    return !stack.length; // 스택이 비어 있으면 모든 여는 대괄호가 해당 닫는 대괄호와 일치합니다,
                          // 따라서 문자열이 유효하고, 그렇지 않으면 일치하지 않는 여는 대괄호가 있으므로 false를 반환합니다.



    // fail code
    // if(s.length % 2 !== 0) return false

    // let start = 0
    // let arr = new Array(s.length).fill("0")

    // const valid = () => {
    //     if(arr.join("") === s) return true
    //     const parentheses = s[start].charCodeAt()
    //     for(let i = start + 1; s.length > i; i += 2) {
    //       console.log("c", start, arr, s[start], s[i])
    //         if(parentheses + 1 === s[i].charCodeAt() || parentheses + 2 === s[i].charCodeAt()) {
    //             console.log("d")
    //             // arr.splice(0, 1);
    //             // arr.splice(i-1, 1)
    //             arr[start] = s[start]
    //             arr[i] = s[i]
    //             start = arr.findIndex(item => item === '0')
    //             if(start === -1) return true
    //             console.log(arr)
    //             return valid()
    //         }
    //     }
    //     return false
    // }
    // return valid()
};