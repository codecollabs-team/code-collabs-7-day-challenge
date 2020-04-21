const config = require('./config')

const singularMapString = (number) => {
    if (typeof number !== 'number') return undefined
    let integer = 0

    const singular = Object.entries(config.mapping.string.singular)
    for (let index = 0; index <= singular.length; index++) {
        if (number == index) {
            const [_, value] = (index !== 0) && singular[index - 1]
            integer = value
            break
        }
    }

    return integer
}

const multipleMapString = (number) => {
    if (typeof number !== 'number') return undefined
    let multiple = 0
    let single = 0

    const tens = Object.entries(config.mapping.string.tens)
    for (let index = 0; index <= tens.length; index++) {
        const [key, _] = tens[index]
        if (number < key) {
            let [__, value] = (number > 0) && tens[index - 1]
            multiple = value

            const secondDigit = number.toString().charAt(1)
            const singleValue = singularMapString(parseInt(secondDigit))

            single = (singleValue !== 'ten') ? singleValue : ''
            break
        }
    }

    if (multiple == 0 && single == 0) return ''
    const result = (single.length !== 0) ? `${multiple}-${single}` : `${multiple}`

    return result
}

const singularMapInteger = (string) => {
    if (typeof string !== 'string') return undefined

    const [key, value] = Object.entries(config.mapping.integer.singular)
        .find(([key, value]) => {
            if (key === string.toLowerCase()) {
                return value
            }
        })

    return value
}

const multipleMapInteger = (string) => {
    if (typeof string !== 'string') return undefined

    const [key, value] = Object.entries(config.mapping.integer.tens)
        .find(([key, value]) => {
            if (key === string.toLowerCase()) {
                return value
            }
        })

    return value
}

class Converter {
    toLiteralString(number) {
        if (typeof number !== 'number') return undefined

        switch (true) {
            case number <= 20:
                const single = singularMapString(number)
                return single

            case number < 100:
                const multiple = multipleMapString(number)
                return multiple

            default:
                return 'Empty'
        }
    }

    toInteger(number) {
        if (typeof number !== 'string') return undefined
        let numbers = number.split('-')

        const multipleNumberReducer = (acc, current, index) => {
            switch (index) {
                case 0:
                    const multiple = multipleMapInteger(current)
                    acc = multiple
                    return acc

                case 1:
                    const single = singularMapInteger(current)
                    acc = acc + single
                    return acc

                default:
                    return acc
            }
        }

        switch (numbers.length) {
            case 1:
                const [number] = numbers
                return singularMapInteger(number)

            case 2:
                const multiple = numbers.reduce(multipleNumberReducer, '')
                return multiple

            default:
                return 0
        }
    }
}

converter = new Converter()

const stringOutput = converter.toLiteralString(10)
const stringOutput2 = converter.toLiteralString(23)

const output = converter.toInteger('twenty-four')
const output2 = converter.toInteger('thirty-six')
const output3 = converter.toInteger('fifty-eight')

console.log(stringOutput)
console.log(stringOutput2)

console.log(output)
console.log(output2)
console.log(output3)
