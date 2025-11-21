import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.Project
import jetbrains.buildServer.configs.kotlin.buildType

object PlaywrightProject : Project({
    name = "PlaywrightPractice"

    buildType(PlaywrightTests)
})
