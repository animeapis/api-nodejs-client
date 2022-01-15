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
  // [START image_v1alpha1_generated_Image_GetImage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The image resource name.
   */
  // const name = 'abc123'
  /**
   *  If content type is set and differs from the original content type the image
   *  will be converted to match the specified content type.
   *  Note: only "image/png", "image/webp", "image/jpeg" are supported values.
   */
  // const contentType = 'abc123'
  /**
   *  The image bounding box to use for resizing. This value is normally used
   *  to request image thumbnails. If both width and height are defined then the
   *  value with smaller ratio will be used to resize the image. The resized
   *  image has the closest standard ratio to the requested width or height.
   *  If the requested ratio is larger than the original image it is ignored.
   */
  // const resize = {}
  /**
   *  Whether the image returned should be blurred. This is typically used while
   *  routing images that have been detected to contain highly sensitive or
   *  controversial content that must be censored in some or all regions.
   */
  // const blur = true

  // Imports the Image library
  const {ImageClient} = require('@animeapis/image').v1alpha1;

  // Instantiates a client
  const imageClient = new ImageClient();

  async function callGetImage() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await imageClient.getImage(request);
    console.log(response);
  }

  callGetImage();
  // [END image_v1alpha1_generated_Image_GetImage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
