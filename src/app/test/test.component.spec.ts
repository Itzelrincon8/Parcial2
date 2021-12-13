import { TestComponent } from './test.componetn';

describe('FormulaComponent', () => {

    let component: TestComponent;

    beforeEach(() => {
        component = new TestComponent();
    })

    it('should return 255 if m = 5, x = 6, b = 8.5', () => {
        component.recta(5,6,8.5);
        expect(component.y).toBe(255);
    })

    it('should return 0 if m = 5, x = 3, b = 0', () => {
        component.recta(5,3,0);
        expect(component.y).toBe(0);
    })

    it('should return 147.42 if m = 3, x = 7.8, b = 6.3', () => {
        component.recta(3,7.8,6.3);
        expect(component.y).toBe(147.42);
    })
})
