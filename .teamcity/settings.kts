import jetbrains.buildServer.configs.kotlin.v2019_2.*
import buildTypes.PlaywrightTests   // ✅ REQUIRED

version = "2024.03"

project {
    name = "PlaywrightPractice"
    buildType(PlaywrightTests)  // ✅ will resolve now
}
