import Reflux from 'reflux';
import { ajax, BaseUrl } from '../common.js'
import $ from 'jquery'


var TaskActions = module.exports = Reflux.createActions({
  "fetchList": {
    asyncResult: true
  },
  "close": {
    asyncResult: true
  },
  "add": {
    asyncResult: true
  },
  "fetchUsersList" : { asyncResult: true }
});

const Url = BaseUrl + '/api/tasks';

TaskActions.fetchList.listen(function() {
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

TaskActions.fetchUsersList.listen(function(id) {
  $.ajax({
    url: Url,
    data: {id: id},
    cache: false,
    context: this,
    success: function(data) {
      this.completed(data);
    },
    error: this.failed
  });
});

TaskActions.close.listen(function(task) {
  $.ajax({
    url: Url,
    method: 'POST',
    data: task,
    context: this,
    success: this.completed.bind(this, task),
    error: this.failed
  });
});

TaskActions.add.listen(function(task) {
  $.ajax({
    url: Url,
    method: 'POST',
    data: task,
    context: this,
    success: function(data) {
      this.completed(data);
    },
    error: this.failed
  });
});
