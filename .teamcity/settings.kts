import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.projectFeatures.githubIssues
import jetbrains.buildServer.configs.kotlin.vcs.GitVcsRoot

version = "2023.11"

project {
    description = "Playwright project with one build"

    val vcs = GitVcsRoot {
        id("PlaywrightPractice_VCS")
        name = "GitHub Repository"
        url = "https://github.com/Sameernalawa/PlaywrightPractice.git"
        branch = "refs/heads/main"
    }
    vcsRoot(vcs)

    buildType(PlaywrightTests)
}
