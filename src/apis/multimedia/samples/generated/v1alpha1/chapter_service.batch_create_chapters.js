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

function main(requests, parent) {
  // [START multimedia_v1alpha1_generated_ChapterService_BatchCreateChapters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Individual create chapter requests for this batch.
   */
  // const requests = 1234
  /**
   *  The parent this batch belongs to.
   */
  // const parent = 'abc123'

  // Imports the Multimedia library
  const {ChapterServiceClient} = require('@animeapis/multimedia').v1alpha1;

  // Instantiates a client
  const multimediaClient = new ChapterServiceClient();

  async function callBatchCreateChapters() {
    // Construct request
    const request = {
      requests,
      parent,
    };

    // Run request
    const [operation] = await multimediaClient.batchCreateChapters(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchCreateChapters();
  // [END multimedia_v1alpha1_generated_ChapterService_BatchCreateChapters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
