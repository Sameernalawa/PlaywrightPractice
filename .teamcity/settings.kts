import jetbrains.buildServer.configs.kotlin.*
import buildTypes.PlaywrightTests

version = "2023.11"

project {
    name = "PlaywrightPractice"
    buildType(PlaywrightTests())
}
