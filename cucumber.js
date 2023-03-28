const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definition/**/*.steps.js 
`

module.exports = {
    default: `${common} features/**/*.feature`
}