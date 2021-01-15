import './scss/style.scss';
import ScrollyTeller from './ScrollyTeller/ScrollyTeller';
import intro from './Introduction/scrollyTellerConfig'


export default class App {
  constructor() {
    /** ScrollyTeller */
    const storyConfiguration = {
      /** The id of the <div> that will contain all of the page content */
      appContainerId: 'app',
      /** build an array of story sections
       * Each section object should be a valid ScrollyTeller section configuration */
      sectionList: [
        intro
      ],
      /** optional function to receive the current sectionIdentifier,
       * narrationIndex, narrationId, and narrationClass
       * when narration blocks are entered */
      onNarrationChangedFunction: () => {

      },
    };

    /** create the ScrollyTeller object to validate the config */
    const storyInstance = new ScrollyTeller(storyConfiguration);

    /** parse data and build all HMTL */
    storyInstance.render();
  }
}
