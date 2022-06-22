const { override, adjustStyleLoaders } = require("customize-cra");
const { createLocalIdentGetter } = require("css-loader-incremental-ident");

module.exports = override(
  adjustStyleLoaders(({ use: [, css] }) => {
    if (process.env.NODE_ENV === "production") {
      css.options.modules.getLocalIdent = createLocalIdentGetter();
    }
  })
);
