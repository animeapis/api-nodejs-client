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
  // [START vision_v1alpha1_generated_ImageAnnotator_GetImageAnalysis_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the image analysis to retrieve.
   */
  // const name = 'abc123'
  /**
   *  FieldMask that represents which fields should be retrieved.
   */
  // const fieldMask = {}

  // Imports the Vision library
  const {ImageAnnotatorClient} = require('@animeapis/vision').v1alpha1;

  // Instantiates a client
  const visionClient = new ImageAnnotatorClient();

  async function callGetImageAnalysis() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await visionClient.getImageAnalysis(request);
    console.log(response);
  }

  callGetImageAnalysis();
  // [END vision_v1alpha1_generated_ImageAnnotator_GetImageAnalysis_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
