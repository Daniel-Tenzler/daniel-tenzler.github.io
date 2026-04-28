/* global customElements, HTMLElement */

class LegalFooter extends HTMLElement {
	connectedCallback() {
		if (this.shadowRoot) {
			return;
		}

		const shadow = this.attachShadow({ mode: 'open' });

		shadow.innerHTML = `
			<style>
				:host {
					display: block;
					margin-top: 4rem;
				}

				footer {
					box-sizing: border-box;
					width: 100%;
					padding: 1rem;
					font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
					font-size: 0.875rem;
					line-height: 1.5;
					text-align: center;
					color: #666;
				}

				nav {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
					flex-wrap: wrap;
				}

				a {
					color: inherit;
					text-decoration: underline;
					text-underline-offset: 0.2em;
				}

				a:hover {
					color: #222;
				}

				.separator {
					color: #999;
				}
			</style>

			<footer>
				<nav aria-label="Legal links">
					<a href="https://daniel-tenzler.de/impressum">Impressum</a>
					<span class="separator" aria-hidden="true">·</span>
					<a href="https://daniel-tenzler.de/datenschutz">Datenschutz</a>
				</nav>
			</footer>
		`;
	}
}

if (!customElements.get('legal-footer')) {
	customElements.define('legal-footer', LegalFooter);
}
