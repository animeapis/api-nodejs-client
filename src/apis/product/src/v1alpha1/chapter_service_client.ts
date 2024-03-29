// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1alpha1/chapter_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './chapter_service_client_config.json';
const version = require('../../../package.json').version;

/**
 * @class
 * @memberof v1alpha1
 */
export class ChapterServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  chapterServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ChapterServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new ChapterServiceClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ChapterServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listChapters:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'chapters')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'animeshon.product.v1alpha1.ChapterService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.chapterServiceStub) {
      return this.chapterServiceStub;
    }

    // Put together the "service stub" for
    // animeshon.product.v1alpha1.ChapterService.
    this.chapterServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('animeshon.product.v1alpha1.ChapterService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).animeshon.product.v1alpha1.ChapterService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const chapterServiceStubMethods =
        ['getChapter', 'listChapters', 'createChapter', 'updateChapter', 'deleteChapter'];
    for (const methodName of chapterServiceStubMethods) {
      const callPromise = this.chapterServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.page[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.chapterServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'product.animeapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'product.animeapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the chapter to retrieve.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Chapter]{@link animeshon.product.v1alpha1.Chapter}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/chapter_service.get_chapter.js</caption>
 * region_tag:product_v1alpha1_generated_ChapterService_GetChapter_async
 */
  getChapter(
      request?: protos.animeshon.product.v1alpha1.IGetChapterRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.IGetChapterRequest|undefined, {}|undefined
      ]>;
  getChapter(
      request: protos.animeshon.product.v1alpha1.IGetChapterRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IGetChapterRequest|null|undefined,
          {}|null|undefined>): void;
  getChapter(
      request: protos.animeshon.product.v1alpha1.IGetChapterRequest,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IGetChapterRequest|null|undefined,
          {}|null|undefined>): void;
  getChapter(
      request?: protos.animeshon.product.v1alpha1.IGetChapterRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IGetChapterRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IGetChapterRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.IGetChapterRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.getChapter(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this chapter belongs to.
 * @param {animeshon.product.v1alpha1.Chapter} request.chapter
 *   The chapter to create.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Chapter]{@link animeshon.product.v1alpha1.Chapter}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/chapter_service.create_chapter.js</caption>
 * region_tag:product_v1alpha1_generated_ChapterService_CreateChapter_async
 */
  createChapter(
      request?: protos.animeshon.product.v1alpha1.ICreateChapterRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.ICreateChapterRequest|undefined, {}|undefined
      ]>;
  createChapter(
      request: protos.animeshon.product.v1alpha1.ICreateChapterRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.ICreateChapterRequest|null|undefined,
          {}|null|undefined>): void;
  createChapter(
      request: protos.animeshon.product.v1alpha1.ICreateChapterRequest,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.ICreateChapterRequest|null|undefined,
          {}|null|undefined>): void;
  createChapter(
      request?: protos.animeshon.product.v1alpha1.ICreateChapterRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.ICreateChapterRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.ICreateChapterRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.ICreateChapterRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.createChapter(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {animeshon.product.v1alpha1.Chapter} request.chapter
 *   The chapter to update.
 * @param {google.protobuf.FieldMask} request.updateMask
 *   The field mask to determine which fields are to be updated. If empty, the
 *   server will assume all fields are to be updated.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Chapter]{@link animeshon.product.v1alpha1.Chapter}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/chapter_service.update_chapter.js</caption>
 * region_tag:product_v1alpha1_generated_ChapterService_UpdateChapter_async
 */
  updateChapter(
      request?: protos.animeshon.product.v1alpha1.IUpdateChapterRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.IUpdateChapterRequest|undefined, {}|undefined
      ]>;
  updateChapter(
      request: protos.animeshon.product.v1alpha1.IUpdateChapterRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IUpdateChapterRequest|null|undefined,
          {}|null|undefined>): void;
  updateChapter(
      request: protos.animeshon.product.v1alpha1.IUpdateChapterRequest,
      callback: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IUpdateChapterRequest|null|undefined,
          {}|null|undefined>): void;
  updateChapter(
      request?: protos.animeshon.product.v1alpha1.IUpdateChapterRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IUpdateChapterRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.product.v1alpha1.IChapter,
          protos.animeshon.product.v1alpha1.IUpdateChapterRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter,
        protos.animeshon.product.v1alpha1.IUpdateChapterRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'chapter.name': request.chapter!.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.updateChapter(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the chapter to delete.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/chapter_service.delete_chapter.js</caption>
 * region_tag:product_v1alpha1_generated_ChapterService_DeleteChapter_async
 */
  deleteChapter(
      request?: protos.animeshon.product.v1alpha1.IDeleteChapterRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.product.v1alpha1.IDeleteChapterRequest|undefined, {}|undefined
      ]>;
  deleteChapter(
      request: protos.animeshon.product.v1alpha1.IDeleteChapterRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.product.v1alpha1.IDeleteChapterRequest|null|undefined,
          {}|null|undefined>): void;
  deleteChapter(
      request: protos.animeshon.product.v1alpha1.IDeleteChapterRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.product.v1alpha1.IDeleteChapterRequest|null|undefined,
          {}|null|undefined>): void;
  deleteChapter(
      request?: protos.animeshon.product.v1alpha1.IDeleteChapterRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.product.v1alpha1.IDeleteChapterRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.product.v1alpha1.IDeleteChapterRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.product.v1alpha1.IDeleteChapterRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.deleteChapter(request, options, callback);
  }

 /**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this chapter belongs to.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Chapter]{@link animeshon.product.v1alpha1.Chapter}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listChaptersAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listChapters(
      request?: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter[],
        protos.animeshon.product.v1alpha1.IListChaptersRequest|null,
        protos.animeshon.product.v1alpha1.IListChaptersResponse
      ]>;
  listChapters(
      request: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.animeshon.product.v1alpha1.IListChaptersRequest,
          protos.animeshon.product.v1alpha1.IListChaptersResponse|null|undefined,
          protos.animeshon.product.v1alpha1.IChapter>): void;
  listChapters(
      request: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      callback: PaginationCallback<
          protos.animeshon.product.v1alpha1.IListChaptersRequest,
          protos.animeshon.product.v1alpha1.IListChaptersResponse|null|undefined,
          protos.animeshon.product.v1alpha1.IChapter>): void;
  listChapters(
      request?: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.animeshon.product.v1alpha1.IListChaptersRequest,
          protos.animeshon.product.v1alpha1.IListChaptersResponse|null|undefined,
          protos.animeshon.product.v1alpha1.IChapter>,
      callback?: PaginationCallback<
          protos.animeshon.product.v1alpha1.IListChaptersRequest,
          protos.animeshon.product.v1alpha1.IListChaptersResponse|null|undefined,
          protos.animeshon.product.v1alpha1.IChapter>):
      Promise<[
        protos.animeshon.product.v1alpha1.IChapter[],
        protos.animeshon.product.v1alpha1.IListChaptersRequest|null,
        protos.animeshon.product.v1alpha1.IListChaptersResponse
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.listChapters(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this chapter belongs to.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [Chapter]{@link animeshon.product.v1alpha1.Chapter} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listChaptersAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listChaptersStream(
      request?: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listChapters'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listChapters.createStream(
      this.innerApiCalls.listChapters as GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listChapters`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this chapter belongs to.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
 *   When you iterate the returned iterable, each element will be an object representing
 *   [Chapter]{@link animeshon.product.v1alpha1.Chapter}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/chapter_service.list_chapters.js</caption>
 * region_tag:product_v1alpha1_generated_ChapterService_ListChapters_async
 */
  listChaptersAsync(
      request?: protos.animeshon.product.v1alpha1.IListChaptersRequest,
      options?: CallOptions):
    AsyncIterable<protos.animeshon.product.v1alpha1.IChapter>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listChapters'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listChapters.asyncIterate(
      this.innerApiCalls['listChapters'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.animeshon.product.v1alpha1.IChapter>;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.chapterServiceStub && !this._terminated) {
      return this.chapterServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
