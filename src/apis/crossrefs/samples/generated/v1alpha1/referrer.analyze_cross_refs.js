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
  // [START crossrefs_v1alpha1_generated_Referrer_AnalyzeCrossRefs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Tollerance of the match in pct
   */
  // const tollerance = 1234
  /**
   *  Map of all options for the analysis
   */
  // const opts = 1234
  /**
   *  Namespaces to analyze
   */
  // const namespaces = 'abc123'
  /**
   *  Kinds to analyze
   */
  // const targetKinds = 'abc123'

  // Imports the Crossrefs library
  const {ReferrerClient} = require('@animeapis/crossrefs').v1alpha1;

  // Instantiates a client
  const crossrefsClient = new ReferrerClient();

  async function callAnalyzeCrossRefs() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await crossrefsClient.analyzeCrossRefs(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAnalyzeCrossRefs();
  // [END crossrefs_v1alpha1_generated_Referrer_AnalyzeCrossRefs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
