export default class ARPanel extends HTMLElement {
	constructor() {
		super();
		this.role = 'tabpanel';
		this.id = 'panel-' + crypto.randomUUID();
	}
}