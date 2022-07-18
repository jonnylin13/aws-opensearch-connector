module.exports = {
  ConnectorFactory: (awsConfig) => ({
    Connection: require('./AmazonConnection')(awsConfig),
    Transport: require('./AmazonTransport')(awsConfig)
  })
};
