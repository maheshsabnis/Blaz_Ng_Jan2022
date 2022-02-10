// lets inform to the angular.json that the 'jest' will be used instead of karms
// Configure jest with In-Memory map for the DOM which will use the
// CSS, DOCTYPE and the Body for traversing through HTML Elements

import 'jest-preset-angular';

// Configure the CSS property for window object in the memory

Object.defineProperty(window, 'CSS', { value: null });

// define a doctype that will be used to point to the beginning
// of the HTML DOM Created in the memory

Object.defineProperty(document, 'doctype', {
  value: `<!DOCTYPE html>`,
});

// define a transform property to Body so that HTML elements will be
// traversed and based on events and data the body can be changed

Object.defineProperty(document.body.style, 'transform', {
  value: ()=>{
    return {
       enumerable: true, // Enabling Iteration over HTML DOM for element changes (binding)
       configurable: true // allowing changes into the DOM based on events and Binding
    };
  }
});
