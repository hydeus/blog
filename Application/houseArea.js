// 设计一个房子对象House，并添加属性rooms：Array<Room>，请自行设计其它必要属性，来实现房间面积计算的功能（请注意Room与House的关系）

class House {
  constructor({ rooms = [] }) {
    this.rooms = rooms;
  }

  area(x, y) {
    return x * y;
  }

  totalArea() {
    return this.rooms.map(item => this.area(item.x, item.y)).reduce((total, item) => total + item);
  }
}

const rooms = [
  {
    x: 2,
    y: 3
  },
  {
    x: 3,
    y: 4
  },
  {
    x: 30,
    y: 40
  }
]

const house = new House({ rooms });
console.log(`房子的总面积为：${house.totalArea()}`);