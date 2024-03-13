export default function createScope(name, rate, scope = false, day = false) {
    if (scope === false) scope = [1, 2400]
    return {name, rate, scope, day}
}