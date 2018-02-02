import Animation from '../../animation';

import {

	colorNodes,
	phi,
	polygon

} from '../../../utils';

export default class Apollo extends Animation {

  constructor (scene, animation) {

    super(scene, animation);

  }

  draw (numNodes, numPolygons, polyRadius, globalRadius) {

    let x = [0, 0];

    for (let i = 1; i < numNodes; ++i) {

        for (let j = 0; j < numNodes; ++j) {

          for (let k = 0; k < numPolygons; ++k) {

            x[0] = globalRadius * (Math.cos(phi(i, numNodes)) + Math.cos(phi(j, numNodes))) * Math.sin(phi(k, numPolygons));
            x[1] = globalRadius * (Math.sin(phi(i, numNodes)) + Math.sin(phi(j, numNodes))) * Math.cos(phi(k, numPolygons));

            let poly = new polygon(x, polyRadius, numNodes, 0, colorNodes(i));
            this.scene.add(poly.line);

          }

      }

    }

  }

  update (t) {

    for (let i = 0; i < this.scene.children.length; ++i) {

      if (i % 2 === 0) {
        this.scene.children[i].rotation.z -= 1e-3;
        // this.scene.children[i].rotation.z -= Math.sin(t/1000)/10;
        // this.scene.children[i].scale.set(Math.cos(phi(i, 100) + t/10));
        // this.scene.children[i].scale.set(Math.cos(phi(i, 100) + t/10), -Math.sin(phi(i, 100) + t/10), Math.cos(t));
      } else {
       this.scene.children[i].rotation.z += 1e-3;
        // this.scene.children[i].rotation.z += Math.sin(t/1000)/5;
        // this.scene.children[i].scale.set(-Math.cos(phi(i, 100) + t/10));
        // this.scene.children[i].scale.set(-Math.sin(phi(i, 100) + t/10), Math.cos(phi(i, 100) + t/10), Math.sin(t));
      }

    }

  }

}
