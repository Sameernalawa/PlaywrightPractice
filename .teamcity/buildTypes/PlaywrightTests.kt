import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Run Playwright Tests"

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = "npm ci"
        }
        script {
            name = "Run Playwright Tests"
            scriptContent = "npx playwright test"
        }
    }

    artifactRules = "playwright-report => playwright-report"
})
