function getCrates(input) {
    const rows = input
        .filter(x => x.includes('['))
        .map (row => {
            const stack = []
            for (let i = 1; i < row.length; i+=4) {
                stack.push(row[i])
            }
            return stack
        })
        .reverse();
    const ordered = []            
    for (let i=0; i< rows[0].length; i++) {
        const col = []
        for (let j=0; j<rows.length; j++) {
            if (rows[j][i] !== ' ')
            col.push(rows[j][i])
        }
        ordered.push(col)
    }
    return ordered;
}

function getInstructions(input) {
    const extract = string => {
        const [,qty,,from,,to] = string.split(' ')
        return [Number(qty), Number(from), Number(to)]
    };
    return input.filter(x => x.startsWith('move')).map(extract);
}

function move (crates, instruction, isMovedAtOnce = false) {
    const [move, from, to] = instruction;
    if (isMovedAtOnce) {
        const chunk = crates[from-1].splice(crates[from-1].length-move , move)
        crates[to-1] = [...crates[to-1] , ...chunk]
    } else {
        for (let i=0; i<move; i++){
            crates[to-1].push(crates[from-1].pop());
        }
    }
    return crates;
}

module.exports = {
    getCrates,
    getInstructions,
    move,
}