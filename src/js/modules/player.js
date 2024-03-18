export default class Player {
    constructor(btn, overlay) {
    this.btns = document.querySelectorAll(btn)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
    }
    createPlayer(url){
        this.player =  new YT.Player('frame',  {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });

        this.overlay.style.display = 'flex'
    }
    render() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-url');

                this.createPlayer(path)
            })
        })
    }
}
