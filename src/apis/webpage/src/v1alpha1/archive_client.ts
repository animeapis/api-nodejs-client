// Copyright 2022 Google LLC
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
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';

import { Transform } from 'stream';
import { RequestType } from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1alpha1/archive_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './archive_client_config.json';

const version = require('../../../package.json').version;

/**
 * @class
 * @memberof v1alpha1
 */
export class ArchiveClient {
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
  archiveStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ArchiveClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
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
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ArchiveClient;
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

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

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
      listPages:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'pages')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'animeshon.webpage.v1alpha1.Archive', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
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
    if (this.archiveStub) {
      return this.archiveStub;
    }

    // Put together the "service stub" for
    // animeshon.webpage.v1alpha1.Archive.
    this.archiveStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('animeshon.webpage.v1alpha1.Archive') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).animeshon.webpage.v1alpha1.Archive,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const archiveStubMethods =
        ['getPage', 'listPages', 'importPage', 'createPage', 'deletePage'];
    for (const methodName of archiveStubMethods) {
      const callPromise = this.archiveStub.then(
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
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.archiveStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'webpage.animeapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'webpage.animeapis.com';
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
 *   The name of the page to retrieve.
 * @param {string} request.selector
 *   The html selector to use to return the page content.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Page]{@link animeshon.webpage.v1alpha1.Page}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/archive.get_page.js</caption>
 * region_tag:webpage_v1alpha1_generated_Archive_GetPage_async
 */
  getPage(
      request?: protos.animeshon.webpage.v1alpha1.IGetPageRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage,
        protos.animeshon.webpage.v1alpha1.IGetPageRequest|undefined, {}|undefined
      ]>;
  getPage(
      request: protos.animeshon.webpage.v1alpha1.IGetPageRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.IGetPageRequest|null|undefined,
          {}|null|undefined>): void;
  getPage(
      request: protos.animeshon.webpage.v1alpha1.IGetPageRequest,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.IGetPageRequest|null|undefined,
          {}|null|undefined>): void;
  getPage(
      request?: protos.animeshon.webpage.v1alpha1.IGetPageRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.IGetPageRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.IGetPageRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage,
        protos.animeshon.webpage.v1alpha1.IGetPageRequest|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getPage(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The site parent of the page.
 * @param {string} request.uri
 *   A publicly-accessible page HTTP/HTTPS URL. When fetching pages from
 *   HTTP/HTTPS URLs, Animeshon cannot guarantee that the request will be
 *   completed. Your request may fail if the specified host denies the
 *   request (e.g. due to request throttling or DoS prevention), or if
 *   Animeshon throttles requests to the site for abuse prevention.
 * @param {animeshon.webpage.v1alpha1.ImportPageRequest.WebCacheOptions} [request.cacheOptions]
 *   The web cache options to apply to the import request.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ImportPageResponse]{@link animeshon.webpage.v1alpha1.ImportPageResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/archive.import_page.js</caption>
 * region_tag:webpage_v1alpha1_generated_Archive_ImportPage_async
 */
  importPage(
      request?: protos.animeshon.webpage.v1alpha1.IImportPageRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IImportPageResponse,
        protos.animeshon.webpage.v1alpha1.IImportPageRequest|undefined, {}|undefined
      ]>;
  importPage(
      request: protos.animeshon.webpage.v1alpha1.IImportPageRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IImportPageResponse,
          protos.animeshon.webpage.v1alpha1.IImportPageRequest|null|undefined,
          {}|null|undefined>): void;
  importPage(
      request: protos.animeshon.webpage.v1alpha1.IImportPageRequest,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IImportPageResponse,
          protos.animeshon.webpage.v1alpha1.IImportPageRequest|null|undefined,
          {}|null|undefined>): void;
  importPage(
      request?: protos.animeshon.webpage.v1alpha1.IImportPageRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.webpage.v1alpha1.IImportPageResponse,
          protos.animeshon.webpage.v1alpha1.IImportPageRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.webpage.v1alpha1.IImportPageResponse,
          protos.animeshon.webpage.v1alpha1.IImportPageRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IImportPageResponse,
        protos.animeshon.webpage.v1alpha1.IImportPageRequest|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.importPage(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this page belongs to.
 * @param {animeshon.webpage.v1alpha1.Page} request.page
 *   The page to create.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Page]{@link animeshon.webpage.v1alpha1.Page}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/archive.create_page.js</caption>
 * region_tag:webpage_v1alpha1_generated_Archive_CreatePage_async
 */
  createPage(
      request?: protos.animeshon.webpage.v1alpha1.ICreatePageRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage,
        protos.animeshon.webpage.v1alpha1.ICreatePageRequest|undefined, {}|undefined
      ]>;
  createPage(
      request: protos.animeshon.webpage.v1alpha1.ICreatePageRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.ICreatePageRequest|null|undefined,
          {}|null|undefined>): void;
  createPage(
      request: protos.animeshon.webpage.v1alpha1.ICreatePageRequest,
      callback: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.ICreatePageRequest|null|undefined,
          {}|null|undefined>): void;
  createPage(
      request?: protos.animeshon.webpage.v1alpha1.ICreatePageRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.ICreatePageRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.webpage.v1alpha1.IPage,
          protos.animeshon.webpage.v1alpha1.ICreatePageRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage,
        protos.animeshon.webpage.v1alpha1.ICreatePageRequest|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createPage(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the page to delete.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/archive.delete_page.js</caption>
 * region_tag:webpage_v1alpha1_generated_Archive_DeletePage_async
 */
  deletePage(
      request?: protos.animeshon.webpage.v1alpha1.IDeletePageRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.webpage.v1alpha1.IDeletePageRequest|undefined, {}|undefined
      ]>;
  deletePage(
      request: protos.animeshon.webpage.v1alpha1.IDeletePageRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.webpage.v1alpha1.IDeletePageRequest|null|undefined,
          {}|null|undefined>): void;
  deletePage(
      request: protos.animeshon.webpage.v1alpha1.IDeletePageRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.webpage.v1alpha1.IDeletePageRequest|null|undefined,
          {}|null|undefined>): void;
  deletePage(
      request?: protos.animeshon.webpage.v1alpha1.IDeletePageRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.webpage.v1alpha1.IDeletePageRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.webpage.v1alpha1.IDeletePageRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.webpage.v1alpha1.IDeletePageRequest|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deletePage(request, options, callback);
  }

 /**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this page belongs to.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Page]{@link animeshon.webpage.v1alpha1.Page}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listPagesAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listPages(
      request?: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage[],
        protos.animeshon.webpage.v1alpha1.IListPagesRequest|null,
        protos.animeshon.webpage.v1alpha1.IListPagesResponse
      ]>;
  listPages(
      request: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.animeshon.webpage.v1alpha1.IListPagesRequest,
          protos.animeshon.webpage.v1alpha1.IListPagesResponse|null|undefined,
          protos.animeshon.webpage.v1alpha1.IPage>): void;
  listPages(
      request: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      callback: PaginationCallback<
          protos.animeshon.webpage.v1alpha1.IListPagesRequest,
          protos.animeshon.webpage.v1alpha1.IListPagesResponse|null|undefined,
          protos.animeshon.webpage.v1alpha1.IPage>): void;
  listPages(
      request?: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.animeshon.webpage.v1alpha1.IListPagesRequest,
          protos.animeshon.webpage.v1alpha1.IListPagesResponse|null|undefined,
          protos.animeshon.webpage.v1alpha1.IPage>,
      callback?: PaginationCallback<
          protos.animeshon.webpage.v1alpha1.IListPagesRequest,
          protos.animeshon.webpage.v1alpha1.IListPagesResponse|null|undefined,
          protos.animeshon.webpage.v1alpha1.IPage>):
      Promise<[
        protos.animeshon.webpage.v1alpha1.IPage[],
        protos.animeshon.webpage.v1alpha1.IListPagesRequest|null,
        protos.animeshon.webpage.v1alpha1.IListPagesResponse
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
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listPages(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this page belongs to.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [Page]{@link animeshon.webpage.v1alpha1.Page} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listPagesAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listPagesStream(
      request?: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listPages'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listPages.createStream(
      this.innerApiCalls.listPages as gax.GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listPages`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The parent this page belongs to.
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
 *   [Page]{@link animeshon.webpage.v1alpha1.Page}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/archive.list_pages.js</caption>
 * region_tag:webpage_v1alpha1_generated_Archive_ListPages_async
 */
  listPagesAsync(
      request?: protos.animeshon.webpage.v1alpha1.IListPagesRequest,
      options?: CallOptions):
    AsyncIterable<protos.animeshon.webpage.v1alpha1.IPage>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listPages'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listPages.asyncIterate(
      this.innerApiCalls['listPages'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.animeshon.webpage.v1alpha1.IPage>;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.archiveStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
