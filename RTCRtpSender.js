import MediaStreamTrack from "./MediaStreamTrack";

export default class RTCRtpSender {

    constructor(json) {
        this.id = json['id'];
        this.track = new MediaStreamTrack(json['track']);
    }

    replaceTrack(track) {
        //Todo
    }


}
