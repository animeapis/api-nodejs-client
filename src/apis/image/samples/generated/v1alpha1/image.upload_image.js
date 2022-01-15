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

function main(parent) {
  // [START image_v1alpha1_generated_Image_UploadImage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The image parent of the image. This value defaults to the user performing
   *  the upload operation if no parent is set.
   */
  // const parent = 'abc123'
  /**
   *  The image content, represented as an HttpBody.
   */
  // const body = {}

  // Imports the Image library
  const {ImageClient} = require('@animeapis/image').v1alpha1;

  // Instantiates a client
  const imageClient = new ImageClient();

  async function callUploadImage() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await imageClient.uploadImage(request);
    console.log(response);
  }

  callUploadImage();
  // [END image_v1alpha1_generated_Image_UploadImage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
