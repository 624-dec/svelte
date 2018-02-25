/* generated by Svelte vX.Y.Z */
import { appendNode, assign, createElement, createText, detachNode, init, insertNode, noop, proto, setAttribute } from "svelte/shared.js";

function data() {
	return { foo: 42 }
};

function encapsulateStyles(node) {
	setAttribute(node, "svelte-2794052100", "");
}

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-2794052100-style';
	style.textContent = "p[svelte-2794052100],[svelte-2794052100] p{color:red}";
	appendNode(style, document.head);
}

function create_main_fragment(component, state) {
	var p, text;

	return {
		c: function create() {
			p = createElement("p");
			text = createText(state.foo);
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles(p);
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
			appendNode(text, p);
		},

		p: function update(changed, state) {
			if (changed.foo) {
				text.data = state.foo;
			}
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign(data(), options.data);

	if (!document.getElementById("svelte-2794052100-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;