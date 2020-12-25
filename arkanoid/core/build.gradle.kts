plugins {
    kotlin("multiplatform")
}

kotlin {
    jvm()
    linuxX64()

    sourceSets {
        commonMain {
            dependencies {
                implementation(kotlin("stdlib-common"))
            }
        }
    }
}

//        val linuxX64Main by getting {
//            dependencies {
////                implementation(kotlin("stdlib-linuxX64"))
//            }
//        }

//dependencies {
//    implementation(kotlin("stdlib-common"))
//}

//tasks {
//    jar {
//        manifest {
//            attributes(mapOf("Main-Class" to "io.paulpaulych.plai.domain.GameKt"))
//        }
//    }
//    compileKotlin {
//        kotlinOptions.jvmTarget = JavaVersion.VERSION_1_8.toString()
//    }
//    compileTestKotlin {
//        kotlinOptions.jvmTarget = JavaVersion.VERSION_1_8.toString()
//    }
//    test {
//        useJUnitPlatform {
//            excludeTags("integrationTest")
//        }
//        description = "Runs unit tests only"
//        group = "verification"
//    }
//}
