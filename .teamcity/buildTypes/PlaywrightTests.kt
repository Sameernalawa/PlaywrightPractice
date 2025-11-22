package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    vcs {
        checkoutMode = CheckoutMode.ON_AGENT
    }

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = """
                echo "=== CHECKING FILES BEFORE INSTALL ==="
                ls -R .

                npm install
                npx playwright install --with-deps
            """.trimIndent()
        }

        script {
            name = "Run Playwright Tests"
            scriptContent = """
                echo "=== CHECKING FILES BEFORE TEST ==="
                ls -R .

                npx playwright test
            """.trimIndent()
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
