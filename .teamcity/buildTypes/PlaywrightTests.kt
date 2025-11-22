package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object PlaywrightTests : BuildType({
    name = "Playwright Tests"

    steps {
        script {
            name = "Install Dependencies"
            scriptContent = """
                apt-get update
                apt-get install -y \
                    libgtk-3-0 \
                    libgtk-4-1 \
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
                    libatspi2.0-0 \
                    libvpx7 \
                    libopus0 \
                    gstreamer1.0-plugins-base \
                    gstreamer1.0-plugins-good \
                    gstreamer1.0-libav

                npm install
                npx playwright install --with-deps
            """.trimIndent()
        }

        script {
            name = "Run Playwright Tests"
            scriptContent = """
            npx playwright test --reporter=line

        """
        }
    }

    artifactRules = "playwright-report/** => report.zip"
})
