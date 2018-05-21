'use strict';

const proxyquire = require('proxyquire');
const { testquire } = require('atom-coverage');
const path = require('path');
const sinon = require('sinon');

const Package = proxyquire(testquire('package', false), {
  './services/database': {}
});
const { PLUGIN_NAME } = testquire('constants/base');

describe('package', async function () {
  beforeEach(async function () {
    this.sandbox = sinon.createSandbox();
  });

  beforeEach(async function () {
    this.projectViewerPlus = await new Package();

    const config = await this.projectViewerPlus.config;

    config.database.localPath = path.join(__dirname, 'fixtures');
    atom.config.set(PLUGIN_NAME, config);

    await this.projectViewerPlus.activate();
  });

  afterEach(function () {
    this.sandbox.restore();
    delete this.projectViewerPlus;
  });

  it('should add instance to right dock', async function () {
    const rightDocks = atom.workspace.getRightDock().getPaneItems();
    const projectViewerPlus = await this.projectViewerPlus.getInstance();

    expect(projectViewerPlus).to.equal(rightDocks[0]);
  });

  // it('should initialize database', function () {
  //   console.log(this.database);
  //   expect(this.database.initialize.calledOnce).to.be.true;
  // });
});
