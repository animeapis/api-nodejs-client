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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as imagerouterModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1alpha1.ImageRouterClient', () => {
    it('has servicePath', () => {
        const servicePath = imagerouterModule.v1alpha1.ImageRouterClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = imagerouterModule.v1alpha1.ImageRouterClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = imagerouterModule.v1alpha1.ImageRouterClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new imagerouterModule.v1alpha1.ImageRouterClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new imagerouterModule.v1alpha1.ImageRouterClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.imageRouterStub, undefined);
        await client.initialize();
        assert(client.imageRouterStub);
    });

    it('has close method', () => {
        const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('getImageRoute', () => {
        it('invokes getImageRoute without error', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.GetImageRouteRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.image.v1alpha1.GetImageRouteResponse());
            client.innerApiCalls.getImageRoute = stubSimpleCall(expectedResponse);
            const [response] = await client.getImageRoute(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getImageRoute as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getImageRoute without error using callback', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.GetImageRouteRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.image.v1alpha1.GetImageRouteResponse());
            client.innerApiCalls.getImageRoute = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getImageRoute(
                    request,
                    (err?: Error|null, result?: protos.animeshon.image.v1alpha1.IGetImageRouteResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getImageRoute as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getImageRoute with error', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.GetImageRouteRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getImageRoute = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getImageRoute(request), expectedError);
            assert((client.innerApiCalls.getImageRoute as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('routeImage', () => {
        it('invokes routeImage without error', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.RouteImageRequest());
            request.host = '';
            const expectedHeaderRequestParams = "host=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.routeImage = stubSimpleCall(expectedResponse);
            const [response] = await client.routeImage(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.routeImage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes routeImage without error using callback', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.RouteImageRequest());
            request.host = '';
            const expectedHeaderRequestParams = "host=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.routeImage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.routeImage(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.routeImage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes routeImage with error', async () => {
            const client = new imagerouterModule.v1alpha1.ImageRouterClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.image.v1alpha1.RouteImageRequest());
            request.host = '';
            const expectedHeaderRequestParams = "host=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.routeImage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.routeImage(request), expectedError);
            assert((client.innerApiCalls.routeImage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });
});
