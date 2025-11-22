package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    vcs {
        root(DslContext.settingsRoot)
    }

    triggers {
        vcs {
            branchFilter = "+:*"
        }
    }

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = """
                npm install
                npx playwright install --with-deps
            """.trimIndent()
        }

        script {
            name = "Run Playwright Tests"
            scriptContent = """
                npx playwright test
            """.trimIndent()
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
