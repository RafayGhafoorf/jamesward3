import Pop from '../pop';
import utils from '../../utils/utils';


const Default = {
  trigger: 'click',
  closeOnClickBody: true,
  html: true,
  placement: 'bottom-start',
  template: `<div role="select" class="h-dropdown"><div class="h-dropdown-arrow"></div><div class="h-dropdown-inner"></div></div>`,
  arrowSelector: '.h-dropdown-arrow, .h-dropdown__arrow',
  innerSelector: '.h-dropdown-inner, .h-dropdown__inner',
  // Modifiers: {
  //   preventOverflow: {
  //     enabled: false,
  //     // boundariesElement: 'viewport'
  //   },
  // },
  delay: 300,
}

class Dropdown extends Pop {
  constructor(el, param) {
    let container = document.body;
    if (!param.container) {
      container = el || document.body;
      while (container && container.tagName != 'BODY' && !utils.hasClass(container, 'h-dropdown-common-container')) {
        container = container.parentNode;
      }
    }
    param = utils.extend({}, Default, {
      boundariesElement: 'viewport',
      container
    }, param);
    super(el, param);
  }
}

export default Dropdown;
