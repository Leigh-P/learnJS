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
        this.autoPlay(0);
    }
    clickPlay() {

    }
    autoPlay() {
        let that = this;
        function Play(index) {
            that.imgBox.src = that.data[index].src;
            that.btns[index].className = "circle on"
            if (index == 0) {
                that.btns[3].className = "circle";
            } else {
                that.btns[index - 1].className = "circle";
            }
        } 
        let num = 0;
        setInterval(function () {
            Play(num);
            num++;
            if (num > 3) num = 0;
        }, 3000)
    }
}
let imgae = new Image(data, 'button', 'img', 'circle');
imgae.init();