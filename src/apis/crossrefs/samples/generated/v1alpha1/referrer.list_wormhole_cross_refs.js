// Copyright 2022 Google LLC
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

function main(name) {
  // [START crossrefs_v1alpha1_generated_Referrer_ListWormholeCrossRefs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   */
  // const name = 'abc123'
  /**
   *  search wormhole entity in approved edges
   */
  // const withApproved = true
  /**
   *  search wormhole entity in pending edges
   */
  // const withPending = true
  /**
   *  search wormhole entity in partial edges
   */
  // const withPartial = true
  /**
   *  search wormhole entity in rejected edges
   */
  // const withRejected = true
  /**
   *  list of CrossRefs to exclude
   */
  // const crossRefsExclusion = 'abc123'
  /**
   *  prefix of the CrossRefs name to search
   */
  // const prefix = 'abc123'

  // Imports the Crossrefs library
  const {ReferrerClient} = require('@animeapis/crossrefs').v1alpha1;

  // Instantiates a client
  const crossrefsClient = new ReferrerClient();

  async function callListWormholeCrossRefs() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await crossrefsClient.listWormholeCrossRefs(request);
    console.log(response);
  }

  callListWormholeCrossRefs();
  // [END crossrefs_v1alpha1_generated_Referrer_ListWormholeCrossRefs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
