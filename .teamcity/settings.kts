import jetbrains.buildServer.configs.kotlin.*
import buildTypes.PlaywrightTests

project {
    name = "PlaywrightPractice"
    buildType(PlaywrightTests)
}
