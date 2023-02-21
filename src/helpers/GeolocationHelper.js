class GeolocationHelper {
  static getDistanceBetweenTwoPoint = (firstX, firstY, secondX, secondY) => {
      // sqrt((secondX - firstX)pow2 + (secondY - firstY)pow2)
      const x = Math.pow(secondX - firstX, 2);
      const y = Math.pow(secondY - firstY,2);
      const result = Math.sqrt(x + y);

      return result;
  }
}

export default GeolocationHelper;