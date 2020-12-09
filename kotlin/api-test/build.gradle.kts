plugins {
    `application`

    kotlin("jvm")
}

application {
    mainClassName = "com.speechly.api.ApiTestKt"
}

repositories {
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation(project(":api"))
    implementation("io.grpc:grpc-netty-shaded:1.34.0")
}
