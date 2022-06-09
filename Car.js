AFRAME.registerComponent('move-car', {
    schema : {
        moveY : { type : 'number', default : 0 }
    },
    tick : function(){
        window.addEventListener("click", (e) => {
            this.data.moveY += 0.01
        })
        var rot = this.el.getAttribute('rotation')
        rot.y = rot.y + this.data.moveY
        this.el.setAttribute('rotation', {x : rot.x, y : rot.y, z : rot.z})
    }
})
