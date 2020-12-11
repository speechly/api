package com.speechly.api

import com.speechly.api.config.v1.ConfigApi
import com.speechly.api.config.v1.ConfigAPIGrpcKt
import io.grpc.ManagedChannelBuilder
import io.grpc.Metadata
import io.grpc.stub.MetadataUtils
import java.io.Closeable
import java.util.concurrent.TimeUnit

suspend fun main() {
    val apiToken = System.getenv("API_TOKEN")
    if (apiToken == null) {
        throw Exception("API_TOKEN cannot be empty")
    }

    val projectId = System.getenv("PROJECT_ID")
    if (projectId == null) {
        throw Exception("PROJECT_ID cannot be empty")
    }

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
