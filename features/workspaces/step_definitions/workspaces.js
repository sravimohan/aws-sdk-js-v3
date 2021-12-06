const { Before } = require("cucumber");

Before({ tags: "@workspaces" }, function (scenario, callback) {
  const { WorkSpaces } = require("../../../clients/client-workspaces");
  this.service = new WorkSpaces({});
  callback();
});
