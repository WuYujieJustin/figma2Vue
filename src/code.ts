import { dispatch, handleEvent } from './codeMessageHandler';
figma.showUI(__html__);

// The following shows how messages from the UI code can be handled in the main code.
handleEvent('createNode', () => {
	console.log(figma.currentPage.selection)
	dispatch('nodeCreated', figma.currentPage.selection);
});
