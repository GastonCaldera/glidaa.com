import { select } from 'd3-selection';
import './data/narration.csv';
import './scss/introduction.scss';
import './data/slides';
import { updateSvgImage } from '../utils';

/** local state object */
const sectionState = {
  svgFileName: '',
};

/** section configuration object with identifier, narration, and data (for the graph)  */
export default {
  /** identifier used to delineate different sections.  Should be unique from other sections
   * identifiers */
  sectionIdentifier: 'introduction',

  narration: 'data/narration.csv',

  data: [],

  convertTriggerToObject: true,

  reshapeDataFunction: function processData(data) {
    console.log(data)
    return {};
  },

  buildGraphFunction: function buildGraph(graphId, sectionConfig) {
    select(`#${graphId}`)
      .append('div')
      .classed('imageDiv', true)
    updateSvgImage(graphId, { svgFileName: 'slide1' }, sectionState.svgFileName);
    sectionState.svgFileName = 'slide1';
    return undefined;
  },

  onScrollFunction: function onScroll() {
  },

  onActivateNarrationFunction: function onActivateNarration({
    graphId,
    state,
    state: {
      svgFileName,
    },
  }) {
    /** DISPLAY/FLIP BETWEEN IMAGES */
    updateSvgImage(graphId, state, sectionState.svgFileName);
    sectionState.svgFileName = svgFileName;
  },

  onResizeFunction: function onResize() {
  },
};

