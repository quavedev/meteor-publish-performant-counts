Package.describe({
  name: "quave:publish-performant-counts",
  version: "1.0.0",
  summary: "Publish counts of large collections efficently",
  git: "https://github.com/quavedev/meteor-publish-performant-counts",
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.0-alpha.17");

  api.use("ecmascript@0.16.7||0.16.8-alpha300.17");

  api.addFiles("lib/server.js", "server");
  api.addFiles("lib/client.js", "client");
  api.export(["Counter"]);
});
