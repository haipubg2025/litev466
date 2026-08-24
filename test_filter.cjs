const { processShortCustomTags, filterSensitiveWords, stripShortTags } = require('./dist/server.cjs'); 
// wait, we can't easily require it like that, it's bundled for server but not exporting these if they aren't entry points.
