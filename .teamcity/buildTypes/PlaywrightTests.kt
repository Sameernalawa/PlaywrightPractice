package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    vcs {
        root(PlaywrightPractice_HttpsGithubComSameernalawaPlaywrightPractice)
        checkoutMode = CheckoutMode.ON_AGENT
        checkoutPolicy = CheckoutPolicy.AUTO
        checkoutRules = "+:. => ."
    }

    steps {

        script {
            name = "Install Dependencies"
            scriptContent = """
                echo "=== CHECKING FILES ==="
                ls -R .

                npm install
                npx playwright install --with-deps
            """.trimIndent()
        }

        script {
            name = "Run Playwright Tests"
            scriptContent = """
                echo "=== RUNNING TESTS ==="
                ls -R .

                npx playwright test tests
            """.trimIndent()
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
