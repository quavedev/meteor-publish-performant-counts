Package.describe({
  name: "quave:publish-performant-counts",
  version: "1.0.0",
  // Brief, one-line summary of the package.
  summary: "Publish counts of large collections efficently",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/quavedev/meteor-publish-performant-counts",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.0-alpha.17");

  api.use('ecmascript@0.16.7||0.16.8-alpha300.17');

  api.addFiles("lib/server.js", "server");
  api.addFiles("lib/client.js", "client");
  api.export(["Counter"]);
});
