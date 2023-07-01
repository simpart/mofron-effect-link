/**
 * @file mofron-effect-link/index.js
 * @brief link text effect for mofron text component
 * @license MIT
 */
const Link        = require("mofron-event-link"); 
const Hover       = require("mofron-event-hover");
const ConfArg     = mofron.class.ConfArg;
const comutl      = mofron.util.common;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Link");
            this.shortForm('url','newtab');
            
            /* init config */
	    this.confmng().add('eventLink', { type: 'Link', init: new Link() });
	    this.confmng().add('eventHover', { type: 'Hover', init: new Hover() });
            
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    component (prm) {
        try {
            let ret = super.component(prm);
            if (undefined !== prm) {
	        let hov = (h1,h2,h3) => {
                    try {
                        h1.style({
                            'text-decoration': (true === h2) ? 'underline' : null
                        });
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                this.eventHover().listener(hov);
                prm.event([this.eventLink(), this.eventHover()]);
            }
            return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    url (prm) {
        try {
	    return this.eventLink().url(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    newtab (prm) {
        try {
            return this.eventLink().newtab(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    eventLink (prm) {
        try {
            return this.confmng('eventLink', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    eventHover (prm) {
        try {
            return this.confmng('eventHover', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
	    cmp.style({
                'color': 'rgb(0,0,255)'
            });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
