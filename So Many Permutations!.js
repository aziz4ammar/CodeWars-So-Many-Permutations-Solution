function permutations(string) {
    let result = new Set([string]);
    if (string.length === 2) {
        result.add(string[1] + string[0]);
    } else if (string.length > 2) {
        for (let i = 0; i < string.length; i++) {
            let k = string[i];
            let rest = string.slice(0, i) + string.slice(i + 1);
            for (let s of permutations(rest)) {
                result.add(k + s);
            }
        }
    }
    return Array.from(result);
}