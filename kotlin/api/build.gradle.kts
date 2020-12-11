import com.google.protobuf.gradle.*
import java.io.FileInputStream
import java.util.Properties

plugins {
    `java-library`
    `maven-publish`

    id("com.google.protobuf") version "0.8.13"
    kotlin("jvm")
}

repositories {
    google()
    jcenter()
    mavenCentral()
    mavenLocal()
}

object DependencyVersions {
    val protoVersion = "3.13.0"
    val grpcVersion = "1.34.0"
    val grpcKtVersion = "1.0.0"
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.8")
    implementation("javax.annotation:javax.annotation-api:1.3.2")

    api("com.google.protobuf:protobuf-javalite:${DependencyVersions.protoVersion}")
    api("io.grpc:grpc-kotlin-stub-lite:${DependencyVersions.grpcKtVersion}")
}

sourceSets {
    main {
        proto {
            srcDir("../../speechly")
        }
    }
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:${DependencyVersions.protoVersion}"
    }

    plugins {
        id("grpc") {
            artifact = "io.grpc:protoc-gen-grpc-java:${DependencyVersions.grpcVersion}"
        }

        id("grpckt") {
            artifact = "io.grpc:protoc-gen-grpc-kotlin:${DependencyVersions.grpcKtVersion}:jdk7@jar"
        }
    }

    generateProtoTasks {
        ofSourceSet("main").forEach {
            it.builtins {
                named("java") {
                    option("lite")
                }
            }

            it.plugins {
                id("grpc") {
                    option("lite")
                }

                id("grpckt") {
                    option("lite")
                }
            }
        }
    }
}

java {
    withSourcesJar()
}

val githubProperties = Properties()
githubProperties.load(FileInputStream(rootProject.file("github.properties")))

publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/speechly/api")

            credentials {
                username = githubProperties.get("gpr.user") as String? ?: System.getenv("GITHUB_USERNAME")
                password = githubProperties.get("gpr.key") as String? ?: System.getenv("GITHUB_TOKEN")
            }
        }
    }

    publications {
        create<MavenPublication>("gpr") {
            from(components["java"])
        }
    }
}
