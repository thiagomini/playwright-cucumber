module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require ./features/**/*.ts',
    '--require ./features/*.ts',
    '--require ./step-definitions/*.ts',
    '--require ./support/*.ts',
    '--publish-quiet'
  ].join(' '),
};