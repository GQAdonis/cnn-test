/**
 * Created by gqadonis on 6/27/16.
 */
define (function(require) {
    'use strict';

    var throwErr = function(err) {
        throw new Error(err);
    };

    window.currentElement = null;

    function onMouseOver(evt) {
        var elementAtPoint = document.elementFromPoint(evt.clientX, evt.clientY);
        if (elementAtPoint) {
            //console.log('Element: ' + elementAtPoint.tagName)
            window.currentElement = elementAtPoint;

        }
    }

    function onMouseOut(evt) {
        //window.currentElement = null;
    }

    function onRightClickElement(options) {

    }

    function addCssClass(el, className) {
        el.className += className;
    }

    function hasClass(ele,cls) {
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

    function removeCssClass(el, className) {
        var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
        el.className.replace(reg , '' )
    }

    return {
        
        trackComponents : function(tracking, options) {
            if (tracking && options && options.rootElement) {
                options.rootElement.addEventListener('mouseover', function(evt) {
                    onMouseOver(evt);

                });
                options.rootElement.addEventListener('mouseout', function (evt) {
                    onMouseOut(evt);
                });
                options.rootElement.addEventListener('contextmenu', function(evt) {
                    window.currentElement = document.elementFromPoint(evt.clientX, evt.clientY);
                    if (window.currentElement) {
                        evt.preventDefault();
                        onRightClickElement(options);
                        console.log('Element: ' + window.currentElement.tagName)
                        if (!hasClass(window.currentElement, options.hoverClass)) {
                            addCssClass(window.currentElement, options.hoverClass);
                        }
                    }
                })
            }
        }
    }
});