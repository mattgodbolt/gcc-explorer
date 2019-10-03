// Copyright (c) 2019, Sebastian Rath
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
"use strict";
var monaco = require('monaco-editor');

function definition() {
    return {
        keywords: [
            'and', 'as', 'assert', 'break', 'class', 'continue',
            'def', 'del', 'elif', 'else', 'except', 'exec', 'finally',
            'for', 'from', 'global', 'if', 'import', 'in', 'is',
            'lambda', 'not', 'or', 'pass', 'print', 'raise',
            'return', 'try', 'while', 'with', 'yield',
        ],

        builtintypes: [
            'bool', 'int', 'float', 'str', 'list', 'dict', 'tuple'
        ],

        operators: [
            'is', 'and', 'or', '+', '-', '*', '%', '**', '//', '!=', '==', '<>', '>', '<', '>', '<=', '>=',
        ],

        numbers: /-?0x([abcdef]|[ABCDEF]|\d)?/,

        tokenizer: {
            root: [
                { include: '@whitespace' },

                [/./, 'operators'],

                [/\|/, 'operators'],

                [/(\w*)(\s?)(::)/, ['keyword', 'white', 'operators']],

                [/[+\-*/=<>$]/, 'operators'],

                [/[a-zA-Z_][a-zA-Z0-9_]*/, {
                    cases: {
                        '@builtintypes': 'type',
                        '@keywords': 'keyword',
                        '@default': ''
                    }
                }],

                [/[()[\],:]/, 'delimiter'],

                [/@numbers/, 'number'],

                [/(")(.*)(")/, ['string', 'string', 'string']]
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\*\//, 'comment', '@pop'],
                [/[/*]/, 'comment']
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
                [/--.*$/, 'comment']
            ]
        }
    };
}

monaco.languages.register({id: 'python'});
monaco.languages.setMonarchTokensProvider('python', definition());
