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

function main(parent, ttl) {
  // [START release_v1alpha1_generated_Publisher_CreateRelease_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent this release belongs to.
   */
  // const parent = 'abc123'
  /**
   *  The release to create.
   */
  // const release = {}
  /**
   *  The time-to-live indicating for how long this release should be published.
   *  If set to zero, the release will not have an expiration time.
   */
  // const ttl = {}

  // Imports the Release library
  const {PublisherClient} = require('@animeapis/release').v1alpha1;

  // Instantiates a client
  const releaseClient = new PublisherClient();

  async function callCreateRelease() {
    // Construct request
    const request = {
      parent,
      ttl,
    };

    // Run request
    const response = await releaseClient.createRelease(request);
    console.log(response);
  }

  callCreateRelease();
  // [END release_v1alpha1_generated_Publisher_CreateRelease_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
