module.exports = {
  istanbulReporter: ["html", "lcov"],
  providerOptions: {
    mnemonic: process.env.MNEMONIC,
  },
  skipFiles: ["test", "l2"],
};
