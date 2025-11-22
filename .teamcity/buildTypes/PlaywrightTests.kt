package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script


object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    steps {
        script {
            name = "Install & Test"
            scriptContent = """
            sudo apt-get update
            sudo apt-get install -y \
                libgtk-3-0 \
                libgbm-dev \
                libnss3 \
                libasound2 \
                libxshmfence1 \
                libx11-xcb1 \
                libxcomposite1 \
                libxdamage1 \
                libxfixes3 \
                libxrandr2 \
                libxtst6 \
                libatk1.0-0 \
                libatk-bridge2.0-0 \
                libatspi2.0-0
                npm install
                npx playwright install
                npx playwright test
            """
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
