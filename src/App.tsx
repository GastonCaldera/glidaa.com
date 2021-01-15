import React, { useState } from 'react';
import { readRemoteFile } from 'react-papaparse';
import Graphic from './data/Graphic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './scss/style.scss';
import ScrollyTeller from '@ihmeuw/scrollyteller/src/ScrollyTeller/ScrollyTeller';
import './data/narration.csv';
import './data/33172-01-finishig-studies.json'

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const App = () => {
  const [finishingStudy, setFinishingStudy] = useState(false);
  const [girlOnFloor, setGirlOnFloor] = useState(false);
  const [coworkers, setCoworkers] = useState(false);
  const [treadmill, setTreadmill] = useState(false);

  readRemoteFile('./finishing-studies.csv', {
    header: true,
    complete: data => {
      !finishingStudy && finishingStudy !== data.data[0]['finishingStudies'] && setFinishingStudy(data.data[0]['finishingStudies']);
    }
  });

  readRemoteFile('./girl-on-floor.csv', {
    header: true,
    complete: data => {
      !girlOnFloor && girlOnFloor !== data.data[0]['girlOnFloor'] && setGirlOnFloor(data.data[0]['girlOnFloor']);
    }
  });

  readRemoteFile('./coworkers.csv', {
    header: true,
    complete: data => {
      !coworkers && coworkers !== data.data[0]['coworkers'] && setCoworkers(data.data[0]['coworkers']);
    }
  });

  readRemoteFile('./treadmill.csv', {
    header: true,
    complete: data => {
      !treadmill && treadmill !== data.data[0]['treadmill'] && setTreadmill(data.data[0]['treadmill']);
    }
  });

  return (
    <div className="container">
      <Graphic panel={1}></Graphic>
      <div data-aos="fade-up" className="finishingStudy">{finishingStudy}</div>
      <Graphic panel={2}></Graphic>
      <div data-aos="fade-down" className="girlOnFloor">{girlOnFloor}</div>
      <Graphic panel={3}></Graphic>
      <div data-aos="fade-right" className="coworkers">{coworkers}</div>
      <Graphic panel={4}></Graphic>
      <div data-aos="fade-left" className="treadmill">{treadmill}</div>
    </div>
  );
};

export default App;

const myExampleSection0 = {
    sectionIdentifier: 'myExampleSection0',
    narration: 'data/narration.csv',
    data: 'data/33190-girl-on-floor.json',
    reshapeDataFunction:
      function processDataFunction(data) { return console.log(data); },

    buildGraphFunction:
      function buildChart(graphId, sectionConfig) {
        const myChart = {}; // build your own chart instance
        return myChart; // return it
      },

    onScrollFunction:
      function onScroll({ index, progress, element, trigger, graphContainerId, graphId, sectionConfig }) {
      },

    onActivateNarrationFunction:
      function onActivateNarration({ index, progress, element, trigger, direction, graphContainerId, graphId, sectionConfig }) {
      },

    onResizeFunction:
      function onResize({ graphElement, graphId, graphContainerId, sectionConfig }) {
        sectionConfig.graph.resize(graphElement.offsetWidth, graphElement.offsetHeight);
      },
  };

export class AppScrollyTeller {
  constructor() {
    /** ScrollyTeller */
    const storyConfiguration = {
      /** The id of the <div> that will contain all of the page content */
      appContainerId: 'app',
      /** build an array of story sections
       * Each section object should be a valid ScrollyTeller section configuration */
      sectionList: [
        myExampleSection0,
      ],
      /** optional function to receive the current sectionIdentifier,
       * narrationIndex, narrationId, and narrationClass
       * when narration blocks are entered */
      onNarrationChangedFunction: function ({
        sectionIdentifier,
        narrationIndex,
        narrationId,
        narrationClass,
      }) { console.log('in ', sectionIdentifier, narrationIndex); },
      /** optional parameter to scale scroll elements on mobile devices
          to create slower scrolling */
      mobileScrollHeightMultiplier: 1.5,
    };

    /** create the ScrollyTeller object to validate the config */
    const storyInstance = new ScrollyTeller(storyConfiguration);

    /** parse data and build all HMTL */
    storyInstance.render();
  }
}


