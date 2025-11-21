package buildTypes

import jetbrains.buildServer.configs.kotlin.*

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
