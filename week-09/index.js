async function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random().toFixed(3);
    console.log(randomNumber);

    if (randomNumber > 0.5) {
      reject(error);
    }
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

const run = async () => {
  try {
    await changeColor("blue", 1000);
    await changeColor("red", 1000);
    await changeColor("purple", 1000);
    await changeColor("yellow", 1000);
  } catch (error) {
    console.log("oh no theres an error");
  }
};

//run();

function testpromise(num) {
  return new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == num) {
      resolve("success");
    } else {
      reject("failed");
    }
  });
}

async function test() {
  try {
    let result = await testpromise(3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

test();
