/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

import Date from './Input/Date';
import Time from './Input/Time';
import Tags from './Input/Tags';
import Mask from './Input/Mask';
import File from './Input/File';

/**
 * Class Input
 *
 * @author          Teguh Rianto
 * @package         Components
 */
export default class Input {

    /**
     * Input.constructor
     */
    constructor() {
        this.date = new Date();
        this.time = new Time();
        this.tags = new Tags();
        this.mask = new Mask();
        this.file = new File();
    }
}