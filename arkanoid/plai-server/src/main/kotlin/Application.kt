package io.github.plai

import io.ktor.application.*
import io.ktor.request.*
import io.ktor.features.*
import io.ktor.http.*
import org.slf4j.event.*
import io.ktor.routing.*
import io.ktor.serialization.*
import kotlinx.serialization.json.Json

fun main(args: Array<String>): Unit = io.ktor.server.cio.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    install(CallLogging) {
        level = Level.INFO
        filter { call -> call.request.path().startsWith("/") }
    }
    install(PartialContent) {
        maxRangeCount = 10
    }
    install(DefaultHeaders)
    install(CORS){
        anyHost()
        header(HttpHeaders.AccessControlAllowOrigin)
        header(HttpHeaders.AccessControlAllowMethods)
    }
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
        })
    }
    routing(Routing::create)
}

