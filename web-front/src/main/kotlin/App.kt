import react.*
import react.dom.div
import react.dom.h3

external interface AppState : RState {
    var currentVideo: Video?
    var unwatchedVideos: MutableList<Video>
    var watchedVideos: MutableList<Video>
}

internal class App : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        unwatchedVideos = mutableListOf(
            Video(1, "Building and breaking things", "John Doe", "https://youtu.be/PsaFVLr8t4E"),
            Video(2, "The development process", "Jane Smith", "https://youtu.be/PsaFVLr8t4E"),
            Video(3, "The Web 7.0", "Matt Miller", "https://youtu.be/PsaFVLr8t4E")
        )
        watchedVideos = mutableListOf(
            Video(4, "Mouseless development", "Tom Jerry", "https://youtu.be/PsaFVLr8t4E")
        )
    }

    override fun RBuilder.render() {
        div {
            h3 { +"Videos to watch" }
            videoList {
                videos = state.unwatchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = { video ->
                    setState { currentVideo = video }
                }
            }
            h3 { +"Videos watched" }
            videoList {
                videos = state.watchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = { video ->
                    setState { currentVideo = video }
                }
            }
            state.currentVideo?.let { currentVideo ->
                videoPlayer {
                    video = currentVideo
                    isWatched = currentVideo in state.watchedVideos
                    onWatchedButtonPressed = {
                        if (video in state.unwatchedVideos) {
                            setState {
                                unwatchedVideos.remove(video)
                                watchedVideos.add(video)
                            }
                        } else {
                            setState {
                                watchedVideos.remove(video)
                                unwatchedVideos.add(video)
                            }
                        }
                    }
                }
            }
        }
    }
}
