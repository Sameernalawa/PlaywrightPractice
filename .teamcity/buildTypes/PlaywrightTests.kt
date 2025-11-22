package buildTypes

import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = "npm install"
        }
        script {
            name = "Run Playwright Tests"
            scriptContent = """
                npx playwright install
                npx playwright test
            """.trimIndent()
        }
    }

    artifactRules = "playwright-report => reports"
})
