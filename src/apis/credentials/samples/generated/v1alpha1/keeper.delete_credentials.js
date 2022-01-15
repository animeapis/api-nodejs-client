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

function main(name) {
  // [START credentials_v1alpha1_generated_Keeper_DeleteCredentials_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the credentials to delete.
   */
  // const name = 'abc123'

  // Imports the Credentials library
  const {KeeperClient} = require('@animeapis/credentials').v1alpha1;

  // Instantiates a client
  const credentialsClient = new KeeperClient();

  async function callDeleteCredentials() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await credentialsClient.deleteCredentials(request);
    console.log(response);
  }

  callDeleteCredentials();
  // [END credentials_v1alpha1_generated_Keeper_DeleteCredentials_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
