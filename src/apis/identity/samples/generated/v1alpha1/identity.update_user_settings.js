// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(settings) {
  // [START identity_v1alpha1_generated_Identity_UpdateUserSettings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The user settings to update.
   */
  // const settings = {}
  /**
   *  The field mask to determine which fields are to be updated. If empty, the
   *  server will assume all fields are to be updated.
   */
  // const updateMask = {}

  // Imports the Identity library
  const {IdentityClient} = require('@animeapis/identity').v1alpha1;

  // Instantiates a client
  const identityClient = new IdentityClient();

  async function callUpdateUserSettings() {
    // Construct request
    const request = {
      settings,
    };

    // Run request
    const response = await identityClient.updateUserSettings(request);
    console.log(response);
  }

  callUpdateUserSettings();
  // [END identity_v1alpha1_generated_Identity_UpdateUserSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
