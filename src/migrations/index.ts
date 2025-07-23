import * as migration_20250723_124350 from './20250723_124350';

export const migrations = [
  {
    up: migration_20250723_124350.up,
    down: migration_20250723_124350.down,
    name: '20250723_124350'
  },
];
