/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const harf = s.length / 2;
    const a = [...s].slice(0, harf);
    const b = [...s].slice(harf);

    const voewls = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const determine = (a, b) => {
        let aVowel = 0;
        let bVowel = 0;

        a.forEach(item => {
            if(voewls.some(voewl => item === voewl)) aVowel += 1;
        })
        b.forEach(item => {
            if(voewls.some(voewl => item === voewl)) bVowel += 1;
        })
        return aVowel === bVowel ? true : false;
    }
    return determine(a, b);
};