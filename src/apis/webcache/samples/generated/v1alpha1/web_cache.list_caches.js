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

function main() {
  // [START webcache_v1alpha1_generated_WebCache_ListCaches_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  If unspecified, server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  The value returned from the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter to be applied to results.
   *  Currently accepted filters include:
   *  - uri:{absolute uri}
   *  - resource:{full resource name}
   */
  // const filter = 'abc123'
  /**
   *  Whether to return only the latest revision for each cache.
   */
  // const onlyLatestRevision = true

  // Imports the Webcache library
  const {WebCacheClient} = require('@animeapis/webcache').v1alpha1;

  // Instantiates a client
  const webcacheClient = new WebCacheClient();

  async function callListCaches() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await webcacheClient.listCachesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListCaches();
  // [END webcache_v1alpha1_generated_WebCache_ListCaches_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
