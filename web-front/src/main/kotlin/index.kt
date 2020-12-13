import kotlinx.browser.document
import react.dom.render
import kotlinext.js.require

fun main() {
    require("bootstrap/dist/css/bootstrap.css")
    render(document.getElementById("root")) {
        child(App::class) {}
    }
}