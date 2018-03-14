let assets = new Assets().then = function(assets){
  let cat;
  let app = new PIXI.Application( { width: 512, height: 512, antialias: true, transparent: false, resolution: 1 } );

  app.renderer.backgroundColor = 0x061639;
  document.body.appendChild(app.view);

  PIXI.loader.add( assets.getURL("00_border.png") ).load(setup);
  function setup() {
    cat = new PIXI.mesh.Plane(PIXI.loader.resources[ assets.getURL("00_border.png") ].texture, 2,2);

  //      let cat = new PIXI.Sprite(PIXI.loader.resources["https://cdn.hyperdev.com/drag-in-files.svg?1477153069954"].texture);
  //       cat.transform.setFromMatrix(new PIXI.Matrix (1, 0, 0, 1, 30, 30));
    app.stage.addChild(cat);
    app.ticker.add(delta => gameLoop(delta));
  }
}

function gameLoop(delta){
//  cat.rotation += delta * 0.01;
}
