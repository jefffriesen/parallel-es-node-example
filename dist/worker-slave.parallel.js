/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
            /******/return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmory imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmory exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 18);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["b"] = toIterator;
    /* harmony export (immutable) */exports["a"] = toArray;
    /* unused harmony export flattenArray */
    /* unused harmony export concatInPlace */
    /**
     * Creates an iterator that iterates over the given array
     * @param data the array
     * @param T element type
     * @returns the iterator
     */
    /**
     * Creates an iterator that iterates over the given array
     * @param data the array
     * @param T element type
     * @returns the iterator
     */function toIterator(data) {
        return data[Symbol.iterator]();
    }
    /**
     * Converts the given iterator to an array
     * @param iterator the iterator that is to be converted into an array
     * @param T element type
     * @returns {T[]} the array representation of the given iterator
     */
    function toArray(iterator) {
        const result = [];
        let current;
        /* tslint:disable:no-conditional-assignment */
        while (!(current = iterator.next()).done) {
            result.push(current.value);
        }
        return result;
    }
    /**
     * Flattens the given array.
     * @param deepArray the array to flatten
     * @param type of the array elements
     * @returns returns an array containing all the values contained in the sub arrays of deep array.
     */
    function flattenArray(deepArray) {
        if (deepArray.length === 0) {
            return [];
        }
        const [head, ...tail] = deepArray;
        return Array.prototype.concat.apply(head, tail);
    }
    /**
     * Appends the toAppend array to the target array. The result is stored in the target array (therefore, in place)
     * @param target the first element to concat and as well as the target of the concatenation operation
     * @param toAppend the array to append to target
     */
    function concatInPlace(target, toAppend) {
        const insertionIndex = target.length;
        target.length += toAppend.length;
        for (let i = 0; i < toAppend.length; ++i) {
            target[insertionIndex + i] = toAppend[i];
        }
        return target;
    }

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = isSerializedFunctionCall;
    /**
     * @module parallel
     */
    /** */
    /**
     * Tests if the given object is a serialized function call
     * @param potentialFunc a potentially serialized function call
     * @returns {boolean} true if it is a serialized function call, false otherwise
     */
    function isSerializedFunctionCall(potentialFunc) {
        return !!potentialFunc && potentialFunc.______serializedFunctionCall === true;
    }

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* unused harmony export WorkerMessageType */
    /* unused harmony export initializeWorkerMessage */
    /* unused harmony export scheduleTaskMessage */
    /* harmony export (immutable) */
    exports["c"] = requestFunctionMessage;
    /* unused harmony export functionResponseMessage */
    /* harmony export (immutable) */exports["f"] = workerResultMessage;
    /* harmony export (immutable) */exports["e"] = functionExecutionError;
    /* unused harmony export stopMessage */
    /* harmony export (immutable) */exports["b"] = isScheduleTask;
    /* harmony export (immutable) */exports["a"] = isInitializeMessage;
    /* unused harmony export isFunctionRequest */
    /* harmony export (immutable) */exports["d"] = isFunctionResponse;
    /* unused harmony export isWorkerResult */
    /* unused harmony export isFunctionExecutionError */
    /* harmony export (immutable) */exports["g"] = isStopMesssage;
    /**
     * Message types
     */
    var WorkerMessageType;
    (function (WorkerMessageType) {
        /**
         * Sent from the worker facade to the worker slave to initialize the slave.
         */
        WorkerMessageType[WorkerMessageType["InitializeWorker"] = 0] = "InitializeWorker";
        /**
         * Sent from the worker facade to the worker slave to schedule a new task on the slave.
         */
        WorkerMessageType[WorkerMessageType["ScheduleTask"] = 1] = "ScheduleTask";
        /**
         * Send from the worker slave to the worker thread to request the definition of a function needed to execute a scheduled task
         */
        WorkerMessageType[WorkerMessageType["FunctionRequest"] = 2] = "FunctionRequest";
        /**
         * Send from the worker thread to the worker slave as response to a {@link WorkerMessageType.FunctionRequest}. Includes
         * the definitions of all requested functions
         */
        WorkerMessageType[WorkerMessageType["FunctionResponse"] = 3] = "FunctionResponse";
        /**
         * Sent from the worker slave to the worker thread containing the computed result
         */
        WorkerMessageType[WorkerMessageType["WorkerResult"] = 4] = "WorkerResult";
        /**
         * Sent from the worker slave to the worker thread for the case an error occurred during the evaluation of the scheduled task.
         */
        WorkerMessageType[WorkerMessageType["FunctionExecutionError"] = 5] = "FunctionExecutionError";
        /**
         * Sent from the worker thread to the worker slave to request the slave to terminate.
         */
        WorkerMessageType[WorkerMessageType["Stop"] = 6] = "Stop";
    })(WorkerMessageType || (WorkerMessageType = {}));
    /**
     * Creates an initialize worker message
     * @param id the unique id of the worker
     * @returns the initialize worker message
     */
    function initializeWorkerMessage(id) {
        return { type: WorkerMessageType.InitializeWorker, workerId: id };
    }
    /**
     * Creates a message to schedule the given task on a worker slave
     * @param task the task to schedule
     * @returns the schedule message
     */
    function scheduleTaskMessage(task) {
        return { task, type: WorkerMessageType.ScheduleTask };
    }
    /**
     * Creates an {@link IFunctionRequest} message that requests the given function ids from the worker thread
     * @param functionId the id of a function to request
     * @param otherFunctionIds additional ids to request from the worker slave
     * @returns the function request message
     */
    function requestFunctionMessage(functionId, ...otherFunctionIds) {
        return { functionIds: [functionId, ...otherFunctionIds], type: WorkerMessageType.FunctionRequest };
    }
    /**
     * Creates a function response message containing the passed function definitions
     * @param functions the function definitions to respond to the worker slave
     * @returns the function response message
     */
    function functionResponseMessage(functions, ...missingFunctionIds) {
        return { functions, missingFunctions: missingFunctionIds, type: WorkerMessageType.FunctionResponse };
    }
    /**
     * Creates a worker result message for the given result
     * @param result the computed result for the scheduled task
     * @returns the message
     */
    function workerResultMessage(result) {
        return { result, type: WorkerMessageType.WorkerResult };
    }
    /**
     * Creates a function execution error message containing the given error
     * @param error the error object thrown by the task computation
     * @returns the message
     */
    function functionExecutionError(error) {
        let errorObject = {};
        for (const prop of Object.getOwnPropertyNames(error)) {
            errorObject[prop] = JSON.stringify(error[prop]);
        }
        return { error: errorObject, type: WorkerMessageType.FunctionExecutionError };
    }
    /**
     * Creates a stop message
     * @returns the message
     */
    function stopMessage() {
        return { type: WorkerMessageType.Stop };
    }
    /**
     * Tests if the given message is an {@link IScheduleTaskMessage} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IScheduleTaskMessage}
     */
    function isScheduleTask(message) {
        return message.type === WorkerMessageType.ScheduleTask;
    }
    /**
     * Tests if the given message is an {@link IInitializeWorkerMessage} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IInitializeWorkerMessage}
     */
    function isInitializeMessage(message) {
        return message.type === WorkerMessageType.InitializeWorker;
    }
    /**
     * Tests if the given message is an {@link IFunctionRequest} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IFunctionRequest}
     */
    function isFunctionRequest(message) {
        return message.type === WorkerMessageType.FunctionRequest;
    }
    /**
     * Tests if the given message is an {@link IFunctionResponse} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IFunctionResponse}
     */
    function isFunctionResponse(message) {
        return message.type === WorkerMessageType.FunctionResponse;
    }
    /**
     * Tests if the given message is an {@link IWorkerResultMessage} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IWorkerResultMessage}
     */
    function isWorkerResult(message) {
        return message.type === WorkerMessageType.WorkerResult;
    }
    /**
     * Tests if the given message is an {@link IFunctionExecutionError} message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is an {@link IFunctionExecutionError}
     */
    function isFunctionExecutionError(message) {
        return message.type === WorkerMessageType.FunctionExecutionError;
    }
    /**
     * Tests if the given message is a stop message
     * @param message the message to test
     * @returns {boolean} {@code true} if the message is a stop message
     */
    function isStopMesssage(message) {
        return message.type === WorkerMessageType.Stop;
    }

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__common_worker_worker_messages__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__browser_worker_slave_states__ = __webpack_require__(6);

    /**
     * Worker thread endpoint executed in the web worker thread.
     * Executes the tasks assigned by the thread pool via the {@link BrowserWorkerThread}.
     */
    class BrowserWorkerSlave {
        constructor(functionCache) {
            this.functionCache = functionCache;
            /**
             * The unique id of the slave instance
             */
            this.id = Number.NaN;
            this.state = new __WEBPACK_IMPORTED_MODULE_1__browser_worker_slave_states__["a" /* DefaultBrowserWorkerSlaveState */](this);
        }
        /**
         * Changes the state of the slave to the new state
         * @param state the new state to assign
         */
        changeState(state) {
            this.state = state;
            this.state.enter();
        }
        /**
         * Executed when the slave receives a message from the ui-thread
         * @param event the received message
         */
        onMessage(event) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_worker_worker_messages__["g" /* isStopMesssage */])(event.data)) {
                close();
            } else if (!this.state.onMessage(event)) {
                throw new Error(`Message with type ${event.data.type} cannot be handled by slave ${this}`);
            }
        }
        postMessage(message) {
            postMessage(message);
        }
        toString() {
            return `BrowserSlave { id: ${this.id}, state: '${this.state.name}' }`;
        }
    }
    /* harmony export (immutable) */exports["a"] = BrowserWorkerSlave;

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__util_simple_map__ = __webpack_require__(17);

    /**
     * Cache used by each worker slave to cache the received functions.
     * Caching the functions has the advantage that function only is serialized, transmitted and deserialized once. This also
     * has the advantage, that the function instance stays the same and therefore can be optimized by the runtime system.
     */
    class SlaveFunctionLookupTable {
        constructor() {
            this.cache = new __WEBPACK_IMPORTED_MODULE_0__util_simple_map__["a" /* SimpleMap */]();
        }
        /**
         * Resolves the function with the given id
         * @param id the id of the function to resolve
         * @returns the resolved function or undefined if not known
         */
        getFunction(id) {
            return this.cache.get(id.identifier);
        }
        /**
         * Registers a new function in the cache
         * @param definition the definition of the function to register
         * @returns the registered function
         */
        registerFunction(definition) {
            const f = this.toFunction(definition);
            this.cache.set(definition.id.identifier, f);
            return f;
        }
        registerStaticFunction(id, func) {
            if (this.has(id)) {
                throw new Error(`The given function id '${id.identifier}' is already used by another function registration, the id needs to be unique.`);
            }
            this.cache.set(id.identifier, func);
        }
        /**
         * Tests if the cache contains a function with the given id
         * @param id the id of the function to test for existence
         * @returns true if the cache contains a function with the given id
         */
        has(id) {
            return this.cache.has(id.identifier);
        }
        toFunction(definition) {
            if (definition.name) {
                const args = definition.argumentNames.join(", ");
                const wrapper = Function.apply(undefined, [`return function ${definition.name} (${args}) { ${definition.body} }; `]);
                return wrapper();
            }
            return Function.apply(undefined, [...definition.argumentNames, definition.body]);
        }
    }
    /* harmony export (immutable) */exports["a"] = SlaveFunctionLookupTable;

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util_identity__ = __webpack_require__(16);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__filter_iterator__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__map_iterator__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__parallel_job_executor__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__range_iterator__ = __webpack_require__(13);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__reduce_iterator__ = __webpack_require__(14);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__util_arrays__ = __webpack_require__(0);
    /* harmony export (immutable) */exports["a"] = registerStaticParallelFunctions;

    /**
     * Registers the static parallel functions
     * @param lookupTable the table into which the function should be registered
     */
    function registerStaticParallelFunctions(lookupTable) {
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].IDENTITY, __WEBPACK_IMPORTED_MODULE_1__util_identity__["a" /* identity */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].FILTER, __WEBPACK_IMPORTED_MODULE_2__filter_iterator__["a" /* filterIterator */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].MAP, __WEBPACK_IMPORTED_MODULE_3__map_iterator__["a" /* mapIterator */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].PARALLEL_JOB_EXECUTOR, __WEBPACK_IMPORTED_MODULE_4__parallel_job_executor__["a" /* parallelJobExecutor */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].RANGE, __WEBPACK_IMPORTED_MODULE_5__range_iterator__["a" /* rangeIterator */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].REDUCE, __WEBPACK_IMPORTED_MODULE_6__reduce_iterator__["a" /* reduceIterator */]);
        lookupTable.registerStaticFunction(__WEBPACK_IMPORTED_MODULE_0__parallel_worker_functions__["a" /* ParallelWorkerFunctionIds */].TO_ITERATOR, __WEBPACK_IMPORTED_MODULE_7__util_arrays__["b" /* toIterator */]);
    }

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__common_function_function_call_deserializer__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__ = __webpack_require__(2);

    /**
     * State of the browser worker slave.
     */
    class BrowserWorkerSlaveState {
        constructor(name, slave) {
            this.name = name;
            this.slave = slave;
        }
        /**
         * Executed when the slave changes its state to this state.
         */
        enter() {}
        // intentionally empty

        /**
         * Executed whenever the slave receives a message from the ui-thread while being in this state
         * @param event the received message
         * @returns {boolean} true if the state has handled the message, false otherwise
         */
        onMessage(event) {
            return false;
        }
    }
    /* unused harmony export BrowserWorkerSlaveState */

    /**
     * Initial state of a slave. The slave is waiting for the initialization message.
     */
    class DefaultBrowserWorkerSlaveState extends BrowserWorkerSlaveState {
        constructor(slave) {
            super("Default", slave);
        }
        onMessage(event) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["a" /* isInitializeMessage */])(event.data)) {
                this.slave.id = event.data.workerId;
                this.slave.changeState(new IdleBrowserWorkerSlaveState(this.slave));
                return true;
            }
            return false;
        }
    }
    /* harmony export (immutable) */exports["a"] = DefaultBrowserWorkerSlaveState;

    /**
     * The slave is waiting for work from the ui-thread.
     */
    class IdleBrowserWorkerSlaveState extends BrowserWorkerSlaveState {
        constructor(slave) {
            super("Idle", slave);
        }
        onMessage(event) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["b" /* isScheduleTask */])(event.data)) {
                return false;
            }
            const task = event.data.task;
            const missingFunctions = task.usedFunctionIds.filter(id => !this.slave.functionCache.has(id));
            if (missingFunctions.length === 0) {
                this.slave.changeState(new ExecuteFunctionBrowserWorkerSlaveState(this.slave, task));
            } else {
                const [head, ...tail] = missingFunctions;
                this.slave.postMessage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["c" /* requestFunctionMessage */])(head, ...tail));
                this.slave.changeState(new WaitingForFunctionDefinitionBrowserWorkerSlaveState(this.slave, task));
            }
            return true;
        }
    }
    /* unused harmony export IdleBrowserWorkerSlaveState */

    /**
     * The slave is waiting for the definition of the requested function that is needed to execute the assigned task.
     */
    class WaitingForFunctionDefinitionBrowserWorkerSlaveState extends BrowserWorkerSlaveState {
        constructor(slave, task) {
            super("WaitingForFunctionDefinition", slave);
            this.task = task;
        }
        onMessage(event) {
            const message = event.data;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["d" /* isFunctionResponse */])(message)) {
                if (message.missingFunctions.length > 0) {
                    const identifiers = message.missingFunctions.map(functionId => functionId.identifier).join(", ");
                    this.slave.postMessage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["e" /* functionExecutionError */])(new Error(`The function ids [${identifiers}] could not be resolved by slave ${this.slave.id}.`)));
                    this.slave.changeState(new IdleBrowserWorkerSlaveState(this.slave));
                } else {
                    for (const definition of message.functions) {
                        this.slave.functionCache.registerFunction(definition);
                    }
                    this.slave.changeState(new ExecuteFunctionBrowserWorkerSlaveState(this.slave, this.task));
                }
                return true;
            }
            return false;
        }
    }
    /* unused harmony export WaitingForFunctionDefinitionBrowserWorkerSlaveState */

    /**
     * The slave is executing the function
     */
    class ExecuteFunctionBrowserWorkerSlaveState extends BrowserWorkerSlaveState {
        constructor(slave, task) {
            super("Executing", slave);
            this.task = task;
        }
        enter() {
            const functionDeserializer = new __WEBPACK_IMPORTED_MODULE_0__common_function_function_call_deserializer__["a" /* FunctionCallDeserializer */](this.slave.functionCache);
            try {
                const main = functionDeserializer.deserializeFunctionCall(this.task.main);
                const result = main({ functionCallDeserializer: functionDeserializer });
                this.slave.postMessage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["f" /* workerResultMessage */])(result));
            } catch (error) {
                this.slave.postMessage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_worker_worker_messages__["e" /* functionExecutionError */])(error));
            }
            this.slave.changeState(new IdleBrowserWorkerSlaveState(this.slave));
        }
    }
    /* unused harmony export ExecuteFunctionBrowserWorkerSlaveState */

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__serialized_function_call__ = __webpack_require__(1);

    /**
     * Binds the function to undefined and the given params. Uses Function.bind if available or creates its own wrapper
     * if not.
     * @param fn the function to bind to the given parameters
     * @param params the parameters to which the function is partially bound
     * @returns a partially bound function
     */
    function bind(fn, params) {
        if (typeof fn.bind === "function") {
            return fn.bind(undefined, ...params);
        }
        return function bound(...additionalParams) {
            return fn.apply(undefined, params.concat(additionalParams));
        };
    }
    /**
     * Deserializer for a {@link ISerializedFunctionCall}.
     */
    class FunctionCallDeserializer {
        /**
         * Creates a new deserializer that uses the given function lookup table to retrieve the function for a given id
         * @param functionLookupTable the lookup table to use
         */
        constructor(functionLookupTable) {
            this.functionLookupTable = functionLookupTable;
        }
        /**
         * Deserializes the function call into a function
         * @param functionCall the function call to deserialize
         * @param deserializeParams indicator if the parameters passed to the serialized function should be deserailized too
         * @returns a function that can be called with additional parameters (the params from the serialized function calls are prepended to the passed parameters)
         */
        deserializeFunctionCall(functionCall, deserializeParams = false) {
            const func = this.functionLookupTable.getFunction(functionCall.functionId);
            if (!func) {
                throw new Error(`The function with the id ${functionCall.functionId.identifier} could not be retrieved while deserializing the function call. Is the function correctly registered?`);
            }
            let params = functionCall.parameters || [];
            if (deserializeParams) {
                params = params.map(param => {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__serialized_function_call__["a" /* isSerializedFunctionCall */])(param)) {
                        return this.deserializeFunctionCall(param);
                    }
                    return param;
                });
            }
            return bind(func, params);
        }
    }
    /* harmony export (immutable) */exports["a"] = FunctionCallDeserializer;

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = functionId;
    /* unused harmony export isFunctionId */
    /**
     * @module parallel
     */
    /** */
    /**
     * Creates a function id
     * @param namespace the namespace of the id
     * @param id the unique id for this namespace
     * @returns the function id
     */
    function functionId(namespace, id) {
        return {
            _______isFunctionId: true,
            identifier: `${namespace}-${id}`
        };
    }
    /**
     * Tests if the given object is a function id
     * @param obj the object to test for
     * @returns true if the object is  a function id
     */
    function isFunctionId(obj) {
        return !!obj && obj._______isFunctionId === true;
    }

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = filterIterator;
    /**
     * Returns a new iterator that only contains all elements for which the given predicate returns true
     * @param iterator the iterator to filter
     * @param predicate the predicate to use for filtering the elements
     * @param env the environment of the job
     * @param T type of the elements to filter
     * @returns an iterator only containing the elements where the predicate is true
     */
    function filterIterator(iterator, predicate, env) {
        return {
            next() {
                let current;
                /* tslint:disable:no-conditional-assignment */
                while (!(current = iterator.next()).done) {
                    if (predicate(current.value, env)) {
                        return current;
                    }
                }
                return current;
            }
        };
    }

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = mapIterator;
    /**
     * Performs the map operation
     * @param iterator the iterator of the previous step
     * @param iteratee the iteratee to apply to each element in the iterator
     * @param env the environment of the job
     * @param T the type of the input elements
     * @param TResult the type of the returned element of the iteratee
     * @returns a new iterator where each element has been mapped using the iteratee
     */
    function mapIterator(iterator, iteratee, env) {
        return {
            next() {
                const result = iterator.next();
                if (result.done) {
                    return { done: true };
                }
                return {
                    done: result.done,
                    value: iteratee(result.value, env)
                };
            }
        };
    }

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__util_arrays__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__function_serialized_function_call__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__util_assign__ = __webpack_require__(15);
    /* harmony export (immutable) */exports["a"] = parallelJobExecutor;

    function createTaskEnvironment(definition, functionCallDeserializer) {
        let taskEnvironment = { taskIndex: definition.taskIndex, valuesPerTask: definition.valuesPerTask };
        for (const environment of definition.environments) {
            let currentEnvironment;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__function_serialized_function_call__["a" /* isSerializedFunctionCall */])(environment)) {
                currentEnvironment = functionCallDeserializer.deserializeFunctionCall(environment)(taskEnvironment);
            } else {
                currentEnvironment = environment;
            }
            taskEnvironment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])(taskEnvironment, currentEnvironment);
        }
        return taskEnvironment;
    }
    /**
     * Main coordination function for any operation performed using {@link IParallel}.
     * @param definition the definition of the operation to performed
     * @param options options passed from the thread pool
     * @param T type of the elements created by the generator
     * @param TResult type of the resulting elements
     * @returns the result of the operation from this worker
     */
    function parallelJobExecutor(definition, { functionCallDeserializer }) {
        const environment = createTaskEnvironment(definition, functionCallDeserializer);
        const generatorFunction = functionCallDeserializer.deserializeFunctionCall(definition.generator, true);
        let iterator = generatorFunction(environment);
        for (const operation of definition.operations) {
            const iteratorFunction = functionCallDeserializer.deserializeFunctionCall(operation.iterator);
            const iteratee = functionCallDeserializer.deserializeFunctionCall(operation.iteratee);
            iterator = iteratorFunction(iterator, iteratee, environment);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_arrays__["a" /* toArray */])(iterator);
    }

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__function_function_id__ = __webpack_require__(8);

    const ParallelWorkerFunctionIds = {
        FILTER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 0),
        IDENTITY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 1),
        MAP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 2),
        PARALLEL_JOB_EXECUTOR: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 3),
        RANGE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 4),
        REDUCE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 5),
        TIMES: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 6),
        TO_ITERATOR: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__function_function_id__["a" /* functionId */])("parallel", 7)
    };
    /* harmony export (immutable) */exports["a"] = ParallelWorkerFunctionIds;

    /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = rangeIterator;
    /**
     * Generator function that creates an iterator containing all elements in the range [start, end) with a step size of step.
     * @param start start value of the range (inclusive)
     * @param end end value of the range (exclusive)
     * @param step step size between two values
     * @returns iterator with the values [start, end)
     */
    /**
     * Generator function that creates an iterator containing all elements in the range [start, end) with a step size of step.
     * @param start start value of the range (inclusive)
     * @param end end value of the range (exclusive)
     * @param step step size between two values
     * @returns iterator with the values [start, end)
     */function rangeIterator(start, end, step) {
        const distance = end - start;
        let length = Math.max(Math.floor(distance / (step || 1)), 0);
        let next = start;
        return {
            next() {
                let current = next;
                next = next + step;
                if (length-- !== 0) {
                    return { done: false, value: current };
                }
                return { done: true };
            }
        };
    }

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__util_arrays__ = __webpack_require__(0);
    /* harmony export (immutable) */exports["a"] = reduceIterator;

    /**
     * Reduces the elements of the given iterator to a single value by applying the given iteratee to each element
     * @param defaultValue a default value that is as accumulator or for the case that the iterator is empty
     * @param iterator the iterator with the values to reduce
     * @param iteratee iteratee that is applied for each element. The iteratee is passed the accumulated value (sum of all previous values)
     * and the current element and has to return a new accumulated value.
     * @param env the environment of the job
     * @param T type of the elements to process
     * @param TResult type of the reduced value
     * @returns an array with a single value, the reduced value
     */
    function reduceIterator(defaultValue, iterator, iteratee, env) {
        let accumulatedValue = defaultValue;
        let current;
        /* tslint:disable:no-conditional-assignment */
        while (!(current = iterator.next()).done) {
            accumulatedValue = iteratee(accumulatedValue, current.value, env);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_arrays__["b" /* toIterator */])([accumulatedValue]);
    }

    /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = assign;
    /**
     * Polyfill for Object.assign
     * @param target target object
     * @param sources source object to copy into targetk
     */
    function assign(target, ...sources) {
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        target = Object(target);
        for (let index = 1; index < arguments.length; index++) {
            const source = arguments[index];
            if (source != null) {
                for (const key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    }

    /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    exports["a"] = identity;
    /**
     * identity function. Returns the passed in value
     * @param element the value to return
     * @param T type of the element
     */
    /**
     * identity function. Returns the passed in value
     * @param element the value to return
     * @param T type of the element
     */function identity(element) {
        return element;
    }

    /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /**
     * A very simple implementation of a map. Do not use with complex objects as Key.
     * @param K type of the key
     * @param V type of the value
     */
    /**
     * A very simple implementation of a map. Do not use with complex objects as Key.
     * @param K type of the key
     * @param V type of the value
     */
    class SimpleMap {
        constructor() {
            this.data = {};
        }
        /**
         * Gets the value for the given key if available
         * @param key the key to look up
         * @returns the looked up value or undefined if the map does not contain any value associated with the given key
         */
        get(key) {
            const internalKey = this.toInternalKey(key);
            return this.has(key) ? this.data[internalKey] : undefined;
        }
        /**
         * Tests if the map contains value stored by the given key
         * @param key the key
         * @returns true if the map contains a value by the given key, false otherwise
         */
        has(key) {
            return this.hasOwnProperty.call(this.data, this.toInternalKey(key));
        }
        /**
         * Sets the value for the given key. If the map already contains a value stored by the given key, then this value is
         * overridden
         * @param key the key
         * @param value the value to associate with the given key
         */
        set(key, value) {
            this.data[this.toInternalKey(key)] = value;
        }
        /**
         * Clears all values from the map
         */
        clear() {
            this.data = {};
        }
        toInternalKey(key) {
            return `@${key}`;
        }
    }
    /* harmony export (immutable) */exports["a"] = SimpleMap;

    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__browser_worker_slave__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_function_slave_function_lookup_table__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_parallel_slave_register_parallel_worker_functions__ = __webpack_require__(5);

    const slaveFunctionLookupTable = new __WEBPACK_IMPORTED_MODULE_1__common_function_slave_function_lookup_table__["a" /* SlaveFunctionLookupTable */]();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_parallel_slave_register_parallel_worker_functions__["a" /* registerStaticParallelFunctions */])(slaveFunctionLookupTable);

    const slave = new __WEBPACK_IMPORTED_MODULE_0__browser_worker_slave__["a" /* BrowserWorkerSlave */](slaveFunctionLookupTable);
    onmessage = function () {
        slave.onMessage.apply(slave, arguments);
    };

    /***/
}
/******/]);
//# sourceMappingURL=worker-slave.parallel-es6.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=worker-slave.parallel.js.map