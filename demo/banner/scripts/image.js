class Image {
    constructor(data, btnClass, imgId, btns) {
        this.data = data;
        this.btns = document.getElementsByClassName(btns);
        this.imgBox = document.getElementById(imgId);
        this.btnBox = document.getElementsByClassName(btnClass);
    }
    init() {
        this.btns[0].className = "circle on";
        this.imgBox.src = this.data[0].src;
    }
    clickPlay() {
        
    }
    autoPlay() {

    }
}
let imgae = new Image(data, 'button', 'img', 'circle');
imgae.init();