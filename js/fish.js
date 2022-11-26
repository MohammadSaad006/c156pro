AFRAME.registerComponent("fish",{
    init:function(){
        for(var i =1; i<=15; i++){
            var id=`fish${i}`

            var posX= Math.floor(Math.random() *350+ (-200))
            var posY="39"
            var posZ= Math.floor(Math.random() * 220 +(-200))

            var position= {x: posX, y: posY, z: posZ}

            this.fish(id, position)
        }

    },
    fish: (id ,position)=>{
        var terrainEl=document.querySelector("#terrain")
        var fishEl=document.createElement("a-entity")

        fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("scale",{x:1,y:1,z:1})
        fishEl.setAttribute("animation-mixer", {})
        fishEl.setAttribute("static-body",{
            shape: "sphere",
            sphereRadius: 5,
          })

        fishEl.setAttribute("game-play", {
            elementId:`#${id}`
          })
        
        terrainEl.appendChild(fishEl)
    }
})