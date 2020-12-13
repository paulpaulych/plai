group = "io.github.paulpaulych"
version = "1.0-SNAPSHOT"

allprojects {
    repositories {
        gradlePluginPortal()
        maven("https://kotlin.bintray.com/kotlin-js-wrappers/")
        mavenCentral()
        jcenter()
    }
}
