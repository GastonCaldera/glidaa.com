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
  data: 'src/data/33172-01-finishig-studies.json',
  
  reshapeDataFunction:
      function processDataFunction(narration) { 
        console.log(narration)
        return {}; 
      },
  buildGraphFunction:
      function buildChart(graphId, sectionConfig) {
        select(`#${graphId}`)
        .append('div')
        .classed('imageDiv', true)
      updateSvgImage(graphId, { svgFileName: 'slide1' }, sectionState.svgFileName);
      sectionState.svgFileName = 'slide1';
      return undefined;
      },
  onScrollFunction:
      function onScroll({ index, progress, element, trigger, graphContainerId, graphId, sectionConfig }) {
      },
  onActivateNarrationFunction:
      function onActivateNarration({ index, progress, element, trigger, direction, graphContainerId, graphId, sectionConfig }) {
      },

onResizeFunction:
      function onResize({ graphElement, graphId, graphContainerId, sectionConfig }) {
        // sectionConfig.graph.resize(graphElement.offsetWidth, graphElement.offsetHeight);
      },
};
