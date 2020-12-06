import kotlinx.css.*
import kotlinx.css.Color.Companion.lightGreen
import kotlinx.css.Color.Companion.red
import kotlinx.css.Position.absolute
import kotlinx.html.js.onClickFunction
import libs.*
import react.*
import react.dom.h3
import styled.css
import styled.styledButton
import styled.styledDiv

external interface VideoPlayerProps : RProps {
    var video: Video
    var onWatchedButtonPressed: (Video) -> Unit
    var isWatched: Boolean
}

class VideoPlayer : RComponent<VideoPlayerProps, RState>() {
    override fun RBuilder.render() {
        styledDiv {
            css {
                position = absolute
                top = 10.px
                right = 10.px
            }
            h3 {
                +"${props.video.speaker}: ${props.video.title}"
            }
            reactPlayer {
                attrs {
                    url = props.video.url
                    controls = true
                }
            }
            styledButton {
                css {
                    display = Display.block
                    backgroundColor = if(props.isWatched) lightGreen else red
                }
                attrs {
                    onClickFunction = {
                        props.onWatchedButtonPressed(props.video)
                    }
                }
                + if(props.isWatched) "Mark as unwatched" else "Mark as watched"

            }
            styledDiv {
                css {
                    display = Display.flex
                    marginBottom = 10.px
                }
                emailShareButton {
                    attrs.url = props.video.url
                    emailIcon {
                        attrs.size = 32
                        attrs.round = true
                    }
                }
                telegramShareButton {
                    attrs.url = props.video.url
                    telegramIcon {
                        attrs.size = 32
                        attrs.round = true
                    }
                }
            }
        }
    }
}

fun RBuilder.videoPlayer(handler: VideoPlayerProps.() -> Unit) =
    child(VideoPlayer::class) { attrs(handler) }