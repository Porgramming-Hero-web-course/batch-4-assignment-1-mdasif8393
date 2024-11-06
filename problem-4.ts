// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (element: Circle | Rectangle): number => {
  if ("radius" in element) {
    const result = Math.PI * element.radius * element.radius;
    return parseFloat(result.toFixed(2));
  } else {
    return parseFloat((element.width * element.height).toFixed(2));
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log({ circleArea });

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4.44,
  height: 6,
});

console.log({ rectangleArea });
