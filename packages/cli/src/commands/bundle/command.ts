/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Command } from 'commander';
import { bundleApp } from './bundleApp';
import { bundleBackend } from './bundleBackend';
import { findRoleFromCommand } from '../../lib/role';

export async function command(cmd: Command): Promise<void> {
  const role = await findRoleFromCommand(cmd);

  const options = {
    configPaths: cmd.config as string[],
    writeStats: Boolean(cmd.stats),
    skipBuildDependencies: Boolean(cmd.skipBuildDependencies),
  };

  if (role === 'app') {
    return bundleApp(options);
  } else if (role === 'backend') {
    return bundleBackend(options);
  }

  throw new Error(`Bundle command is not supported for package role '${role}'`);
}
