const { config } = require('./config')

/**
 * Each rule should track the input of what has been satisified
 */
class CovidRule {
    constructor(rule, condition = undefined) {
        this.current = rule
        this.condition = condition
    }

    run() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(rule.message, input => {
            this.response = input
            console.log(rule.output)
            readline.close()
        })
    }

    current = null
    condition = null
    response = undefined
}

class CovidEngine {
    rules = []

    addRule({ rule, message }, condition) {
        if (rule && message && typeof condition === 'function') {
            this.rules.push(new CovidRule(rule, condition))
        } else {
            this.rules.push(new CovidRule(rule))
        }
    }

    run() {
        if (this.rules.length > 0) {
            this.rules.forEach(rule => rule.run())
        } else {
            console.log('No rules has been added to the engine')
        }
    }
}

engine = new CovidEngine()
engine.addRule({ rule: 'CE-1', message: 'Are you currently outside?' })
engine.addRule({ rule: 'CE-2', message: 'What is your job title' }, (input) => {
    if (this.keys.find(key => key.rule === 'CE-1' && key.response === 'Yes')) {
        switch (input) {
            case 'Doctor':
                console.log('Stay safe, thank you NHS')

            case config.workers.includes(input):
                console.log('Stay safe')

            default:
                console.log('Work from home')
        }
    }
})

engine.addRule({ })