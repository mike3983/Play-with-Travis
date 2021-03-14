function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sport = process.env.SPORT;

async function main() {
  while(true) {
    console.log('i love ${sport}');
    await sleep(5000);
  }
}

main();
