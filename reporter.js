const reporter = require("cucumber-html-reporter")

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'test Environment': 'QA',
        Browser: 'Chrome 54.0',
        Platform: 'Windows 10'
    }
}

reporter.generate(options)

