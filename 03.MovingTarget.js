function solve(input) {
    let target = input.shift().split(' ').map(Number)
    let command = input.shift()

    while (command !== 'End') {
        let splitted = command.split(' ')
        let action = splitted[0]
        let index = Number(splitted[1])

        if (action === 'Shoot') {
            let power = Number(splitted[2])
            if (target.length > index) {
                target[index] -= power
                if (target[index] <= 0) {
                    target.splice(index, 1)
                }
            }

        } else if (action === 'Add') {
            let value = Number(splitted[2])
            if (target.length > index && index >= 0) {
                target.splice(index, 0, value)
            } else {
                console.log(`Invalid placement!`)
            }

        } else if (action === 'Strike') {
            let radius = Number(splitted[2])
            if (index + radius <= target.length && index - radius >= 0) {
                let formula = (radius * 2) + 1
                target.splice(index - radius, formula)
            }else{
                console.log(`Strike missed!`)
            }

        }
        command = input.shift()
    }

    console.log(`${target.join('|')}`)
}

solve(["1 2 3 4 5",
"Strike 0 1",
"End"])