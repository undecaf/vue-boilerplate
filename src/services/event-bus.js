import Vue from 'vue'

const eventBus = new Vue()

/**
 * Emits an event on this event bus
 */
export function emitEventBus(event, payload) {
    eventBus.$emit(event, payload)
}


/**
 * Mixin for registering event bus handlers in components
 */
export const onEventBus = {
    data() {
        return {
            eventBusHandlers: {},
        }
    },

    destroyed() {
        // Uninstall all handlers that were installed by method onEventBus()
        Object.keys(this.eventBusHandlers).forEach(ev => eventBus.$off(ev, this.eventBusHandlers[ev]))
    },

    methods: {
        /**
         * Binds an unbound method to this and registers it as handler
         * for the specified event on the event bus. Uninstalls this
         * handler when the component is destroyed.
         */
        onEventBus(event, unboundMethod) {
            const handler = unboundMethod.bind(this)
            this.eventBusHandlers[event] = handler
            eventBus.$on(event, handler)
        },
    },
}
