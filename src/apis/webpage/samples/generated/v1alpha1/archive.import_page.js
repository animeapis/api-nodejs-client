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
  // [START webpage_v1alpha1_generated_Archive_ImportPage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the page to retrieve.
   */
  // const name = 'abc123'
  /**
   *  The web cache options to apply to the import request.
   */
  // const cacheOptions = {}

  // Imports the Webpage library
  const {ArchiveClient} = require('@animeapis/webpage').v1alpha1;

  // Instantiates a client
  const webpageClient = new ArchiveClient();

  async function callImportPage() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await webpageClient.importPage(request);
    console.log(response);
  }

  callImportPage();
  // [END webpage_v1alpha1_generated_Archive_ImportPage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
