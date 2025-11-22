import jetbrains.buildServer.configs.kotlin.v2025_07.*

import buildTypes.PlaywrightTests

version = " 2025.07"

project {
    name = "PlaywrightPractice"
    buildType(PlaywrightTests())
}
