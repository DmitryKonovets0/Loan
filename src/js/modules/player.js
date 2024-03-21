export default class Player {
    constructor(btn, overlay) {
    this.btns = document.querySelectorAll(btn)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
    this.t = 0
    }
    createPlayer(url){
        this.player =  new YT.Player('frame',  {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
        this.overlay.style.display = 'flex'
        this.t = 1

    }
    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-url');
                if(this.t === 0) {
                    this.createPlayer(path)
                }else {
                    this.overlay.style.display = 'flex'
                }
            })
        })
    }
    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none'
            this.player.stopVideo()
        })
        this.overlay.addEventListener('click', () => {
            this.overlay.style.display = 'none'
            this.player.stopVideo()


        })
    }
    render() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers()
        this.bindCloseBtn()
    }
}
