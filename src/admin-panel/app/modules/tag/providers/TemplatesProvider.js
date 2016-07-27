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

import templateFactory from '../entity/Template.js';

let Template = templateFactory();

/**
 * @name TemplatesProvider
 */
class TemplatesProvider {

    constructor () {


        /**
         * @type {Array} collection
         */
        this.collection = [];

    }

    /**
     * @param {string} id
     * @param {string} name
     * @returns {Template}
     */
    add (id, name) {

        let template = new Template(id, name);

        this.collection.push(template);

        return template;

    }

    /**
     * @param {string} id
     * @returns {Template|boolean}
     */
    get (id) {

        let templateLength = this.collection.length;

        while (templateLength--) {

            if (this.collection[templateLength].id === id) {

                return this.collection[templateLength];

            }

        }

        return false;

    }

    /**
     * @returns {array}
     */
    getAll () {

        return this.collection;

    }

    $get () {

        return this;

    };

}

export default TemplatesProvider;
