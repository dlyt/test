module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  //require('./shipit')(shipit)
  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/test',
      repositoryUrl: 'https://github.com/dlyt/test.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '/Users/yangyss/.ssh/id_rsa',
      shallowClone: true
    },
    staging: {
      servers: ['root@ht.91buyin.com'],
      branch: 'master'
    }
  })
}
