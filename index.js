import Windy from './Windy';
import * as maptalks from 'maptalks';

/*!
 *  Based on the works of:
 *  https://github.com/Esri/wind-js
 *  https://github.com/cambecc/earth
 *
 *  All credits go to them!
 *
 *  (c) 2016, fuzhenn MapTalks
 *  maptalks.org
 *
 *  MIT License
 */

export class WindyLayer extends maptalks.Layer {
    constructor(id, data, options) {
        super(id, options);
        this._data = data;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
        this.redraw();
        return this;
    }

    redraw() {
        if (this._getRenderer()) {
            this._getRenderer()._redraw();
        }
        return this;
    }

    /**
     * Export the WindyLayer's JSON.
     * @return {Object} layer's JSON
     */
    toJSON() {
        return {
            'type'    : 'WindyLayer',
            'id'      : this.getId(),
            'options' : this.config(),
            'data'    : this.getData()
        };
    }

    /**
   * Reproduce a WindyLayer from JSON.
   * @param  {Object} json - layer's JSON
   * @return {maptalks.WindyLayer}
   * @static
   * @private
   * @function
   */
    static fromJSON(json) {
        if (!json || json['type'] !== 'WindyLayer') { return null; }
        const layer = new WindyLayer(json['id'], json['data'], json['options']);
        return layer;
    }
  }


WindyLayer.registerRenderer('canvas', class extends maptalks.renderer.CanvasRenderer {

    draw() {
        if (!this.canvas) {
            this.prepareCanvas();
            this._windy = new Windy({
                'canvas': this.canvas,
                'data': this.layer.getData(),
                'onDraw': () => {
                    this.requestMapToRender();
                }
            });
            this._windy.start.apply(this._windy, this._getWindExtents());
        } else {
            this.prepareCanvas();
            this._windy.start.apply(this._windy, this._getWindExtents());
        }
    }

    _getWindExtents() {
        const map = this.getMap(),
            extent = map.getExtent();
        return [
        [[0, 0], [map.width, map.height]],
            map.width,
            map.height,
        [[extent.xmin, extent.ymin], [extent.xmax, extent.ymax]]
        ];
    }

    _redraw() {
        this.prepareRender();
        this.draw();
    }

    onRemove() {
        this._windy.stop();
        delete this._windy;
    }

    onDragRotateStart() {
        this._windy.stop();
    }

    onMoveStart() {
        this._windy.stop();
    }

    onZoomStart(/*param*/) {
        this._windy.stop();
    }

    onZoomEnd(param) {
        super.onZoomEnd(param);
    }
  });


