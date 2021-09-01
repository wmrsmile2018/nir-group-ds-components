"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnClickOutside = exports.useDebounce = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};

exports.useDebounce = useDebounce;

const useOnClickOutside = (ref, handler) => {
  (0, _react.useEffect)(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

exports.useOnClickOutside = useOnClickOutside;