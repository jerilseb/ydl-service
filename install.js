var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Youtube Downloader',
  description: 'Youtube downloader service',
  script: require('path').join(__dirname,'app.js'),
  nodeOptions: [
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log('Service Installed');
  svc.start();
});

svc.on('start',function(){
  console.log('Service started');
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

svc.install();