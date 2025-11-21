package buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*

class PlaywrightTests : BuildType({
    name = "Playwright Tests"

    // Optional: attach a VCS root if already created in TeamCity
    // Replace "PlaywrightPractice_GitHub" with your actual VCS root name
    //vcs {
      //  root(DslContext.createVcsRoot("https://github.com/Sameernalawa/PlaywrightPractice.git"))
    //}

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
