// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(team) {
  // [START resourcemanager_v1alpha1_generated_ResourceManager_UpdateTeam_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The team to update.
   */
  // const team = {}
  /**
   *  The field mask to determine which fields are to be updated. If empty, the
   *  server will assume all fields are to be updated.
   */
  // const updateMask = {}

  // Imports the Resourcemanager library
  const {ResourceManagerClient} = require('@animeapis/resourcemanager').v1alpha1;

  // Instantiates a client
  const resourcemanagerClient = new ResourceManagerClient();

  async function callUpdateTeam() {
    // Construct request
    const request = {
      team,
    };

    // Run request
    const response = await resourcemanagerClient.updateTeam(request);
    console.log(response);
  }

  callUpdateTeam();
  // [END resourcemanager_v1alpha1_generated_ResourceManager_UpdateTeam_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
