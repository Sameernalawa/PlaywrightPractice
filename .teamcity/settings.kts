import jetbrains.buildServer.configs.kotlin.*


import buildTypes.PlaywrightTests

version = " 2025.07"

project {
    name = "PlaywrightPractice"
    buildType(PlaywrightTests())
}
