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
import type {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1alpha1/graph_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './graph_client_config.json';
const version = require('../../../package.json').version;

/**
 * @class
 * @memberof v1alpha1
 */
export class GraphClient {
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
  graphStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of GraphClient.
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
   *     const client = new GraphClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof GraphClient;
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

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'animeshon.graph.v1alpha1.Graph', gapicConfig as gax.ClientConfig,
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
    if (this.graphStub) {
      return this.graphStub;
    }

    // Put together the "service stub" for
    // animeshon.graph.v1alpha1.Graph.
    this.graphStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('animeshon.graph.v1alpha1.Graph') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).animeshon.graph.v1alpha1.Graph,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const graphStubMethods =
        ['migrateGraph', 'deleteGraph'];
    for (const methodName of graphStubMethods) {
      const callPromise = this.graphStub.then(
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
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.graphStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'graph.animeapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'graph.animeapis.com';
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
 *   The resource name of the resource to migrate.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graph.migrate_graph.js</caption>
 * region_tag:graph_v1alpha1_generated_Graph_MigrateGraph_async
 */
  migrateGraph(
      request?: protos.animeshon.graph.v1alpha1.IMigrateGraphRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|undefined, {}|undefined
      ]>;
  migrateGraph(
      request: protos.animeshon.graph.v1alpha1.IMigrateGraphRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|null|undefined,
          {}|null|undefined>): void;
  migrateGraph(
      request: protos.animeshon.graph.v1alpha1.IMigrateGraphRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|null|undefined,
          {}|null|undefined>): void;
  migrateGraph(
      request?: protos.animeshon.graph.v1alpha1.IMigrateGraphRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.graph.v1alpha1.IMigrateGraphRequest|undefined, {}|undefined
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
    return this.innerApiCalls.migrateGraph(request, options, callback);
  }
/**
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The resource name of the resource to delete.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1alpha1/graph.delete_graph.js</caption>
 * region_tag:graph_v1alpha1_generated_Graph_DeleteGraph_async
 */
  deleteGraph(
      request?: protos.animeshon.graph.v1alpha1.IDeleteGraphRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|undefined, {}|undefined
      ]>;
  deleteGraph(
      request: protos.animeshon.graph.v1alpha1.IDeleteGraphRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|null|undefined,
          {}|null|undefined>): void;
  deleteGraph(
      request: protos.animeshon.graph.v1alpha1.IDeleteGraphRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|null|undefined,
          {}|null|undefined>): void;
  deleteGraph(
      request?: protos.animeshon.graph.v1alpha1.IDeleteGraphRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.animeshon.graph.v1alpha1.IDeleteGraphRequest|undefined, {}|undefined
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
    return this.innerApiCalls.deleteGraph(request, options, callback);
  }


  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.graphStub && !this._terminated) {
      return this.graphStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
