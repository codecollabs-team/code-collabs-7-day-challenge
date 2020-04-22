const { config } = require('./config')

/**
 * Each rule should track the input of what has been satisified, we do this by passing in the callback
 */
class CovidRule {
    constructor(rule, condition = undefined) {
        this.payload = rule
        this.response = ''
        this.next = rule.nextRule
        this.condition = condition
    }

    run(nextRule = undefined, rules = []) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`${this.payload.message}: `, input => {
            this.response = input
            const rule = rules.find(rule => rule.payload.ruleKey === nextRule)

            if (typeof this.condition !== 'undefined') this.condition(this.response)
            if (typeof rule !== 'undefined') {
                readline.close()
                rule.run()
            } else {
                readline.close()
            }
        })
    }
}

/**
 * This class is responsible for management of rules
 */
class CovidEngine {
    constructor() {
        this.rules = []
    }

    addRule({ ruleKey, message, nextRule }, condition) {
        if (ruleKey && message && typeof condition !== 'undefined') {
            this.rules.push(new CovidRule({ ruleKey, message, nextRule }, condition))
        } else {
            this.rules.push(new CovidRule({ ruleKey, message, nextRule }))
        }
    }

    runRule(key) {
        if (key) {
            const rule = this.rules.find(rule => rule.payload.ruleKey === key)
            if (typeof rule.next !== 'undefined') {
                rule.run(rule.next, this.rules)
                return
            }
            rule.run()
        }
    }
}

engine = new CovidEngine()

engine.addRule({ ruleKey: 'CE-1', message: 'Are you currently outside?', nextRule: 'CE-2' })

engine.addRule({ ruleKey: 'CE-2', message: 'What is your job title', nextRule: 'CE-2' }, (input) => {
    if (engine.rules.find(rule => rule.payload.ruleKey === 'CE-1' && rule.response === 'Yes')) {
        switch (input) {
            case 'Doctor':
                console.log('Stay safe, thank you NHS')
                return

            case config.workers.find(worker => worker === input):
                console.log('Stay safe')
                return

            default:
                console.log('Work from home')
                console.log(con)
                return
        }
    }
})

engine.runRule('CE-1')
