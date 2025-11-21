import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.projectFeatures.*
import jetbrains.buildServer.configs.kotlin.buildSteps.*

version = "2024.03"

project {
    buildType(PlaywrightTests)
}
