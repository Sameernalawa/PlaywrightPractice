import jetbrains.buildServer.configs.kotlin.v2025_07.*
import buildTypes.PlaywrightTests

version = "2022.10"

project {
    buildType(PlaywrightTests())
}
