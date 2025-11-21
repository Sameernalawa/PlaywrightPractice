import jetbrains.buildServer.configs.kotlin.*
import buildTypes.PlaywrightTests

project {
    buildType(PlaywrightTests())
}
