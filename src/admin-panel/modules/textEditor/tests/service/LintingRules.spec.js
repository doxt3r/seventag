/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distrubuted in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

 /* global describe: false, beforeEach: false, inject: false, it: false, expect: false */
 'use strict';

describe('Unit: clearcode.tm.textEditor.LintingRules', () => {

    var LintingRules;

    beforeEach(angular.mock.module('clearcode.tm.textEditor'));

    beforeEach(angular.mock.inject([

        'clearcode.tm.textEditor.LintingRules',

        (lintingRules) => {

          LintingRules = lintingRules;

        }
    ]));

    it('should be defined', () => {

        expect(LintingRules).toBeDefined();

    });

    describe('when calling getLintingRules', () => {

        it('should return HTMLHint rules', () => {

            expect(LintingRules.getLintingRules()).toBeDefined()

        });

        it('should return JSHint rules', () => {

            expect(LintingRules.getLintingRules().jshint).toBeDefined()

        });

    });

});
