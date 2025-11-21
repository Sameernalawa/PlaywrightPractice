import jetbrains.buildServer.configs.kotlin.v2019_2.*
import buildTypes.PlaywrightTests

version = "2025.07"

project {
    // Register the PlaywrightTests build configuration
    buildType(PlaywrightTests())
}
