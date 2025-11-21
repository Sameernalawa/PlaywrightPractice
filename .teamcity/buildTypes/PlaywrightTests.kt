package buildTypes

import jetbrains.buildServer.configs.kotlin.*

object PlaywrightTests : BuildType({
    name = "Run Playwright Tests"

    vcs {
        root(DslContext.settingsRoot)   // auto-uses your repository
    }

    steps {
        script {
            name = "Install dependencies"
            scriptContent = """
                npm install
            """.trimIndent()
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
