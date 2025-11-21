import jetbrains.buildServer.configs.kotlin.v2019_2.*
import buildTypes.*

version = "2022.10"

project {
    buildType(PlaywrightTests())
}
