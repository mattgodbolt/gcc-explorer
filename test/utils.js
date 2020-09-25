// Copyright (c) 2020, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

import fs from 'fs-extra';
import chai from 'chai';
import path from 'path';
import { fileURLToPath } from 'url';
import { CompilerProps, fakeProps } from '../lib/properties';
import { CompilationQueue } from '../lib/compilation-queue';
import { CompilationEnvironment } from '../lib/compilation-env';

export function makeCompilationEnvironment(options) {
    const compilerProps = new CompilerProps(options.languages, fakeProps(options.props || {}));
    const compilationQueue = options.queue || new CompilationQueue(options.concurrency || 1, options.timeout);
    return new CompilationEnvironment(compilerProps, compilationQueue, options.doCache);
}

export const should = chai.should();

/***
 * Absolute path to the root of the tests
 */
export const TEST_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

export function resolvePathFromTestRoot(...args) {
    return path.resolve(TEST_ROOT, ...args);
}

export {
    fs,
    chai,
    path,
};
