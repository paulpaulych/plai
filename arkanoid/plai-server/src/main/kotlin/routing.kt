package io.github.plai

import io.github.plai.api.toRepr
import io.ktor.application.*
import io.ktor.http.ContentType.*
import io.ktor.response.*
import io.ktor.routing.*

internal fun Routing.create() {
    get("/match") {
        call.respond(getMatch().toRepr())
    }
    get("/") {
        call.respondText("HELLO WORLD!", contentType = Text.Plain)
    }
}