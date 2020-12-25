plugins {
    kotlin("multiplatform")
}

kotlin {
    linuxX64 {
        binaries {
            executable()
        }
    }
    sourceSets {
        val linuxX64Main by getting {
            dependencies {
                implementation(project(":arkanoid:core"))
            }
        }
    }
}
