// Your code here
class Polygon{
  constructor(intArray){
    this.dimensions = intArray
  }

  get countSides(){
    return this.dimensions.length
  }

  get perimeter(){
    const a = this.dimensions
    return a.reduce((partial_sum, a) => partial_sum + a,0);
  }
}

class Triangle extends Polygon {

  get isValid(){
    if (this.countSides === 3) {
      const side1 = this.dimensions[0]
      const side2 = this.dimensions[1]
      const side3 = this.dimensions[2]

      if ( ((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3) > side1) ){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get area(){
    const side = this.dimensions[0]
    return (side * side)
  }

  get isValid(){
    const side1 = this.dimensions[0]
    const side2 = this.dimensions[1]
    const side3 = this.dimensions[2]
    const side4 = this.dimensions[3]

    if ( (side1 === side2) && (side1 === side3) && (side1 === side3) && (side1 === side4)){
      return true
    } else {
      return false
    }
  }
}
