import Warehouse from './index';
import { WAREHOUSE_SIZE_ERROR_MESSAGE } from '~/models/stages/Warehouse/constants';

describe('Warehouse tests', () => {
  describe('Constructor', () => {
    it('should have proper size', () => {
      expect(() => {
        new Warehouse(1, 1);
      }).not.toThrow();
      expect(() => {
        new Warehouse(2, 2);
      }).not.toThrow();
      expect(() => {
        new Warehouse(10, 10);
      }).not.toThrow();
      expect(() => {
        new Warehouse(100, 100);
      }).not.toThrow();
    });

    it('should NOT have invalid size', () => {
      expect(() => {
        new Warehouse(-1, -1);
      }).toThrow(WAREHOUSE_SIZE_ERROR_MESSAGE);
      expect(() => {
        new Warehouse(1, -1);
      }).toThrow(WAREHOUSE_SIZE_ERROR_MESSAGE);
      expect(() => {
        new Warehouse(10, -1);
      }).toThrow(WAREHOUSE_SIZE_ERROR_MESSAGE);
      expect(() => {
        new Warehouse(-10, 1);
      }).toThrow(WAREHOUSE_SIZE_ERROR_MESSAGE);
      expect(() => {
        new Warehouse(0, 0);
      }).toThrow(WAREHOUSE_SIZE_ERROR_MESSAGE);
    });
  });

  describe('validateCord', () => {
    it('should return TRUE if coordinates are VALID', () => {
      expect(new Warehouse(10, 10).validateCord(1, 10)).toEqual(true);
      expect(new Warehouse(10, 10).validateCord(1, 9)).toEqual(true);
      expect(new Warehouse(10, 10).validateCord(3, 3)).toEqual(true);
      expect(new Warehouse(10, 10).validateCord(9, 9)).toEqual(true);
    });

    it('should return FALSE if coordinates are INVALID', () => {
      expect(new Warehouse(10, 10).validateCord(-1, -1)).toEqual(false);
      expect(new Warehouse(10, 10).validateCord(-1, 10)).toEqual(false);
      expect(new Warehouse(10, 10).validateCord(0, 10)).toEqual(false);
    });
  });
});
