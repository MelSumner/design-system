import Component from '@glimmer/component';

// we want to limit the content of the sidebar navigation to only the links related to the current "section".
// notice: super hacky way to do it, but... it works™ !
const getTocSectionBundle = (section) => {
  const ABOUT = ['about', 'overview', 'getting-started', 'updates'];
  const FOUNDATIONS = ['foundations'];
  const COMPONENTS = ['components', 'overrides', 'utilities'];
  const PATTERNS = ['patterns'];
  // this will be removed later
  const TESTING = ['testing'];

  if (ABOUT.includes(section)) {
    return ABOUT;
  } else if (FOUNDATIONS.includes(section)) {
    return FOUNDATIONS;
  } else if (COMPONENTS.includes(section)) {
    return COMPONENTS;
  } else if (PATTERNS.includes(section)) {
    return PATTERNS;
  } else if (TESTING.includes(section)) {
    return TESTING;
  } else {
    // eg. the website "root" index page
    return [];
  }
};

export default class DocPageSidebarComponent extends Component {
  get structuredPageTree() {
    const { currentPath, currentRoute } = this.args;

    // eg. currentPath = 'about'
    // console.log('sidebar >>> currentPath', currentPath);

    // eg. currentRoute = {
    //      name: 'about',
    //      parent: {
    //        name: 'application',
    //        parent: null,
    //        ...
    //      },
    //      localName: 'about',
    //      attributes: [
    //        { id: 'components', title: 'components', pages: [Array] },
    //        { id: 'content', title: 'content', pages: [Array] },
    //        { id: 'foundations', title: 'foundations', pages: [Array] },
    //        { id: 'getting-started', title: 'getting-started', pages: [Array] },
    //        { id: 'overrides', title: 'overrides', pages: [Array] },
    //        { id: 'overview', title: 'overview', pages: [Array] },
    //        { id: 'testing', title: 'testing', pages: [Array] },
    //        { id: 'updates', title: 'updates', pages: [Array] },
    //        { id: 'utilities', title: 'utilities', pages: [Array] }
    //      ]
    //   }
    // console.log('sidebar >>> currentRoute', currentRoute);

    let currentSection;
    if (currentRoute.localName === 'show') {
      // eg. "foundations/tokens/"
      currentSection = currentRoute.params.path.split('/')[0];
    } else if (currentPath) {
      // eg. "foundations/"
      currentSection = currentPath;
    }

    const subSectionTree = {};
    getTocSectionBundle(currentSection).forEach((section) => {
      subSectionTree[section] = this.args.toc.tree[section];
    });

    return Object.keys(subSectionTree).length > 0 ? subSectionTree : false;
  }
}