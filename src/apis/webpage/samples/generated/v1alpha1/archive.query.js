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

function main(query1) {
  // [START webpage_v1alpha1_generated_Archive_Query_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The query to perform on the matching documents in FQL.
   */
  // const query = 'abc123'
  /**
   *  The batch list of page resource names to be used for evaluation.
   */
  // const pages = 'abc123'

  // Imports the Webpage library
  const {ArchiveClient} = require('@animeapis/webpage').v1alpha1;

  // Instantiates a client
  const webpageClient = new ArchiveClient();

  async function callQuery() {
    // Construct request
    const request = {
      query1,
    };

    // Run request
    const stream = await webpageClient.query();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end(); 
  }

  callQuery();
  // [END webpage_v1alpha1_generated_Archive_Query_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
