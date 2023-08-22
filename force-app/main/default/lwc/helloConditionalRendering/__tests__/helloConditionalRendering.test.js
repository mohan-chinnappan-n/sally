import { createElement } from 'lwc';
import HelloConditionalRendering from 'c/helloConditionalRendering';

describe('c-hello-conditional-rendering', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('is it accessible', async () => {
        // Arrange
        const element = createElement('c-hello-conditional-rendering', {
            is: HelloConditionalRendering
        });

        // Act
        document.body.appendChild(element);
        // element.isDetailsAvailable = true;

        // Assert
        // const div = element.shadowRoot.querySelector('div');

        await expect(element).toBeAccessible();
    });
});