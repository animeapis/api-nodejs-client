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
import {Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback, GaxCall} from 'google-gax';

import { Transform } from 'stream';
import { RequestType } from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1alpha1/graphic_novel_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './graphic_novel_service_client_config.json';
import { operationsProtos } from 'google-gax';
const version = require('../../../package.json').version;

/**
 * @class
 * @memberof v1alpha1
 */
export class GraphicNovelServiceClient {
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
  operationsClient: gax.OperationsClient;
  graphicNovelServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of GraphicNovelServiceClient.
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
    const staticMembers = this.constructor as typeof GraphicNovelServiceClient;
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
      listGraphicNovels:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'graphicNovels')
    };

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const reconcileGraphicNovelsResponse = protoFilesRoot.lookup(
      '.animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsResponse') as gax.protobuf.Type;
    const reconcileGraphicNovelsMetadata = protoFilesRoot.lookup(
      '.animeshon.multimedia.v1alpha1.OperationMetadata') as gax.protobuf.Type;

    this.descriptors.longrunning = {
      reconcileGraphicNovels: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        reconcileGraphicNovelsResponse.decode.bind(reconcileGraphicNovelsResponse),
        reconcileGraphicNovelsMetadata.decode.bind(reconcileGraphicNovelsMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'animeshon.multimedia.v1alpha1.GraphicNovelService', gapicConfig as gax.ClientConfig,
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
    if (this.graphicNovelServiceStub) {
      return this.graphicNovelServiceStub;
    }

    // Put together the "service stub" for
    // animeshon.multimedia.v1alpha1.GraphicNovelService.
    this.graphicNovelServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('animeshon.multimedia.v1alpha1.GraphicNovelService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).animeshon.multimedia.v1alpha1.GraphicNovelService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const graphicNovelServiceStubMethods =
        ['getGraphicNovel', 'listGraphicNovels', 'createGraphicNovel', 'updateGraphicNovel', 'deleteGraphicNovel', 'reconcileGraphicNovels'];
    for (const methodName of graphicNovelServiceStubMethods) {
      const callPromise = this.graphicNovelServiceStub.then(
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
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.graphicNovelServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'multimedia.animeapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'multimedia.animeapis.com';
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
 *   The name of the graphic novel to retrieve.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.get_graphic_novel.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_GetGraphicNovel_async
 */
  getGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|undefined, {}|undefined
      ]>;
  getGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  getGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  getGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.IGetGraphicNovelRequest|undefined, {}|undefined
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
    return this.innerApiCalls.getGraphicNovel(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {animeshon.multimedia.v1alpha1.GraphicNovel} request.graphicNovel
 *   The graphic novel to create.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.create_graphic_novel.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_CreateGraphicNovel_async
 */
  createGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|undefined, {}|undefined
      ]>;
  createGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  createGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  createGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.ICreateGraphicNovelRequest|undefined, {}|undefined
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
    this.initialize();
    return this.innerApiCalls.createGraphicNovel(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {animeshon.multimedia.v1alpha1.GraphicNovel} request.graphicNovel
 *   The graphic novel to update.
 * @param {google.protobuf.FieldMask} request.updateMask
 *   The field mask to determine which fields are to be updated. If empty, the
 *   server will assume all fields are to be updated.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.update_graphic_novel.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_UpdateGraphicNovel_async
 */
  updateGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|undefined, {}|undefined
      ]>;
  updateGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest,
      options: CallOptions,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  updateGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest,
      callback: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  updateGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
          protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel,
        protos.animeshon.multimedia.v1alpha1.IUpdateGraphicNovelRequest|undefined, {}|undefined
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
      'graphic_novel.name': request.graphicNovel!.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateGraphicNovel(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the graphic novel to delete.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.delete_graphic_novel.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_DeleteGraphicNovel_async
 */
  deleteGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|undefined, {}|undefined
      ]>;
  deleteGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  deleteGraphicNovel(
      request: protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|null|undefined,
          {}|null|undefined>): void;
  deleteGraphicNovel(
      request?: protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.multimedia.v1alpha1.IDeleteGraphicNovelRequest|undefined, {}|undefined
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
    return this.innerApiCalls.deleteGraphicNovel(request, options, callback);
  }

/**
 * Reconcile graphic novels with the search and knowledge base.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the graphic novel to reconcile.
 *   Use the wildcard `graphicNovels/-` to reconcile all graphic novels.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.reconcile_graphic_novels.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_ReconcileGraphicNovels_async
 */
  reconcileGraphicNovels(
      request?: protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  reconcileGraphicNovels(
      request: protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  reconcileGraphicNovels(
      request: protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsRequest,
      callback: Callback<
          LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  reconcileGraphicNovels(
      request?: protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.animeshon.multimedia.v1alpha1.IReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    return this.innerApiCalls.reconcileGraphicNovels(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `reconcileGraphicNovels()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.reconcile_graphic_novels.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_ReconcileGraphicNovels_async
 */
  async checkReconcileGraphicNovelsProgress(name: string): Promise<LROperation<protos.animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.OperationMetadata>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.reconcileGraphicNovels, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsResponse, protos.animeshon.multimedia.v1alpha1.OperationMetadata>;
  }
 /**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listGraphicNovelsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listGraphicNovels(
      request?: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      options?: CallOptions):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel[],
        protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest|null,
        protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse
      ]>;
  listGraphicNovels(
      request: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse|null|undefined,
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel>): void;
  listGraphicNovels(
      request: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      callback: PaginationCallback<
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse|null|undefined,
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel>): void;
  listGraphicNovels(
      request?: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse|null|undefined,
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel>,
      callback?: PaginationCallback<
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
          protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse|null|undefined,
          protos.animeshon.multimedia.v1alpha1.IGraphicNovel>):
      Promise<[
        protos.animeshon.multimedia.v1alpha1.IGraphicNovel[],
        protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest|null,
        protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsResponse
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
    this.initialize();
    return this.innerApiCalls.listGraphicNovels(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {number} request.pageSize
 *   If unspecified, server will pick an appropriate default.
 * @param {string} request.pageToken
 *   The value returned from the previous call.
 * @param {string} request.filter
 *   A filter to be applied to results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listGraphicNovelsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listGraphicNovelsStream(
      request?: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listGraphicNovels'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listGraphicNovels.createStream(
      this.innerApiCalls.listGraphicNovels as gax.GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listGraphicNovels`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
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
 *   [GraphicNovel]{@link animeshon.multimedia.v1alpha1.GraphicNovel}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graphic_novel_service.list_graphic_novels.js</caption>
 * region_tag:multimedia_v1alpha1_generated_GraphicNovelService_ListGraphicNovels_async
 */
  listGraphicNovelsAsync(
      request?: protos.animeshon.multimedia.v1alpha1.IListGraphicNovelsRequest,
      options?: CallOptions):
    AsyncIterable<protos.animeshon.multimedia.v1alpha1.IGraphicNovel>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listGraphicNovels'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listGraphicNovels.asyncIterate(
      this.innerApiCalls['listGraphicNovels'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.animeshon.multimedia.v1alpha1.IGraphicNovel>;
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
      return this.graphicNovelServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
