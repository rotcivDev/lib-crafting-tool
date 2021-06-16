import create360Viewer from '360-image-viewer';
import canvasFit from 'canvas-fit';

(function () {
  class Create360DegreePhotoCanvas {
    constructor(imgSrcPath, element) {
      this.imgUrl = imgSrcPath;
      this.target = element;

      this.create = this.create.bind(this);
    }

    create() {
      const { imgUrl, target } = this;
      // load your image
      const image = new Image();
      image.src = imgUrl;

      // get element to add the viewer

      image.onload = () => {
        // when the image is loaded, setup the viewer
        const viewer = create360Viewer({
          image: image,
        });

        // attach canvas to body
        target.appendChild(viewer.canvas);

        // set screen size by target
        const fit = canvasFit(viewer.canvas, target);
        // fit on resize
        window.addEventListener('resize', fit, false);
        fit();

        // start the render loop
        viewer.start();
      };
    }
  }
  window.Create360DegreePhotoCanvas = Create360DegreePhotoCanvas;
})();
