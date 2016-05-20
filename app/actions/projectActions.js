import Reflux from 'reflux';
import {ajax, BaseUrl} from '../common.js'
import $ from 'jquery'


var ProjectActions = module.exports = Reflux.createActions({
  "fetchList" : { asyncResult: true },
  "add": { asyncResult: true }
});

const Url = BaseUrl + '/api/projects';

ProjectActions.fetchList.listen( function() {
    $.ajax({
      url: Url,
      cache: false,
      context: this,
      success: function(data) {
        this.completed(data);
      },
      error: this.failed
    });
});

ProjectActions.add.listen(function(project) {
  $.ajax({
    url: Url,
    method: 'POST',
    data: project,
    context: this,
    success: function(data) {
      this.completed(data);
    },
    error: this.failed
  });
});
