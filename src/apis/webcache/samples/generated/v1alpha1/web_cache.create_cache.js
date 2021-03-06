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

function main(cache, ttl) {
  // [START webcache_v1alpha1_generated_WebCache_CreateCache_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The cache to be created.
   */
  // const cache = {}
  /**
   *  The time-to-live indicating how long this cache should be considered valid.
   *  If set to zero, the cache will not have an expiration time.
   */
  // const ttl = {}

  // Imports the Webcache library
  const {WebCacheClient} = require('@animeapis/webcache').v1alpha1;

  // Instantiates a client
  const webcacheClient = new WebCacheClient();

  async function callCreateCache() {
    // Construct request
    const request = {
      cache,
      ttl,
    };

    // Run request
    const response = await webcacheClient.createCache(request);
    console.log(response);
  }

  callCreateCache();
  // [END webcache_v1alpha1_generated_WebCache_CreateCache_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
