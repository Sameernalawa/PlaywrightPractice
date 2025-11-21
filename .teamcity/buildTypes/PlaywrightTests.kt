package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*

class PlaywrightTests : BuildType({
    name = "Playwright Tests"

    vcs {
        root(DslContext.settingsRoot("https://github.com/Sameernalawa/PlaywrightPractice.git#refs/heads/main"))
    }

    steps {
        script {
            name = "Install Dependencies"
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
