/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 *
 * @flow
 */

const path = require('path');
const { cleanup, run } = require('../../utils');
const { bundleForPlatform, TEST_PROJECT_DIR } = require('./utils');

beforeAll(() => run('yarn --mutex network', TEST_PROJECT_DIR));
beforeEach(() => cleanup(path.resolve(TEST_PROJECT_DIR, 'qt/dist')));

test('bundle ios project', () => {
  bundleForPlatform('ios');
});
