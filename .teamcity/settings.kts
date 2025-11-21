import jetbrains.buildServer.configs.kotlin.v2019_2.*
import buildTypes.PlaywrightTests

version = "2022.10"

project {
    // Register the Playwright pipeline
    buildType(PlaywrightTests())
}
