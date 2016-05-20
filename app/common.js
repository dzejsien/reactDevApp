import $ from 'jquery';

export const BaseUrl = "http://localhost/Edu";

export default class Task {
  constructor() {
    this.id = null;
    this.subject = null;
    this.description = null;
    this.userId = null;
    this.projectId = null;
  }
};

export function preaperSelectOptions(array, valueProp, labelProp) {
  var options = array.map(elem => {
      return {
        'value': elem[valueProp],
        'label': elem[labelProp]
      };
  });
  var singleOptions = options.slice(0);
  singleOptions.unshift({value: '', label: 'Please select…'});
  return singleOptions;
};
