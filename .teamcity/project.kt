import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.Project
import jetbrains.buildServer.configs.kotlin.buildType   // <-- THIS WAS MISSING

object PlaywrightProject : Project({
    name = "PlaywrightPractice"

    buildType(PlaywrightTests)   // <-- needs the import above
})
