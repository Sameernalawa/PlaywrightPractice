package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    steps {
        script {
            name = "Install & Test"
            scriptContent = """
                npm install
                npx playwright install
                npx playwright test
            """
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
