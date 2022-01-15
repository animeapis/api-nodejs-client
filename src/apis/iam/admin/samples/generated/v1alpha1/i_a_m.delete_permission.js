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
  // [START iam_v1alpha1_generated_IAM_DeletePermission_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the permission to delete.
   */
  // const name = 'abc123'

  // Imports the Admin library
  const {IAMClient} = require('@animeapis/iam-admin').v1alpha1;

  // Instantiates a client
  const adminClient = new IAMClient();

  async function callDeletePermission() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await adminClient.deletePermission(request);
    console.log(response);
  }

  callDeletePermission();
  // [END iam_v1alpha1_generated_IAM_DeletePermission_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
