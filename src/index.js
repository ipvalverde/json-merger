#! /usr/bin/env node

import packageJson from '../package.json';
import commander from 'commander';

commander
  .version(packageJson.version)
  .command('include <file> [otherFiles...]', 'specify the includes')
  .action((file, otherFiles) => {

      // console.log(file);
      console.log(otherFiles);
      
  });

commander.parse(process.argv);