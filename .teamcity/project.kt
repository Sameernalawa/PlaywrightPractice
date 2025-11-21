//comment
import jetbrains.buildServer.configs.kotlin.*
import buildTypes.PlaywrightTests

version = "2025.07"

project {
    buildType(PlaywrightTests())
}
