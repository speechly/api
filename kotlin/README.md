# Kotlin package for Speechly gRPC APIs and Protocol Buffers schemas

## Installation

The package is distributed as a Maven artifact and can be installed using e.g. Gradle.

The package is hosted by Github, so you can follow the [official instructions for installing packages from Github](https://docs.github.com/en/free-pro-team@latest/packages/guides/configuring-gradle-for-use-with-github-packages).

Firstly, you'll need to authenticate to Github Packages:

```groovy
repositories {
    maven {
        name = "github.speechly.api"
        url = uri("https://maven.pkg.github.com/speechly/api")

        credentials {
            username = project.findProperty("gpr.user") ?: System.getenv("USERNAME")
            password = project.findProperty("gpr.token") ?: System.getenv("TOKEN")
        }
    }
}
```

Then you can simply add a dependency:

```groovy
dependencies {
    // Speechly API definitions + protobuf-lite + grpc-lite.
    // Ready for use on both Android and other platforms.
    implementation "com.speechly:api:0.0.5"

    // Use this implementation for non-mobile platforms.
    implementation "io.grpc:grpc-netty-shaded:1.34.0"

    // Use this implementation for Android.
    implementation "io.grpc:grpc-okhttp:1.34.0"
}
```

## Usage

Here's an example that lists the apps in a specific Speechly project, using Speechly Config API:

```kotlin
package dev.myspeechlyapp

import com.speechly.api.config.v1.ConfigApi
import com.speechly.api.config.v1.ConfigAPIGrpcKt
import io.grpc.ManagedChannelBuilder
import io.grpc.Metadata
import io.grpc.stub.MetadataUtils
import java.io.Closeable
import java.util.concurrent.TimeUnit

suspend fun main() {
    val apiToken = "my-api-token"
    val projectId = "my-speechly-project"

    val channel = ManagedChannelBuilder
        .forTarget("api.speechly.com")
        .useTransportSecurity()
        .build()

    val meta = Metadata()
    meta.put(
        Metadata.Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER),
        "Bearer $apiToken"
    )

    val clientStub = MetadataUtils.attachHeaders(
        ConfigAPIGrpcKt.ConfigAPICoroutineStub(channel),
        meta
    )

    val request = ConfigApi.ListAppsRequest.newBuilder().apply {
        project = projectId
    }.build()


    val response = clientStub.listApps(request)
    println(response)

    channel.shutdown().awaitTermination(5, TimeUnit.SECONDS)
}
```

## Updating the package

### Add credentials for publishing to GitHub Packages

Publishing can be done by using your GitHub username and personal access token. Follow the instructions here - https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token. Make sure your token has `write:packages` scope.

Add the credentials to `github.properties`:

```sh
# Copy the example file
$ cp github.properties.example github.properties

# Update the creds
$ vim github.properties
```

### Build the package

Make sure you rebuild the package after updating the protos:

```sh
# Using Make
$ make build

# Using Gradle
$ ./gradlew build
```

### Increment the version

Update package version in [gradle.properties](./gradle.properties):

```sh
$ vim gradle.properties
```

### (Optional) Test the package

You can test the package using your Speechly token and project ID:

```sh
# Copy the example file
$ cp .env.example .env

# Update the creds
$ vim .env

# Run the example using Make
$ make run

# OR run the example manually
$ source .env && ./gradlew run
```

### Publish the package

Once you have the creds and you've built the package, you can publish it:

```sh
# Using Make
$ make publish

# Using Gradle
$ ./gradlew publish
```
