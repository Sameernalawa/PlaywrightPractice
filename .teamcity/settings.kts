import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.projectFeatures.*
import jetbrains.buildServer.configs.kotlin.buildSteps.*
import jetbrains.buildServer.configs.kotlin.vcs.*
import buildTypes.PlaywrightTests

version = "2024.03"

project {
    id("PlaywrightPractice")
    name = "PlaywrightPractice"

    buildType(PlaywrightTests)
}
