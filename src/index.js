import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-function-entry'

export default class CorespringFunctionEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<function-entry id="' + this.getAttribute('pie-id') + '"></function-entry>';
  }
}


