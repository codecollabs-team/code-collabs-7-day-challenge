const { config } = require('./config')

/**
 * Each rule should track the input of what has been satisified
 */
class CovidRule {
    constructor(rule, condition = undefined) {
        this.payload = rule
        this.response = ''
        this.next = rule.next
        this.condition = condition
    }

    run() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`${this.payload.message}: `, input => {
            this.response = input
            readline.close()
        })

        this.condition(this.response)
        if (typeof this.next !== 'undefined') this.next.run()
    }
}

class CovidEngine {
    constructor() {
        this.rules = []
    }

    addRule({ ruleKey, message }, condition) {
        if (ruleKey && message && typeof condition === 'function') {
            this.rules.push(new CovidRule({ ruleKey, message }, condition))
        } else {
            this.rules.push(new CovidRule({ ruleKey, message }))
        }
    }

    startRule(key) {
        if (key) {
            const rule = this.rules.find(rule => rule.payload.ruleKey === key)
            rule.run()
        }
    }
}

engine = new CovidEngine()
engine.addRule({ ruleKey: 'CE-1', message: 'Are you currently outside?', nextRule: 'CE-2' })
engine.addRule({ ruleKey: 'CE-2', message: 'What is your job title' }, (input, ruleKey) => {
    if (engine.rules.find(rule => rule.ruleKey === 'CE-1' && rule.response === 'Yes')) {
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

engine.startRule('CE-1')
