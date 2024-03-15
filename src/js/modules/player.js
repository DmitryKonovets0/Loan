export default class Player {
    constructor(btn) {
    this.btn = document.querySelector(btn)
    this.player = null

    }
    activatePlayer(id) {
        this.btn.addEventListener('click', () => {
            this.player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        })
    }
    render() {
        this.activatePlayer('RzKedPszvVI')
    }
}
