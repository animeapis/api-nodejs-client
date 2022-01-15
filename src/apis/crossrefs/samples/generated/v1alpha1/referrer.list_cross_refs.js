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

function main(pageSize) {
  // [START crossrefs_v1alpha1_generated_Referrer_ListCrossRefs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The maximum number of users to return. Server may return fewer users
   *  than requested.
   *  The maximum page_size is 100
   *  If unspecified, server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  The value returned from the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter to be applied to results.
   */
  // const filter = {}

  // Imports the Crossrefs library
  const {ReferrerClient} = require('@animeapis/crossrefs').v1alpha1;

  // Instantiates a client
  const crossrefsClient = new ReferrerClient();

  async function callListCrossRefs() {
    // Construct request
    const request = {
      pageSize,
    };

    // Run request
    const iterable = await crossrefsClient.listCrossRefsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListCrossRefs();
  // [END crossrefs_v1alpha1_generated_Referrer_ListCrossRefs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
